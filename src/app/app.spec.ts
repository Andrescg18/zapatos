import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PRODUCTS } from './data/shoes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should manage cart items and compute total count and subtotal', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    
    app.clearCart();
    expect(app.cartTotalCount()).toBe(0);
    expect(app.cartSubtotal()).toBe(0);

    const testProduct = PRODUCTS[0];
    app.addToCart(testProduct, 2);

    expect(app.cartTotalCount()).toBe(2);
    expect(app.cartSubtotal()).toBe(testProduct.price * 2);

    // Update quantity
    app.updateQuantity(testProduct.id, 1);
    expect(app.cartTotalCount()).toBe(3);
    expect(app.cartSubtotal()).toBe(testProduct.price * 3);

    // Remove from cart
    app.removeFromCart(testProduct.id);
    expect(app.cartTotalCount()).toBe(0);
    expect(app.cartSubtotal()).toBe(0);
  });

  it('should have Mercado Pago access token and test credentials configured', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app.mercadoPagoAccessToken).toContain('APP_USR-');
    expect(app.testUser).toBe('TESTUSER3914143733173093161');
    expect(app.testPass).toBe('z3k2ESWfm5');
    expect(app.testCards.length).toBeGreaterThan(0);
  });

  it('should support shirts section and category separation', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    // Default category is 'todos'
    expect(app.selectedCategory()).toBe('todos');

    // Switch to camisetas
    app.selectCategory('camisetas');
    expect(app.selectedCategory()).toBe('camisetas');
    expect(app.currentLevel()).toBe('products');
    
    // Check that filteredProducts only contain Shirt
    const shirts = app.filteredProducts();
    expect(shirts.length).toBe(10);
    expect(shirts.every((p: any) => p.category === 'Shirt')).toBe(true);

    // Switch to zapatos
    app.selectCategory('zapatos');
    expect(app.selectedCategory()).toBe('zapatos');
    const shoes = app.filteredProducts();
    expect(shoes.length).toBeGreaterThan(0);
    expect(shoes.every((p: any) => p.category !== 'Shirt')).toBe(true);
  });
});
