import { Product } from './shoes';

export const SHIRTS: Product[] = [
  {
    id: 1001,
    name: 'Camisa Manga Corta Streetwear Black',
    brand: 'UrbanStyle',
    category: 'Shirt',
    price: 65000,
    rating: 4.9,
    reviewsCount: 34,
    description: 'Camisa casual de manga corta con cuello camisero y botones frontales. Confección en algodón premium suave, corte holgado ideal para estilo streetwear moderno.',
    sizes: [38, 40, 42, 44],
    colors: [
      { name: 'Negro Profundo', value: '#111827' },
      { name: 'Gris Oscuro', value: '#1F2937' }
    ],
    image: 'products/shirt_1.jpg',
    images: ['products/shirt_1.jpg'],
    featured: true
  },
  {
    id: 1002,
    name: 'Camisa Polo Clásica Navy Blue',
    brand: 'Polo Club',
    category: 'Shirt',
    price: 85000,
    rating: 4.8,
    reviewsCount: 22,
    description: 'Polo piqué premium con bordado de alta precisión en el pecho. Acabado suave y corte regular fit ideal para ocasiones casuales y semiformales.',
    sizes: [38, 40, 42, 44, 46],
    colors: [
      { name: 'Azul Marino', value: '#0369A1' },
      { name: 'Blanco Perla', value: '#FFFFFF' }
    ],
    image: 'products/shirt_2.jpg',
    images: ['products/shirt_2.jpg'],
    featured: true
  },
  {
    id: 1003,
    name: 'Camiseta Graphic UrbanStyle',
    brand: 'UrbanStyle',
    category: 'Shirt',
    price: 70000,
    rating: 4.7,
    reviewsCount: 19,
    description: 'Diseño gráfico streetwear serigrafiado con tintas ecológicas de alta resistencia al lavado. Silueta moderna drop shoulder.',
    sizes: [38, 40, 42, 44],
    colors: [
      { name: 'Azul Eléctrico', value: '#0284C7' },
      { name: 'Negro Carbón', value: '#1E293B' }
    ],
    image: 'products/shirt_3.jpg',
    images: ['products/shirt_3.jpg'],
    featured: false
  },
  {
    id: 1004,
    name: 'Camisa Manga Corta Lino Verano',
    brand: 'Zara Style',
    category: 'Shirt',
    price: 92000,
    rating: 4.9,
    reviewsCount: 28,
    description: 'Camisa fresca 100% lino natural, cuello camp collar estilo cubano con botones nacarados. Perfecta para climas cálidos y salidas de fin de semana.',
    sizes: [38, 40, 42, 44, 46],
    colors: [
      { name: 'Blanco Lino', value: '#FFFFFF' },
      { name: 'Arena Suave', value: '#E2E8F0' }
    ],
    image: 'products/shirt_4.jpg',
    images: ['products/shirt_4.jpg'],
    featured: true
  },
  {
    id: 1005,
    name: 'Camiseta Graphic USA Eagle Vintage',
    brand: 'UrbanStyle',
    category: 'Shirt',
    price: 78000,
    rating: 4.8,
    reviewsCount: 41,
    description: 'Camiseta boxy fit con imponente estampado gráfico retro USA Eagle serigrafiado en alta definición. Lavado vintage suave al tacto y cuello acanalado reforzado.',
    sizes: [38, 40, 42, 44],
    colors: [
      { name: 'Negro Vintage', value: '#1E293B' },
      { name: 'Gris Asfalto', value: '#475569' }
    ],
    image: 'products/shirt_5.jpg',
    images: ['products/shirt_5.jpg'],
    featured: false
  },
  {
    id: 1006,
    name: 'Camisa Formal Oxford Celeste',
    brand: 'Tommy Style',
    category: 'Shirt',
    price: 98000,
    rating: 4.9,
    reviewsCount: 17,
    description: 'Elegante camisa confeccionada en tejido Oxford 100% algodón peinado. Cuello abotonado button-down y puños ajustables.',
    sizes: [38, 40, 42, 44, 46],
    colors: [
      { name: 'Celeste Candy', value: '#38BDF8' },
      { name: 'Blanco Formal', value: '#FFFFFF' }
    ],
    image: 'products/shirt_6.jpg',
    images: ['products/shirt_6.jpg'],
    featured: true
  },
  {
    id: 1007,
    name: 'Camiseta Acid Wash Grafito',
    brand: 'UrbanStyle',
    category: 'Shirt',
    price: 72000,
    rating: 4.6,
    reviewsCount: 15,
    description: 'Efecto de teñido ácido individualizado que hace que cada prenda sea única. Algodón peinado de tacto sedoso y ribete en cuello.',
    sizes: [38, 40, 42, 44],
    colors: [
      { name: 'Gris Grafito', value: '#334155' },
      { name: 'Humo Oscuro', value: '#1E293B' }
    ],
    image: 'products/shirt_7.jpg',
    images: ['products/shirt_7.jpg'],
    featured: false
  },
  {
    id: 1008,
    name: 'Camiseta Dri-Fit Performance Sport',
    brand: 'Adidas Casual',
    category: 'Shirt',
    price: 68000,
    rating: 4.7,
    reviewsCount: 25,
    description: 'Tecnología de absorción de humedad y secado rápido. Paneles laterales microperforados para máxima ventilación y frescura en movimiento.',
    sizes: [38, 40, 42, 44],
    colors: [
      { name: 'Azul Cyan', value: '#0EA5E9' },
      { name: 'Negro Tech', value: '#0F172A' }
    ],
    image: 'products/shirt_8.jpg',
    images: ['products/shirt_8.jpg'],
    featured: false
  },
  {
    id: 1009,
    name: 'Camisa Cuadros Street Flannel',
    brand: 'Urban Outfit',
    category: 'Shirt',
    price: 89000,
    rating: 4.7,
    reviewsCount: 14,
    description: 'Camisa leñadora en franela suave cepillada con patrón de cuadros contemporáneo. Doble bolsillo frontal con botones metálicos.',
    sizes: [38, 40, 42, 44, 46],
    colors: [
      { name: 'Gris Azulado', value: '#64748B' },
      { name: 'Negro & Blanco', value: '#1E293B' }
    ],
    image: 'products/shirt_9.jpg',
    images: ['products/shirt_9.jpg'],
    featured: false
  },
  {
    id: 1010,
    name: 'Camiseta Minimal Pastel Celeste',
    brand: 'UrbanStyle',
    category: 'Shirt',
    price: 64000,
    rating: 5.0,
    reviewsCount: 30,
    description: 'Tono celeste pastel suave con detalle bordado minimalista en el centro. Diseñada para lucir limpia, caramelo y moderna en cualquier ocasión.',
    sizes: [38, 40, 42, 44],
    colors: [
      { name: 'Celeste Pastel', value: '#7DD3FC' },
      { name: 'Blanco Nieve', value: '#F8FAFC' }
    ],
    image: 'products/shirt_10.jpg',
    images: ['products/shirt_10.jpg'],
    featured: true
  }
];
