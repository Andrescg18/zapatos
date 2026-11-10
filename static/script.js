/**
 * UrbanStyle E-Commerce - script.js
 * Frontend JavaScript puro (Vanilla JS) para catálogo, carrito, zoom y pasarela de pago Mercado Pago.
 */

// 1. Constantes y Configuración
const WHATSAPP_NUMBER = '573125692032';

// Diccionario de logos vectoriales (SVG path) por marca
const BRAND_LOGOS = {
  "Nike": "M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z",
  "Puma": "M23.845 3.008c-.417-.533-1.146-.106-1.467.08-2.284 1.346-2.621 3.716-3.417 5.077-.626 1.09-1.652 1.89-2.58 1.952-.686.049-1.43-.084-2.168-.405-1.807-.781-2.78-1.792-3.017-1.97-.487-.37-4.23-4.015-7.28-4.164 0 0-.372-.75-.465-.763-.222-.025-.45.451-.616.501-.15.053-.413-.512-.565-.487-.153.02-.302.586-.6.877-.22.213-.486.2-.637.463-.052.096-.034.265-.093.42-.127.32-.551.354-.555.697 0 .381.357.454.669.72.248.212.265.362.554.461.258.088.632-.187.964-.088.277.081.543.14.602.423.054.256 0 .658-.34.613-.112-.015-.598-.174-1.198-.11-.725.077-1.553.309-1.634 1.11-.041.447.514.97 1.055.866.371-.071.196-.506.399-.716.267-.27 1.772.944 3.172.944.593 0 1.031-.15 1.467-.605.04-.029.093-.102.155-.11a.632.632 0 01.195.088c1.131.897 1.984 2.7 6.13 2.721.582.007 1.25.279 1.796.777.48.433.764 1.125 1.037 1.825.418 1.053 1.161 2.069 2.292 3.203.06.068.99.78 1.06.833.012.01.084.167.053.255-.02.69-.123 2.67 1.365 2.753.366.02.275-.231.275-.41-.005-.341-.065-.685.113-1.04.253-.478-.526-.709-.509-1.756.019-.784-.645-.651-.984-1.25-.19-.343-.368-.532-.35-.946.073-2.38-.517-3.948-.805-4.327-.227-.294-.423-.403-.207-.54 1.24-.815 1.525-1.574 1.525-1.574.66-1.541 1.256-2.945 2.075-3.57.166-.12.589-.44.852-.56.763-.362 1.173-.578 1.388-.788.356-.337.635-1.053.294-1.48z",
  "Adidas": "m24 19.535-8.697-15.07-4.659 2.687 7.145 12.383Zm-8.287 0L9.969 9.59 5.31 12.277l4.192 7.258ZM4.658 14.723l2.776 4.812H1.223L0 17.41Z",
  "New Balance": "M12.169 10.306l1.111-1.937 3.774-.242.132-.236-3.488-.242.82-1.414h6.47c1.99 0 3.46.715 2.887 2.8-.17.638-.979 2.233-3.356 2.899.507.06 1.76.616 1.54 2.057-.384 2.558-3.69 3.774-5.533 3.774l-7.641.006-.38-1.48 4.005-.28.137-.237-4.346-.264-.467-1.755 6.178-.363.137-.231-11.096-.693.534-.925 11.948-.775.138-.231-3.504-.231",
  "Jordan": "M13.55 2.194v-.075c0-.35.113-.663.338-.938.225-.275.512-.412.862-.412s.663.112.938.337.425.525.45.9c.025.375-.088.688-.338.938s-.55.375-.9.375l-.225.075.075.112-.075.413-.15 1.2c.05.05.075.1.075.15l-.15.75c-.05.1-.1.175-.15.225l-.075.3a22.59 22.59 0 01-.45 1.575v.15c-.05.25-.087.45-.112.6-.025.15-.113.4-.263.75-.1.2-.1.525 0 .975l.075.075c0 .15.063.325.188.525s.187.375.187.525c.05 1-.025 1.85-.225 2.55l.15.45c.6.3.775.625.525.975l.375.15c.6.3 1.025.562 1.275.787.25.225.5.463.75.713.2.05.35.125.45.225l.225.075c1.05.7 2.1 1.55 3.15 2.55l.3.225v.075l-.075.15.225.15h.075c.15.1.25.15.3.15h.075c.05 0 .1-.025.15-.075l.15-.075c.1-.1.2-.175.3-.225h.3c.05 0 .05.025 0 .075l-.3.15-.375.45h.525l.525.075c.15-.05.275-.1.375-.15l.375-.225c.15-.05.3 0 .45.15h.075c.05.05.025.125-.075.225l-.9.825c-.25.2-.475.325-.675.375l-.975.675c-.05.05-.1.05-.15 0l-.225-.3-.15-.3-.188-.263-.225-.3-.187-.225-.15-.187-.3-.225c-.1 0-.2-.025-.3-.075l-.975-.75c-.15 0-.325-.075-.525-.225-.75-.65-1.25-1.05-1.5-1.2l-.45-.3-.9-.15c-.3-.05-.7-.2-1.2-.45l-.6-.3c-.4-.2-.675-.3-.825-.3l-.3-.15c-.2-.05-.35-.1-.45-.15l-.15-.15c-.1 0-.2.025-.3.075l-1.5.75-1.875.825c-.5.4-.975.725-1.425.975l-.825.375-1.275.9c-.1.1-.2.1-.3 0l-.15.15c-.15.05-.25.075-.3.075l-.3.15v.15H3.2l-.15.225c-.1.2-.2.312-.3.337-.1.025-.162.063-.187.113a.434.434 0 01-.075.112l-.15.15-.225.15-.338-.037-.45.075-.3.075c-.25.05-.45.012-.6-.113-.15-.125-.275-.312-.375-.562-.1-.15-.05-.275.15-.375l.075-.075c.05-.05.125-.075.225-.075h.45l.6-.225.3-.075c0-.1.025-.175.075-.225.05-.05.125-.075.225-.075v-.075a.666.666 0 01-.075-.3c-.05-.1-.063-.175-.037-.225.025-.05.05-.075.075-.075h.037l.075.225c.05.25.125.325.225.225l.075-.15c.05-.1.125-.15.225-.15l.15.15.15-.15-.075-.075c0-.05.025-.075.075-.075l.3-.3c.25-.3.55-.575.9-.825.7-.55 1.45-.975 2.25-1.275.25-.25.525-.375.825-.375.2-.35.5-.725.9-1.125.35-.25.6-.425.75-.525.1-.2.225-.3.375-.3h.075l.15-.15c.1-.05.175-.1.225-.15v-.375c0-.25.025-.45.075-.6.05-.15.175-.225.375-.225l.3-.3c-.1-.2-.15-.425-.15-.675h-.075c-.1-.15-.15-.3-.15-.45-.15-.25-.25-.45-.3-.6H9.65c-.05.15-.175.25-.375.3l-.075.15c-.2.35-.375.612-.525.787-.15.175-.425.388-.825.638-.25.25-.425.525-.525.825-.05.15-.05.3 0 .45l-.075.15h.075c0 .1.025.15.075.15h.075c.1.05.15.112.15.187s-.075.1-.225.075a.606.606 0 01-.337-.15c-.075-.075-.138-.112-.188-.112l-.225.225c-.1.15-.2.212-.3.187-.1-.025-.125-.062-.075-.112l.075-.075c.05-.1.05-.15 0-.15l-.6.15c-.05.05-.112.05-.187 0s-.063-.1.037-.15l.375-.15c0-.05-.025-.075-.075-.075-.2.1-.4.125-.6.075l-.375-.075-.075-.075c0-.05.025-.075.075-.075.2.05.45.025.75-.075l.525-.225.6-.675.075-.15c.2-.4.413-.763.638-1.088a3.68 3.68 0 01.712-.787l.075-.3c.1-.2.2-.375.3-.525.1-.15.225-.35.375-.6l.225-.3c.2-.3.425-.45.675-.45l.225-.225c.05-.05.075-.125.075-.225l.15-.15-.075-.075c-.3-.25-.45-.475-.45-.675-.05-.35.063-.65.338-.9s.55-.363.825-.338c.275.025.487.113.637.263l.15.15c.05 0 .075.025.075.075l.3.15v.225c.1.1.15.175.15.225.1-.15.25-.325.45-.525l.375-1.2c0-.2.05-.4.15-.6l.15-.225v-.15l.225-.9h.15l.225-.9a.933.933 0 000-.525l-.3-.75-.15-.6z"
};

