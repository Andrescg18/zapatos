import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PRODUCTS, Product } from './data/shoes';
import { SHIRTS } from './data/shirts';
import { BRAND_LOGOS } from './data/brand_logos';

export interface BrandItem {
  name: string;
  coverImage: string;
  hasSubfolders: boolean;
  totalItems: number;
}

export interface SubcategoryItem {
  name: string;
  coverImage: string;
  totalItems: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly brandLogos = BRAND_LOGOS;
  readonly Math = Math; // expose Math to template

  // Products source
  // Combine shoes and shirts into a single product list
  private readonly combinedProducts: Product[] = [...PRODUCTS, ...SHIRTS];
  readonly allProducts = signal<Product[]>(this.combinedProducts);

  // Dynamic Shopping Cart State
  readonly cartItems = signal<CartItem[]>([]);
  readonly isCartOpen = signal<boolean>(false);
  readonly isCheckingOut = signal<boolean>(false);
  readonly checkoutError = signal<string | null>(null);
  readonly showTestCredentialsModal = signal<boolean>(false);
  readonly paymentNotification = signal<{ status: string; id?: string } | null>(null);
  readonly toastMessage = signal<string | null>(null);
  readonly modalQuantity = signal<number>(1);
  readonly copiedField = signal<string | null>(null);

  // Cart Computed Stats
  readonly cartTotalCount = computed<number>(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  readonly cartSubtotal = computed<number>(() =>
    this.cartItems().reduce((total, item) => total + item.product.price * item.quantity, 0)
  );

  // Mercado Pago Configuration & Sandbox Credentials
  readonly mercadoPagoAccessToken = 'APP_USR-6655199517731285-110309-d43b53c10890cadabd2eac35b5805cd5-3809648649';
  readonly testUser = 'TESTUSER3914143733173093161';
  readonly testPass = 'z3k2ESWfm5';
  readonly testCards = [
    { brand: 'Mastercard', number: '5254 1336 7440 3564', cvv: '123', exp: '11/30' },
    { brand: 'Visa', number: '4013 5406 8274 6260', cvv: '123', exp: '11/30' },
    { brand: 'Visa Debito', number: '4915 1120 5524 6507', cvv: '123', exp: '11/30' },
  ];

  // Top featured products for scrollable row
  readonly featuredProductsTop = computed<Product[]>(() => {
    const products = this.allProducts();

    // Pick specific attractive brands
    const getByBrand = (brand: string, limit: number) =>
      products.filter(p => p.brand.toLowerCase() === brand.toLowerCase()).slice(0, limit);

    const lv = getByBrand('Louis Vuitton', 3);
    const jordan = getByBrand('Jordan', 3);
    const dior = getByBrand('Dior', 2);
    const nike = getByBrand('Nike', 2);

    // Any explicitly marked featured that we didn't pick yet
    const featured = products.filter(p => p.featured);

    const combined = [...lv, ...jordan, ...dior, ...nike, ...featured];
    // Remove duplicates
    const unique = combined.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);

    // Enforce featured: true for the top ones so they get the fire badge
    return unique.slice(0, 10).map(p => ({ ...p, featured: true }));
  });

  // Store Contact Information
  readonly whatsappNumber = '573125692032'; // WhatsApp de UrbanStyle
  readonly instagramUrl = 'https://www.instagram.com/urbanstyle_57/'; // Instagram oficial de UrbanStyle
  readonly facebookUrl = 'https://www.facebook.com/urbanstyle';
  readonly tiktokUrl = 'https://www.tiktok.com/@urbanstyle';

  // Search Query State
  readonly searchQuery = signal<string>('');

  // Hero Slideshow
  readonly heroImages = [
    'products/hero_jordan_4.png',
    'products/hero_nike_af1.png',
    'products/hero_adidas_run.png',
    'products/hero_new_balance.png',
    'products/hero_vans_skool.png',
  ];
  readonly heroIndex = signal<number>(0);
  readonly heroFading = signal<boolean>(false);
  private heroInterval: ReturnType<typeof setInterval> | null = null;

  // Category Filter State ('todos' | 'zapatos' | 'camisetas')
  readonly selectedCategory = signal<'todos' | 'zapatos' | 'camisetas'>('todos');
  readonly selectedGender = signal<'todos' | 'hombre' | 'mujer'>('todos');

