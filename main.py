"""
UrbanStyle E-Commerce Backend con FastAPI y Mercado Pago
Arquitectura:
- main.py: Servidor backend con FastAPI, Pydantic y Mercado Pago SDK
- static/: Frontend estático con index.html, script.js, styles.css y activos
"""

import os
import json
from pathlib import Path
from typing import List, Optional

from fastapi import FastAPI, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import mercadopago
from dotenv import load_dotenv

# 1. Configuración de credenciales y variables de entorno
# Cargar variables desde el archivo .env
BASE_DIR = Path(__file__).resolve().parent
ENV_PATH = BASE_DIR / ".env"
load_dotenv(dotenv_path=ENV_PATH)

MERCADO_PAGO_ACCESS_TOKEN = os.getenv(
    "MERCADO_PAGO_ACCESS_TOKEN",
    "APP_USR-6655199517731285-110309-d43b53c10890cadabd2eac35b5805cd5-3809648649"
)

# Inicializar la aplicación FastAPI
app = FastAPI(
    title="UrbanStyle - Mercado Pago API",
    description="Backend oficial en FastAPI para pasarela de pagos Sandbox de Mercado Pago y catálogo e-commerce",
    version="1.0.0"
)

# Habilitar CORS para permitir solicitudes locales
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. Modelos de datos con Pydantic para validación de solicitudes
class ItemSchema(BaseModel):
    id: str = Field(..., description="Identificador único del producto")
    title: str = Field(..., max_length=250, description="Nombre o título del producto")
    description: Optional[str] = Field(None, description="Descripción detallada de la prenda o calzado")
    category_id: Optional[str] = Field("fashion", description="Categoría comercial en Mercado Pago")
    quantity: int = Field(..., gt=0, description="Cantidad de unidades, debe ser mayor a 0")
    currency_id: str = Field("COP", description="Moneda en pesos colombianos (COP)")
    unit_price: float = Field(..., gt=0, description="Precio unitario mayor a cero")
    picture_url: Optional[str] = Field(None, description="URL pública de la imagen del producto")

class PayerSchema(BaseModel):
    email: Optional[str] = Field("test_user_buyer@testuser.com", description="Email del comprador de prueba")
    name: Optional[str] = Field(None, description="Nombre del comprador")
    surname: Optional[str] = Field(None, description="Apellido del comprador")

class PreferenceRequest(BaseModel):
    items: List[ItemSchema] = Field(..., min_length=1, description="Lista de artículos en el carrito")
    payer: Optional[PayerSchema] = None


# 3. Endpoint en FastAPI para crear la preferencia de pago en Mercado Pago
@app.post("/api/create-preference", summary="Crea una preferencia de pago en Mercado Pago")
async def create_preference(payload: PreferenceRequest, request: Request):
    """
    Endpoint que recibe los datos validados por Pydantic, inicializa el SDK de Mercado Pago
    utilizando el Access Token del entorno (.env) y genera el checkout Sandbox.
    """
    if not payload.items:
        raise HTTPException(status_code=400, detail="El carrito no puede estar vacío.")

    try:
        # Inicializar el SDK de Mercado Pago con el token configurado
        sdk = mercadopago.SDK(MERCADO_PAGO_ACCESS_TOKEN)

        # Mapear los items a diccionarios limpios
        items_list = []
        for it in payload.items:
            item_dict = {
                "id": str(it.id),
                "title": str(it.title),
                "description": it.description or f"{it.title} - UrbanStyle",
                "category_id": it.category_id or "fashion",
                "quantity": int(it.quantity),
                "currency_id": it.currency_id,
                "unit_price": float(it.unit_price)
            }
            if it.picture_url and it.picture_url.startswith("http"):
                item_dict["picture_url"] = it.picture_url
            items_list.append(item_dict)

        # Construir URLs de retorno a la tienda local
        # base_url obtiene el protocolo y host dinámicamente (ej: http://127.0.0.1:8000)
        base_url = str(request.base_url).rstrip("/")

        preference_data = {
            "items": items_list,
            "back_urls": {
                "success": f"{base_url}/?payment_status=approved",
                "failure": f"{base_url}/?payment_status=failure",
                "pending": f"{base_url}/?payment_status=pending"
            }
        }

        # Si el dominio es público con HTTPS, se puede habilitar auto_return
        if base_url.startswith("https://") and "localhost" not in base_url and "127.0.0.1" not in base_url:
            preference_data["auto_return"] = "approved"

        # Añadir comprador si viene en la solicitud
        if payload.payer and payload.payer.email:
            preference_data["payer"] = {"email": payload.payer.email}

        # Ejecutar la creación en los servidores de Mercado Pago
        preference_response = sdk.preference().create(preference_data)
        response_data = preference_response.get("response", {})

        if preference_response.get("status") not in (200, 201) or "id" not in response_data:
            err_msg = response_data.get("message") or str(preference_response)
            raise HTTPException(status_code=400, detail=f"Mercado Pago error: {err_msg}")

        # Retornar los enlaces de inicio de checkout (sandbox e init_point)
        return {
            "id": response_data.get("id"),
            "init_point": response_data.get("init_point"),
            "sandbox_init_point": response_data.get("sandbox_init_point") or response_data.get("init_point"),
            "status": "success"
        }

    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Error interno al procesar el pago: {str(exc)}")


# 4. Endpoint auxiliar para obtener el catálogo completo de productos
@app.get("/api/products", summary="Obtiene el catálogo de calzado y camisetas")
async def get_products():
    json_path = BASE_DIR / "static" / "data" / "products.json"
    if not json_path.exists():
        raise HTTPException(status_code=404, detail="Archivo de productos no encontrado")
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data


# 5. Servir los archivos estáticos de la carpeta static/ (index.html, script.js, styles.css)
static_dir = BASE_DIR / "static"
if static_dir.exists():
    app.mount("/", StaticFiles(directory=str(static_dir), html=True), name="static")


if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    host = os.getenv("HOST", "127.0.0.1")
    print(f"Iniciando UrbanStyle en http://{host}:{port}")
    uvicorn.run("main:app", host=host, port=port, reload=True)