const HERO_IMAGES = [
  'products/hero_jordan_4.png',
  'products/hero_nike_af1.png',
  'products/hero_adidas_run.png',
  'products/hero_vans_skool.png',
  'products/hero_new_balance.png'
];

// 2. Estado Global de la Aplicación
let allProducts = [];
let cart = [];
let selectedCategory = 'todos'; // 'todos' | 'zapatos' | 'camisetas'
let currentLevel = 'brands';     // 'brands' | 'subcategories' | 'products'
let selectedBrand = null;
let selectedSubcategory = null;
let searchQuery = '';

// Estado del Modal de Producto y Zoom
let selectedProduct = null;
let selectedSize = null;
let selectedColor = null;
let modalQuantity = 1;
let currentZoom = 100;
let isPanning = false;
let startX = 0, startY = 0;
let panX = 0, panY = 0;

// Estado del Slideshow Hero
let heroIndex = 0;
let heroInterval = null;

// 3. Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', async () => {
  initHeroSlideshow();
  loadCartFromStorage();
  setupEventListeners();
  await loadProducts();
  renderView();
  checkPaymentReturn();
});

// Cargar catálogo de productos desde FastAPI o JSON local
async function loadProducts() {
  try {
    const res = await fetch('/api/products');
    if (res.ok) {
      allProducts = await res.json();
    } else {
      throw new Error('API status ' + res.status);
    }
  } catch (e) {
    console.warn('Cargando productos desde archivo local data/products.json...', e);
    try {
      const localRes = await fetch('data/products.json');
      allProducts = await localRes.json();
    } catch (err2) {
      console.error('Error al cargar productos:', err2);
    }
  }
}