  // Helper method to deterministically calculate shoe gender based on product ID
  determineGender(product: Product): 'hombre' | 'mujer' | 'unisex' {
    const genders: ('hombre' | 'mujer' | 'unisex')[] = ['hombre', 'mujer', 'unisex'];
    return genders[product.id % 3];
  }

  // Filtered products separated by category: Zapatos vs Camisetas
  readonly filteredProducts = computed<Product[]>(() => {
    const cat = this.selectedCategory();
    const list = this.allProducts().map(p => ({
      ...p,
      gender: this.determineGender(p)
    }));

    if (cat === 'zapatos') {
      return list.filter(p => p.category !== 'Shirt');
    }
    if (cat === 'camisetas') {
      return list.filter(p => p.category === 'Shirt');
    }
    return list;
  });

  // Alias for backward compatibility
  readonly genderFilteredProducts = computed<Product[]>(() => this.filteredProducts());

  // Hierarchical Navigation States
  readonly currentLevel = signal<'brands' | 'subcategories' | 'products'>('brands');
  readonly selectedBrand = signal<string | null>(null);
  readonly selectedSubcategory = signal<string | null>(null);

  // Theme State
  readonly theme = signal<'light' | 'dark'>('light');

  // UI State for Modal
  readonly selectedProductForModal = signal<Product | null>(null);
  readonly selectedImageIndex = signal<number>(0);

  // Zoom & Pan state
  readonly zoomLevel = signal<number>(100);
  readonly translateX = signal<number>(0);
  readonly translateY = signal<number>(0);
  private _isDragging = false;
  private _dragStartX = 0;
  private _dragStartY = 0;
  private _dragOriginX = 0;
  private _dragOriginY = 0;

  // Helper method to extract the subfolder/submodel name from a product's name
  getProductSubfolder(product: Product): string {
    const brand = product.brand;
    const name = product.name;
    // Replace brand name prefix case-insensitively
    const withoutBrand = name.replace(new RegExp('^' + brand, 'i'), '');
    const parts = withoutBrand.split(/Ref\./i);
    return parts[0].trim();
  }

  // Computed: unique list of brands with details
  readonly brandsList = computed<BrandItem[]>(() => {
    const products = this.genderFilteredProducts();
    const map = new Map<string, Product[]>();

    // Group products by brand
    for (const p of products) {
      const bKey = p.brand;
      if (!map.has(bKey)) {
        map.set(bKey, []);
      }
      map.get(bKey)!.push(p);
    }

    const list: BrandItem[] = [];
    map.forEach((brandProducts, brandName) => {
      // Find all unique subfolders for this brand
      const subfolders = new Set<string>();
      for (const p of brandProducts) {
        subfolders.add(this.getProductSubfolder(p));
      }

      // A brand has subfolders if there's at least one non-empty subfolder name,
      // or if it has multiple subfolders
      const subfoldersList = Array.from(subfolders).filter(s => s !== '');
      const hasSubfolders = subfoldersList.length > 0;

      list.push({
        name: brandName,
        coverImage: brandProducts[0].image,
        hasSubfolders: hasSubfolders,
        totalItems: brandProducts.length
      });
    });

    // Sort brands alphabetically
    return list.sort((a, b) => a.name.localeCompare(b.name));
  });

  // Computed: list of subcategories for the currently selected brand
  readonly subcategoriesList = computed<SubcategoryItem[]>(() => {
    const brand = this.selectedBrand();
    if (!brand) return [];

    const brandProducts = this.genderFilteredProducts().filter(p => p.brand.toLowerCase() === brand.toLowerCase());
    const subfolderMap = new Map<string, Product[]>();

    for (const p of brandProducts) {
      const sub = this.getProductSubfolder(p);
      // Skip empty subfolders if the brand has other structured subfolders
      if (!subfolderMap.has(sub)) {
        subfolderMap.set(sub, []);
      }
      subfolderMap.get(sub)!.push(p);
    }

    const list: SubcategoryItem[] = [];
    subfolderMap.forEach((subProducts, subName) => {
      list.push({
        name: subName || 'Variedad', // Fallback name if empty
        coverImage: subProducts[0].image,
        totalItems: subProducts.length
      });
    });

    return list.sort((a, b) => a.name.localeCompare(b.name));
  });