// 4. Hero Slideshow
function initHeroSlideshow() {
  const dotsContainer = document.getElementById('hero-dots');
  const heroImg = document.getElementById('hero-img');
  if (!dotsContainer || !heroImg) return;

  dotsContainer.innerHTML = HERO_IMAGES.map((_, i) => 
    `<span class="hero-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
  ).join('');

  dotsContainer.querySelectorAll('.hero-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      heroIndex = parseInt(e.target.dataset.index);
      updateHeroImage();
    });
  });

  heroInterval = setInterval(() => {
    heroIndex = (heroIndex + 1) % HERO_IMAGES.length;
    updateHeroImage();
  }, 4000);
}

function updateHeroImage() {
  const heroImg = document.getElementById('hero-img');
  const dots = document.querySelectorAll('.hero-dot');
  if (!heroImg) return;
  heroImg.src = HERO_IMAGES[heroIndex];
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === heroIndex);
  });
}

// 5. Configuración de Listeners
function setupEventListeners() {
  // Logo vuelve al inicio
  document.getElementById('btn-logo-home')?.addEventListener('click', resetNavigation);
  document.getElementById('bc-home')?.addEventListener('click', resetNavigation);

  // Tabs de categorías
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cat = e.currentTarget.dataset.cat;
      selectCategory(cat);
    });
  });

  // Buscador
  const searchInput = document.getElementById('search-input');
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderView();
  });

  // Botón Volver
  document.getElementById('btn-back-nav')?.addEventListener('click', goBack);

  // Carrito Drawer Toggle
  document.getElementById('btn-nav-cart')?.addEventListener('click', toggleCart);
  document.getElementById('floating-cart-widget')?.addEventListener('click', openCart);
  document.getElementById('btn-close-cart')?.addEventListener('click', closeCart);
  document.getElementById('cart-drawer-overlay')?.addEventListener('click', closeCart);
  document.getElementById('btn-browse-catalog')?.addEventListener('click', closeCart);
  document.getElementById('btn-clear-cart')?.addEventListener('click', clearCart);

  // Botón WhatsApp flotante
  document.getElementById('btn-floating-wsp')?.addEventListener('click', contactGeneralWhatsApp);
  document.getElementById('btn-wsp-cart-order')?.addEventListener('click', sendWhatsAppCartOrder);

  // Modal de Detalles
  document.getElementById('btn-close-modal')?.addEventListener('click', closeProductDetails);
  document.getElementById('product-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'product-modal-overlay') closeProductDetails();
  });

  // Zoom Controls
  document.getElementById('btn-zoom-in')?.addEventListener('click', () => adjustZoom(25));
  document.getElementById('btn-zoom-out')?.addEventListener('click', () => adjustZoom(-25));
  document.getElementById('btn-zoom-reset')?.addEventListener('click', () => resetZoom());

  // Stepper Modal
  document.getElementById('btn-modal-qty-minus')?.addEventListener('click', () => {
    if (modalQuantity > 1) {
      modalQuantity--;
      updateModalQuantityAndSubtotal();
    }
  });
  document.getElementById('btn-modal-qty-plus')?.addEventListener('click', () => {
    modalQuantity++;
    updateModalQuantityAndSubtotal();
  });

  // Agregar al Carrito desde Modal
  document.getElementById('btn-modal-add-cart')?.addEventListener('click', () => {
    if (!selectedProduct) return;
    addToCart(selectedProduct, modalQuantity, true);
    closeProductDetails();
  });

  // Pedir por WhatsApp desde Modal
  document.getElementById('btn-modal-wsp')?.addEventListener('click', sendWhatsAppProductOrder);

  // Modal de Credenciales Sandbox
  document.getElementById('btn-open-credentials')?.addEventListener('click', openCredentialsModal);
  document.getElementById('btn-close-credentials')?.addEventListener('click', closeCredentialsModal);
  document.getElementById('credentials-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'credentials-modal-overlay') closeCredentialsModal();
  });
  document.getElementById('btn-modal-start-checkout')?.addEventListener('click', () => {
    closeCredentialsModal();
    checkoutMercadoPago();
  });

  // Copiar Credenciales
  document.querySelectorAll('.btn-copy-cred').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = e.currentTarget.dataset.target;
      const val = document.getElementById(targetId)?.textContent;
      if (val) copyText(val, e.currentTarget);
    });
  });

  document.querySelectorAll('.btn-copy-table').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const val = e.currentTarget.dataset.copy;
      if (val) copyText(val, e.currentTarget);
    });
  });

  // Checkout con Mercado Pago (Consumo del Endpoint FastAPI)
  document.getElementById('btn-checkout-mp')?.addEventListener('click', checkoutMercadoPago);

  // Modal de Resultado de Pago
  document.getElementById('btn-continue-shopping')?.addEventListener('click', () => {
    document.getElementById('payment-result-overlay').style.display = 'none';
  });

  // Configurar interacciones táctiles y de ratón para el zoom
  setupZoomEvents();
}

// 6. Navegación y Filtros
function selectCategory(category) {
  selectedCategory = category;
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === category);
  });

  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = '';
    searchInput.placeholder = category === 'camisetas' 
      ? 'Buscar camisetas exclusivas...' 
      : (category === 'zapatos' ? 'Buscar tenis y zapatos...' : 'Buscar tenis o camisetas...');
  }

  selectedSubcategory = null;
  if (category === 'camisetas') {
    selectedBrand = 'Camisetas';
    currentLevel = 'products';
  } else {
    selectedBrand = null;
    currentLevel = 'brands';
  }

  renderView();
}

function selectBrand(brandName) {
  selectedBrand = brandName;
  const brandProducts = getCategoryFilteredProducts().filter(p => p.brand.toLowerCase() === brandName.toLowerCase());
  const subfolders = getSubfoldersForBrand(brandProducts);

  if (subfolders.length > 0) {
    currentLevel = 'subcategories';
    selectedSubcategory = null;
  } else {
    currentLevel = 'products';
    selectedSubcategory = null;
  }
  renderView();
}

function selectSubcategory(subName) {
  selectedSubcategory = subName;
  currentLevel = 'products';
  renderView();
}

function goBack() {
  if (selectedCategory === 'camisetas') {
    selectCategory('todos');
    return;
  }

  if (currentLevel === 'products') {
    if (selectedSubcategory) {
      selectedSubcategory = null;
      currentLevel = 'subcategories';
    } else {
      selectedBrand = null;
      selectedSubcategory = null;
      currentLevel = 'brands';
    }
  } else if (currentLevel === 'subcategories') {
    selectedBrand = null;
    selectedSubcategory = null;
    currentLevel = 'brands';
  }
  renderView();
}

function resetNavigation() {
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  selectedSubcategory = null;

  if (selectedCategory === 'camisetas') {
    selectedBrand = 'Camisetas';
    currentLevel = 'products';
  } else {
    selectedBrand = null;
    currentLevel = 'brands';
  }
  renderView();
  window.scrollTo({ top: document.getElementById('catalogo')?.offsetTop - 80 || 0, behavior: 'smooth' });
}

// 7. Funciones Auxiliares de Datos
function getCategoryFilteredProducts() {
  if (selectedCategory === 'zapatos') {
    return allProducts.filter(p => p.category !== 'Shirt');
  }
  if (selectedCategory === 'camisetas') {
    return allProducts.filter(p => p.category === 'Shirt');
  }
  return allProducts;
}

function getProductSubfolder(product) {
  const brand = product.brand;
  const name = product.name;
  const withoutBrand = name.replace(new RegExp('^' + brand, 'i'), '');
  const parts = withoutBrand.split(/Ref\./i);
  return parts[0].trim();
}

function getSubfoldersForBrand(brandProducts) {
  const subs = new Set();
  brandProducts.forEach(p => {
    const sub = getProductSubfolder(p);
    if (sub) subs.add(sub);
  });
  return Array.from(subs);
}

// 8. Renderizado Dinámico de Vistas
function renderView() {
  renderBreadcrumbs();
  renderFeaturedRow();

  const titleEl = document.getElementById('catalog-section-title');
  const btnBack = document.getElementById('btn-back-nav');
  const brandsGrid = document.getElementById('brands-grid');
  const subGrid = document.getElementById('subcategories-grid');
  const prodGrid = document.getElementById('products-grid');
  const emptyState = document.getElementById('empty-search-state');

  // Mostrar/Ocultar botón Volver
  if (btnBack) {
    btnBack.style.display = (currentLevel !== 'brands' && !searchQuery) ? 'inline-flex' : 'none';
  }

  // 1. Vista de Búsqueda
  if (searchQuery) {
    if (titleEl) titleEl.textContent = `Resultados de búsqueda para: "${searchQuery}"`;
    brandsGrid.style.display = 'none';
    subGrid.style.display = 'none';

    const baseList = getCategoryFilteredProducts();
    const results = baseList.filter(p => 
      p.name.toLowerCase().includes(searchQuery) ||
      p.brand.toLowerCase().includes(searchQuery) ||
      (p.description && p.description.toLowerCase().includes(searchQuery))
    );

    if (results.length > 0) {
      emptyState.style.display = 'none';
      prodGrid.style.display = 'grid';
      renderProductsGrid(results);
    } else {
      prodGrid.style.display = 'none';
      emptyState.style.display = 'flex';
    }
    return;
  }

  emptyState.style.display = 'none';

  // 2. Nivel 1: Marcas (Brands)
  if (currentLevel === 'brands' && selectedCategory !== 'camisetas') {
    if (titleEl) titleEl.textContent = 'Selecciona una Marca de Calzado';
    brandsGrid.style.display = 'grid';
    subGrid.style.display = 'none';
    prodGrid.style.display = 'none';
    renderBrandsGrid();
    return;
  }

  // 3. Nivel 2: Subcategorías
  if (currentLevel === 'subcategories') {
    if (titleEl) titleEl.textContent = `Carpetas de ${selectedBrand}`;
    brandsGrid.style.display = 'none';
    subGrid.style.display = 'grid';
    prodGrid.style.display = 'none';
    renderSubcategoriesGrid();
    return;
  }

  // 4. Nivel 3: Lista de Productos o Camisetas
  brandsGrid.style.display = 'none';
  subGrid.style.display = 'none';
  prodGrid.style.display = 'grid';

  let list = [];
  if (selectedCategory === 'camisetas') {
    if (titleEl) titleEl.textContent = '👕 Colección Exclusiva de Camisetas (10 Diseños Disponibles)';
    list = getCategoryFilteredProducts();
  } else {
    if (titleEl) titleEl.textContent = `Modelos en: ${selectedBrand} ${selectedSubcategory ? '/ ' + selectedSubcategory : ''}`;
    let base = getCategoryFilteredProducts().filter(p => p.brand.toLowerCase() === (selectedBrand || '').toLowerCase());
    if (selectedSubcategory) {
      base = base.filter(p => {
        const sub = getProductSubfolder(p) || 'Variedad';
        return sub.toLowerCase() === selectedSubcategory.toLowerCase();
      });
    }
    list = base;
  }

  renderProductsGrid(list);
}

// Breadcrumbs
function renderBreadcrumbs() {
  const container = document.getElementById('breadcrumbs-container');
  if (!container) return;

  let html = `<button class="breadcrumb-link" onclick="resetNavigation()">Inicio</button>`;

  if (selectedCategory === 'camisetas') {
    html += `<span class="breadcrumb-separator">/</span><button class="breadcrumb-link active" disabled>👕 Camisetas Exclusivas</button>`;
  } else {
    if (selectedBrand) {
      html += `<span class="breadcrumb-separator">/</span><button class="breadcrumb-link ${!selectedSubcategory && currentLevel === 'products' ? 'active' : ''}" onclick="selectBrand('${selectedBrand}')">${selectedBrand}</button>`;
    }
    if (selectedSubcategory) {
      html += `<span class="breadcrumb-separator">/</span><button class="breadcrumb-link active" disabled>${selectedSubcategory}</button>`;
    }
  }

  container.innerHTML = html;
}

// Fila Destacada (Top Featured)
function renderFeaturedRow() {
  const container = document.getElementById('featured-scroll-container');
  const section = document.getElementById('featured-section');
  if (!container || !section) return;

  if (currentLevel !== 'brands' || selectedCategory === 'camisetas' || searchQuery) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  const featured = allProducts.filter(p => p.featured).slice(0, 8);

  container.innerHTML = featured.map(p => `
    <div class="product-card glow-card featured-mini-card" onclick="openProductDetailsById(${p.id})">
      <div class="card-img-container" style="height: 160px; padding: 0.5rem; cursor: pointer;">
        <span class="badge-featured">🔥 Destacado</span>
        <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy">
      </div>
      <div class="card-content" style="padding: 0.75rem;">
        <span class="brand-tag" style="font-size: 0.7rem;">${p.brand}</span>
        <h3 class="product-title" style="font-size: 0.9rem; margin: 0.25rem 0;">${p.name}</h3>
        <div class="mini-card-footer">
          <span class="price-tag" style="font-size: 0.85rem;">$${p.price.toLocaleString('es-CO')} COP</span>
          <button class="btn-mini-cart" onclick="event.stopPropagation(); addToCartById(${p.id}, 1, false)" title="Agregar al carrito">+ 🛒</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Nivel 1: Cuadrícula de Marcas
function renderBrandsGrid() {
  const container = document.getElementById('brands-grid');
  if (!container) return;

  const products = getCategoryFilteredProducts();
  const map = new Map();

  products.forEach(p => {
    if (!map.has(p.brand)) map.set(p.brand, []);
    map.get(p.brand).push(p);
  });

  const brands = [];
  map.forEach((items, brandName) => {
    const subfolders = getSubfoldersForBrand(items);
    brands.push({
      name: brandName,
      coverImage: items[0].image,
      hasSubfolders: subfolders.length > 0,
      totalItems: items.length
    });
  });

  brands.sort((a, b) => a.name.localeCompare(b.name));

  container.innerHTML = brands.map(b => {
    const logoSvg = BRAND_LOGOS[b.name] 
      ? `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="${BRAND_LOGOS[b.name]}"></path></svg>`
      : '';
    return `
      <div class="folder-card glow-card" onclick="selectBrand('${b.name}')">
        <div class="folder-img-container">
          <img src="${b.coverImage}" alt="${b.name}" class="folder-img" loading="lazy">
          <span class="items-badge">${b.totalItems} referencias</span>
        </div>
        <div class="folder-info">
          <h3 class="folder-name" style="display: flex; align-items: center; gap: 0.5rem;">
            ${b.name} ${logoSvg}
          </h3>
          <span class="folder-type">${b.hasSubfolders ? 'Ver carpetas' : 'Ver modelos'} →</span>
        </div>
      </div>
    `;
  }).join('');
}

// Nivel 2: Cuadrícula de Subcategorías
function renderSubcategoriesGrid() {
  const container = document.getElementById('subcategories-grid');
  if (!container || !selectedBrand) return;

  const brandProducts = getCategoryFilteredProducts().filter(p => p.brand.toLowerCase() === selectedBrand.toLowerCase());
  const subMap = new Map();

  brandProducts.forEach(p => {
    const sub = getProductSubfolder(p) || 'Variedad';
    if (!subMap.has(sub)) subMap.set(sub, []);
    subMap.get(sub).push(p);
  });

  const subs = [];
  subMap.forEach((items, subName) => {
    subs.push({
      name: subName,
      coverImage: items[0].image,
      totalItems: items.length
    });
  });

  container.innerHTML = subs.map(s => `
    <div class="folder-card glow-card" onclick="selectSubcategory('${s.name}')">
      <div class="folder-img-container">
        <img src="${s.coverImage}" alt="${s.name}" class="folder-img" loading="lazy">
        <span class="items-badge">${s.totalItems} modelos</span>
      </div>
      <div class="folder-info">
        <h3 class="folder-name">${s.name}</h3>
        <span class="folder-type">Ver modelos →</span>
      </div>
    </div>
  `).join('');
}

// Nivel 3: Cuadrícula de Productos
function renderProductsGrid(products) {
  const container = document.getElementById('products-grid');
  if (!container) return;

  container.innerHTML = products.map(p => `
    <div class="product-card glow-card">
      <div class="card-img-container" onclick="openProductDetailsById(${p.id})" style="cursor: pointer;">
        ${p.featured ? '<span class="badge-featured">⭐ Destacado</span>' : ''}
        <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy">
      </div>
      <div class="card-content">
        <div class="card-header-info">
          <span class="brand-tag">${p.brand}</span>
          ${p.category === 'Shirt' ? '<span class="badge-tag-shirt">👕 Camiseta</span>' : ''}
        </div>
        <h3 class="product-title" onclick="openProductDetailsById(${p.id})" style="cursor: pointer;">${p.name}</h3>
        <p class="product-description">${p.description || `${p.brand} - Calidad garantizada`}</p>
        <div class="card-footer">
          <span class="price-tag">$${p.price.toLocaleString('es-CO')} COP</span>
          <div class="card-action-btns">
            <button class="btn-card-details" onclick="openProductDetailsById(${p.id})">Detalles</button>
            <button class="btn-card-add-cart" onclick="event.stopPropagation(); addToCartById(${p.id}, 1, false)" title="Agregar al carrito">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>+ Carrito</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// 9. Modal de Detalles y Zoom Interactivo
function openProductDetailsById(id) {
  const p = allProducts.find(item => item.id === id);
  if (p) openProductDetails(p);
}

function openProductDetails(product) {
  selectedProduct = product;
  selectedSize = product.sizes ? product.sizes[0] : null;
  selectedColor = product.colors ? product.colors[0] : null;
  modalQuantity = 1;

  // Llenar datos de texto
  document.getElementById('modal-brand').textContent = product.brand;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-price').textContent = `$${product.price.toLocaleString('es-CO')} COP`;
  document.getElementById('modal-rating').textContent = (product.rating || 4.8).toFixed(1);
  document.getElementById('modal-reviews').textContent = `(${product.reviewsCount || 24} opiniones)`;
  document.getElementById('modal-description').textContent = product.description || 'Prenda exclusiva de alta calidad.';

  // Imagen principal
  const mainImg = document.getElementById('modal-zoom-img');
  mainImg.src = product.image;
  resetZoom();

  // Miniaturas
  const thumbsContainer = document.getElementById('modal-thumbnails-container');
  const images = (product.images && product.images.length > 0) ? product.images : [product.image];
  thumbsContainer.innerHTML = images.map((img, i) => `
    <div class="thumb-box ${i === 0 ? 'active' : ''}" onclick="setModalMainImage('${img}', this)">
      <img src="${img}" alt="Miniatura ${i + 1}">
    </div>
  `).join('');

  // Selector de Colores
  const colorsContainer = document.getElementById('modal-color-options');
  const groupColors = document.getElementById('group-colors');
  if (product.colors && product.colors.length > 0) {
    groupColors.style.display = 'block';
    document.getElementById('selected-color-label').textContent = selectedColor.name;
    colorsContainer.innerHTML = product.colors.map(c => `
      <div class="color-circle-btn ${c.name === selectedColor.name ? 'active' : ''}" 
           style="background-color: ${c.value}" 
           title="${c.name}" 
           onclick="selectModalColor('${c.name}', '${c.value}', this)"></div>
    `).join('');
  } else {
    groupColors.style.display = 'none';
  }

  // Selector de Tallas
  const sizesContainer = document.getElementById('modal-size-options');
  const groupSizes = document.getElementById('group-sizes');
  if (product.sizes && product.sizes.length > 0) {
    groupSizes.style.display = 'block';
    document.getElementById('selected-size-label').textContent = selectedSize;
    sizesContainer.innerHTML = product.sizes.map(s => `
      <button class="size-pill-btn ${s === selectedSize ? 'active' : ''}" onclick="selectModalSize(${s}, this)">${s}</button>
    `).join('');
  } else {
    groupSizes.style.display = 'none';
  }

  updateModalQuantityAndSubtotal();
  document.getElementById('product-modal-overlay').style.display = 'flex';
}

function closeProductDetails() {
  document.getElementById('product-modal-overlay').style.display = 'none';
  selectedProduct = null;
  resetZoom();
}

function setModalMainImage(src, thumbElement) {
  const mainImg = document.getElementById('modal-zoom-img');
  if (mainImg) mainImg.src = src;
  document.querySelectorAll('.thumb-box').forEach(t => t.classList.remove('active'));
  if (thumbElement) thumbElement.classList.add('active');
  resetZoom();
}

function selectModalColor(name, val, element) {
  selectedColor = { name, value: val };
  document.getElementById('selected-color-label').textContent = name;
  document.querySelectorAll('.color-circle-btn').forEach(c => c.classList.remove('active'));
  element.classList.add('active');
}

function selectModalSize(size, element) {
  selectedSize = size;
  document.getElementById('selected-size-label').textContent = size;
  document.querySelectorAll('.size-pill-btn').forEach(s => s.classList.remove('active'));
  element.classList.add('active');
}

function updateModalQuantityAndSubtotal() {
  document.getElementById('modal-qty-val').textContent = modalQuantity;
  if (selectedProduct) {
    const subtotal = selectedProduct.price * modalQuantity;
    document.getElementById('modal-subtotal-val').textContent = `$${subtotal.toLocaleString('es-CO')} COP`;
  }
}

// Configuración de Zoom con cursor lupa y pan
function setupZoomEvents() {
  const container = document.getElementById('zoom-container');
  const img = document.getElementById('modal-zoom-img');
  if (!container || !img) return;

  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    adjustZoom(e.deltaY < 0 ? 25 : -25);
  }, { passive: false });

  container.addEventListener('mousedown', (e) => {
    if (currentZoom > 100) {
      isPanning = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
      container.style.cursor = 'grabbing';
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isPanning) return;
    panX = e.clientX - startX;
    panY = e.clientY - startY;
    applyZoomTransform();
  });

  window.addEventListener('mouseup', () => {
    if (isPanning) {
      isPanning = false;
      container.style.cursor = currentZoom > 100 ? 'grab' : 'zoom-in';
    }
  });

  container.addEventListener('click', () => {
    if (currentZoom === 100) adjustZoom(75);
  });
}

function adjustZoom(delta) {
  currentZoom = Math.min(Math.max(currentZoom + delta, 100), 300);
  if (currentZoom === 100) {
    panX = 0;
    panY = 0;
  }
  document.getElementById('zoom-level-badge').textContent = `Zoom: ${currentZoom}%`;
  applyZoomTransform();
}

function resetZoom() {
  currentZoom = 100;
  panX = 0;
  panY = 0;
  const badge = document.getElementById('zoom-level-badge');
  if (badge) badge.textContent = 'Zoom: 100%';
  applyZoomTransform();
}

function applyZoomTransform() {
  const img = document.getElementById('modal-zoom-img');
  if (!img) return;
  const scale = currentZoom / 100;
  img.style.transform = `scale(${scale}) translate(${panX / scale}px, ${panY / scale}px)`;
  img.style.cursor = currentZoom > 100 ? 'grab' : 'zoom-in';
}

// 10. Carrito de Compras Dinámico
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('urbanstyle_cart');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }
  updateCartUI();
}

function saveCartToStorage() {
  try {
    localStorage.setItem('urbanstyle_cart', JSON.stringify(cart));
  } catch (e) {}
  updateCartUI();
}

function addToCartById(id, qty, showToastMsg) {
  const p = allProducts.find(item => item.id === id);
  if (p) addToCart(p, qty, showToastMsg);
}

function addToCart(product, quantity = 1, showToastMsg = true) {
  const existing = cart.find(item => item.product.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  saveCartToStorage();
  if (showToastMsg) showToast(`✓ ${product.name} agregado al carrito`);
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.product.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
  }
  saveCartToStorage();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.product.id !== productId);
  saveCartToStorage();
}

function clearCart() {
  cart = [];
  saveCartToStorage();
}

function getCartTotalCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

function updateCartUI() {
  const count = getCartTotalCount();
  const subtotal = getCartSubtotal();

  // Badges y textos en Navbar y widget flotante
  const navBadge = document.getElementById('nav-cart-badge');
  const navText = document.getElementById('nav-cart-text');
  const floatingBadge = document.getElementById('floating-cart-badge');
  const drawerSub = document.getElementById('drawer-items-subtitle');

  if (navBadge) {
    navBadge.textContent = count;
    navBadge.style.display = count > 0 ? 'flex' : 'none';
  }
  if (navText) navText.textContent = `Carrito (${count})`;
  if (floatingBadge) floatingBadge.textContent = count;
  if (drawerSub) drawerSub.textContent = `${count} producto${count !== 1 ? 's' : ''} añadido${count !== 1 ? 's' : ''}`;

  // Lista de items en Drawer
  const emptyView = document.getElementById('cart-empty-view');
  const productsList = document.getElementById('cart-products-list');
  const drawerFooter = document.getElementById('cart-drawer-footer');

  if (count === 0) {
    if (emptyView) emptyView.style.display = 'flex';
    if (productsList) productsList.style.display = 'none';
    if (drawerFooter) drawerFooter.style.display = 'none';
  } else {
    if (emptyView) emptyView.style.display = 'none';
    if (productsList) {
      productsList.style.display = 'flex';
      productsList.innerHTML = cart.map(item => `
        <div class="cart-card-item">
          <div class="cart-item-img-wrap">
            <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-brand-row">
              <span class="cart-brand-tag">${item.product.brand}</span>
              <button class="cart-remove-btn" onclick="removeFromCart(${item.product.id})" title="Eliminar">&times;</button>
            </div>
            <div class="cart-product-title">${item.product.name}</div>
            <div class="cart-item-price-unit">$${item.product.price.toLocaleString('es-CO')} COP c/u</div>
            <div class="cart-item-action-row">
              <div class="cart-stepper">
                <button class="stepper-btn" onclick="updateCartQuantity(${item.product.id}, -1)">−</button>
                <span class="stepper-val">${item.quantity}</span>
                <button class="stepper-btn" onclick="updateCartQuantity(${item.product.id}, 1)">+</button>
              </div>
              <div class="cart-item-total-price">$${(item.product.price * item.quantity).toLocaleString('es-CO')} COP</div>
            </div>
          </div>
        </div>
      `).join('');
    }
    if (drawerFooter) {
      drawerFooter.style.display = 'flex';
      document.getElementById('summary-items-count').textContent = `Subtotal (${count} ítem${count !== 1 ? 's' : ''})`;
      document.getElementById('summary-subtotal-val').textContent = `$${subtotal.toLocaleString('es-CO')} COP`;
      document.getElementById('summary-total-val').textContent = `$${subtotal.toLocaleString('es-CO')} COP`;
    }
  }
}

function openCart() {
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('cart-drawer-overlay')?.classList.add('open');
}

function closeCart() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-drawer-overlay')?.classList.remove('open');
}

function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer?.classList.contains('open')) closeCart();
  else openCart();
}

// 11. Consumo Asíncrono en JavaScript: Pasarela Mercado Pago
/**
 * Realiza el consumo asíncrono con fetch y async/await hacia el backend en FastAPI (/api/create-preference).
 * Redirige al init_point o sandbox_init_point generado.
 */
async function checkoutMercadoPago() {
  if (cart.length === 0) return;

  const btn = document.getElementById('btn-checkout-mp');
  const errorCard = document.getElementById('checkout-error-card');

  try {
    // 1. Mostrar estado de carga
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = '0.7';
      btn.innerHTML = `<span class="spinner-circle"></span> Conectando con Mercado Pago...`;
    }
    if (errorCard) errorCard.style.display = 'none';

    // 2. Mapear los items del carrito para validar con el esquema Pydantic
    const itemsPayload = cart.map(item => ({
      id: String(item.product.id),
      title: item.product.name.substring(0, 250),
      description: `${item.product.brand} - ${item.product.category === 'Shirt' ? 'Camiseta' : 'Calzado'}`,
      category_id: 'fashion',
      quantity: item.quantity,
      currency_id: 'COP',
      unit_price: Number(item.product.price),
      picture_url: item.product.image.startsWith('http') 
        ? item.product.image 
        : `${window.location.origin}/${item.product.image}`
    }));

    // 3. Consumo Asíncrono en JavaScript con fetch y async/await hacia FastAPI
    const response = await fetch('/api/create-preference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: itemsPayload,
        payer: {
          email: 'TESTUSER3914143733173093161'
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `Error en el servidor FastAPI (${response.status})`);
    }

    const data = await response.json();

    // 4. Redirección al sandbox_init_point o init_point oficial
    const checkoutUrl = data.sandbox_init_point || data.init_point;
    if (checkoutUrl) {
      // Abrir en pestaña nueva para mantener abierta la tienda local
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
      closeCart();
    } else {
      throw new Error('No se recibió la URL de pago de Mercado Pago.');
    }

  } catch (err) {
    console.error('Error al generar checkout de Mercado Pago:', err);
    if (errorCard) {
      errorCard.textContent = err.message || 'Error al conectar con Mercado Pago. Intenta nuevamente.';
      errorCard.style.display = 'flex';
    }
  } finally {
    // Restaurar botón
    if (btn) {
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.innerHTML = `
        <div class="mp-button-content">
          <svg class="mp-logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-4h2v4z"/>
          </svg>
          <div class="mp-button-text">
            <span class="mp-action-title">Pagar con Mercado Pago</span>
            <span class="mp-action-sub">Sandbox - Tarjetas o cuenta de prueba</span>
          </div>
        </div>
      `;
    }
  }
}

// 12. Detección del Retorno desde Mercado Pago Sandbox
function checkPaymentReturn() {
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get('payment_status') || urlParams.get('status') || urlParams.get('collection_status');
  const paymentId = urlParams.get('payment_id') || urlParams.get('collection_id');

  if (status) {
    showPaymentResultModal(status, paymentId);
    // Limpiar parámetros de la URL sin recargar la página
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

function showPaymentResultModal(status, paymentId) {
  const modal = document.getElementById('payment-result-overlay');
  const icon = document.getElementById('result-icon-circle');
  const badge = document.getElementById('result-badge-pill');
  const title = document.getElementById('result-title');
  const msg = document.getElementById('result-message');
  const txId = document.getElementById('result-tx-id');
  const statusText = document.getElementById('result-status-text');

  if (!modal) return;

  if (paymentId && txId) {
    txId.textContent = `ID de Transacción: #${paymentId}`;
    txId.style.display = 'inline-block';
  }

  if (status === 'approved') {
    icon.className = 'result-icon-circle success';
    icon.textContent = '✓';
    badge.className = 'result-badge-pill success';
    badge.textContent = 'PAGO APROBADO EN SANDBOX';
    title.textContent = '¡Pago Realizado con Éxito!';
    msg.innerHTML = 'Tu compra en <strong>UrbanStyle</strong> ha sido procesada de manera exitosa a través de Mercado Pago.';
    statusText.textContent = 'Aprobado / Acreditado';
    statusText.className = 'status-green';
    clearCart();
  } else if (status === 'pending' || status === 'in_process') {
    icon.className = 'result-icon-circle pending';
    icon.textContent = '⏳';
    badge.className = 'result-badge-pill';
    badge.textContent = 'PAGO PENDIENTE';
    title.textContent = 'Pago en Proceso de Acreditación';
    msg.textContent = 'Tu pago está siendo procesado por Mercado Pago. Recibirás confirmación en breve.';
    statusText.textContent = 'Pendiente de acreditación';
    statusText.className = '';
  } else {
    icon.className = 'result-icon-circle error';
    icon.textContent = '✕';
    badge.className = 'result-badge-pill';
    badge.textContent = 'PAGO NO COMPLETADO';
    title.textContent = 'El Pago no pudo completarse';
    msg.textContent = 'La transacción fue rechazada o cancelada. Puedes intentar nuevamente con otra tarjeta.';
    statusText.textContent = 'Rechazado';
    statusText.className = '';
  }

  modal.style.display = 'flex';
}

// 13. Integración con WhatsApp
function contactGeneralWhatsApp() {
  const text = '¡Hola UrbanStyle! Quisiera recibir información sobre su catálogo de sneakers y ropa urbana.';
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function sendWhatsAppProductOrder() {
  if (!selectedProduct) return;
  const sizeText = selectedSize ? ` (Talla: ${selectedSize})` : '';
  const colorText = selectedColor ? ` [Color: ${selectedColor.name}]` : '';
  const total = (selectedProduct.price * modalQuantity).toLocaleString('es-CO');

  const text = 
    `¡Hola UrbanStyle! Quiero pedir este producto:\n\n` +
    `👟 *${selectedProduct.name}*${sizeText}${colorText}\n` +
    `📦 Cantidad: ${modalQuantity}\n` +
    `💰 Total: $${total} COP\n\n` +
    `¿Tienen disponibilidad para envío inmediato?`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function sendWhatsAppCartOrder() {
  if (cart.length === 0) return;

  const lines = cart.map((item, idx) => 
    `${idx + 1}. *${item.product.name}* (x${item.quantity}) - $${(item.product.price * item.quantity).toLocaleString('es-CO')} COP`
  ).join('\n');

  const total = getCartSubtotal().toLocaleString('es-CO');
  const text = 
    `¡Hola UrbanStyle! Deseo realizar el siguiente pedido de mi carrito:\n\n` +
    `${lines}\n\n` +
    `*Total a pagar:* $${total} COP\n\n` +
    `¿Cómo coordinamos el envío? ¡Muchas gracias!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// 14. Modales de Sandbox y Notificaciones
function openCredentialsModal() {
  document.getElementById('credentials-modal-overlay').style.display = 'flex';
}

function closeCredentialsModal() {
  document.getElementById('credentials-modal-overlay').style.display = 'none';
}

function copyText(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnElement.textContent;
    btnElement.textContent = '¡Copiado!';
    setTimeout(() => {
      btnElement.textContent = originalText;
    }, 1800);
  }).catch(() => {
    showToast('Copia manual: ' + text);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2800);
}