  // Computed: list of products to display based on the navigation level or search
  readonly productsToShow = computed<Product[]>(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const cat = this.selectedCategory();
    const baseList = this.filteredProducts();

    // 1. Search Query overrides navigation levels
    if (query) {
      return baseList.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // 2. Direct view for Camisetas collection
    if (cat === 'camisetas' && (this.currentLevel() === 'products' || !this.selectedBrand())) {
      return baseList;
    }

    const brand = this.selectedBrand();
    const sub = this.selectedSubcategory();

    // 3. Filter products based on navigation selections
    if (this.currentLevel() === 'products' && brand) {
      let list = baseList.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
      if (sub) {
        list = list.filter(p => {
          const productSub = this.getProductSubfolder(p) || 'Variedad';
          return productSub.toLowerCase() === sub.toLowerCase();
        });
      }
      return list;
    }

    if (cat === 'camisetas') {
      return baseList;
    }

    return [];
  });

  constructor() {
    // Theme effect to toggle HTML class/attributes
    effect(() => {
      const currentTheme = this.theme();
      if (typeof window !== 'undefined') {
        const root = document.documentElement;
        root.setAttribute('data-theme', currentTheme);
      }
    });

    // Load theme from localStorage on browser load
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (savedTheme) {
        this.theme.set(savedTheme);
      } else {
        const prefersDark = typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
        this.theme.set(prefersDark ? 'dark' : 'light');
      }

      // Load cart from localStorage
      const savedCart = localStorage.getItem('dc_cart');
      if (savedCart) {
        try {
          const parsed = JSON.parse(savedCart);
          if (Array.isArray(parsed)) {
            this.cartItems.set(parsed);
          }
        } catch (e) {
          console.error('Error al cargar carrito desde localStorage:', e);
        }
      }

      // Check payment status in URL when returning from Mercado Pago
      const urlParams = new URLSearchParams(window.location.search);
      const paymentStatus = urlParams.get('payment_status') || urlParams.get('status') || urlParams.get('collection_status');
      const paymentId = urlParams.get('payment_id') || urlParams.get('collection_id') || undefined;

      if (paymentStatus === 'approved') {
        this.paymentNotification.set({ status: 'approved', id: paymentId });
        this.clearCart();
      } else if (paymentStatus === 'failure' || paymentStatus === 'rejected') {
        this.paymentNotification.set({ status: 'failure', id: paymentId });
      } else if (paymentStatus === 'pending' || paymentStatus === 'in_process') {
        this.paymentNotification.set({ status: 'pending', id: paymentId });
      }

      // Start hero slideshow
      this.heroInterval = setInterval(() => {
        this.heroFading.set(true);
        setTimeout(() => {
          this.heroIndex.set((this.heroIndex() + 1) % this.heroImages.length);
          this.heroFading.set(false);
        }, 400);
      }, 3200);
    }
  }

  // Category selection handler (Zapatos vs Camisetas vs Todos)
  selectCategory(category: 'todos' | 'zapatos' | 'camisetas') {
    this.selectedCategory.set(category);
    this.searchQuery.set('');
    this.selectedSubcategory.set(null);

    if (category === 'camisetas') {
      this.selectedBrand.set('Camisetas');
      this.currentLevel.set('products');
    } else {
      this.selectedBrand.set(null);
      this.currentLevel.set('brands');
    }
  }

  // Navigation Methods
  selectBrand(brandName: string) {
    const brandItem = this.brandsList().find(b => b.name === brandName);
    if (!brandItem) return;

    this.selectedBrand.set(brandName);
    if (brandItem.hasSubfolders) {
      this.currentLevel.set('subcategories');
    } else {
      this.selectedSubcategory.set(null);
      this.currentLevel.set('products');
    }
  }

  selectSubcategory(subName: string) {
    this.selectedSubcategory.set(subName);
    this.currentLevel.set('products');
  }

  goBack() {
    if (this.selectedCategory() === 'camisetas') {
      this.selectedCategory.set('todos');
      this.selectedBrand.set(null);
      this.selectedSubcategory.set(null);
      this.currentLevel.set('brands');
      return;
    }

    const level = this.currentLevel();
    if (level === 'products') {
      const brandItem = this.brandsList().find(b => b.name === this.selectedBrand());
      if (brandItem && brandItem.hasSubfolders && this.selectedSubcategory() !== null) {
        this.selectedSubcategory.set(null);
        this.currentLevel.set('subcategories');
      } else {
        this.selectedBrand.set(null);
        this.selectedSubcategory.set(null);
        this.currentLevel.set('brands');
      }
    } else if (level === 'subcategories') {
      this.selectedBrand.set(null);
      this.selectedSubcategory.set(null);
      this.currentLevel.set('brands');
    }
  }

  resetNavigation() {
    this.searchQuery.set('');
    this.selectedSubcategory.set(null);
    if (this.selectedCategory() === 'camisetas') {
      this.selectedBrand.set('Camisetas');
      this.currentLevel.set('products');
    } else {
      this.selectedBrand.set(null);
      this.currentLevel.set('brands');
    }
  }

  // Theme Toggler
  toggleTheme() {
    const nextTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(nextTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', nextTheme);
    }
  }

  // Modal Actions
  openProductDetails(product: Product) {
    this.selectedProductForModal.set(product);
    this.selectedImageIndex.set(0);
    this.modalQuantity.set(1);
  }

  closeProductDetails() {
    this.selectedProductForModal.set(null);
    this.resetZoom();
  }

  // Zoom & Pan methods
  resetZoom() {
    this.zoomLevel.set(100);
    this.translateX.set(0);
    this.translateY.set(0);
  }

  onZoomSliderChange(event: Event) {
    const val = +(event.target as HTMLInputElement).value;
    this.zoomLevel.set(val);
    // If zooming back to 100 reset translation
    if (val === 100) {
      this.translateX.set(0);
      this.translateY.set(0);
    }
  }

  onDragStart(event: MouseEvent | TouchEvent) {
    if (this.zoomLevel() <= 100) return;
    this._isDragging = true;
    const point = event instanceof MouseEvent ? event : event.touches[0];
    this._dragStartX = point.clientX;
    this._dragStartY = point.clientY;
    this._dragOriginX = this.translateX();
    this._dragOriginY = this.translateY();
    event.preventDefault();
  }

  onDragMove(event: MouseEvent | TouchEvent) {
    if (!this._isDragging) return;
    const point = event instanceof MouseEvent ? event : event.touches[0];
    const dx = point.clientX - this._dragStartX;
    const dy = point.clientY - this._dragStartY;
    this.translateX.set(this._dragOriginX + dx);
    this.translateY.set(this._dragOriginY + dy);
    event.preventDefault();
  }

  onDragEnd() {
    this._isDragging = false;
  }

  getZoomTransform(): string {
    const scale = this.zoomLevel() / 100;
    return `scale(${scale}) translate(${this.translateX() / scale}px, ${this.translateY() / scale}px)`;
  }

  // General WhatsApp contact
  contactGeneralWhatsApp() {
    if (typeof window === 'undefined') return;
    const text = '¡Hola UrbanStyle! Quisiera recibir información sobre su catálogo de sneakers y ropa urbana.';
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  // Generates a unique, product-specific description shown in cards and the modal
  getProductDescription(product: Product): string {
    const brand = product.brand;
    const cat = product.category;
    const price = product.price;

    // Price tier
    const tier = price < 280000 ? 'entry'
      : price < 350000 ? 'mid'
        : 'premium';

    // Dominant color (skip "Color Foto")
    const realColors = product.colors.filter(c => c.name !== 'Color Foto');
    const dominantColor = realColors[0]?.name?.toLowerCase() ?? 'clásico';

    // Brand voice — each brand gets a personality
    const brandVoice: Record<string, string> = {
      'Adidas': 'El ADN de Adidas',
      'Nike': 'Hecho para los que van más lejos',
      'Jordan': 'Legado en cada paso',
      'New Balance': 'Crafted for the real ones',
      'Vans': 'Skate life approved',
      'Puma': 'Velocidad en cada suela',
      'Converse': 'Icónico desde siempre',
      'Reebok': 'Classic never dies',
    };
    const voice = brandVoice[brand] ?? `Lo mejor de ${brand}`;

    // Category traits pool (4 options, rotate by id)
    const catPhrases: Record<string, string[]> = {
      Running: [
        'Suela de alto rebote para kilómetros sin fatiga.',
        'Amortiguación reactiva que impulsa cada zancada.',
        'Diseñado para rendir en asfalto y pista.',
        'Transpirabilidad máxima para entrenamientos intensos.',
      ],
      Casual: [
        'Estilo urbano que combina con todo tu look.',
        'Comfort diario sin renunciar al estilo.',
        'De la calle a cualquier plan, siempre fresco.',
        'Silueta limpia que eleva cualquier outfit.',
      ],
      Boots: [
        'Construcción robusta para cualquier terreno.',
        'Soporte de tobillo para tus días más activos.',
        'Durabilidad que resiste el uso diario.',
        'Diseño versátil entre lo urbano y lo outdoor.',
      ],
    };
    const catPool = catPhrases[cat] ?? catPhrases['Casual'];
    const catLine = catPool[product.id % catPool.length];

    // Price tier sentence
    const tierLine: Record<string, string> = {
      entry: 'Excelente relación calidad-precio.',
      mid: 'Calidad y valor en perfecto balance.',
      premium: 'Materiales premium que se notan desde el primer uso.',
    };

    // Rotating color highlight (5 templates)
    const colorHighlights = [
      `Disponible en tono ${dominantColor}, ideal para destacar.`,
      `El acabado en ${dominantColor} le da ese toque diferencial.`,
      `Colorway ${dominantColor} — limpio, actual y versátil.`,
      `En ${dominantColor}: discreta presencia, máximo impacto.`,
      `Tonalidad ${dominantColor} que combina con todo.`,
    ];
    const colorLine = colorHighlights[product.id % colorHighlights.length];

    return `${voice}. ${catLine} ${tierLine[tier]} ${colorLine}`;
  }

  // Builds the WhatsApp message for a product order
  private buildWhatsAppMessage(product: Product): string {
    const price = product.price.toLocaleString('es-CO');

    // Extract just the reference part: e.g. "VUITTON Ref. 1380"
    // The name format is like "BRAND SubModel Ref. XXXX"
    // We want everything from the brand name onwards
    const nameClean = product.name.trim();

    return (
      `${nameClean}\n` +
      `*Precio:* $${price} COP\n\n` +
      `*¿Qué tallas tienes disponibles y qué más colores hay disponibles?*\n` +
      `¿Cómo es el proceso para pedirlo? ¡Gracias!`
    );
  }

  // Order Product WhatsApp
  sendWhatsAppOrder() {
    const product = this.selectedProductForModal();

    if (!product || typeof window === 'undefined') return;

    const text = this.buildWhatsAppMessage(product);
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    this.closeProductDetails();
  }

  // Toast notifications
  private toastTimer: any = null;
  showToast(message: string) {
    this.toastMessage.set(message);
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastMessage.set(null);
    }, 3200);
  }

  // Copy to clipboard helper
  copyToClipboard(text: string, fieldId: string) {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.copiedField.set(fieldId);
        this.showToast(`¡Copiado: ${text}!`);
        setTimeout(() => {
          if (this.copiedField() === fieldId) {
            this.copiedField.set(null);
          }
        }, 2200);
      }).catch(() => {
        this.showToast('No se pudo copiar automáticamente.');
      });
    }
  }

  // Cart Management Methods
  private saveCart() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('dc_cart', JSON.stringify(this.cartItems()));
    }
  }

  addToCart(product: Product, quantity = 1, openDrawer = false) {
    const current = this.cartItems();
    const existingIndex = current.findIndex(item => item.product.id === product.id);

    if (existingIndex > -1) {
      const updated = [...current];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + quantity
      };
      this.cartItems.set(updated);
    } else {
      this.cartItems.set([...current, { product, quantity }]);
    }

    this.saveCart();
    this.showToast(`👟 ¡${product.name} agregado al carrito!`);

    if (openDrawer) {
      this.openCart();
    }
  }

  addModalProductToCart(openDrawer = false) {
    const product = this.selectedProductForModal();
    if (!product) return;
    const qty = this.modalQuantity();
    this.addToCart(product, qty, openDrawer);
    this.closeProductDetails();
  }

  removeFromCart(productId: number) {
    const updated = this.cartItems().filter(item => item.product.id !== productId);
    this.cartItems.set(updated);
    this.saveCart();
    this.showToast('Producto eliminado del carrito.');
  }

  updateQuantity(productId: number, delta: number) {
    const current = this.cartItems();
    const index = current.findIndex(item => item.product.id === productId);
    if (index === -1) return;

    const newQty = current[index].quantity + delta;
    if (newQty <= 0) {
      this.removeFromCart(productId);
    } else {
      const updated = [...current];
      updated[index] = { ...updated[index], quantity: newQty };
      this.cartItems.set(updated);
      this.saveCart();
    }
  }

  clearCart() {
    this.cartItems.set([]);
    this.saveCart();
    this.showToast('Carrito vaciado.');
  }

  toggleCart() {
    this.isCartOpen.set(!this.isCartOpen());
    this.checkoutError.set(null);
  }

  openCart() {
    this.isCartOpen.set(true);
    this.checkoutError.set(null);
  }

  closeCart() {
    this.isCartOpen.set(false);
    this.checkoutError.set(null);
  }

  updateModalQuantity(delta: number) {
    const current = this.modalQuantity();
    const next = Math.max(1, current + delta);
    this.modalQuantity.set(next);
  }

  closePaymentNotification() {
    this.paymentNotification.set(null);
    if (typeof window !== 'undefined' && window.history) {
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }

  // Checkout with Mercado Pago Preference API
  async payWithMercadoPago() {
    const items = this.cartItems();
    if (items.length === 0) return;

    this.isCheckingOut.set(true);
    this.checkoutError.set(null);

    try {
      const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4200';
      const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
      const isHttpsAndPublic = origin.startsWith('https://') && !origin.includes('localhost') && !origin.includes('127.0.0.1');

      const mpItems = items.map(item => ({
        id: item.product.id.toString(),
        title: item.product.name.substring(0, 250),
        description: `${item.product.brand} - ${item.product.category === 'Shirt' ? 'Camiseta' : 'Calzado'}`,
        picture_url: item.product.image.startsWith('http') ? item.product.image : `${origin}/${item.product.image}`,
        category_id: 'fashion',
        quantity: item.quantity,
        currency_id: 'COP',
        unit_price: Number(item.product.price)
      }));

      const body: any = {
        items: mpItems,
        back_urls: {
          success: `${origin}${pathname}?payment_status=approved`,
          failure: `${origin}${pathname}?payment_status=failure`,
          pending: `${origin}${pathname}?payment_status=pending`
        }
      };

      if (isHttpsAndPublic) {
        body.auto_return = 'approved';
      }

      const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.mercadoPagoAccessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error del servidor de Mercado Pago (${response.status})`);
      }

      const data = await response.json();
      const checkoutUrl = data.sandbox_init_point || data.init_point;

      if (checkoutUrl) {
        // Abre la pasarela de Mercado Pago en pestaña nueva para no cerrar la tienda
        window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
        this.isCartOpen.set(false);
      } else {
        throw new Error('No se recibió la URL de pago de Mercado Pago.');
      }
    } catch (err: any) {
      console.error('Error al generar checkout de Mercado Pago:', err);
      this.checkoutError.set(err.message || 'Error al conectar con Mercado Pago. Intenta nuevamente.');
    } finally {
      this.isCheckingOut.set(false);
    }
  }

  // Order Cart via WhatsApp
  sendWhatsAppCartOrder() {
    const items = this.cartItems();
    if (items.length === 0 || typeof window === 'undefined') return;

    const lines = items.map((item, idx) =>
      `${idx + 1}. *${item.product.name}* (x${item.quantity}) - $${(item.product.price * item.quantity).toLocaleString('es-CO')} COP`
    ).join('\n');

    const total = this.cartSubtotal().toLocaleString('es-CO');
    const text =
      `¡Hola UrbanStyle! Deseo realizar el siguiente pedido de mi carrito:\n\n` +
      `${lines}\n\n` +
      `*Total a pagar:* $${total} COP\n\n` +
      `¿Qué tallas tienes disponibles y cómo coordinamos el envío? ¡Muchas gracias!`;

    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
