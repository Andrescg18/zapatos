export interface Product {
  id: number;
  name: string;
  brand: string;
  category: 'Running' | 'Casual' | 'Boots' | 'Shirt';
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  sizes: number[];
  colors: { name: string, value: string }[];
  image: string;
  images?: string[];
  featured?: boolean;
  gender?: 'hombre' | 'mujer' | 'unisex';
}

export const PRODUCTS: Product[] = [
  {
    "id": 1,
    "name": "ADIDAS Adidas running Ref. 1001",
    "brand": "Adidas",
    "category": "Running",
    "price": 197000,
    "rating": 4.5,
    "reviewsCount": 16,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_1.jpg",
    "featured": false,
    "images": [
      "products/shoe_1.jpg"
    ]
  },
  {
    "id": 2,
    "name": "ADIDAS Adidas running Ref. 1002",
    "brand": "Adidas",
    "category": "Running",
    "price": 189000,
    "rating": 4.6,
    "reviewsCount": 27,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_2.jpg",
    "featured": false,
    "images": [
      "products/shoe_2.jpg"
    ]
  },
  {
    "id": 3,
    "name": "ADIDAS Adidas running Ref. 1003",
    "brand": "Adidas",
    "category": "Running",
    "price": 206000,
    "rating": 4.7,
    "reviewsCount": 38,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_3.jpg",
    "featured": false,
    "images": [
      "products/shoe_3.jpg"
    ]
  },
  {
    "id": 4,
    "name": "ADIDAS Adidas running Ref. 1004",
    "brand": "Adidas",
    "category": "Running",
    "price": 184000,
    "rating": 4.8,
    "reviewsCount": 49,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_4.jpg",
    "featured": false,
    "images": [
      "products/shoe_4.jpg"
    ]
  },
  {
    "id": 5,
    "name": "ADIDAS Adidas running Ref. 1005",
    "brand": "Adidas",
    "category": "Running",
    "price": 217000,
    "rating": 4.9,
    "reviewsCount": 60,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_5.jpg",
    "featured": false,
    "images": [
      "products/shoe_5.jpg"
    ]
  },
  {
    "id": 6,
    "name": "ADIDAS Adidas running Ref. 1006",
    "brand": "Adidas",
    "category": "Running",
    "price": 188000,
    "rating": 5.0,
    "reviewsCount": 71,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_6.jpg",
    "featured": false,
    "images": [
      "products/shoe_6.jpg"
    ]
  },
  {
    "id": 7,
    "name": "ADIDAS Adidas running Ref. 1007",
    "brand": "Adidas",
    "category": "Running",
    "price": 197000,
    "rating": 4.4,
    "reviewsCount": 82,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_7.jpg",
    "featured": false,
    "images": [
      "products/shoe_7.jpg"
    ]
  },
  {
    "id": 8,
    "name": "ADIDAS Adidas running Ref. 1008",
    "brand": "Adidas",
    "category": "Running",
    "price": 210000,
    "rating": 4.5,
    "reviewsCount": 13,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_8.jpg",
    "featured": false,
    "images": [
      "products/shoe_8.jpg"
    ]
  },
  {
    "id": 9,
    "name": "ADIDAS Adidas running Ref. 1009",
    "brand": "Adidas",
    "category": "Running",
    "price": 214000,
    "rating": 4.6,
    "reviewsCount": 24,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_9.jpg",
    "featured": false,
    "images": [
      "products/shoe_9.jpg"
    ]
  },
  {
    "id": 10,
    "name": "ADIDAS Adidas running Ref. 1010",
    "brand": "Adidas",
    "category": "Running",
    "price": 190000,
    "rating": 4.7,
    "reviewsCount": 35,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_10.jpg",
    "featured": false,
    "images": [
      "products/shoe_10.jpg"
    ]
  },
  {
    "id": 11,
    "name": "ADIDAS Adidas running Ref. 1011",
    "brand": "Adidas",
    "category": "Running",
    "price": 189000,
    "rating": 4.8,
    "reviewsCount": 46,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_11.jpg",
    "featured": false,
    "images": [
      "products/shoe_11.jpg"
    ]
  },
  {
    "id": 12,
    "name": "ADIDAS Adidas running Ref. 1012",
    "brand": "Adidas",
    "category": "Running",
    "price": 197000,
    "rating": 4.9,
    "reviewsCount": 57,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_12.jpg",
    "featured": true,
    "images": [
      "products/shoe_12.jpg"
    ]
  },
  {
    "id": 13,
    "name": "ADIDAS Adidas running Ref. 1013",
    "brand": "Adidas",
    "category": "Running",
    "price": 181000,
    "rating": 5.0,
    "reviewsCount": 68,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_13.jpg",
    "featured": false,
    "images": [
      "products/shoe_13.jpg"
    ]
  },
  {
    "id": 14,
    "name": "ADIDAS Adidas running Ref. 1014",
    "brand": "Adidas",
    "category": "Running",
    "price": 190000,
    "rating": 4.4,
    "reviewsCount": 79,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_14.jpg",
    "featured": false,
    "images": [
      "products/shoe_14.jpg"
    ]
  },
  {
    "id": 15,
    "name": "ADIDAS Adidas running Ref. 1015",
    "brand": "Adidas",
    "category": "Running",
    "price": 182000,
    "rating": 4.5,
    "reviewsCount": 10,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_15.jpg",
    "featured": false,
    "images": [
      "products/shoe_15.jpg"
    ]
  },
  {
    "id": 16,
    "name": "ADIDAS Adidas running Ref. 1016",
    "brand": "Adidas",
    "category": "Running",
    "price": 182000,
    "rating": 4.6,
    "reviewsCount": 21,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_16.jpg",
    "featured": false,
    "images": [
      "products/shoe_16.jpg"
    ]
  },
  {
    "id": 17,
    "name": "ADIDAS Adidas running Ref. 1017",
    "brand": "Adidas",
    "category": "Running",
    "price": 203000,
    "rating": 4.7,
    "reviewsCount": 32,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_17.jpg",
    "featured": false,
    "images": [
      "products/shoe_17.jpg"
    ]
  },
  {
    "id": 18,
    "name": "ADIDAS Adidas running Ref. 1018",
    "brand": "Adidas",
    "category": "Running",
    "price": 198000,
    "rating": 4.8,
    "reviewsCount": 43,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_18.jpg",
    "featured": false,
    "images": [
      "products/shoe_18.jpg"
    ]
  },
  {
    "id": 19,
    "name": "ADIDAS Adidas running Ref. 1019",
    "brand": "Adidas",
    "category": "Running",
    "price": 219000,
    "rating": 4.9,
    "reviewsCount": 54,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_19.jpg",
    "featured": false,
    "images": [
      "products/shoe_19.jpg"
    ]
  },
  {
    "id": 20,
    "name": "ADIDAS Adidas running Ref. 1020",
    "brand": "Adidas",
    "category": "Running",
    "price": 219000,
    "rating": 5.0,
    "reviewsCount": 65,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_20.jpg",
    "featured": false,
    "images": [
      "products/shoe_20.jpg"
    ]
  },
  {
    "id": 21,
    "name": "ADIDAS Adidas running Ref. 1021",
    "brand": "Adidas",
    "category": "Running",
    "price": 199000,
    "rating": 4.4,
    "reviewsCount": 76,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_21.jpg",
    "featured": false,
    "images": [
      "products/shoe_21.jpg"
    ]
  },
  {
    "id": 22,
    "name": "ADIDAS Adidas running Ref. 1022",
    "brand": "Adidas",
    "category": "Running",
    "price": 181000,
    "rating": 4.5,
    "reviewsCount": 7,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_22.jpg",
    "featured": false,
    "images": [
      "products/shoe_22.jpg"
    ]
  },
  {
    "id": 23,
    "name": "ADIDAS Adidas running Ref. 1023",
    "brand": "Adidas",
    "category": "Running",
    "price": 217000,
    "rating": 4.6,
    "reviewsCount": 18,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_23.jpg",
    "featured": false,
    "images": [
      "products/shoe_23.jpg"
    ]
  },
  {
    "id": 24,
    "name": "ADIDAS Adidas running Ref. 1024",
    "brand": "Adidas",
    "category": "Running",
    "price": 208000,
    "rating": 4.7,
    "reviewsCount": 29,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_24.jpg",
    "featured": true,
    "images": [
      "products/shoe_24.jpg"
    ]
  },
  {
    "id": 25,
    "name": "ADIDAS Adidas running Ref. 1025",
    "brand": "Adidas",
    "category": "Running",
    "price": 181000,
    "rating": 4.8,
    "reviewsCount": 40,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_25.jpg",
    "featured": false,
    "images": [
      "products/shoe_25.jpg"
    ]
  },
  {
    "id": 26,
    "name": "ADIDAS Adidas running Ref. 1026",
    "brand": "Adidas",
    "category": "Running",
    "price": 197000,
    "rating": 4.9,
    "reviewsCount": 51,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_26.jpg",
    "featured": false,
    "images": [
      "products/shoe_26.jpg"
    ]
  },
  {
    "id": 27,
    "name": "ADIDAS Adidas running Ref. 1027",
    "brand": "Adidas",
    "category": "Running",
    "price": 198000,
    "rating": 5.0,
    "reviewsCount": 62,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_27.jpg",
    "featured": false,
    "images": [
      "products/shoe_27.jpg"
    ]
  },
  {
    "id": 28,
    "name": "ADIDAS Adidas running Ref. 1028",
    "brand": "Adidas",
    "category": "Running",
    "price": 191000,
    "rating": 4.4,
    "reviewsCount": 73,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_28.jpg",
    "featured": false,
    "images": [
      "products/shoe_28.jpg"
    ]
  },
  {
    "id": 29,
    "name": "ADIDAS Adidas running Ref. 1029",
    "brand": "Adidas",
    "category": "Running",
    "price": 206000,
    "rating": 4.5,
    "reviewsCount": 84,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_29.jpg",
    "featured": false,
    "images": [
      "products/shoe_29.jpg"
    ]
  },
  {
    "id": 30,
    "name": "ADIDAS Adidas running Ref. 1030",
    "brand": "Adidas",
    "category": "Running",
    "price": 203000,
    "rating": 4.6,
    "reviewsCount": 15,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_30.jpg",
    "featured": false,
    "images": [
      "products/shoe_30.jpg"
    ]
  },
  {
    "id": 31,
    "name": "ADIDAS Adidas running Ref. 1031",
    "brand": "Adidas",
    "category": "Running",
    "price": 195000,
    "rating": 4.7,
    "reviewsCount": 26,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_31.jpg",
    "featured": false,
    "images": [
      "products/shoe_31.jpg"
    ]
  },
  {
    "id": 32,
    "name": "ADIDAS Adidas running Ref. 1032",
    "brand": "Adidas",
    "category": "Running",
    "price": 219000,
    "rating": 4.8,
    "reviewsCount": 37,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_32.jpg",
    "featured": false,
    "images": [
      "products/shoe_32.jpg"
    ]
  },
  {
    "id": 33,
    "name": "ADIDAS Adidas running Ref. 1033",
    "brand": "Adidas",
    "category": "Running",
    "price": 220000,
    "rating": 4.9,
    "reviewsCount": 48,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_33.jpg",
    "featured": false,
    "images": [
      "products/shoe_33.jpg"
    ]
  },
  {
    "id": 34,
    "name": "ADIDAS Adidas running Ref. 1034",
    "brand": "Adidas",
    "category": "Running",
    "price": 183000,
    "rating": 5.0,
    "reviewsCount": 59,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_34.jpg",
    "featured": false,
    "images": [
      "products/shoe_34.jpg"
    ]
  },
  {
    "id": 35,
    "name": "ADIDAS Adidas running Ref. 1035",
    "brand": "Adidas",
    "category": "Running",
    "price": 182000,
    "rating": 4.4,
    "reviewsCount": 70,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_35.jpg",
    "featured": false,
    "images": [
      "products/shoe_35.jpg"
    ]
  },
  {
    "id": 36,
    "name": "ADIDAS Adidas running Ref. 1036",
    "brand": "Adidas",
    "category": "Running",
    "price": 204000,
    "rating": 4.5,
    "reviewsCount": 81,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_36.jpg",
    "featured": true,
    "images": [
      "products/shoe_36.jpg"
    ]
  },
  {
    "id": 37,
    "name": "ADIDAS Adidas running Ref. 1037",
    "brand": "Adidas",
    "category": "Running",
    "price": 208000,
    "rating": 4.6,
    "reviewsCount": 12,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_37.jpg",
    "featured": false,
    "images": [
      "products/shoe_37.jpg"
    ]
  },
  {
    "id": 38,
    "name": "ADIDAS Adidas running Ref. 1038",
    "brand": "Adidas",
    "category": "Running",
    "price": 213000,
    "rating": 4.7,
    "reviewsCount": 23,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_38.jpg",
    "featured": false,
    "images": [
      "products/shoe_38.jpg"
    ]
  },
  {
    "id": 39,
    "name": "ADIDAS Adidas running Ref. 1039",
    "brand": "Adidas",
    "category": "Running",
    "price": 207000,
    "rating": 4.8,
    "reviewsCount": 34,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_39.jpg",
    "featured": false,
    "images": [
      "products/shoe_39.jpg"
    ]
  },
  {
    "id": 40,
    "name": "ADIDAS Adidas running Ref. 1040",
    "brand": "Adidas",
    "category": "Running",
    "price": 200000,
    "rating": 4.9,
    "reviewsCount": 45,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_40.jpg",
    "featured": false,
    "images": [
      "products/shoe_40.jpg"
    ]
  },
  {
    "id": 41,
    "name": "ADIDAS Adidas running Ref. 1041",
    "brand": "Adidas",
    "category": "Running",
    "price": 212000,
    "rating": 5.0,
    "reviewsCount": 56,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_41.jpg",
    "featured": false,
    "images": [
      "products/shoe_41.jpg"
    ]
  },
  {
    "id": 42,
    "name": "ADIDAS Adidas running Ref. 1042",
    "brand": "Adidas",
    "category": "Running",
    "price": 216000,
    "rating": 4.4,
    "reviewsCount": 67,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_42.jpg",
    "featured": false,
    "images": [
      "products/shoe_42.jpg"
    ]
  },
  {
    "id": 43,
    "name": "ADIDAS Adidas running Ref. 1043",
    "brand": "Adidas",
    "category": "Running",
    "price": 186000,
    "rating": 4.5,
    "reviewsCount": 78,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_43.jpg",
    "featured": false,
    "images": [
      "products/shoe_43.jpg"
    ]
  },
  {
    "id": 44,
    "name": "ADIDAS Adidas running Ref. 1044",
    "brand": "Adidas",
    "category": "Running",
    "price": 194000,
    "rating": 4.6,
    "reviewsCount": 9,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_44.jpg",
    "featured": false,
    "images": [
      "products/shoe_44.jpg"
    ]
  },
  {
    "id": 45,
    "name": "ADIDAS Adidas running Ref. 1045",
    "brand": "Adidas",
    "category": "Running",
    "price": 210000,
    "rating": 4.7,
    "reviewsCount": 20,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_45.jpg",
    "featured": false,
    "images": [
      "products/shoe_45.jpg"
    ]
  },
  {
    "id": 46,
    "name": "ADIDAS Adidas running Ref. 1046",
    "brand": "Adidas",
    "category": "Running",
    "price": 195000,
    "rating": 4.8,
    "reviewsCount": 31,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_46.jpg",
    "featured": false,
    "images": [
      "products/shoe_46.jpg"
    ]
  },
  {
    "id": 47,
    "name": "ADIDAS Adidas running Ref. 1047",
    "brand": "Adidas",
    "category": "Running",
    "price": 189000,
    "rating": 4.9,
    "reviewsCount": 42,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_47.jpg",
    "featured": false,
    "images": [
      "products/shoe_47.jpg"
    ]
  },
  {
    "id": 48,
    "name": "ADIDAS Adidas running Ref. 1048",
    "brand": "Adidas",
    "category": "Running",
    "price": 214000,
    "rating": 5.0,
    "reviewsCount": 53,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_48.jpg",
    "featured": true,
    "images": [
      "products/shoe_48.jpg"
    ]
  },
  {
    "id": 49,
    "name": "ADIDAS Adidas running Ref. 1049",
    "brand": "Adidas",
    "category": "Running",
    "price": 216000,
    "rating": 4.4,
    "reviewsCount": 64,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_49.jpg",
    "featured": false,
    "images": [
      "products/shoe_49.jpg"
    ]
  },
  {
    "id": 50,
    "name": "ADIDAS Adidas running Ref. 1050",
    "brand": "Adidas",
    "category": "Running",
    "price": 200000,
    "rating": 4.5,
    "reviewsCount": 75,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_50.jpg",
    "featured": false,
    "images": [
      "products/shoe_50.jpg"
    ]
  },
  {
    "id": 51,
    "name": "ADIDAS Adidas running Ref. 1051",
    "brand": "Adidas",
    "category": "Running",
    "price": 201000,
    "rating": 4.6,
    "reviewsCount": 6,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_51.jpg",
    "featured": false,
    "images": [
      "products/shoe_51.jpg"
    ]
  },
  {
    "id": 52,
    "name": "ADIDAS Adidas running Ref. 1052",
    "brand": "Adidas",
    "category": "Running",
    "price": 211000,
    "rating": 4.7,
    "reviewsCount": 17,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_52.jpg",
    "featured": false,
    "images": [
      "products/shoe_52.jpg"
    ]
  },
  {
    "id": 53,
    "name": "ADIDAS Adidas running Ref. 1053",
    "brand": "Adidas",
    "category": "Running",
    "price": 205000,
    "rating": 4.8,
    "reviewsCount": 28,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_53.jpg",
    "featured": false,
    "images": [
      "products/shoe_53.jpg"
    ]
  },
  {
    "id": 54,
    "name": "ADIDAS Adidas running Ref. 1054",
    "brand": "Adidas",
    "category": "Running",
    "price": 185000,
    "rating": 4.9,
    "reviewsCount": 39,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_54.jpg",
    "featured": false,
    "images": [
      "products/shoe_54.jpg"
    ]
  },
  {
    "id": 55,
    "name": "ADIDAS Adidas running Ref. 1055",
    "brand": "Adidas",
    "category": "Running",
    "price": 218000,
    "rating": 5.0,
    "reviewsCount": 50,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_55.jpg",
    "featured": false,
    "images": [
      "products/shoe_55.jpg"
    ]
  },
  {
    "id": 56,
    "name": "ADIDAS Adidas running Ref. 1056",
    "brand": "Adidas",
    "category": "Running",
    "price": 211000,
    "rating": 4.4,
    "reviewsCount": 61,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_56.jpg",
    "featured": false,
    "images": [
      "products/shoe_56.jpg"
    ]
  },
  {
    "id": 57,
    "name": "ADIDAS Adidas running Ref. 1057",
    "brand": "Adidas",
    "category": "Running",
    "price": 199000,
    "rating": 4.5,
    "reviewsCount": 72,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_57.jpg",
    "featured": false,
    "images": [
      "products/shoe_57.jpg"
    ]
  },
  {
    "id": 58,
    "name": "ADIDAS Adidas running Ref. 1058",
    "brand": "Adidas",
    "category": "Running",
    "price": 192000,
    "rating": 4.6,
    "reviewsCount": 83,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_58.jpg",
    "featured": false,
    "images": [
      "products/shoe_58.jpg"
    ]
  },
  {
    "id": 59,
    "name": "ADIDAS Adidas running Ref. 1059",
    "brand": "Adidas",
    "category": "Running",
    "price": 191000,
    "rating": 4.7,
    "reviewsCount": 14,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_59.jpg",
    "featured": false,
    "images": [
      "products/shoe_59.jpg"
    ]
  },
  {
    "id": 60,
    "name": "ADIDAS Adidas running Ref. 1060",
    "brand": "Adidas",
    "category": "Running",
    "price": 202000,
    "rating": 4.8,
    "reviewsCount": 25,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_60.jpg",
    "featured": true,
    "images": [
      "products/shoe_60.jpg"
    ]
  },
  {
    "id": 61,
    "name": "ADIDAS Adidas running Ref. 1061",
    "brand": "Adidas",
    "category": "Running",
    "price": 212000,
    "rating": 4.9,
    "reviewsCount": 36,
    "description": "Zapatos Adidas Adidas running de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_61.jpg",
    "featured": false,
    "images": [
      "products/shoe_61.jpg"
    ]
  },
  {
    "id": 62,
    "name": "ADIDAS Variedad Ref. 1062",
    "brand": "Adidas",
    "category": "Casual",
    "price": 198000,
    "rating": 5.0,
    "reviewsCount": 47,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_62.jpg",
    "featured": false,
    "images": [
      "products/shoe_62.jpg"
    ]
  },
  {
    "id": 63,
    "name": "ADIDAS Variedad Ref. 1063",
    "brand": "Adidas",
    "category": "Casual",
    "price": 195000,
    "rating": 4.4,
    "reviewsCount": 58,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_63.jpg",
    "featured": false,
    "images": [
      "products/shoe_63.jpg"
    ]
  },
  {
    "id": 64,
    "name": "ADIDAS Variedad Ref. 1064",
    "brand": "Adidas",
    "category": "Casual",
    "price": 181000,
    "rating": 4.5,
    "reviewsCount": 69,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_64.jpg",
    "featured": false,
    "images": [
      "products/shoe_64.jpg"
    ]
  },
  {
    "id": 65,
    "name": "ADIDAS Variedad Ref. 1065",
    "brand": "Adidas",
    "category": "Casual",
    "price": 182000,
    "rating": 4.6,
    "reviewsCount": 80,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_65.jpg",
    "featured": false,
    "images": [
      "products/shoe_65.jpg"
    ]
  },
  {
    "id": 66,
    "name": "ADIDAS Variedad Ref. 1066",
    "brand": "Adidas",
    "category": "Casual",
    "price": 196000,
    "rating": 4.7,
    "reviewsCount": 11,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_66.jpg",
    "featured": false,
    "images": [
      "products/shoe_66.jpg"
    ]
  },
  {
    "id": 67,
    "name": "ADIDAS Variedad Ref. 1067",
    "brand": "Adidas",
    "category": "Casual",
    "price": 210000,
    "rating": 4.8,
    "reviewsCount": 22,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_67.jpg",
    "featured": false,
    "images": [
      "products/shoe_67.jpg"
    ]
  },
  {
    "id": 68,
    "name": "ADIDAS Variedad Ref. 1068",
    "brand": "Adidas",
    "category": "Casual",
    "price": 204000,
    "rating": 4.9,
    "reviewsCount": 33,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_68.jpg",
    "featured": false,
    "images": [
      "products/shoe_68.jpg"
    ]
  },
  {
    "id": 69,
    "name": "ADIDAS Variedad Ref. 1069",
    "brand": "Adidas",
    "category": "Casual",
    "price": 200000,
    "rating": 5.0,
    "reviewsCount": 44,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_69.jpg",
    "featured": false,
    "images": [
      "products/shoe_69.jpg"
    ]
  },
  {
    "id": 70,
    "name": "ADIDAS Variedad Ref. 1070",
    "brand": "Adidas",
    "category": "Casual",
    "price": 197000,
    "rating": 4.4,
    "reviewsCount": 55,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_70.jpg",
    "featured": false,
    "images": [
      "products/shoe_70.jpg"
    ]
  },
  {
    "id": 71,
    "name": "ADIDAS Variedad Ref. 1071",
    "brand": "Adidas",
    "category": "Casual",
    "price": 190000,
    "rating": 4.5,
    "reviewsCount": 66,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_71.jpg",
    "featured": false,
    "images": [
      "products/shoe_71.jpg"
    ]
  },
  {
    "id": 72,
    "name": "ADIDAS Variedad Ref. 1072",
    "brand": "Adidas",
    "category": "Casual",
    "price": 201000,
    "rating": 4.6,
    "reviewsCount": 77,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_72.jpg",
    "featured": true,
    "images": [
      "products/shoe_72.jpg"
    ]
  },
  {
    "id": 73,
    "name": "ADIDAS Variedad Ref. 1073",
    "brand": "Adidas",
    "category": "Casual",
    "price": 210000,
    "rating": 4.7,
    "reviewsCount": 8,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_73.jpg",
    "featured": false,
    "images": [
      "products/shoe_73.jpg"
    ]
  },
  {
    "id": 74,
    "name": "ADIDAS Variedad Ref. 1074",
    "brand": "Adidas",
    "category": "Casual",
    "price": 215000,
    "rating": 4.8,
    "reviewsCount": 19,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_74.jpg",
    "featured": false,
    "images": [
      "products/shoe_74.jpg"
    ]
  },
  {
    "id": 75,
    "name": "ADIDAS Variedad Ref. 1075",
    "brand": "Adidas",
    "category": "Casual",
    "price": 203000,
    "rating": 4.9,
    "reviewsCount": 30,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_75.jpg",
    "featured": false,
    "images": [
      "products/shoe_75.jpg"
    ]
  },
  {
    "id": 76,
    "name": "ADIDAS Variedad Ref. 1076",
    "brand": "Adidas",
    "category": "Casual",
    "price": 204000,
    "rating": 5.0,
    "reviewsCount": 41,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_76.jpg",
    "featured": false,
    "images": [
      "products/shoe_76.jpg"
    ]
  },
  {
    "id": 77,
    "name": "ADIDAS Variedad Ref. 1077",
    "brand": "Adidas",
    "category": "Casual",
    "price": 204000,
    "rating": 4.4,
    "reviewsCount": 52,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_77.jpg",
    "featured": false,
    "images": [
      "products/shoe_77.jpg"
    ]
  },
  {
    "id": 78,
    "name": "ADIDAS Variedad Ref. 1078",
    "brand": "Adidas",
    "category": "Casual",
    "price": 192000,
    "rating": 4.5,
    "reviewsCount": 63,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_78.jpg",
    "featured": false,
    "images": [
      "products/shoe_78.jpg"
    ]
  },
  {
    "id": 79,
    "name": "ADIDAS Variedad Ref. 1079",
    "brand": "Adidas",
    "category": "Casual",
    "price": 215000,
    "rating": 4.6,
    "reviewsCount": 74,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_79.jpg",
    "featured": false,
    "images": [
      "products/shoe_79.jpg"
    ]
  },
  {
    "id": 80,
    "name": "ADIDAS Variedad Ref. 1080",
    "brand": "Adidas",
    "category": "Casual",
    "price": 205000,
    "rating": 4.7,
    "reviewsCount": 5,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_80.jpg",
    "featured": false,
    "images": [
      "products/shoe_80.jpg"
    ]
  },
  {
    "id": 81,
    "name": "ADIDAS Variedad Ref. 1081",
    "brand": "Adidas",
    "category": "Casual",
    "price": 201000,
    "rating": 4.8,
    "reviewsCount": 16,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_81.jpg",
    "featured": false,
    "images": [
      "products/shoe_81.jpg"
    ]
  },
  {
    "id": 82,
    "name": "ADIDAS Variedad Ref. 1082",
    "brand": "Adidas",
    "category": "Casual",
    "price": 212000,
    "rating": 4.9,
    "reviewsCount": 27,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_82.jpg",
    "featured": false,
    "images": [
      "products/shoe_82.jpg"
    ]
  },
  {
    "id": 83,
    "name": "ADIDAS Variedad Ref. 1083",
    "brand": "Adidas",
    "category": "Casual",
    "price": 209000,
    "rating": 5.0,
    "reviewsCount": 38,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_83.jpg",
    "featured": false,
    "images": [
      "products/shoe_83.jpg"
    ]
  },
  {
    "id": 84,
    "name": "ADIDAS Variedad Ref. 1084",
    "brand": "Adidas",
    "category": "Casual",
    "price": 190000,
    "rating": 4.4,
    "reviewsCount": 49,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_84.jpg",
    "featured": true,
    "images": [
      "products/shoe_84.jpg"
    ]
  },
  {
    "id": 85,
    "name": "ADIDAS Variedad Ref. 1085",
    "brand": "Adidas",
    "category": "Casual",
    "price": 184000,
    "rating": 4.5,
    "reviewsCount": 60,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_85.jpg",
    "featured": false,
    "images": [
      "products/shoe_85.jpg"
    ]
  },
  {
    "id": 86,
    "name": "ADIDAS Variedad Ref. 1086",
    "brand": "Adidas",
    "category": "Casual",
    "price": 186000,
    "rating": 4.6,
    "reviewsCount": 71,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_86.jpg",
    "featured": false,
    "images": [
      "products/shoe_86.jpg"
    ]
  },
  {
    "id": 87,
    "name": "ADIDAS Variedad Ref. 1087",
    "brand": "Adidas",
    "category": "Casual",
    "price": 203000,
    "rating": 4.7,
    "reviewsCount": 82,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_87.jpg",
    "featured": false,
    "images": [
      "products/shoe_87.jpg"
    ]
  },
  {
    "id": 88,
    "name": "ADIDAS Variedad Ref. 1088",
    "brand": "Adidas",
    "category": "Casual",
    "price": 180000,
    "rating": 4.8,
    "reviewsCount": 13,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_88.jpg",
    "featured": false,
    "images": [
      "products/shoe_88.jpg"
    ]
  },
  {
    "id": 89,
    "name": "ADIDAS Variedad Ref. 1089",
    "brand": "Adidas",
    "category": "Casual",
    "price": 218000,
    "rating": 4.9,
    "reviewsCount": 24,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_89.jpg",
    "featured": false,
    "images": [
      "products/shoe_89.jpg"
    ]
  },
  {
    "id": 90,
    "name": "ADIDAS Variedad Ref. 1090",
    "brand": "Adidas",
    "category": "Casual",
    "price": 195000,
    "rating": 5.0,
    "reviewsCount": 35,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_90.jpg",
    "featured": false,
    "images": [
      "products/shoe_90.jpg"
    ]
  },
  {
    "id": 91,
    "name": "ADIDAS Variedad Ref. 1091",
    "brand": "Adidas",
    "category": "Casual",
    "price": 220000,
    "rating": 4.4,
    "reviewsCount": 46,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_91.jpg",
    "featured": false,
    "images": [
      "products/shoe_91.jpg"
    ]
  },
  {
    "id": 92,
    "name": "ADIDAS Variedad Ref. 1092",
    "brand": "Adidas",
    "category": "Casual",
    "price": 185000,
    "rating": 4.5,
    "reviewsCount": 57,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_92.jpg",
    "featured": false,
    "images": [
      "products/shoe_92.jpg"
    ]
  },
  {
    "id": 93,
    "name": "ADIDAS Variedad Ref. 1093",
    "brand": "Adidas",
    "category": "Casual",
    "price": 204000,
    "rating": 4.6,
    "reviewsCount": 68,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_93.jpg",
    "featured": false,
    "images": [
      "products/shoe_93.jpg"
    ]
  },
  {
    "id": 94,
    "name": "ADIDAS Variedad Ref. 1094",
    "brand": "Adidas",
    "category": "Casual",
    "price": 194000,
    "rating": 4.7,
    "reviewsCount": 79,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_94.jpg",
    "featured": false,
    "images": [
      "products/shoe_94.jpg"
    ]
  },
  {
    "id": 95,
    "name": "ADIDAS Variedad Ref. 1095",
    "brand": "Adidas",
    "category": "Casual",
    "price": 210000,
    "rating": 4.8,
    "reviewsCount": 10,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_95.jpg",
    "featured": false,
    "images": [
      "products/shoe_95.jpg"
    ]
  },
  {
    "id": 96,
    "name": "ADIDAS Variedad Ref. 1096",
    "brand": "Adidas",
    "category": "Casual",
    "price": 183000,
    "rating": 4.9,
    "reviewsCount": 21,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_96.jpg",
    "featured": true,
    "images": [
      "products/shoe_96.jpg"
    ]
  },
  {
    "id": 97,
    "name": "ADIDAS Variedad Ref. 1097",
    "brand": "Adidas",
    "category": "Casual",
    "price": 187000,
    "rating": 5.0,
    "reviewsCount": 32,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_97.jpg",
    "featured": false,
    "images": [
      "products/shoe_97.jpg"
    ]
  },
  {
    "id": 98,
    "name": "ADIDAS Variedad Ref. 1098",
    "brand": "Adidas",
    "category": "Casual",
    "price": 211000,
    "rating": 4.4,
    "reviewsCount": 43,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_98.jpg",
    "featured": false,
    "images": [
      "products/shoe_98.jpg"
    ]
  },
  {
    "id": 99,
    "name": "ADIDAS Variedad Ref. 1099",
    "brand": "Adidas",
    "category": "Casual",
    "price": 188000,
    "rating": 4.5,
    "reviewsCount": 54,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_99.jpg",
    "featured": false,
    "images": [
      "products/shoe_99.jpg"
    ]
  },
  {
    "id": 100,
    "name": "ADIDAS Variedad Ref. 1100",
    "brand": "Adidas",
    "category": "Casual",
    "price": 188000,
    "rating": 4.6,
    "reviewsCount": 65,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_100.jpg",
    "featured": false,
    "images": [
      "products/shoe_100.jpg"
    ]
  },
  {
    "id": 101,
    "name": "ADIDAS Variedad Ref. 1101",
    "brand": "Adidas",
    "category": "Casual",
    "price": 216000,
    "rating": 4.7,
    "reviewsCount": 76,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_101.jpg",
    "featured": false,
    "images": [
      "products/shoe_101.jpg"
    ]
  },
  {
    "id": 102,
    "name": "ADIDAS Variedad Ref. 1102",
    "brand": "Adidas",
    "category": "Casual",
    "price": 194000,
    "rating": 4.8,
    "reviewsCount": 7,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_102.jpg",
    "featured": false,
    "images": [
      "products/shoe_102.jpg"
    ]
  },
  {
    "id": 103,
    "name": "ADIDAS Variedad Ref. 1103",
    "brand": "Adidas",
    "category": "Casual",
    "price": 195000,
    "rating": 4.9,
    "reviewsCount": 18,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_103.jpg",
    "featured": false,
    "images": [
      "products/shoe_103.jpg"
    ]
  },
  {
    "id": 104,
    "name": "ADIDAS Variedad Ref. 1104",
    "brand": "Adidas",
    "category": "Casual",
    "price": 190000,
    "rating": 5.0,
    "reviewsCount": 29,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_104.jpg",
    "featured": false,
    "images": [
      "products/shoe_104.jpg"
    ]
  },
  {
    "id": 105,
    "name": "ADIDAS Variedad Ref. 1105",
    "brand": "Adidas",
    "category": "Casual",
    "price": 191000,
    "rating": 4.4,
    "reviewsCount": 40,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_105.jpg",
    "featured": false,
    "images": [
      "products/shoe_105.jpg"
    ]
  },
  {
    "id": 106,
    "name": "ADIDAS Variedad Ref. 1106",
    "brand": "Adidas",
    "category": "Casual",
    "price": 198000,
    "rating": 4.5,
    "reviewsCount": 51,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_106.jpg",
    "featured": false,
    "images": [
      "products/shoe_106.jpg"
    ]
  },
  {
    "id": 107,
    "name": "ADIDAS Variedad Ref. 1107",
    "brand": "Adidas",
    "category": "Casual",
    "price": 218000,
    "rating": 4.6,
    "reviewsCount": 62,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_107.jpg",
    "featured": false,
    "images": [
      "products/shoe_107.jpg"
    ]
  },
  {
    "id": 108,
    "name": "ADIDAS Variedad Ref. 1108",
    "brand": "Adidas",
    "category": "Casual",
    "price": 214000,
    "rating": 4.7,
    "reviewsCount": 73,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_108.jpg",
    "featured": true,
    "images": [
      "products/shoe_108.jpg"
    ]
  },
  {
    "id": 109,
    "name": "ADIDAS Variedad Ref. 1109",
    "brand": "Adidas",
    "category": "Casual",
    "price": 209000,
    "rating": 4.8,
    "reviewsCount": 84,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_109.jpg",
    "featured": false,
    "images": [
      "products/shoe_109.jpg"
    ]
  },
  {
    "id": 110,
    "name": "ADIDAS Variedad Ref. 1110",
    "brand": "Adidas",
    "category": "Casual",
    "price": 208000,
    "rating": 4.9,
    "reviewsCount": 15,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_110.jpg",
    "featured": false,
    "images": [
      "products/shoe_110.jpg"
    ]
  },
  {
    "id": 111,
    "name": "ADIDAS Variedad Ref. 1111",
    "brand": "Adidas",
    "category": "Casual",
    "price": 217000,
    "rating": 5.0,
    "reviewsCount": 26,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_111.jpg",
    "featured": false,
    "images": [
      "products/shoe_111.jpg"
    ]
  },
  {
    "id": 112,
    "name": "ADIDAS Variedad Ref. 1112",
    "brand": "Adidas",
    "category": "Casual",
    "price": 188000,
    "rating": 4.4,
    "reviewsCount": 37,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_112.jpg",
    "featured": false,
    "images": [
      "products/shoe_112.jpg"
    ]
  },
  {
    "id": 113,
    "name": "ADIDAS Variedad Ref. 1113",
    "brand": "Adidas",
    "category": "Casual",
    "price": 204000,
    "rating": 4.5,
    "reviewsCount": 48,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_113.jpg",
    "featured": false,
    "images": [
      "products/shoe_113.jpg"
    ]
  },
  {
    "id": 114,
    "name": "ADIDAS Variedad Ref. 1114",
    "brand": "Adidas",
    "category": "Casual",
    "price": 216000,
    "rating": 4.6,
    "reviewsCount": 59,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_114.jpg",
    "featured": false,
    "images": [
      "products/shoe_114.jpg"
    ]
  },
  {
    "id": 115,
    "name": "ADIDAS Variedad Ref. 1115",
    "brand": "Adidas",
    "category": "Casual",
    "price": 218000,
    "rating": 4.7,
    "reviewsCount": 70,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_115.jpg",
    "featured": false,
    "images": [
      "products/shoe_115.jpg"
    ]
  },
  {
    "id": 116,
    "name": "ADIDAS Variedad Ref. 1116",
    "brand": "Adidas",
    "category": "Casual",
    "price": 217000,
    "rating": 4.8,
    "reviewsCount": 81,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_116.jpg",
    "featured": false,
    "images": [
      "products/shoe_116.jpg"
    ]
  },
  {
    "id": 117,
    "name": "ADIDAS Variedad Ref. 1117",
    "brand": "Adidas",
    "category": "Casual",
    "price": 184000,
    "rating": 4.9,
    "reviewsCount": 12,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_117.jpg",
    "featured": false,
    "images": [
      "products/shoe_117.jpg"
    ]
  },
  {
    "id": 118,
    "name": "ADIDAS Variedad Ref. 1118",
    "brand": "Adidas",
    "category": "Casual",
    "price": 205000,
    "rating": 5.0,
    "reviewsCount": 23,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_118.jpg",
    "featured": false,
    "images": [
      "products/shoe_118.jpg"
    ]
  },
  {
    "id": 119,
    "name": "ADIDAS Variedad Ref. 1119",
    "brand": "Adidas",
    "category": "Casual",
    "price": 192000,
    "rating": 4.4,
    "reviewsCount": 34,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_119.jpg",
    "featured": false,
    "images": [
      "products/shoe_119.jpg"
    ]
  },
  {
    "id": 120,
    "name": "ADIDAS Variedad Ref. 1120",
    "brand": "Adidas",
    "category": "Casual",
    "price": 219000,
    "rating": 4.5,
    "reviewsCount": 45,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_120.jpg",
    "featured": true,
    "images": [
      "products/shoe_120.jpg"
    ]
  },
  {
    "id": 121,
    "name": "ADIDAS Variedad Ref. 1121",
    "brand": "Adidas",
    "category": "Casual",
    "price": 189000,
    "rating": 4.6,
    "reviewsCount": 56,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_121.jpg",
    "featured": false,
    "images": [
      "products/shoe_121.jpg"
    ]
  },
  {
    "id": 122,
    "name": "ADIDAS Variedad Ref. 1122",
    "brand": "Adidas",
    "category": "Casual",
    "price": 219000,
    "rating": 4.7,
    "reviewsCount": 67,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_122.jpg",
    "featured": false,
    "images": [
      "products/shoe_122.jpg"
    ]
  },
  {
    "id": 123,
    "name": "ADIDAS Variedad Ref. 1123",
    "brand": "Adidas",
    "category": "Casual",
    "price": 180000,
    "rating": 4.8,
    "reviewsCount": 78,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_123.jpg",
    "featured": false,
    "images": [
      "products/shoe_123.jpg"
    ]
  },
  {
    "id": 124,
    "name": "ADIDAS Variedad Ref. 1124",
    "brand": "Adidas",
    "category": "Casual",
    "price": 184000,
    "rating": 4.9,
    "reviewsCount": 9,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_124.jpg",
    "featured": false,
    "images": [
      "products/shoe_124.jpg"
    ]
  },
  {
    "id": 125,
    "name": "ADIDAS Variedad Ref. 1125",
    "brand": "Adidas",
    "category": "Casual",
    "price": 213000,
    "rating": 5.0,
    "reviewsCount": 20,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_125.jpg",
    "featured": false,
    "images": [
      "products/shoe_125.jpg"
    ]
  },
  {
    "id": 126,
    "name": "ADIDAS Variedad Ref. 1126",
    "brand": "Adidas",
    "category": "Casual",
    "price": 200000,
    "rating": 4.4,
    "reviewsCount": 31,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_126.jpg",
    "featured": false,
    "images": [
      "products/shoe_126.jpg"
    ]
  },
  {
    "id": 127,
    "name": "ADIDAS Variedad Ref. 1127",
    "brand": "Adidas",
    "category": "Casual",
    "price": 191000,
    "rating": 4.5,
    "reviewsCount": 42,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_127.jpg",
    "featured": false,
    "images": [
      "products/shoe_127.jpg"
    ]
  },
  {
    "id": 128,
    "name": "ADIDAS Variedad Ref. 1128",
    "brand": "Adidas",
    "category": "Casual",
    "price": 201000,
    "rating": 4.6,
    "reviewsCount": 53,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_128.jpg",
    "featured": false,
    "images": [
      "products/shoe_128.jpg"
    ]
  },
  {
    "id": 129,
    "name": "ADIDAS Variedad Ref. 1129",
    "brand": "Adidas",
    "category": "Casual",
    "price": 189000,
    "rating": 4.7,
    "reviewsCount": 64,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_129.jpg",
    "featured": false,
    "images": [
      "products/shoe_129.jpg"
    ]
  },
  {
    "id": 130,
    "name": "ADIDAS Variedad Ref. 1130",
    "brand": "Adidas",
    "category": "Casual",
    "price": 205000,
    "rating": 4.8,
    "reviewsCount": 75,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_130.jpg",
    "featured": false,
    "images": [
      "products/shoe_130.jpg"
    ]
  },
  {
    "id": 131,
    "name": "ADIDAS Variedad Ref. 1131",
    "brand": "Adidas",
    "category": "Casual",
    "price": 219000,
    "rating": 4.9,
    "reviewsCount": 6,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_131.jpg",
    "featured": false,
    "images": [
      "products/shoe_131.jpg"
    ]
  },
  {
    "id": 132,
    "name": "ADIDAS Variedad Ref. 1132",
    "brand": "Adidas",
    "category": "Casual",
    "price": 195000,
    "rating": 5.0,
    "reviewsCount": 17,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_132.jpg",
    "featured": true,
    "images": [
      "products/shoe_132.jpg"
    ]
  },
  {
    "id": 133,
    "name": "ADIDAS Variedad Ref. 1133",
    "brand": "Adidas",
    "category": "Casual",
    "price": 206000,
    "rating": 4.4,
    "reviewsCount": 28,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_133.jpg",
    "featured": false,
    "images": [
      "products/shoe_133.jpg"
    ]
  },
  {
    "id": 134,
    "name": "ADIDAS Variedad Ref. 1134",
    "brand": "Adidas",
    "category": "Casual",
    "price": 198000,
    "rating": 4.5,
    "reviewsCount": 39,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_134.jpg",
    "featured": false,
    "images": [
      "products/shoe_134.jpg"
    ]
  },
  {
    "id": 135,
    "name": "ADIDAS Variedad Ref. 1135",
    "brand": "Adidas",
    "category": "Casual",
    "price": 185000,
    "rating": 4.6,
    "reviewsCount": 50,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_135.jpg",
    "featured": false,
    "images": [
      "products/shoe_135.jpg"
    ]
  },
  {
    "id": 136,
    "name": "ADIDAS Variedad Ref. 1136",
    "brand": "Adidas",
    "category": "Casual",
    "price": 181000,
    "rating": 4.7,
    "reviewsCount": 61,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_136.jpg",
    "featured": false,
    "images": [
      "products/shoe_136.jpg"
    ]
  },
  {
    "id": 137,
    "name": "ADIDAS Variedad Ref. 1137",
    "brand": "Adidas",
    "category": "Casual",
    "price": 192000,
    "rating": 4.8,
    "reviewsCount": 72,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_137.jpg",
    "featured": false,
    "images": [
      "products/shoe_137.jpg"
    ]
  },
  {
    "id": 138,
    "name": "ADIDAS Variedad Ref. 1138",
    "brand": "Adidas",
    "category": "Casual",
    "price": 194000,
    "rating": 4.9,
    "reviewsCount": 83,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_138.jpg",
    "featured": false,
    "images": [
      "products/shoe_138.jpg"
    ]
  },
  {
    "id": 139,
    "name": "ADIDAS Variedad Ref. 1139",
    "brand": "Adidas",
    "category": "Casual",
    "price": 215000,
    "rating": 5.0,
    "reviewsCount": 14,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_139.jpg",
    "featured": false,
    "images": [
      "products/shoe_139.jpg"
    ]
  },
  {
    "id": 140,
    "name": "ADIDAS Variedad Ref. 1140",
    "brand": "Adidas",
    "category": "Casual",
    "price": 191000,
    "rating": 4.4,
    "reviewsCount": 25,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_140.jpg",
    "featured": false,
    "images": [
      "products/shoe_140.jpg"
    ]
  },
  {
    "id": 141,
    "name": "ADIDAS Variedad Ref. 1141",
    "brand": "Adidas",
    "category": "Casual",
    "price": 210000,
    "rating": 4.5,
    "reviewsCount": 36,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_141.jpg",
    "featured": false,
    "images": [
      "products/shoe_141.jpg"
    ]
  },
  {
    "id": 142,
    "name": "ADIDAS Variedad Ref. 1142",
    "brand": "Adidas",
    "category": "Casual",
    "price": 180000,
    "rating": 4.6,
    "reviewsCount": 47,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_142.jpg",
    "featured": false,
    "images": [
      "products/shoe_142.jpg"
    ]
  },
  {
    "id": 143,
    "name": "ADIDAS Variedad Ref. 1143",
    "brand": "Adidas",
    "category": "Casual",
    "price": 190000,
    "rating": 4.7,
    "reviewsCount": 58,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_143.jpg",
    "featured": false,
    "images": [
      "products/shoe_143.jpg"
    ]
  },
  {
    "id": 144,
    "name": "ADIDAS Variedad Ref. 1144",
    "brand": "Adidas",
    "category": "Casual",
    "price": 186000,
    "rating": 4.8,
    "reviewsCount": 69,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_144.jpg",
    "featured": true,
    "images": [
      "products/shoe_144.jpg"
    ]
  },
  {
    "id": 145,
    "name": "ADIDAS Variedad Ref. 1145",
    "brand": "Adidas",
    "category": "Casual",
    "price": 214000,
    "rating": 4.9,
    "reviewsCount": 80,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_145.jpg",
    "featured": false,
    "images": [
      "products/shoe_145.jpg"
    ]
  },
  {
    "id": 146,
    "name": "ADIDAS Variedad Ref. 1146",
    "brand": "Adidas",
    "category": "Casual",
    "price": 189000,
    "rating": 5.0,
    "reviewsCount": 11,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_146.jpg",
    "featured": false,
    "images": [
      "products/shoe_146.jpg"
    ]
  },
  {
    "id": 147,
    "name": "ADIDAS Variedad Ref. 1147",
    "brand": "Adidas",
    "category": "Casual",
    "price": 182000,
    "rating": 4.4,
    "reviewsCount": 22,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_147.jpg",
    "featured": false,
    "images": [
      "products/shoe_147.jpg"
    ]
  },
  {
    "id": 148,
    "name": "ADIDAS Variedad Ref. 1148",
    "brand": "Adidas",
    "category": "Casual",
    "price": 184000,
    "rating": 4.5,
    "reviewsCount": 33,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_148.jpg",
    "featured": false,
    "images": [
      "products/shoe_148.jpg"
    ]
  },
  {
    "id": 149,
    "name": "ADIDAS Variedad Ref. 1149",
    "brand": "Adidas",
    "category": "Casual",
    "price": 209000,
    "rating": 4.6,
    "reviewsCount": 44,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_149.jpg",
    "featured": false,
    "images": [
      "products/shoe_149.jpg"
    ]
  },
  {
    "id": 150,
    "name": "ADIDAS Variedad Ref. 1150",
    "brand": "Adidas",
    "category": "Casual",
    "price": 188000,
    "rating": 4.7,
    "reviewsCount": 55,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_150.jpg",
    "featured": false,
    "images": [
      "products/shoe_150.jpg"
    ]
  },
  {
    "id": 151,
    "name": "ADIDAS Variedad Ref. 1151",
    "brand": "Adidas",
    "category": "Casual",
    "price": 190000,
    "rating": 4.8,
    "reviewsCount": 66,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_151.jpg",
    "featured": false,
    "images": [
      "products/shoe_151.jpg"
    ]
  },
  {
    "id": 152,
    "name": "ADIDAS Variedad Ref. 1152",
    "brand": "Adidas",
    "category": "Casual",
    "price": 203000,
    "rating": 4.9,
    "reviewsCount": 77,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_152.jpg",
    "featured": false,
    "images": [
      "products/shoe_152.jpg"
    ]
  },
  {
    "id": 153,
    "name": "ADIDAS Variedad Ref. 1153",
    "brand": "Adidas",
    "category": "Casual",
    "price": 208000,
    "rating": 5.0,
    "reviewsCount": 8,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_153.jpg",
    "featured": false,
    "images": [
      "products/shoe_153.jpg"
    ]
  },
  {
    "id": 154,
    "name": "ADIDAS Variedad Ref. 1154",
    "brand": "Adidas",
    "category": "Casual",
    "price": 181000,
    "rating": 4.4,
    "reviewsCount": 19,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_154.jpg",
    "featured": false,
    "images": [
      "products/shoe_154.jpg"
    ]
  },
  {
    "id": 155,
    "name": "ADIDAS Variedad Ref. 1155",
    "brand": "Adidas",
    "category": "Casual",
    "price": 196000,
    "rating": 4.5,
    "reviewsCount": 30,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_155.jpg",
    "featured": false,
    "images": [
      "products/shoe_155.jpg"
    ]
  },
  {
    "id": 156,
    "name": "ADIDAS Variedad Ref. 1156",
    "brand": "Adidas",
    "category": "Casual",
    "price": 199000,
    "rating": 4.6,
    "reviewsCount": 41,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_156.jpg",
    "featured": true,
    "images": [
      "products/shoe_156.jpg"
    ]
  },
  {
    "id": 157,
    "name": "ADIDAS Variedad Ref. 1157",
    "brand": "Adidas",
    "category": "Casual",
    "price": 216000,
    "rating": 4.7,
    "reviewsCount": 52,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_157.jpg",
    "featured": false,
    "images": [
      "products/shoe_157.jpg"
    ]
  },
  {
    "id": 158,
    "name": "ADIDAS Variedad Ref. 1158",
    "brand": "Adidas",
    "category": "Casual",
    "price": 217000,
    "rating": 4.8,
    "reviewsCount": 63,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_158.jpg",
    "featured": false,
    "images": [
      "products/shoe_158.jpg"
    ]
  },
  {
    "id": 159,
    "name": "ADIDAS Variedad Ref. 1159",
    "brand": "Adidas",
    "category": "Casual",
    "price": 186000,
    "rating": 4.9,
    "reviewsCount": 74,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_159.jpg",
    "featured": false,
    "images": [
      "products/shoe_159.jpg"
    ]
  },
  {
    "id": 160,
    "name": "ADIDAS Variedad Ref. 1160",
    "brand": "Adidas",
    "category": "Casual",
    "price": 204000,
    "rating": 5.0,
    "reviewsCount": 5,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_160.jpg",
    "featured": false,
    "images": [
      "products/shoe_160.jpg"
    ]
  },
  {
    "id": 161,
    "name": "ADIDAS Variedad Ref. 1161",
    "brand": "Adidas",
    "category": "Casual",
    "price": 217000,
    "rating": 4.4,
    "reviewsCount": 16,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_161.jpg",
    "featured": false,
    "images": [
      "products/shoe_161.jpg"
    ]
  },
  {
    "id": 162,
    "name": "ADIDAS Variedad Ref. 1162",
    "brand": "Adidas",
    "category": "Casual",
    "price": 209000,
    "rating": 4.5,
    "reviewsCount": 27,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_162.jpg",
    "featured": false,
    "images": [
      "products/shoe_162.jpg"
    ]
  },
  {
    "id": 163,
    "name": "ADIDAS Variedad Ref. 1163",
    "brand": "Adidas",
    "category": "Casual",
    "price": 207000,
    "rating": 4.6,
    "reviewsCount": 38,
    "description": "Zapatos Adidas Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_163.jpg",
    "featured": false,
    "images": [
      "products/shoe_163.jpg"
    ]
  },
  {
    "id": 164,
    "name": "ASICS Ref. 1164",
    "brand": "Asics",
    "category": "Running",
    "price": 156000,
    "rating": 4.7,
    "reviewsCount": 49,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_164.jpg",
    "featured": false,
    "images": [
      "products/shoe_164.jpg"
    ]
  },
  {
    "id": 165,
    "name": "ASICS Ref. 1165",
    "brand": "Asics",
    "category": "Running",
    "price": 162000,
    "rating": 4.8,
    "reviewsCount": 60,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_165.jpg",
    "featured": false,
    "images": [
      "products/shoe_165.jpg"
    ]
  },
  {
    "id": 166,
    "name": "ASICS Ref. 1166",
    "brand": "Asics",
    "category": "Running",
    "price": 178000,
    "rating": 4.9,
    "reviewsCount": 71,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_166.jpg",
    "featured": false,
    "images": [
      "products/shoe_166.jpg"
    ]
  },
  {
    "id": 167,
    "name": "ASICS Ref. 1167",
    "brand": "Asics",
    "category": "Running",
    "price": 167000,
    "rating": 5.0,
    "reviewsCount": 82,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_167.jpg",
    "featured": false,
    "images": [
      "products/shoe_167.jpg"
    ]
  },
  {
    "id": 168,
    "name": "ASICS Ref. 1168",
    "brand": "Asics",
    "category": "Running",
    "price": 196000,
    "rating": 4.4,
    "reviewsCount": 13,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_168.jpg",
    "featured": true,
    "images": [
      "products/shoe_168.jpg"
    ]
  },
  {
    "id": 169,
    "name": "ASICS Ref. 1169",
    "brand": "Asics",
    "category": "Running",
    "price": 179000,
    "rating": 4.5,
    "reviewsCount": 24,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_169.jpg",
    "featured": false,
    "images": [
      "products/shoe_169.jpg"
    ]
  },
  {
    "id": 170,
    "name": "ASICS Ref. 1170",
    "brand": "Asics",
    "category": "Running",
    "price": 150000,
    "rating": 4.6,
    "reviewsCount": 35,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_170.jpg",
    "featured": false,
    "images": [
      "products/shoe_170.jpg"
    ]
  },
  {
    "id": 171,
    "name": "ASICS Ref. 1171",
    "brand": "Asics",
    "category": "Running",
    "price": 159000,
    "rating": 4.7,
    "reviewsCount": 46,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_171.jpg",
    "featured": false,
    "images": [
      "products/shoe_171.jpg"
    ]
  },
  {
    "id": 172,
    "name": "ASICS Ref. 1172",
    "brand": "Asics",
    "category": "Running",
    "price": 164000,
    "rating": 4.8,
    "reviewsCount": 57,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_172.jpg",
    "featured": false,
    "images": [
      "products/shoe_172.jpg"
    ]
  },
  {
    "id": 173,
    "name": "ASICS Ref. 1173",
    "brand": "Asics",
    "category": "Running",
    "price": 167000,
    "rating": 4.9,
    "reviewsCount": 68,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_173.jpg",
    "featured": false,
    "images": [
      "products/shoe_173.jpg"
    ]
  },
  {
    "id": 174,
    "name": "ASICS Ref. 1174",
    "brand": "Asics",
    "category": "Running",
    "price": 180000,
    "rating": 5.0,
    "reviewsCount": 79,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_174.jpg",
    "featured": false,
    "images": [
      "products/shoe_174.jpg"
    ]
  },
  {
    "id": 175,
    "name": "ASICS Ref. 1175",
    "brand": "Asics",
    "category": "Running",
    "price": 170000,
    "rating": 4.4,
    "reviewsCount": 10,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_175.jpg",
    "featured": false,
    "images": [
      "products/shoe_175.jpg"
    ]
  },
  {
    "id": 176,
    "name": "ASICS Ref. 1176",
    "brand": "Asics",
    "category": "Running",
    "price": 169000,
    "rating": 4.5,
    "reviewsCount": 21,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_176.jpg",
    "featured": false,
    "images": [
      "products/shoe_176.jpg"
    ]
  },
  {
    "id": 177,
    "name": "ASICS Ref. 1177",
    "brand": "Asics",
    "category": "Running",
    "price": 166000,
    "rating": 4.6,
    "reviewsCount": 32,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_177.jpg",
    "featured": false,
    "images": [
      "products/shoe_177.jpg"
    ]
  },
  {
    "id": 178,
    "name": "ASICS Ref. 1178",
    "brand": "Asics",
    "category": "Running",
    "price": 178000,
    "rating": 4.7,
    "reviewsCount": 43,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_178.jpg",
    "featured": false,
    "images": [
      "products/shoe_178.jpg"
    ]
  },
  {
    "id": 179,
    "name": "ASICS Ref. 1179",
    "brand": "Asics",
    "category": "Running",
    "price": 160000,
    "rating": 4.8,
    "reviewsCount": 54,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_179.jpg",
    "featured": false,
    "images": [
      "products/shoe_179.jpg"
    ]
  },
  {
    "id": 180,
    "name": "ASICS Ref. 1180",
    "brand": "Asics",
    "category": "Running",
    "price": 213000,
    "rating": 4.9,
    "reviewsCount": 65,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_180.jpg",
    "featured": true,
    "images": [
      "products/shoe_180.jpg"
    ]
  },
  {
    "id": 181,
    "name": "ASICS Ref. 1181",
    "brand": "Asics",
    "category": "Running",
    "price": 156000,
    "rating": 5.0,
    "reviewsCount": 76,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_181.jpg",
    "featured": false,
    "images": [
      "products/shoe_181.jpg"
    ]
  },
  {
    "id": 182,
    "name": "ASICS Ref. 1182",
    "brand": "Asics",
    "category": "Running",
    "price": 171000,
    "rating": 4.4,
    "reviewsCount": 7,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_182.jpg",
    "featured": false,
    "images": [
      "products/shoe_182.jpg"
    ]
  },
  {
    "id": 183,
    "name": "ASICS Ref. 1183",
    "brand": "Asics",
    "category": "Running",
    "price": 155000,
    "rating": 4.5,
    "reviewsCount": 18,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_183.jpg",
    "featured": false,
    "images": [
      "products/shoe_183.jpg"
    ]
  },
  {
    "id": 184,
    "name": "ASICS Ref. 1184",
    "brand": "Asics",
    "category": "Running",
    "price": 170000,
    "rating": 4.6,
    "reviewsCount": 29,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_184.jpg",
    "featured": false,
    "images": [
      "products/shoe_184.jpg"
    ]
  },
  {
    "id": 185,
    "name": "ASICS Ref. 1185",
    "brand": "Asics",
    "category": "Running",
    "price": 155000,
    "rating": 4.7,
    "reviewsCount": 40,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_185.jpg",
    "featured": false,
    "images": [
      "products/shoe_185.jpg"
    ]
  },
  {
    "id": 186,
    "name": "ASICS Ref. 1186",
    "brand": "Asics",
    "category": "Running",
    "price": 150000,
    "rating": 4.8,
    "reviewsCount": 51,
    "description": "Zapatos Asics  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_186.jpg",
    "featured": false,
    "images": [
      "products/shoe_186.jpg"
    ]
  },
  {
    "id": 187,
    "name": "BOSS Ref. 1187",
    "brand": "Boss",
    "category": "Casual",
    "price": 225000,
    "rating": 4.9,
    "reviewsCount": 62,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_187.jpg",
    "featured": false,
    "images": [
      "products/shoe_187.jpg"
    ]
  },
  {
    "id": 188,
    "name": "BOSS Ref. 1188",
    "brand": "Boss",
    "category": "Casual",
    "price": 221000,
    "rating": 5.0,
    "reviewsCount": 73,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_188.jpg",
    "featured": false,
    "images": [
      "products/shoe_188.jpg"
    ]
  },
  {
    "id": 189,
    "name": "BOSS Ref. 1189",
    "brand": "Boss",
    "category": "Casual",
    "price": 235000,
    "rating": 4.4,
    "reviewsCount": 84,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_189.jpg",
    "featured": false,
    "images": [
      "products/shoe_189.jpg"
    ]
  },
  {
    "id": 190,
    "name": "BOSS Ref. 1190",
    "brand": "Boss",
    "category": "Casual",
    "price": 226000,
    "rating": 4.5,
    "reviewsCount": 15,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_190.jpg",
    "featured": false,
    "images": [
      "products/shoe_190.jpg"
    ]
  },
  {
    "id": 191,
    "name": "BOSS Ref. 1191",
    "brand": "Boss",
    "category": "Casual",
    "price": 230000,
    "rating": 4.6,
    "reviewsCount": 26,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_191.jpg",
    "featured": false,
    "images": [
      "products/shoe_191.jpg"
    ]
  },
  {
    "id": 192,
    "name": "BOSS Ref. 1192",
    "brand": "Boss",
    "category": "Casual",
    "price": 240000,
    "rating": 4.7,
    "reviewsCount": 37,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_192.jpg",
    "featured": true,
    "images": [
      "products/shoe_192.jpg"
    ]
  },
  {
    "id": 193,
    "name": "BOSS Ref. 1193",
    "brand": "Boss",
    "category": "Casual",
    "price": 221000,
    "rating": 4.8,
    "reviewsCount": 48,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_193.jpg",
    "featured": false,
    "images": [
      "products/shoe_193.jpg"
    ]
  },
  {
    "id": 194,
    "name": "BOSS Ref. 1194",
    "brand": "Boss",
    "category": "Casual",
    "price": 234000,
    "rating": 4.9,
    "reviewsCount": 59,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_194.jpg",
    "featured": false,
    "images": [
      "products/shoe_194.jpg"
    ]
  },
  {
    "id": 195,
    "name": "BOSS Ref. 1195",
    "brand": "Boss",
    "category": "Casual",
    "price": 232000,
    "rating": 5.0,
    "reviewsCount": 70,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_195.jpg",
    "featured": false,
    "images": [
      "products/shoe_195.jpg"
    ]
  },
  {
    "id": 196,
    "name": "BOSS Ref. 1196",
    "brand": "Boss",
    "category": "Casual",
    "price": 227000,
    "rating": 4.4,
    "reviewsCount": 81,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_196.jpg",
    "featured": false,
    "images": [
      "products/shoe_196.jpg"
    ]
  },
  {
    "id": 197,
    "name": "BOSS Ref. 1197",
    "brand": "Boss",
    "category": "Casual",
    "price": 228000,
    "rating": 4.5,
    "reviewsCount": 12,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_197.jpg",
    "featured": false,
    "images": [
      "products/shoe_197.jpg"
    ]
  },
  {
    "id": 198,
    "name": "BOSS Ref. 1198",
    "brand": "Boss",
    "category": "Casual",
    "price": 231000,
    "rating": 4.6,
    "reviewsCount": 23,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_198.jpg",
    "featured": false,
    "images": [
      "products/shoe_198.jpg"
    ]
  },
  {
    "id": 199,
    "name": "BOSS Ref. 1199",
    "brand": "Boss",
    "category": "Casual",
    "price": 220000,
    "rating": 4.7,
    "reviewsCount": 34,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_199.jpg",
    "featured": false,
    "images": [
      "products/shoe_199.jpg"
    ]
  },
  {
    "id": 200,
    "name": "BOSS Ref. 1200",
    "brand": "Boss",
    "category": "Casual",
    "price": 229000,
    "rating": 4.8,
    "reviewsCount": 45,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_200.jpg",
    "featured": false,
    "images": [
      "products/shoe_200.jpg"
    ]
  },
  {
    "id": 201,
    "name": "BOSS Ref. 1201",
    "brand": "Boss",
    "category": "Casual",
    "price": 220000,
    "rating": 4.9,
    "reviewsCount": 56,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_201.jpg",
    "featured": false,
    "images": [
      "products/shoe_201.jpg"
    ]
  },
  {
    "id": 202,
    "name": "BOSS Ref. 1202",
    "brand": "Boss",
    "category": "Casual",
    "price": 223000,
    "rating": 5.0,
    "reviewsCount": 67,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_202.jpg",
    "featured": false,
    "images": [
      "products/shoe_202.jpg"
    ]
  },
  {
    "id": 203,
    "name": "BOSS Ref. 1203",
    "brand": "Boss",
    "category": "Casual",
    "price": 227000,
    "rating": 4.4,
    "reviewsCount": 78,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_203.jpg",
    "featured": false,
    "images": [
      "products/shoe_203.jpg"
    ]
  },
  {
    "id": 204,
    "name": "BOSS Ref. 1204",
    "brand": "Boss",
    "category": "Casual",
    "price": 240000,
    "rating": 4.5,
    "reviewsCount": 9,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_204.jpg",
    "featured": true,
    "images": [
      "products/shoe_204.jpg"
    ]
  },
  {
    "id": 205,
    "name": "BOSS Ref. 1205",
    "brand": "Boss",
    "category": "Casual",
    "price": 237000,
    "rating": 4.6,
    "reviewsCount": 20,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_205.jpg",
    "featured": false,
    "images": [
      "products/shoe_205.jpg"
    ]
  },
  {
    "id": 206,
    "name": "BOSS Ref. 1206",
    "brand": "Boss",
    "category": "Casual",
    "price": 235000,
    "rating": 4.7,
    "reviewsCount": 31,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_206.jpg",
    "featured": false,
    "images": [
      "products/shoe_206.jpg"
    ]
  },
  {
    "id": 207,
    "name": "BOSS Ref. 1207",
    "brand": "Boss",
    "category": "Casual",
    "price": 231000,
    "rating": 4.8,
    "reviewsCount": 42,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_207.jpg",
    "featured": false,
    "images": [
      "products/shoe_207.jpg"
    ]
  },
  {
    "id": 208,
    "name": "BOSS Ref. 1208",
    "brand": "Boss",
    "category": "Casual",
    "price": 226000,
    "rating": 4.9,
    "reviewsCount": 53,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_208.jpg",
    "featured": false,
    "images": [
      "products/shoe_208.jpg"
    ]
  },
  {
    "id": 209,
    "name": "BOSS Ref. 1209",
    "brand": "Boss",
    "category": "Casual",
    "price": 225000,
    "rating": 5.0,
    "reviewsCount": 64,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_209.jpg",
    "featured": false,
    "images": [
      "products/shoe_209.jpg"
    ]
  },
  {
    "id": 210,
    "name": "BOSS Ref. 1210",
    "brand": "Boss",
    "category": "Casual",
    "price": 236000,
    "rating": 4.4,
    "reviewsCount": 75,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_210.jpg",
    "featured": false,
    "images": [
      "products/shoe_210.jpg"
    ]
  },
  {
    "id": 211,
    "name": "BOSS Ref. 1211",
    "brand": "Boss",
    "category": "Casual",
    "price": 225000,
    "rating": 4.5,
    "reviewsCount": 6,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_211.jpg",
    "featured": false,
    "images": [
      "products/shoe_211.jpg"
    ]
  },
  {
    "id": 212,
    "name": "BOSS Ref. 1212",
    "brand": "Boss",
    "category": "Casual",
    "price": 226000,
    "rating": 4.6,
    "reviewsCount": 17,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_212.jpg",
    "featured": false,
    "images": [
      "products/shoe_212.jpg"
    ]
  },
  {
    "id": 213,
    "name": "BOSS Ref. 1213",
    "brand": "Boss",
    "category": "Casual",
    "price": 229000,
    "rating": 4.7,
    "reviewsCount": 28,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_213.jpg",
    "featured": false,
    "images": [
      "products/shoe_213.jpg"
    ]
  },
  {
    "id": 214,
    "name": "BOSS Ref. 1214",
    "brand": "Boss",
    "category": "Casual",
    "price": 232000,
    "rating": 4.8,
    "reviewsCount": 39,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_214.jpg",
    "featured": false,
    "images": [
      "products/shoe_214.jpg"
    ]
  },
  {
    "id": 215,
    "name": "BOSS Ref. 1215",
    "brand": "Boss",
    "category": "Casual",
    "price": 238000,
    "rating": 4.9,
    "reviewsCount": 50,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_215.jpg",
    "featured": false,
    "images": [
      "products/shoe_215.jpg"
    ]
  },
  {
    "id": 216,
    "name": "BOSS Ref. 1216",
    "brand": "Boss",
    "category": "Casual",
    "price": 226000,
    "rating": 5.0,
    "reviewsCount": 61,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_216.jpg",
    "featured": true,
    "images": [
      "products/shoe_216.jpg"
    ]
  },
  {
    "id": 217,
    "name": "BOSS Ref. 1217",
    "brand": "Boss",
    "category": "Casual",
    "price": 225000,
    "rating": 4.4,
    "reviewsCount": 72,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_217.jpg",
    "featured": false,
    "images": [
      "products/shoe_217.jpg"
    ]
  },
  {
    "id": 218,
    "name": "BOSS Ref. 1218",
    "brand": "Boss",
    "category": "Casual",
    "price": 238000,
    "rating": 4.5,
    "reviewsCount": 83,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_218.jpg",
    "featured": false,
    "images": [
      "products/shoe_218.jpg"
    ]
  },
  {
    "id": 219,
    "name": "BOSS Ref. 1219",
    "brand": "Boss",
    "category": "Casual",
    "price": 237000,
    "rating": 4.6,
    "reviewsCount": 14,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_219.jpg",
    "featured": false,
    "images": [
      "products/shoe_219.jpg"
    ]
  },
  {
    "id": 220,
    "name": "BOSS Ref. 1220",
    "brand": "Boss",
    "category": "Casual",
    "price": 240000,
    "rating": 4.7,
    "reviewsCount": 25,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_220.jpg",
    "featured": false,
    "images": [
      "products/shoe_220.jpg"
    ]
  },
  {
    "id": 221,
    "name": "BOSS Ref. 1221",
    "brand": "Boss",
    "category": "Casual",
    "price": 237000,
    "rating": 4.8,
    "reviewsCount": 36,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_221.jpg",
    "featured": false,
    "images": [
      "products/shoe_221.jpg"
    ]
  },
  {
    "id": 222,
    "name": "BOSS Ref. 1222",
    "brand": "Boss",
    "category": "Casual",
    "price": 230000,
    "rating": 4.9,
    "reviewsCount": 47,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_222.jpg",
    "featured": false,
    "images": [
      "products/shoe_222.jpg"
    ]
  },
  {
    "id": 223,
    "name": "BOSS Ref. 1223",
    "brand": "Boss",
    "category": "Casual",
    "price": 221000,
    "rating": 5.0,
    "reviewsCount": 58,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_223.jpg",
    "featured": false,
    "images": [
      "products/shoe_223.jpg"
    ]
  },
  {
    "id": 224,
    "name": "BOSS Ref. 1224",
    "brand": "Boss",
    "category": "Casual",
    "price": 224000,
    "rating": 4.4,
    "reviewsCount": 69,
    "description": "Zapatos Boss  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_224.jpg",
    "featured": false,
    "images": [
      "products/shoe_224.jpg"
    ]
  },
  {
    "id": 225,
    "name": "BOSS Coach Ref. 1225",
    "brand": "Boss",
    "category": "Casual",
    "price": 238000,
    "rating": 4.5,
    "reviewsCount": 80,
    "description": "Zapatos Boss Coach de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_225.jpg",
    "featured": false,
    "images": [
      "products/shoe_225.jpg"
    ]
  },
  {
    "id": 226,
    "name": "BOSS Coach Ref. 1226",
    "brand": "Boss",
    "category": "Casual",
    "price": 224000,
    "rating": 4.6,
    "reviewsCount": 11,
    "description": "Zapatos Boss Coach de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_226.jpg",
    "featured": false,
    "images": [
      "products/shoe_226.jpg"
    ]
  },
  {
    "id": 227,
    "name": "BOSS Coach Ref. 1227",
    "brand": "Boss",
    "category": "Casual",
    "price": 233000,
    "rating": 4.7,
    "reviewsCount": 22,
    "description": "Zapatos Boss Coach de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_227.jpg",
    "featured": false,
    "images": [
      "products/shoe_227.jpg"
    ]
  },
  {
    "id": 228,
    "name": "BOTAS UNDER ARMOUR Ref. 1228",
    "brand": "Botas Under Armour",
    "category": "Boots",
    "price": 180000,
    "rating": 4.8,
    "reviewsCount": 33,
    "description": "Zapatos Botas Under Armour  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_228.jpg",
    "featured": true,
    "images": [
      "products/shoe_228.jpg"
    ]
  },
  {
    "id": 229,
    "name": "BOTAS UNDER ARMOUR Ref. 1229",
    "brand": "Botas Under Armour",
    "category": "Boots",
    "price": 152000,
    "rating": 4.9,
    "reviewsCount": 44,
    "description": "Zapatos Botas Under Armour  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_229.jpg",
    "featured": false,
    "images": [
      "products/shoe_229.jpg"
    ]
  },
  {
    "id": 230,
    "name": "BOTAS UNDER ARMOUR Ref. 1230",
    "brand": "Botas Under Armour",
    "category": "Boots",
    "price": 161000,
    "rating": 5.0,
    "reviewsCount": 55,
    "description": "Zapatos Botas Under Armour  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_230.jpg",
    "featured": false,
    "images": [
      "products/shoe_230.jpg"
    ]
  },
  {
    "id": 231,
    "name": "BOTAS UNDER ARMOUR Ref. 1231",
    "brand": "Botas Under Armour",
    "category": "Boots",
    "price": 178000,
    "rating": 4.4,
    "reviewsCount": 66,
    "description": "Zapatos Botas Under Armour  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_231.jpg",
    "featured": false,
    "images": [
      "products/shoe_231.jpg"
    ]
  },
  {
    "id": 232,
    "name": "BOTAS UNDER ARMOUR Ref. 1232",
    "brand": "Botas Under Armour",
    "category": "Boots",
    "price": 168000,
    "rating": 4.5,
    "reviewsCount": 77,
    "description": "Zapatos Botas Under Armour  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_232.jpg",
    "featured": false,
    "images": [
      "products/shoe_232.jpg"
    ]
  },
  {
    "id": 233,
    "name": "DC Ref. 1233",
    "brand": "Dc",
    "category": "Casual",
    "price": 170000,
    "rating": 4.6,
    "reviewsCount": 8,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_233.jpg",
    "featured": false,
    "images": [
      "products/shoe_233.jpg"
    ]
  },
  {
    "id": 234,
    "name": "DC Ref. 1234",
    "brand": "Dc",
    "category": "Casual",
    "price": 153000,
    "rating": 4.7,
    "reviewsCount": 19,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_234.jpg",
    "featured": false,
    "images": [
      "products/shoe_234.jpg"
    ]
  },
  {
    "id": 235,
    "name": "DC Ref. 1235",
    "brand": "Dc",
    "category": "Casual",
    "price": 153000,
    "rating": 4.8,
    "reviewsCount": 30,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_235.jpg",
    "featured": false,
    "images": [
      "products/shoe_235.jpg"
    ]
  },
  {
    "id": 236,
    "name": "DC Ref. 1236",
    "brand": "Dc",
    "category": "Casual",
    "price": 174000,
    "rating": 4.9,
    "reviewsCount": 41,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_236.jpg",
    "featured": false,
    "images": [
      "products/shoe_236.jpg"
    ]
  },
  {
    "id": 237,
    "name": "DC Ref. 1237",
    "brand": "Dc",
    "category": "Casual",
    "price": 152000,
    "rating": 5.0,
    "reviewsCount": 52,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_237.jpg",
    "featured": false,
    "images": [
      "products/shoe_237.jpg"
    ]
  },
  {
    "id": 238,
    "name": "DC Ref. 1238",
    "brand": "Dc",
    "category": "Casual",
    "price": 172000,
    "rating": 4.4,
    "reviewsCount": 63,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_238.jpg",
    "featured": false,
    "images": [
      "products/shoe_238.jpg"
    ]
  },
  {
    "id": 239,
    "name": "DC Ref. 1239",
    "brand": "Dc",
    "category": "Casual",
    "price": 165000,
    "rating": 4.5,
    "reviewsCount": 74,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_239.jpg",
    "featured": false,
    "images": [
      "products/shoe_239.jpg"
    ]
  },
  {
    "id": 240,
    "name": "DC Ref. 1240",
    "brand": "Dc",
    "category": "Casual",
    "price": 184000,
    "rating": 4.6,
    "reviewsCount": 5,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_240.jpg",
    "featured": true,
    "images": [
      "products/shoe_240.jpg"
    ]
  },
  {
    "id": 241,
    "name": "DC Ref. 1241",
    "brand": "Dc",
    "category": "Casual",
    "price": 156000,
    "rating": 4.7,
    "reviewsCount": 16,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_241.jpg",
    "featured": false,
    "images": [
      "products/shoe_241.jpg"
    ]
  },
  {
    "id": 242,
    "name": "DC Ref. 1242",
    "brand": "Dc",
    "category": "Casual",
    "price": 177000,
    "rating": 4.8,
    "reviewsCount": 27,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_242.jpg",
    "featured": false,
    "images": [
      "products/shoe_242.jpg"
    ]
  },
  {
    "id": 243,
    "name": "DC Ref. 1243",
    "brand": "Dc",
    "category": "Casual",
    "price": 163000,
    "rating": 4.9,
    "reviewsCount": 38,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_243.jpg",
    "featured": false,
    "images": [
      "products/shoe_243.jpg"
    ]
  },
  {
    "id": 244,
    "name": "DC Ref. 1244",
    "brand": "Dc",
    "category": "Casual",
    "price": 166000,
    "rating": 5.0,
    "reviewsCount": 49,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_244.jpg",
    "featured": false,
    "images": [
      "products/shoe_244.jpg"
    ]
  },
  {
    "id": 245,
    "name": "DC Ref. 1245",
    "brand": "Dc",
    "category": "Casual",
    "price": 158000,
    "rating": 4.4,
    "reviewsCount": 60,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_245.jpg",
    "featured": false,
    "images": [
      "products/shoe_245.jpg"
    ]
  },
  {
    "id": 246,
    "name": "DC Ref. 1246",
    "brand": "Dc",
    "category": "Casual",
    "price": 155000,
    "rating": 4.5,
    "reviewsCount": 71,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_246.jpg",
    "featured": false,
    "images": [
      "products/shoe_246.jpg"
    ]
  },
  {
    "id": 247,
    "name": "DC Ref. 1247",
    "brand": "Dc",
    "category": "Casual",
    "price": 172000,
    "rating": 4.6,
    "reviewsCount": 82,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_247.jpg",
    "featured": false,
    "images": [
      "products/shoe_247.jpg"
    ]
  },
  {
    "id": 248,
    "name": "DC Ref. 1248",
    "brand": "Dc",
    "category": "Casual",
    "price": 166000,
    "rating": 4.7,
    "reviewsCount": 13,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_248.jpg",
    "featured": false,
    "images": [
      "products/shoe_248.jpg"
    ]
  },
  {
    "id": 249,
    "name": "DC Ref. 1249",
    "brand": "Dc",
    "category": "Casual",
    "price": 168000,
    "rating": 4.8,
    "reviewsCount": 24,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_249.jpg",
    "featured": false,
    "images": [
      "products/shoe_249.jpg"
    ]
  },
  {
    "id": 250,
    "name": "DC Ref. 1250",
    "brand": "Dc",
    "category": "Casual",
    "price": 179000,
    "rating": 4.9,
    "reviewsCount": 35,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_250.jpg",
    "featured": false,
    "images": [
      "products/shoe_250.jpg"
    ]
  },
  {
    "id": 251,
    "name": "DC Ref. 1251",
    "brand": "Dc",
    "category": "Casual",
    "price": 180000,
    "rating": 5.0,
    "reviewsCount": 46,
    "description": "Zapatos Dc  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_251.jpg",
    "featured": false,
    "images": [
      "products/shoe_251.jpg"
    ]
  },
  {
    "id": 252,
    "name": "DIOR Ref. 1252",
    "brand": "Dior",
    "category": "Casual",
    "price": 233000,
    "rating": 4.4,
    "reviewsCount": 57,
    "description": "Zapatos Dior  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_252.jpg",
    "featured": true,
    "images": [
      "products/shoe_252.jpg"
    ]
  },
  {
    "id": 253,
    "name": "DIOR Ref. 1253",
    "brand": "Dior",
    "category": "Casual",
    "price": 230000,
    "rating": 4.5,
    "reviewsCount": 68,
    "description": "Zapatos Dior  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_253.jpg",
    "featured": false,
    "images": [
      "products/shoe_253.jpg"
    ]
  },
  {
    "id": 254,
    "name": "DIOR Ref. 1254",
    "brand": "Dior",
    "category": "Casual",
    "price": 221000,
    "rating": 4.6,
    "reviewsCount": 79,
    "description": "Zapatos Dior  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_254.jpg",
    "featured": false,
    "images": [
      "products/shoe_254.jpg"
    ]
  },
  {
    "id": 255,
    "name": "DIOR Ref. 1255",
    "brand": "Dior",
    "category": "Casual",
    "price": 239000,
    "rating": 4.7,
    "reviewsCount": 10,
    "description": "Zapatos Dior  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_255.jpg",
    "featured": false,
    "images": [
      "products/shoe_255.jpg"
    ]
  },
  {
    "id": 256,
    "name": "JORDAN Jordans Ref. 1256",
    "brand": "Jordan",
    "category": "Casual",
    "price": 201000,
    "rating": 4.8,
    "reviewsCount": 21,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_256.jpg",
    "featured": false,
    "images": [
      "products/shoe_256.jpg"
    ]
  },
  {
    "id": 257,
    "name": "JORDAN Jordans Ref. 1257",
    "brand": "Jordan",
    "category": "Casual",
    "price": 212000,
    "rating": 4.9,
    "reviewsCount": 32,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_257.jpg",
    "featured": false,
    "images": [
      "products/shoe_257.jpg"
    ]
  },
  {
    "id": 258,
    "name": "JORDAN Jordans Ref. 1258",
    "brand": "Jordan",
    "category": "Casual",
    "price": 193000,
    "rating": 5.0,
    "reviewsCount": 43,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_258.jpg",
    "featured": false,
    "images": [
      "products/shoe_258.jpg"
    ]
  },
  {
    "id": 259,
    "name": "JORDAN Jordans Ref. 1259",
    "brand": "Jordan",
    "category": "Casual",
    "price": 187000,
    "rating": 4.4,
    "reviewsCount": 54,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_259.jpg",
    "featured": false,
    "images": [
      "products/shoe_259.jpg"
    ]
  },
  {
    "id": 260,
    "name": "JORDAN Jordans Ref. 1260",
    "brand": "Jordan",
    "category": "Casual",
    "price": 198000,
    "rating": 4.5,
    "reviewsCount": 65,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_260.jpg",
    "featured": false,
    "images": [
      "products/shoe_260.jpg"
    ]
  },
  {
    "id": 261,
    "name": "JORDAN Jordans Ref. 1261",
    "brand": "Jordan",
    "category": "Casual",
    "price": 212000,
    "rating": 4.6,
    "reviewsCount": 76,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_261.jpg",
    "featured": false,
    "images": [
      "products/shoe_261.jpg"
    ]
  },
  {
    "id": 262,
    "name": "JORDAN Jordans Ref. 1262",
    "brand": "Jordan",
    "category": "Casual",
    "price": 195000,
    "rating": 4.7,
    "reviewsCount": 7,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_262.jpg",
    "featured": false,
    "images": [
      "products/shoe_262.jpg"
    ]
  },
  {
    "id": 263,
    "name": "JORDAN Jordans Ref. 1263",
    "brand": "Jordan",
    "category": "Casual",
    "price": 190000,
    "rating": 4.8,
    "reviewsCount": 18,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_263.jpg",
    "featured": false,
    "images": [
      "products/shoe_263.jpg"
    ]
  },
  {
    "id": 264,
    "name": "JORDAN Jordans Ref. 1264",
    "brand": "Jordan",
    "category": "Casual",
    "price": 189000,
    "rating": 4.9,
    "reviewsCount": 29,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_264.jpg",
    "featured": true,
    "images": [
      "products/shoe_264.jpg"
    ]
  },
  {
    "id": 265,
    "name": "JORDAN Jordans Ref. 1265",
    "brand": "Jordan",
    "category": "Casual",
    "price": 215000,
    "rating": 5.0,
    "reviewsCount": 40,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_265.jpg",
    "featured": false,
    "images": [
      "products/shoe_265.jpg"
    ]
  },
  {
    "id": 266,
    "name": "JORDAN Jordans Ref. 1266",
    "brand": "Jordan",
    "category": "Casual",
    "price": 190000,
    "rating": 4.4,
    "reviewsCount": 51,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_266.jpg",
    "featured": false,
    "images": [
      "products/shoe_266.jpg"
    ]
  },
  {
    "id": 267,
    "name": "JORDAN Jordans Ref. 1267",
    "brand": "Jordan",
    "category": "Casual",
    "price": 218000,
    "rating": 4.5,
    "reviewsCount": 62,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_267.jpg",
    "featured": false,
    "images": [
      "products/shoe_267.jpg"
    ]
  },
  {
    "id": 268,
    "name": "JORDAN Jordans Ref. 1268",
    "brand": "Jordan",
    "category": "Casual",
    "price": 182000,
    "rating": 4.6,
    "reviewsCount": 73,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_268.jpg",
    "featured": false,
    "images": [
      "products/shoe_268.jpg"
    ]
  },
  {
    "id": 269,
    "name": "JORDAN Jordans Ref. 1269",
    "brand": "Jordan",
    "category": "Casual",
    "price": 202000,
    "rating": 4.7,
    "reviewsCount": 84,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_269.jpg",
    "featured": false,
    "images": [
      "products/shoe_269.jpg"
    ]
  },
  {
    "id": 270,
    "name": "JORDAN Jordans Ref. 1270",
    "brand": "Jordan",
    "category": "Casual",
    "price": 191000,
    "rating": 4.8,
    "reviewsCount": 15,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_270.jpg",
    "featured": false,
    "images": [
      "products/shoe_270.jpg"
    ]
  },
  {
    "id": 271,
    "name": "JORDAN Jordans Ref. 1271",
    "brand": "Jordan",
    "category": "Casual",
    "price": 192000,
    "rating": 4.9,
    "reviewsCount": 26,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_271.jpg",
    "featured": false,
    "images": [
      "products/shoe_271.jpg"
    ]
  },
  {
    "id": 272,
    "name": "JORDAN Jordans Ref. 1272",
    "brand": "Jordan",
    "category": "Casual",
    "price": 213000,
    "rating": 5.0,
    "reviewsCount": 37,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_272.jpg",
    "featured": false,
    "images": [
      "products/shoe_272.jpg"
    ]
  },
  {
    "id": 273,
    "name": "JORDAN Jordans Ref. 1273",
    "brand": "Jordan",
    "category": "Casual",
    "price": 214000,
    "rating": 4.4,
    "reviewsCount": 48,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_273.jpg",
    "featured": false,
    "images": [
      "products/shoe_273.jpg"
    ]
  },
  {
    "id": 274,
    "name": "JORDAN Jordans Ref. 1274",
    "brand": "Jordan",
    "category": "Casual",
    "price": 208000,
    "rating": 4.5,
    "reviewsCount": 59,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_274.jpg",
    "featured": false,
    "images": [
      "products/shoe_274.jpg"
    ]
  },
  {
    "id": 275,
    "name": "JORDAN Jordans Ref. 1275",
    "brand": "Jordan",
    "category": "Casual",
    "price": 210000,
    "rating": 4.6,
    "reviewsCount": 70,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_275.jpg",
    "featured": false,
    "images": [
      "products/shoe_275.jpg"
    ]
  },
  {
    "id": 276,
    "name": "JORDAN Jordans Ref. 1276",
    "brand": "Jordan",
    "category": "Casual",
    "price": 203000,
    "rating": 4.7,
    "reviewsCount": 81,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_276.jpg",
    "featured": true,
    "images": [
      "products/shoe_276.jpg"
    ]
  },
  {
    "id": 277,
    "name": "JORDAN Jordans Ref. 1277",
    "brand": "Jordan",
    "category": "Casual",
    "price": 204000,
    "rating": 4.8,
    "reviewsCount": 12,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_277.jpg",
    "featured": false,
    "images": [
      "products/shoe_277.jpg"
    ]
  },
  {
    "id": 278,
    "name": "JORDAN Jordans Ref. 1278",
    "brand": "Jordan",
    "category": "Casual",
    "price": 220000,
    "rating": 4.9,
    "reviewsCount": 23,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_278.jpg",
    "featured": false,
    "images": [
      "products/shoe_278.jpg"
    ]
  },
  {
    "id": 279,
    "name": "JORDAN Jordans Ref. 1279",
    "brand": "Jordan",
    "category": "Casual",
    "price": 217000,
    "rating": 5.0,
    "reviewsCount": 34,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_279.jpg",
    "featured": false,
    "images": [
      "products/shoe_279.jpg"
    ]
  },
  {
    "id": 280,
    "name": "JORDAN Jordans Ref. 1280",
    "brand": "Jordan",
    "category": "Casual",
    "price": 198000,
    "rating": 4.4,
    "reviewsCount": 45,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_280.jpg",
    "featured": false,
    "images": [
      "products/shoe_280.jpg"
    ]
  },
  {
    "id": 281,
    "name": "JORDAN Jordans Ref. 1281",
    "brand": "Jordan",
    "category": "Casual",
    "price": 192000,
    "rating": 4.5,
    "reviewsCount": 56,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_281.jpg",
    "featured": false,
    "images": [
      "products/shoe_281.jpg"
    ]
  },
  {
    "id": 282,
    "name": "JORDAN Jordans Ref. 1282",
    "brand": "Jordan",
    "category": "Casual",
    "price": 209000,
    "rating": 4.6,
    "reviewsCount": 67,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_282.jpg",
    "featured": false,
    "images": [
      "products/shoe_282.jpg"
    ]
  },
  {
    "id": 283,
    "name": "JORDAN Jordans Ref. 1283",
    "brand": "Jordan",
    "category": "Casual",
    "price": 209000,
    "rating": 4.7,
    "reviewsCount": 78,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_283.jpg",
    "featured": false,
    "images": [
      "products/shoe_283.jpg"
    ]
  },
  {
    "id": 284,
    "name": "JORDAN Jordans Ref. 1284",
    "brand": "Jordan",
    "category": "Casual",
    "price": 208000,
    "rating": 4.8,
    "reviewsCount": 9,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_284.jpg",
    "featured": false,
    "images": [
      "products/shoe_284.jpg"
    ]
  },
  {
    "id": 285,
    "name": "JORDAN Jordans Ref. 1285",
    "brand": "Jordan",
    "category": "Casual",
    "price": 188000,
    "rating": 4.9,
    "reviewsCount": 20,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_285.jpg",
    "featured": false,
    "images": [
      "products/shoe_285.jpg"
    ]
  },
  {
    "id": 286,
    "name": "JORDAN Jordans Ref. 1286",
    "brand": "Jordan",
    "category": "Casual",
    "price": 198000,
    "rating": 5.0,
    "reviewsCount": 31,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_286.jpg",
    "featured": false,
    "images": [
      "products/shoe_286.jpg"
    ]
  },
  {
    "id": 287,
    "name": "JORDAN Jordans Ref. 1287",
    "brand": "Jordan",
    "category": "Casual",
    "price": 185000,
    "rating": 4.4,
    "reviewsCount": 42,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_287.jpg",
    "featured": false,
    "images": [
      "products/shoe_287.jpg"
    ]
  },
  {
    "id": 288,
    "name": "JORDAN Jordans Ref. 1288",
    "brand": "Jordan",
    "category": "Casual",
    "price": 220000,
    "rating": 4.5,
    "reviewsCount": 53,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_288.jpg",
    "featured": true,
    "images": [
      "products/shoe_288.jpg"
    ]
  },
  {
    "id": 289,
    "name": "JORDAN Jordans Ref. 1289",
    "brand": "Jordan",
    "category": "Casual",
    "price": 189000,
    "rating": 4.6,
    "reviewsCount": 64,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_289.jpg",
    "featured": false,
    "images": [
      "products/shoe_289.jpg"
    ]
  },
  {
    "id": 290,
    "name": "JORDAN Jordans Ref. 1290",
    "brand": "Jordan",
    "category": "Casual",
    "price": 200000,
    "rating": 4.7,
    "reviewsCount": 75,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_290.jpg",
    "featured": false,
    "images": [
      "products/shoe_290.jpg"
    ]
  },
  {
    "id": 291,
    "name": "JORDAN Jordans Ref. 1291",
    "brand": "Jordan",
    "category": "Casual",
    "price": 191000,
    "rating": 4.8,
    "reviewsCount": 6,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_291.jpg",
    "featured": false,
    "images": [
      "products/shoe_291.jpg"
    ]
  },
  {
    "id": 292,
    "name": "JORDAN Jordans Ref. 1292",
    "brand": "Jordan",
    "category": "Casual",
    "price": 220000,
    "rating": 4.9,
    "reviewsCount": 17,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_292.jpg",
    "featured": false,
    "images": [
      "products/shoe_292.jpg"
    ]
  },
  {
    "id": 293,
    "name": "JORDAN Jordans Ref. 1293",
    "brand": "Jordan",
    "category": "Casual",
    "price": 209000,
    "rating": 5.0,
    "reviewsCount": 28,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_293.jpg",
    "featured": false,
    "images": [
      "products/shoe_293.jpg"
    ]
  },
  {
    "id": 294,
    "name": "JORDAN Jordans Ref. 1294",
    "brand": "Jordan",
    "category": "Casual",
    "price": 214000,
    "rating": 4.4,
    "reviewsCount": 39,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_294.jpg",
    "featured": false,
    "images": [
      "products/shoe_294.jpg"
    ]
  },
  {
    "id": 295,
    "name": "JORDAN Jordans Ref. 1295",
    "brand": "Jordan",
    "category": "Casual",
    "price": 219000,
    "rating": 4.5,
    "reviewsCount": 50,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_295.jpg",
    "featured": false,
    "images": [
      "products/shoe_295.jpg"
    ]
  },
  {
    "id": 296,
    "name": "JORDAN Jordans Ref. 1296",
    "brand": "Jordan",
    "category": "Casual",
    "price": 202000,
    "rating": 4.6,
    "reviewsCount": 61,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_296.jpg",
    "featured": false,
    "images": [
      "products/shoe_296.jpg"
    ]
  },
  {
    "id": 297,
    "name": "JORDAN Jordans Ref. 1297",
    "brand": "Jordan",
    "category": "Casual",
    "price": 214000,
    "rating": 4.7,
    "reviewsCount": 72,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_297.jpg",
    "featured": false,
    "images": [
      "products/shoe_297.jpg"
    ]
  },
  {
    "id": 298,
    "name": "JORDAN Jordans Ref. 1298",
    "brand": "Jordan",
    "category": "Casual",
    "price": 197000,
    "rating": 4.8,
    "reviewsCount": 83,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_298.jpg",
    "featured": false,
    "images": [
      "products/shoe_298.jpg"
    ]
  },
  {
    "id": 299,
    "name": "JORDAN Jordans Ref. 1299",
    "brand": "Jordan",
    "category": "Casual",
    "price": 181000,
    "rating": 4.9,
    "reviewsCount": 14,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_299.jpg",
    "featured": false,
    "images": [
      "products/shoe_299.jpg"
    ]
  },
  {
    "id": 300,
    "name": "JORDAN Jordans Ref. 1300",
    "brand": "Jordan",
    "category": "Casual",
    "price": 203000,
    "rating": 5.0,
    "reviewsCount": 25,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_300.jpg",
    "featured": true,
    "images": [
      "products/shoe_300.jpg"
    ]
  },
  {
    "id": 301,
    "name": "JORDAN Jordans Ref. 1301",
    "brand": "Jordan",
    "category": "Casual",
    "price": 183000,
    "rating": 4.4,
    "reviewsCount": 36,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_301.jpg",
    "featured": false,
    "images": [
      "products/shoe_301.jpg"
    ]
  },
  {
    "id": 302,
    "name": "JORDAN Jordans Ref. 1302",
    "brand": "Jordan",
    "category": "Casual",
    "price": 216000,
    "rating": 4.5,
    "reviewsCount": 47,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_302.jpg",
    "featured": false,
    "images": [
      "products/shoe_302.jpg"
    ]
  },
  {
    "id": 303,
    "name": "JORDAN Jordans Ref. 1303",
    "brand": "Jordan",
    "category": "Casual",
    "price": 184000,
    "rating": 4.6,
    "reviewsCount": 58,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_303.jpg",
    "featured": false,
    "images": [
      "products/shoe_303.jpg"
    ]
  },
  {
    "id": 304,
    "name": "JORDAN Jordans Ref. 1304",
    "brand": "Jordan",
    "category": "Casual",
    "price": 200000,
    "rating": 4.7,
    "reviewsCount": 69,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_304.jpg",
    "featured": false,
    "images": [
      "products/shoe_304.jpg"
    ]
  },
  {
    "id": 305,
    "name": "JORDAN Jordans Ref. 1305",
    "brand": "Jordan",
    "category": "Casual",
    "price": 194000,
    "rating": 4.8,
    "reviewsCount": 80,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_305.jpg",
    "featured": false,
    "images": [
      "products/shoe_305.jpg"
    ]
  },
  {
    "id": 306,
    "name": "JORDAN Jordans Ref. 1306",
    "brand": "Jordan",
    "category": "Casual",
    "price": 191000,
    "rating": 4.9,
    "reviewsCount": 11,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_306.jpg",
    "featured": false,
    "images": [
      "products/shoe_306.jpg"
    ]
  },
  {
    "id": 307,
    "name": "JORDAN Jordans Ref. 1307",
    "brand": "Jordan",
    "category": "Casual",
    "price": 200000,
    "rating": 5.0,
    "reviewsCount": 22,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_307.jpg",
    "featured": false,
    "images": [
      "products/shoe_307.jpg"
    ]
  },
  {
    "id": 308,
    "name": "JORDAN Jordans Ref. 1308",
    "brand": "Jordan",
    "category": "Casual",
    "price": 211000,
    "rating": 4.4,
    "reviewsCount": 33,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_308.jpg",
    "featured": false,
    "images": [
      "products/shoe_308.jpg"
    ]
  },
  {
    "id": 309,
    "name": "JORDAN Jordans Ref. 1309",
    "brand": "Jordan",
    "category": "Casual",
    "price": 193000,
    "rating": 4.5,
    "reviewsCount": 44,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_309.jpg",
    "featured": false,
    "images": [
      "products/shoe_309.jpg"
    ]
  },
  {
    "id": 310,
    "name": "JORDAN Jordans Ref. 1310",
    "brand": "Jordan",
    "category": "Casual",
    "price": 195000,
    "rating": 4.6,
    "reviewsCount": 55,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_310.jpg",
    "featured": false,
    "images": [
      "products/shoe_310.jpg"
    ]
  },
  {
    "id": 311,
    "name": "JORDAN Jordans Ref. 1311",
    "brand": "Jordan",
    "category": "Casual",
    "price": 203000,
    "rating": 4.7,
    "reviewsCount": 66,
    "description": "Zapatos Jordan Jordans de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_311.jpg",
    "featured": false,
    "images": [
      "products/shoe_311.jpg"
    ]
  },
  {
    "id": 312,
    "name": "JORDAN Retro 1 Ref. 1312",
    "brand": "Jordan",
    "category": "Casual",
    "price": 213000,
    "rating": 4.8,
    "reviewsCount": 77,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_312.jpg",
    "featured": true,
    "images": [
      "products/shoe_312.jpg"
    ]
  },
  {
    "id": 313,
    "name": "JORDAN Retro 1 Ref. 1313",
    "brand": "Jordan",
    "category": "Casual",
    "price": 185000,
    "rating": 4.9,
    "reviewsCount": 8,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_313.jpg",
    "featured": false,
    "images": [
      "products/shoe_313.jpg"
    ]
  },
  {
    "id": 314,
    "name": "JORDAN Retro 1 Ref. 1314",
    "brand": "Jordan",
    "category": "Casual",
    "price": 215000,
    "rating": 5.0,
    "reviewsCount": 19,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_314.jpg",
    "featured": false,
    "images": [
      "products/shoe_314.jpg"
    ]
  },
  {
    "id": 315,
    "name": "JORDAN Retro 1 Ref. 1315",
    "brand": "Jordan",
    "category": "Casual",
    "price": 189000,
    "rating": 4.4,
    "reviewsCount": 30,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_315.jpg",
    "featured": false,
    "images": [
      "products/shoe_315.jpg"
    ]
  },
  {
    "id": 316,
    "name": "JORDAN Retro 1 Ref. 1316",
    "brand": "Jordan",
    "category": "Casual",
    "price": 194000,
    "rating": 4.5,
    "reviewsCount": 41,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_316.jpg",
    "featured": false,
    "images": [
      "products/shoe_316.jpg"
    ]
  },
  {
    "id": 317,
    "name": "JORDAN Retro 1 Ref. 1317",
    "brand": "Jordan",
    "category": "Casual",
    "price": 187000,
    "rating": 4.6,
    "reviewsCount": 52,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_317.jpg",
    "featured": false,
    "images": [
      "products/shoe_317.jpg"
    ]
  },
  {
    "id": 318,
    "name": "JORDAN Retro 1 Ref. 1318",
    "brand": "Jordan",
    "category": "Casual",
    "price": 192000,
    "rating": 4.7,
    "reviewsCount": 63,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_318.jpg",
    "featured": false,
    "images": [
      "products/shoe_318.jpg"
    ]
  },
  {
    "id": 319,
    "name": "JORDAN Retro 1 Ref. 1319",
    "brand": "Jordan",
    "category": "Casual",
    "price": 186000,
    "rating": 4.8,
    "reviewsCount": 74,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_319.jpg",
    "featured": false,
    "images": [
      "products/shoe_319.jpg"
    ]
  },
  {
    "id": 320,
    "name": "JORDAN Retro 1 Ref. 1320",
    "brand": "Jordan",
    "category": "Casual",
    "price": 201000,
    "rating": 4.9,
    "reviewsCount": 5,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_320.jpg",
    "featured": false,
    "images": [
      "products/shoe_320.jpg"
    ]
  },
  {
    "id": 321,
    "name": "JORDAN Retro 1 Ref. 1321",
    "brand": "Jordan",
    "category": "Casual",
    "price": 218000,
    "rating": 5.0,
    "reviewsCount": 16,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_321.jpg",
    "featured": false,
    "images": [
      "products/shoe_321.jpg"
    ]
  },
  {
    "id": 322,
    "name": "JORDAN Retro 1 Ref. 1322",
    "brand": "Jordan",
    "category": "Casual",
    "price": 204000,
    "rating": 4.4,
    "reviewsCount": 27,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_322.jpg",
    "featured": false,
    "images": [
      "products/shoe_322.jpg"
    ]
  },
  {
    "id": 323,
    "name": "JORDAN Retro 1 Ref. 1323",
    "brand": "Jordan",
    "category": "Casual",
    "price": 188000,
    "rating": 4.5,
    "reviewsCount": 38,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_323.jpg",
    "featured": false,
    "images": [
      "products/shoe_323.jpg"
    ]
  },
  {
    "id": 324,
    "name": "JORDAN Retro 1 Ref. 1324",
    "brand": "Jordan",
    "category": "Casual",
    "price": 182000,
    "rating": 4.6,
    "reviewsCount": 49,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_324.jpg",
    "featured": true,
    "images": [
      "products/shoe_324.jpg"
    ]
  },
  {
    "id": 325,
    "name": "JORDAN Retro 1 Ref. 1325",
    "brand": "Jordan",
    "category": "Casual",
    "price": 213000,
    "rating": 4.7,
    "reviewsCount": 60,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_325.jpg",
    "featured": false,
    "images": [
      "products/shoe_325.jpg"
    ]
  },
  {
    "id": 326,
    "name": "JORDAN Retro 1 Ref. 1326",
    "brand": "Jordan",
    "category": "Casual",
    "price": 191000,
    "rating": 4.8,
    "reviewsCount": 71,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_326.jpg",
    "featured": false,
    "images": [
      "products/shoe_326.jpg"
    ]
  },
  {
    "id": 327,
    "name": "JORDAN Retro 1 Ref. 1327",
    "brand": "Jordan",
    "category": "Casual",
    "price": 208000,
    "rating": 4.9,
    "reviewsCount": 82,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_327.jpg",
    "featured": false,
    "images": [
      "products/shoe_327.jpg"
    ]
  },
  {
    "id": 328,
    "name": "JORDAN Retro 1 Ref. 1328",
    "brand": "Jordan",
    "category": "Casual",
    "price": 204000,
    "rating": 5.0,
    "reviewsCount": 13,
    "description": "Zapatos Jordan Retro 1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_328.jpg",
    "featured": false,
    "images": [
      "products/shoe_328.jpg"
    ]
  },
  {
    "id": 329,
    "name": "JORDAN Retro 4 Ref. 1329",
    "brand": "Jordan",
    "category": "Casual",
    "price": 201000,
    "rating": 4.4,
    "reviewsCount": 24,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_329.jpg",
    "featured": false,
    "images": [
      "products/shoe_329.jpg"
    ]
  },
  {
    "id": 330,
    "name": "JORDAN Retro 4 Ref. 1330",
    "brand": "Jordan",
    "category": "Casual",
    "price": 181000,
    "rating": 4.5,
    "reviewsCount": 35,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_330.jpg",
    "featured": false,
    "images": [
      "products/shoe_330.jpg"
    ]
  },
  {
    "id": 331,
    "name": "JORDAN Retro 4 Ref. 1331",
    "brand": "Jordan",
    "category": "Casual",
    "price": 209000,
    "rating": 4.6,
    "reviewsCount": 46,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_331.jpg",
    "featured": false,
    "images": [
      "products/shoe_331.jpg"
    ]
  },
  {
    "id": 332,
    "name": "JORDAN Retro 4 Ref. 1332",
    "brand": "Jordan",
    "category": "Casual",
    "price": 212000,
    "rating": 4.7,
    "reviewsCount": 57,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_332.jpg",
    "featured": false,
    "images": [
      "products/shoe_332.jpg"
    ]
  },
  {
    "id": 333,
    "name": "JORDAN Retro 4 Ref. 1333",
    "brand": "Jordan",
    "category": "Casual",
    "price": 218000,
    "rating": 4.8,
    "reviewsCount": 68,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_333.jpg",
    "featured": false,
    "images": [
      "products/shoe_333.jpg"
    ]
  },
  {
    "id": 334,
    "name": "JORDAN Retro 4 Ref. 1334",
    "brand": "Jordan",
    "category": "Casual",
    "price": 181000,
    "rating": 4.9,
    "reviewsCount": 79,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_334.jpg",
    "featured": false,
    "images": [
      "products/shoe_334.jpg"
    ]
  },
  {
    "id": 335,
    "name": "JORDAN Retro 4 Ref. 1335",
    "brand": "Jordan",
    "category": "Casual",
    "price": 205000,
    "rating": 5.0,
    "reviewsCount": 10,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_335.jpg",
    "featured": false,
    "images": [
      "products/shoe_335.jpg"
    ]
  },
  {
    "id": 336,
    "name": "JORDAN Retro 4 Ref. 1336",
    "brand": "Jordan",
    "category": "Casual",
    "price": 198000,
    "rating": 4.4,
    "reviewsCount": 21,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_336.jpg",
    "featured": true,
    "images": [
      "products/shoe_336.jpg"
    ]
  },
  {
    "id": 337,
    "name": "JORDAN Retro 4 Ref. 1337",
    "brand": "Jordan",
    "category": "Casual",
    "price": 193000,
    "rating": 4.5,
    "reviewsCount": 32,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_337.jpg",
    "featured": false,
    "images": [
      "products/shoe_337.jpg"
    ]
  },
  {
    "id": 338,
    "name": "JORDAN Retro 4 Ref. 1338",
    "brand": "Jordan",
    "category": "Casual",
    "price": 203000,
    "rating": 4.6,
    "reviewsCount": 43,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_338.jpg",
    "featured": false,
    "images": [
      "products/shoe_338.jpg"
    ]
  },
  {
    "id": 339,
    "name": "JORDAN Retro 4 Ref. 1339",
    "brand": "Jordan",
    "category": "Casual",
    "price": 182000,
    "rating": 4.7,
    "reviewsCount": 54,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_339.jpg",
    "featured": false,
    "images": [
      "products/shoe_339.jpg"
    ]
  },
  {
    "id": 340,
    "name": "JORDAN Retro 4 Ref. 1340",
    "brand": "Jordan",
    "category": "Casual",
    "price": 205000,
    "rating": 4.8,
    "reviewsCount": 65,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_340.jpg",
    "featured": false,
    "images": [
      "products/shoe_340.jpg"
    ]
  },
  {
    "id": 341,
    "name": "JORDAN Retro 4 Ref. 1341",
    "brand": "Jordan",
    "category": "Casual",
    "price": 185000,
    "rating": 4.9,
    "reviewsCount": 76,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_341.jpg",
    "featured": false,
    "images": [
      "products/shoe_341.jpg"
    ]
  },
  {
    "id": 342,
    "name": "JORDAN Retro 4 Ref. 1342",
    "brand": "Jordan",
    "category": "Casual",
    "price": 200000,
    "rating": 5.0,
    "reviewsCount": 7,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_342.jpg",
    "featured": false,
    "images": [
      "products/shoe_342.jpg"
    ]
  },
  {
    "id": 343,
    "name": "JORDAN Retro 4 Ref. 1343",
    "brand": "Jordan",
    "category": "Casual",
    "price": 191000,
    "rating": 4.4,
    "reviewsCount": 18,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_343.jpg",
    "featured": false,
    "images": [
      "products/shoe_343.jpg"
    ]
  },
  {
    "id": 344,
    "name": "JORDAN Retro 4 Ref. 1344",
    "brand": "Jordan",
    "category": "Casual",
    "price": 212000,
    "rating": 4.5,
    "reviewsCount": 29,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_344.jpg",
    "featured": false,
    "images": [
      "products/shoe_344.jpg"
    ]
  },
  {
    "id": 345,
    "name": "JORDAN Retro 4 Ref. 1345",
    "brand": "Jordan",
    "category": "Casual",
    "price": 201000,
    "rating": 4.6,
    "reviewsCount": 40,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_345.jpg",
    "featured": false,
    "images": [
      "products/shoe_345.jpg"
    ]
  },
  {
    "id": 346,
    "name": "JORDAN Retro 4 Ref. 1346",
    "brand": "Jordan",
    "category": "Casual",
    "price": 213000,
    "rating": 4.7,
    "reviewsCount": 51,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_346.jpg",
    "featured": false,
    "images": [
      "products/shoe_346.jpg"
    ]
  },
  {
    "id": 347,
    "name": "JORDAN Retro 4 Ref. 1347",
    "brand": "Jordan",
    "category": "Casual",
    "price": 200000,
    "rating": 4.8,
    "reviewsCount": 62,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_347.jpg",
    "featured": false,
    "images": [
      "products/shoe_347.jpg"
    ]
  },
  {
    "id": 348,
    "name": "JORDAN Retro 4 Ref. 1348",
    "brand": "Jordan",
    "category": "Casual",
    "price": 211000,
    "rating": 4.9,
    "reviewsCount": 73,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_348.jpg",
    "featured": true,
    "images": [
      "products/shoe_348.jpg"
    ]
  },
  {
    "id": 349,
    "name": "JORDAN Retro 4 Ref. 1349",
    "brand": "Jordan",
    "category": "Casual",
    "price": 190000,
    "rating": 5.0,
    "reviewsCount": 84,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_349.jpg",
    "featured": false,
    "images": [
      "products/shoe_349.jpg"
    ]
  },
  {
    "id": 350,
    "name": "JORDAN Retro 4 Ref. 1350",
    "brand": "Jordan",
    "category": "Casual",
    "price": 195000,
    "rating": 4.4,
    "reviewsCount": 15,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_350.jpg",
    "featured": false,
    "images": [
      "products/shoe_350.jpg"
    ]
  },
  {
    "id": 351,
    "name": "JORDAN Retro 4 Ref. 1351",
    "brand": "Jordan",
    "category": "Casual",
    "price": 189000,
    "rating": 4.5,
    "reviewsCount": 26,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_351.jpg",
    "featured": false,
    "images": [
      "products/shoe_351.jpg"
    ]
  },
  {
    "id": 352,
    "name": "JORDAN Retro 4 Ref. 1352",
    "brand": "Jordan",
    "category": "Casual",
    "price": 180000,
    "rating": 4.6,
    "reviewsCount": 37,
    "description": "Zapatos Jordan Retro 4 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_352.jpg",
    "featured": false,
    "images": [
      "products/shoe_352.jpg"
    ]
  },
  {
    "id": 353,
    "name": "LE COQ SPORTIF Ref. 1353",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 158000,
    "rating": 4.7,
    "reviewsCount": 48,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_353.jpg",
    "featured": false,
    "images": [
      "products/shoe_353.jpg"
    ]
  },
  {
    "id": 354,
    "name": "LE COQ SPORTIF Ref. 1354",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 168000,
    "rating": 4.8,
    "reviewsCount": 59,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_354.jpg",
    "featured": false,
    "images": [
      "products/shoe_354.jpg"
    ]
  },
  {
    "id": 355,
    "name": "LE COQ SPORTIF Ref. 1355",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 172000,
    "rating": 4.9,
    "reviewsCount": 70,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_355.jpg",
    "featured": false,
    "images": [
      "products/shoe_355.jpg"
    ]
  },
  {
    "id": 356,
    "name": "LE COQ SPORTIF Ref. 1356",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 157000,
    "rating": 5.0,
    "reviewsCount": 81,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_356.jpg",
    "featured": false,
    "images": [
      "products/shoe_356.jpg"
    ]
  },
  {
    "id": 357,
    "name": "LE COQ SPORTIF Ref. 1357",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 154000,
    "rating": 4.4,
    "reviewsCount": 12,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_357.jpg",
    "featured": false,
    "images": [
      "products/shoe_357.jpg"
    ]
  },
  {
    "id": 358,
    "name": "LE COQ SPORTIF Ref. 1358",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 179000,
    "rating": 4.5,
    "reviewsCount": 23,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_358.jpg",
    "featured": false,
    "images": [
      "products/shoe_358.jpg"
    ]
  },
  {
    "id": 359,
    "name": "LE COQ SPORTIF Ref. 1359",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 171000,
    "rating": 4.6,
    "reviewsCount": 34,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_359.jpg",
    "featured": false,
    "images": [
      "products/shoe_359.jpg"
    ]
  },
  {
    "id": 360,
    "name": "LE COQ SPORTIF Ref. 1360",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 203000,
    "rating": 4.7,
    "reviewsCount": 45,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_360.jpg",
    "featured": true,
    "images": [
      "products/shoe_360.jpg"
    ]
  },
  {
    "id": 361,
    "name": "LE COQ SPORTIF Ref. 1361",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 159000,
    "rating": 4.8,
    "reviewsCount": 56,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_361.jpg",
    "featured": false,
    "images": [
      "products/shoe_361.jpg"
    ]
  },
  {
    "id": 362,
    "name": "LE COQ SPORTIF Ref. 1362",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 150000,
    "rating": 4.9,
    "reviewsCount": 67,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_362.jpg",
    "featured": false,
    "images": [
      "products/shoe_362.jpg"
    ]
  },
  {
    "id": 363,
    "name": "LE COQ SPORTIF Ref. 1363",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 170000,
    "rating": 5.0,
    "reviewsCount": 78,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_363.jpg",
    "featured": false,
    "images": [
      "products/shoe_363.jpg"
    ]
  },
  {
    "id": 364,
    "name": "LE COQ SPORTIF Ref. 1364",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 166000,
    "rating": 4.4,
    "reviewsCount": 9,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_364.jpg",
    "featured": false,
    "images": [
      "products/shoe_364.jpg"
    ]
  },
  {
    "id": 365,
    "name": "LE COQ SPORTIF Ref. 1365",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 158000,
    "rating": 4.5,
    "reviewsCount": 20,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_365.jpg",
    "featured": false,
    "images": [
      "products/shoe_365.jpg"
    ]
  },
  {
    "id": 366,
    "name": "LE COQ SPORTIF Ref. 1366",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 162000,
    "rating": 4.6,
    "reviewsCount": 31,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_366.jpg",
    "featured": false,
    "images": [
      "products/shoe_366.jpg"
    ]
  },
  {
    "id": 367,
    "name": "LE COQ SPORTIF Ref. 1367",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 179000,
    "rating": 4.7,
    "reviewsCount": 42,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_367.jpg",
    "featured": false,
    "images": [
      "products/shoe_367.jpg"
    ]
  },
  {
    "id": 368,
    "name": "LE COQ SPORTIF Ref. 1368",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 157000,
    "rating": 4.8,
    "reviewsCount": 53,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_368.jpg",
    "featured": false,
    "images": [
      "products/shoe_368.jpg"
    ]
  },
  {
    "id": 369,
    "name": "LE COQ SPORTIF Ref. 1369",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 152000,
    "rating": 4.9,
    "reviewsCount": 64,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_369.jpg",
    "featured": false,
    "images": [
      "products/shoe_369.jpg"
    ]
  },
  {
    "id": 370,
    "name": "LE COQ SPORTIF Ref. 1370",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 168000,
    "rating": 5.0,
    "reviewsCount": 75,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_370.jpg",
    "featured": false,
    "images": [
      "products/shoe_370.jpg"
    ]
  },
  {
    "id": 371,
    "name": "LE COQ SPORTIF Ref. 1371",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 166000,
    "rating": 4.4,
    "reviewsCount": 6,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_371.jpg",
    "featured": false,
    "images": [
      "products/shoe_371.jpg"
    ]
  },
  {
    "id": 372,
    "name": "LE COQ SPORTIF Ref. 1372",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 184000,
    "rating": 4.5,
    "reviewsCount": 17,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_372.jpg",
    "featured": true,
    "images": [
      "products/shoe_372.jpg"
    ]
  },
  {
    "id": 373,
    "name": "LE COQ SPORTIF Ref. 1373",
    "brand": "Le Coq Sportif",
    "category": "Casual",
    "price": 159000,
    "rating": 4.6,
    "reviewsCount": 28,
    "description": "Zapatos Le Coq Sportif  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_373.jpg",
    "featured": false,
    "images": [
      "products/shoe_373.jpg"
    ]
  },
  {
    "id": 374,
    "name": "LOUIS VUITTON Ref. 1374",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 220000,
    "rating": 4.7,
    "reviewsCount": 39,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_374.jpg",
    "featured": false,
    "images": [
      "products/shoe_374.jpg"
    ]
  },
  {
    "id": 375,
    "name": "LOUIS VUITTON Ref. 1375",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 223000,
    "rating": 4.8,
    "reviewsCount": 50,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_375.jpg",
    "featured": false,
    "images": [
      "products/shoe_375.jpg"
    ]
  },
  {
    "id": 376,
    "name": "LOUIS VUITTON Ref. 1376",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 229000,
    "rating": 4.9,
    "reviewsCount": 61,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_376.jpg",
    "featured": false,
    "images": [
      "products/shoe_376.jpg"
    ]
  },
  {
    "id": 377,
    "name": "LOUIS VUITTON Ref. 1377",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 226000,
    "rating": 5.0,
    "reviewsCount": 72,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_377.jpg",
    "featured": false,
    "images": [
      "products/shoe_377.jpg"
    ]
  },
  {
    "id": 378,
    "name": "LOUIS VUITTON Ref. 1378",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 234000,
    "rating": 4.4,
    "reviewsCount": 83,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_378.jpg",
    "featured": false,
    "images": [
      "products/shoe_378.jpg"
    ]
  },
  {
    "id": 379,
    "name": "LOUIS VUITTON Ref. 1379",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 238000,
    "rating": 4.5,
    "reviewsCount": 14,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_379.jpg",
    "featured": false,
    "images": [
      "products/shoe_379.jpg"
    ]
  },
  {
    "id": 380,
    "name": "LOUIS VUITTON Ref. 1380",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 237000,
    "rating": 4.6,
    "reviewsCount": 25,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_380.jpg",
    "featured": false,
    "images": [
      "products/shoe_380.jpg"
    ]
  },
  {
    "id": 381,
    "name": "LOUIS VUITTON Ref. 1381",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 230000,
    "rating": 4.7,
    "reviewsCount": 36,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_381.jpg",
    "featured": false,
    "images": [
      "products/shoe_381.jpg"
    ]
  },
  {
    "id": 382,
    "name": "LOUIS VUITTON Ref. 1382",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 233000,
    "rating": 4.8,
    "reviewsCount": 47,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_382.jpg",
    "featured": false,
    "images": [
      "products/shoe_382.jpg"
    ]
  },
  {
    "id": 383,
    "name": "LOUIS VUITTON Ref. 1383",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 228000,
    "rating": 4.9,
    "reviewsCount": 58,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_383.jpg",
    "featured": false,
    "images": [
      "products/shoe_383.jpg"
    ]
  },
  {
    "id": 384,
    "name": "LOUIS VUITTON Ref. 1384",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 239000,
    "rating": 5.0,
    "reviewsCount": 69,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_384.jpg",
    "featured": true,
    "images": [
      "products/shoe_384.jpg"
    ]
  },
  {
    "id": 385,
    "name": "LOUIS VUITTON Ref. 1385",
    "brand": "Louis Vuitton",
    "category": "Running",
    "price": 221000,
    "rating": 4.4,
    "reviewsCount": 80,
    "description": "Zapatos Louis Vuitton  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_385.jpg",
    "featured": false,
    "images": [
      "products/shoe_385.jpg"
    ]
  },
  {
    "id": 386,
    "name": "NEW BALANCE Ref. 1386",
    "brand": "New Balance",
    "category": "Casual",
    "price": 177000,
    "rating": 4.5,
    "reviewsCount": 11,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_386.jpg",
    "featured": false,
    "images": [
      "products/shoe_386.jpg"
    ]
  },
  {
    "id": 387,
    "name": "NEW BALANCE Ref. 1387",
    "brand": "New Balance",
    "category": "Casual",
    "price": 154000,
    "rating": 4.6,
    "reviewsCount": 22,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_387.jpg",
    "featured": false,
    "images": [
      "products/shoe_387.jpg"
    ]
  },
  {
    "id": 388,
    "name": "NEW BALANCE Ref. 1388",
    "brand": "New Balance",
    "category": "Casual",
    "price": 157000,
    "rating": 4.7,
    "reviewsCount": 33,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_388.jpg",
    "featured": false,
    "images": [
      "products/shoe_388.jpg"
    ]
  },
  {
    "id": 389,
    "name": "NEW BALANCE Ref. 1389",
    "brand": "New Balance",
    "category": "Casual",
    "price": 166000,
    "rating": 4.8,
    "reviewsCount": 44,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_389.jpg",
    "featured": false,
    "images": [
      "products/shoe_389.jpg"
    ]
  },
  {
    "id": 390,
    "name": "NEW BALANCE Ref. 1390",
    "brand": "New Balance",
    "category": "Casual",
    "price": 164000,
    "rating": 4.9,
    "reviewsCount": 55,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_390.jpg",
    "featured": false,
    "images": [
      "products/shoe_390.jpg"
    ]
  },
  {
    "id": 391,
    "name": "NEW BALANCE Ref. 1391",
    "brand": "New Balance",
    "category": "Casual",
    "price": 152000,
    "rating": 5.0,
    "reviewsCount": 66,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_391.jpg",
    "featured": false,
    "images": [
      "products/shoe_391.jpg"
    ]
  },
  {
    "id": 392,
    "name": "NEW BALANCE Ref. 1392",
    "brand": "New Balance",
    "category": "Casual",
    "price": 171000,
    "rating": 4.4,
    "reviewsCount": 77,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_392.jpg",
    "featured": false,
    "images": [
      "products/shoe_392.jpg"
    ]
  },
  {
    "id": 393,
    "name": "NEW BALANCE Ref. 1393",
    "brand": "New Balance",
    "category": "Casual",
    "price": 170000,
    "rating": 4.5,
    "reviewsCount": 8,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_393.jpg",
    "featured": false,
    "images": [
      "products/shoe_393.jpg"
    ]
  },
  {
    "id": 394,
    "name": "NEW BALANCE Ref. 1394",
    "brand": "New Balance",
    "category": "Casual",
    "price": 168000,
    "rating": 4.6,
    "reviewsCount": 19,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_394.jpg",
    "featured": false,
    "images": [
      "products/shoe_394.jpg"
    ]
  },
  {
    "id": 395,
    "name": "NEW BALANCE Ref. 1395",
    "brand": "New Balance",
    "category": "Casual",
    "price": 153000,
    "rating": 4.7,
    "reviewsCount": 30,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_395.jpg",
    "featured": false,
    "images": [
      "products/shoe_395.jpg"
    ]
  },
  {
    "id": 396,
    "name": "NEW BALANCE Ref. 1396",
    "brand": "New Balance",
    "category": "Casual",
    "price": 199000,
    "rating": 4.8,
    "reviewsCount": 41,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_396.jpg",
    "featured": true,
    "images": [
      "products/shoe_396.jpg"
    ]
  },
  {
    "id": 397,
    "name": "NEW BALANCE Ref. 1397",
    "brand": "New Balance",
    "category": "Casual",
    "price": 179000,
    "rating": 4.9,
    "reviewsCount": 52,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_397.jpg",
    "featured": false,
    "images": [
      "products/shoe_397.jpg"
    ]
  },
  {
    "id": 398,
    "name": "NEW BALANCE Ref. 1398",
    "brand": "New Balance",
    "category": "Casual",
    "price": 150000,
    "rating": 5.0,
    "reviewsCount": 63,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_398.jpg",
    "featured": false,
    "images": [
      "products/shoe_398.jpg"
    ]
  },
  {
    "id": 399,
    "name": "NEW BALANCE Ref. 1399",
    "brand": "New Balance",
    "category": "Casual",
    "price": 169000,
    "rating": 4.4,
    "reviewsCount": 74,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_399.jpg",
    "featured": false,
    "images": [
      "products/shoe_399.jpg"
    ]
  },
  {
    "id": 400,
    "name": "NEW BALANCE Ref. 1400",
    "brand": "New Balance",
    "category": "Casual",
    "price": 178000,
    "rating": 4.5,
    "reviewsCount": 5,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_400.jpg",
    "featured": false,
    "images": [
      "products/shoe_400.jpg"
    ]
  },
  {
    "id": 401,
    "name": "NEW BALANCE Ref. 1401",
    "brand": "New Balance",
    "category": "Casual",
    "price": 163000,
    "rating": 4.6,
    "reviewsCount": 16,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_401.jpg",
    "featured": false,
    "images": [
      "products/shoe_401.jpg"
    ]
  },
  {
    "id": 402,
    "name": "NEW BALANCE Ref. 1402",
    "brand": "New Balance",
    "category": "Casual",
    "price": 160000,
    "rating": 4.7,
    "reviewsCount": 27,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_402.jpg",
    "featured": false,
    "images": [
      "products/shoe_402.jpg"
    ]
  },
  {
    "id": 403,
    "name": "NEW BALANCE Ref. 1403",
    "brand": "New Balance",
    "category": "Casual",
    "price": 160000,
    "rating": 4.8,
    "reviewsCount": 38,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_403.jpg",
    "featured": false,
    "images": [
      "products/shoe_403.jpg"
    ]
  },
  {
    "id": 404,
    "name": "NEW BALANCE Ref. 1404",
    "brand": "New Balance",
    "category": "Casual",
    "price": 152000,
    "rating": 4.9,
    "reviewsCount": 49,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_404.jpg",
    "featured": false,
    "images": [
      "products/shoe_404.jpg"
    ]
  },
  {
    "id": 405,
    "name": "NEW BALANCE Ref. 1405",
    "brand": "New Balance",
    "category": "Casual",
    "price": 174000,
    "rating": 5.0,
    "reviewsCount": 60,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_405.jpg",
    "featured": false,
    "images": [
      "products/shoe_405.jpg"
    ]
  },
  {
    "id": 406,
    "name": "NEW BALANCE Ref. 1406",
    "brand": "New Balance",
    "category": "Casual",
    "price": 178000,
    "rating": 4.4,
    "reviewsCount": 71,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_406.jpg",
    "featured": false,
    "images": [
      "products/shoe_406.jpg"
    ]
  },
  {
    "id": 407,
    "name": "NEW BALANCE Ref. 1407",
    "brand": "New Balance",
    "category": "Casual",
    "price": 151000,
    "rating": 4.5,
    "reviewsCount": 82,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_407.jpg",
    "featured": false,
    "images": [
      "products/shoe_407.jpg"
    ]
  },
  {
    "id": 408,
    "name": "NEW BALANCE Ref. 1408",
    "brand": "New Balance",
    "category": "Casual",
    "price": 200000,
    "rating": 4.6,
    "reviewsCount": 13,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_408.jpg",
    "featured": true,
    "images": [
      "products/shoe_408.jpg"
    ]
  },
  {
    "id": 409,
    "name": "NEW BALANCE Ref. 1409",
    "brand": "New Balance",
    "category": "Casual",
    "price": 165000,
    "rating": 4.7,
    "reviewsCount": 24,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_409.jpg",
    "featured": false,
    "images": [
      "products/shoe_409.jpg"
    ]
  },
  {
    "id": 410,
    "name": "NEW BALANCE Ref. 1410",
    "brand": "New Balance",
    "category": "Casual",
    "price": 166000,
    "rating": 4.8,
    "reviewsCount": 35,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_410.jpg",
    "featured": false,
    "images": [
      "products/shoe_410.jpg"
    ]
  },
  {
    "id": 411,
    "name": "NEW BALANCE Ref. 1411",
    "brand": "New Balance",
    "category": "Casual",
    "price": 180000,
    "rating": 4.9,
    "reviewsCount": 46,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_411.jpg",
    "featured": false,
    "images": [
      "products/shoe_411.jpg"
    ]
  },
  {
    "id": 412,
    "name": "NEW BALANCE Ref. 1412",
    "brand": "New Balance",
    "category": "Casual",
    "price": 163000,
    "rating": 5.0,
    "reviewsCount": 57,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_412.jpg",
    "featured": false,
    "images": [
      "products/shoe_412.jpg"
    ]
  },
  {
    "id": 413,
    "name": "NEW BALANCE Ref. 1413",
    "brand": "New Balance",
    "category": "Casual",
    "price": 159000,
    "rating": 4.4,
    "reviewsCount": 68,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_413.jpg",
    "featured": false,
    "images": [
      "products/shoe_413.jpg"
    ]
  },
  {
    "id": 414,
    "name": "NEW BALANCE Ref. 1414",
    "brand": "New Balance",
    "category": "Casual",
    "price": 157000,
    "rating": 4.5,
    "reviewsCount": 79,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_414.jpg",
    "featured": false,
    "images": [
      "products/shoe_414.jpg"
    ]
  },
  {
    "id": 415,
    "name": "NEW BALANCE Ref. 1415",
    "brand": "New Balance",
    "category": "Casual",
    "price": 151000,
    "rating": 4.6,
    "reviewsCount": 10,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_415.jpg",
    "featured": false,
    "images": [
      "products/shoe_415.jpg"
    ]
  },
  {
    "id": 416,
    "name": "NEW BALANCE Ref. 1416",
    "brand": "New Balance",
    "category": "Casual",
    "price": 167000,
    "rating": 4.7,
    "reviewsCount": 21,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_416.jpg",
    "featured": false,
    "images": [
      "products/shoe_416.jpg"
    ]
  },
  {
    "id": 417,
    "name": "NEW BALANCE Ref. 1417",
    "brand": "New Balance",
    "category": "Casual",
    "price": 177000,
    "rating": 4.8,
    "reviewsCount": 32,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_417.jpg",
    "featured": false,
    "images": [
      "products/shoe_417.jpg"
    ]
  },
  {
    "id": 418,
    "name": "NEW BALANCE Ref. 1418",
    "brand": "New Balance",
    "category": "Casual",
    "price": 178000,
    "rating": 4.9,
    "reviewsCount": 43,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_418.jpg",
    "featured": false,
    "images": [
      "products/shoe_418.jpg"
    ]
  },
  {
    "id": 419,
    "name": "NEW BALANCE Ref. 1419",
    "brand": "New Balance",
    "category": "Casual",
    "price": 173000,
    "rating": 5.0,
    "reviewsCount": 54,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_419.jpg",
    "featured": false,
    "images": [
      "products/shoe_419.jpg"
    ]
  },
  {
    "id": 420,
    "name": "NEW BALANCE Ref. 1420",
    "brand": "New Balance",
    "category": "Casual",
    "price": 192000,
    "rating": 4.4,
    "reviewsCount": 65,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_420.jpg",
    "featured": true,
    "images": [
      "products/shoe_420.jpg"
    ]
  },
  {
    "id": 421,
    "name": "NEW BALANCE Ref. 1421",
    "brand": "New Balance",
    "category": "Casual",
    "price": 162000,
    "rating": 4.5,
    "reviewsCount": 76,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_421.jpg",
    "featured": false,
    "images": [
      "products/shoe_421.jpg"
    ]
  },
  {
    "id": 422,
    "name": "NEW BALANCE Ref. 1422",
    "brand": "New Balance",
    "category": "Casual",
    "price": 159000,
    "rating": 4.6,
    "reviewsCount": 7,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_422.jpg",
    "featured": false,
    "images": [
      "products/shoe_422.jpg"
    ]
  },
  {
    "id": 423,
    "name": "NEW BALANCE Ref. 1423",
    "brand": "New Balance",
    "category": "Casual",
    "price": 155000,
    "rating": 4.7,
    "reviewsCount": 18,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_423.jpg",
    "featured": false,
    "images": [
      "products/shoe_423.jpg"
    ]
  },
  {
    "id": 424,
    "name": "NEW BALANCE Ref. 1424",
    "brand": "New Balance",
    "category": "Casual",
    "price": 170000,
    "rating": 4.8,
    "reviewsCount": 29,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_424.jpg",
    "featured": false,
    "images": [
      "products/shoe_424.jpg"
    ]
  },
  {
    "id": 425,
    "name": "NEW BALANCE Ref. 1425",
    "brand": "New Balance",
    "category": "Casual",
    "price": 165000,
    "rating": 4.9,
    "reviewsCount": 40,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_425.jpg",
    "featured": false,
    "images": [
      "products/shoe_425.jpg"
    ]
  },
  {
    "id": 426,
    "name": "NEW BALANCE Ref. 1426",
    "brand": "New Balance",
    "category": "Casual",
    "price": 176000,
    "rating": 5.0,
    "reviewsCount": 51,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_426.jpg",
    "featured": false,
    "images": [
      "products/shoe_426.jpg"
    ]
  },
  {
    "id": 427,
    "name": "NEW BALANCE Ref. 1427",
    "brand": "New Balance",
    "category": "Casual",
    "price": 172000,
    "rating": 4.4,
    "reviewsCount": 62,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_427.jpg",
    "featured": false,
    "images": [
      "products/shoe_427.jpg"
    ]
  },
  {
    "id": 428,
    "name": "NEW BALANCE Ref. 1428",
    "brand": "New Balance",
    "category": "Casual",
    "price": 179000,
    "rating": 4.5,
    "reviewsCount": 73,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_428.jpg",
    "featured": false,
    "images": [
      "products/shoe_428.jpg"
    ]
  },
  {
    "id": 429,
    "name": "NEW BALANCE Ref. 1429",
    "brand": "New Balance",
    "category": "Casual",
    "price": 150000,
    "rating": 4.6,
    "reviewsCount": 84,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_429.jpg",
    "featured": false,
    "images": [
      "products/shoe_429.jpg"
    ]
  },
  {
    "id": 430,
    "name": "NEW BALANCE Ref. 1430",
    "brand": "New Balance",
    "category": "Casual",
    "price": 162000,
    "rating": 4.7,
    "reviewsCount": 15,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_430.jpg",
    "featured": false,
    "images": [
      "products/shoe_430.jpg"
    ]
  },
  {
    "id": 431,
    "name": "NEW BALANCE Ref. 1431",
    "brand": "New Balance",
    "category": "Casual",
    "price": 166000,
    "rating": 4.8,
    "reviewsCount": 26,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_431.jpg",
    "featured": false,
    "images": [
      "products/shoe_431.jpg"
    ]
  },
  {
    "id": 432,
    "name": "NEW BALANCE Ref. 1432",
    "brand": "New Balance",
    "category": "Casual",
    "price": 183000,
    "rating": 4.9,
    "reviewsCount": 37,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_432.jpg",
    "featured": true,
    "images": [
      "products/shoe_432.jpg"
    ]
  },
  {
    "id": 433,
    "name": "NEW BALANCE Ref. 1433",
    "brand": "New Balance",
    "category": "Casual",
    "price": 180000,
    "rating": 5.0,
    "reviewsCount": 48,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_433.jpg",
    "featured": false,
    "images": [
      "products/shoe_433.jpg"
    ]
  },
  {
    "id": 434,
    "name": "NEW BALANCE Ref. 1434",
    "brand": "New Balance",
    "category": "Casual",
    "price": 167000,
    "rating": 4.4,
    "reviewsCount": 59,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_434.jpg",
    "featured": false,
    "images": [
      "products/shoe_434.jpg"
    ]
  },
  {
    "id": 435,
    "name": "NEW BALANCE Ref. 1435",
    "brand": "New Balance",
    "category": "Casual",
    "price": 168000,
    "rating": 4.5,
    "reviewsCount": 70,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_435.jpg",
    "featured": false,
    "images": [
      "products/shoe_435.jpg"
    ]
  },
  {
    "id": 436,
    "name": "NEW BALANCE Ref. 1436",
    "brand": "New Balance",
    "category": "Casual",
    "price": 154000,
    "rating": 4.6,
    "reviewsCount": 81,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_436.jpg",
    "featured": false,
    "images": [
      "products/shoe_436.jpg"
    ]
  },
  {
    "id": 437,
    "name": "NEW BALANCE Ref. 1437",
    "brand": "New Balance",
    "category": "Casual",
    "price": 152000,
    "rating": 4.7,
    "reviewsCount": 12,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_437.jpg",
    "featured": false,
    "images": [
      "products/shoe_437.jpg"
    ]
  },
  {
    "id": 438,
    "name": "NEW BALANCE Ref. 1438",
    "brand": "New Balance",
    "category": "Casual",
    "price": 179000,
    "rating": 4.8,
    "reviewsCount": 23,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_438.jpg",
    "featured": false,
    "images": [
      "products/shoe_438.jpg"
    ]
  },
  {
    "id": 439,
    "name": "NEW BALANCE Ref. 1439",
    "brand": "New Balance",
    "category": "Casual",
    "price": 170000,
    "rating": 4.9,
    "reviewsCount": 34,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_439.jpg",
    "featured": false,
    "images": [
      "products/shoe_439.jpg"
    ]
  },
  {
    "id": 440,
    "name": "NEW BALANCE Ref. 1440",
    "brand": "New Balance",
    "category": "Casual",
    "price": 157000,
    "rating": 5.0,
    "reviewsCount": 45,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_440.jpg",
    "featured": false,
    "images": [
      "products/shoe_440.jpg"
    ]
  },
  {
    "id": 441,
    "name": "NEW BALANCE Ref. 1441",
    "brand": "New Balance",
    "category": "Casual",
    "price": 161000,
    "rating": 4.4,
    "reviewsCount": 56,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_441.jpg",
    "featured": false,
    "images": [
      "products/shoe_441.jpg"
    ]
  },
  {
    "id": 442,
    "name": "NEW BALANCE Ref. 1442",
    "brand": "New Balance",
    "category": "Casual",
    "price": 158000,
    "rating": 4.5,
    "reviewsCount": 67,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_442.jpg",
    "featured": false,
    "images": [
      "products/shoe_442.jpg"
    ]
  },
  {
    "id": 443,
    "name": "NEW BALANCE Ref. 1443",
    "brand": "New Balance",
    "category": "Casual",
    "price": 176000,
    "rating": 4.6,
    "reviewsCount": 78,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_443.jpg",
    "featured": false,
    "images": [
      "products/shoe_443.jpg"
    ]
  },
  {
    "id": 444,
    "name": "NEW BALANCE Ref. 1444",
    "brand": "New Balance",
    "category": "Casual",
    "price": 185000,
    "rating": 4.7,
    "reviewsCount": 9,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_444.jpg",
    "featured": true,
    "images": [
      "products/shoe_444.jpg"
    ]
  },
  {
    "id": 445,
    "name": "NEW BALANCE Ref. 1445",
    "brand": "New Balance",
    "category": "Casual",
    "price": 155000,
    "rating": 4.8,
    "reviewsCount": 20,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_445.jpg",
    "featured": false,
    "images": [
      "products/shoe_445.jpg"
    ]
  },
  {
    "id": 446,
    "name": "NEW BALANCE Ref. 1446",
    "brand": "New Balance",
    "category": "Casual",
    "price": 160000,
    "rating": 4.9,
    "reviewsCount": 31,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_446.jpg",
    "featured": false,
    "images": [
      "products/shoe_446.jpg"
    ]
  },
  {
    "id": 447,
    "name": "NEW BALANCE Ref. 1447",
    "brand": "New Balance",
    "category": "Casual",
    "price": 166000,
    "rating": 5.0,
    "reviewsCount": 42,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_447.jpg",
    "featured": false,
    "images": [
      "products/shoe_447.jpg"
    ]
  },
  {
    "id": 448,
    "name": "NEW BALANCE Ref. 1448",
    "brand": "New Balance",
    "category": "Casual",
    "price": 155000,
    "rating": 4.4,
    "reviewsCount": 53,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_448.jpg",
    "featured": false,
    "images": [
      "products/shoe_448.jpg"
    ]
  },
  {
    "id": 449,
    "name": "NEW BALANCE Ref. 1449",
    "brand": "New Balance",
    "category": "Casual",
    "price": 155000,
    "rating": 4.5,
    "reviewsCount": 64,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_449.jpg",
    "featured": false,
    "images": [
      "products/shoe_449.jpg"
    ]
  },
  {
    "id": 450,
    "name": "NEW BALANCE Ref. 1450",
    "brand": "New Balance",
    "category": "Casual",
    "price": 174000,
    "rating": 4.6,
    "reviewsCount": 75,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_450.jpg",
    "featured": false,
    "images": [
      "products/shoe_450.jpg"
    ]
  },
  {
    "id": 451,
    "name": "NEW BALANCE Ref. 1451",
    "brand": "New Balance",
    "category": "Casual",
    "price": 178000,
    "rating": 4.7,
    "reviewsCount": 6,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_451.jpg",
    "featured": false,
    "images": [
      "products/shoe_451.jpg"
    ]
  },
  {
    "id": 452,
    "name": "NEW BALANCE Ref. 1452",
    "brand": "New Balance",
    "category": "Casual",
    "price": 152000,
    "rating": 4.8,
    "reviewsCount": 17,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_452.jpg",
    "featured": false,
    "images": [
      "products/shoe_452.jpg"
    ]
  },
  {
    "id": 453,
    "name": "NEW BALANCE Ref. 1453",
    "brand": "New Balance",
    "category": "Casual",
    "price": 159000,
    "rating": 4.9,
    "reviewsCount": 28,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_453.jpg",
    "featured": false,
    "images": [
      "products/shoe_453.jpg"
    ]
  },
  {
    "id": 454,
    "name": "NEW BALANCE Ref. 1454",
    "brand": "New Balance",
    "category": "Casual",
    "price": 175000,
    "rating": 5.0,
    "reviewsCount": 39,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_454.jpg",
    "featured": false,
    "images": [
      "products/shoe_454.jpg"
    ]
  },
  {
    "id": 455,
    "name": "NEW BALANCE Ref. 1455",
    "brand": "New Balance",
    "category": "Casual",
    "price": 165000,
    "rating": 4.4,
    "reviewsCount": 50,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_455.jpg",
    "featured": false,
    "images": [
      "products/shoe_455.jpg"
    ]
  },
  {
    "id": 456,
    "name": "NEW BALANCE Ref. 1456",
    "brand": "New Balance",
    "category": "Casual",
    "price": 197000,
    "rating": 4.5,
    "reviewsCount": 61,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_456.jpg",
    "featured": true,
    "images": [
      "products/shoe_456.jpg"
    ]
  },
  {
    "id": 457,
    "name": "NEW BALANCE Ref. 1457",
    "brand": "New Balance",
    "category": "Casual",
    "price": 165000,
    "rating": 4.6,
    "reviewsCount": 72,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_457.jpg",
    "featured": false,
    "images": [
      "products/shoe_457.jpg"
    ]
  },
  {
    "id": 458,
    "name": "NEW BALANCE Ref. 1458",
    "brand": "New Balance",
    "category": "Casual",
    "price": 173000,
    "rating": 4.7,
    "reviewsCount": 83,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_458.jpg",
    "featured": false,
    "images": [
      "products/shoe_458.jpg"
    ]
  },
  {
    "id": 459,
    "name": "NEW BALANCE Ref. 1459",
    "brand": "New Balance",
    "category": "Casual",
    "price": 173000,
    "rating": 4.8,
    "reviewsCount": 14,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_459.jpg",
    "featured": false,
    "images": [
      "products/shoe_459.jpg"
    ]
  },
  {
    "id": 460,
    "name": "NEW BALANCE Ref. 1460",
    "brand": "New Balance",
    "category": "Casual",
    "price": 180000,
    "rating": 4.9,
    "reviewsCount": 25,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_460.jpg",
    "featured": false,
    "images": [
      "products/shoe_460.jpg"
    ]
  },
  {
    "id": 461,
    "name": "NEW BALANCE Ref. 1461",
    "brand": "New Balance",
    "category": "Casual",
    "price": 164000,
    "rating": 5.0,
    "reviewsCount": 36,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_461.jpg",
    "featured": false,
    "images": [
      "products/shoe_461.jpg"
    ]
  },
  {
    "id": 462,
    "name": "NEW BALANCE Ref. 1462",
    "brand": "New Balance",
    "category": "Casual",
    "price": 154000,
    "rating": 4.4,
    "reviewsCount": 47,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_462.jpg",
    "featured": false,
    "images": [
      "products/shoe_462.jpg"
    ]
  },
  {
    "id": 463,
    "name": "NEW BALANCE Ref. 1463",
    "brand": "New Balance",
    "category": "Casual",
    "price": 170000,
    "rating": 4.5,
    "reviewsCount": 58,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_463.jpg",
    "featured": false,
    "images": [
      "products/shoe_463.jpg"
    ]
  },
  {
    "id": 464,
    "name": "NEW BALANCE Ref. 1464",
    "brand": "New Balance",
    "category": "Casual",
    "price": 158000,
    "rating": 4.6,
    "reviewsCount": 69,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_464.jpg",
    "featured": false,
    "images": [
      "products/shoe_464.jpg"
    ]
  },
  {
    "id": 465,
    "name": "NEW BALANCE Ref. 1465",
    "brand": "New Balance",
    "category": "Casual",
    "price": 169000,
    "rating": 4.7,
    "reviewsCount": 80,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_465.jpg",
    "featured": false,
    "images": [
      "products/shoe_465.jpg"
    ]
  },
  {
    "id": 466,
    "name": "NEW BALANCE Ref. 1466",
    "brand": "New Balance",
    "category": "Casual",
    "price": 154000,
    "rating": 4.8,
    "reviewsCount": 11,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_466.jpg",
    "featured": false,
    "images": [
      "products/shoe_466.jpg"
    ]
  },
  {
    "id": 467,
    "name": "NEW BALANCE Ref. 1467",
    "brand": "New Balance",
    "category": "Casual",
    "price": 179000,
    "rating": 4.9,
    "reviewsCount": 22,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_467.jpg",
    "featured": false,
    "images": [
      "products/shoe_467.jpg"
    ]
  },
  {
    "id": 468,
    "name": "NEW BALANCE Ref. 1468",
    "brand": "New Balance",
    "category": "Casual",
    "price": 215000,
    "rating": 5.0,
    "reviewsCount": 33,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_468.jpg",
    "featured": true,
    "images": [
      "products/shoe_468.jpg"
    ]
  },
  {
    "id": 469,
    "name": "NEW BALANCE Ref. 1469",
    "brand": "New Balance",
    "category": "Casual",
    "price": 159000,
    "rating": 4.4,
    "reviewsCount": 44,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_469.jpg",
    "featured": false,
    "images": [
      "products/shoe_469.jpg"
    ]
  },
  {
    "id": 470,
    "name": "NEW BALANCE Ref. 1470",
    "brand": "New Balance",
    "category": "Casual",
    "price": 154000,
    "rating": 4.5,
    "reviewsCount": 55,
    "description": "Zapatos New Balance  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_470.jpg",
    "featured": false,
    "images": [
      "products/shoe_470.jpg"
    ]
  },
  {
    "id": 471,
    "name": "NIKE AF1 Ref. 1471",
    "brand": "Nike",
    "category": "Casual",
    "price": 194000,
    "rating": 4.6,
    "reviewsCount": 66,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_471.jpg",
    "featured": false,
    "images": [
      "products/shoe_471.jpg"
    ]
  },
  {
    "id": 472,
    "name": "NIKE AF1 Ref. 1472",
    "brand": "Nike",
    "category": "Casual",
    "price": 188000,
    "rating": 4.7,
    "reviewsCount": 77,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_472.jpg",
    "featured": false,
    "images": [
      "products/shoe_472.jpg"
    ]
  },
  {
    "id": 473,
    "name": "NIKE AF1 Ref. 1473",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 4.8,
    "reviewsCount": 8,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_473.jpg",
    "featured": false,
    "images": [
      "products/shoe_473.jpg"
    ]
  },
  {
    "id": 474,
    "name": "NIKE AF1 Ref. 1474",
    "brand": "Nike",
    "category": "Casual",
    "price": 187000,
    "rating": 4.9,
    "reviewsCount": 19,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_474.jpg",
    "featured": false,
    "images": [
      "products/shoe_474.jpg"
    ]
  },
  {
    "id": 475,
    "name": "NIKE AF1 Ref. 1475",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 5.0,
    "reviewsCount": 30,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_475.jpg",
    "featured": false,
    "images": [
      "products/shoe_475.jpg"
    ]
  },
  {
    "id": 476,
    "name": "NIKE AF1 Ref. 1476",
    "brand": "Nike",
    "category": "Casual",
    "price": 191000,
    "rating": 4.4,
    "reviewsCount": 41,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_476.jpg",
    "featured": false,
    "images": [
      "products/shoe_476.jpg"
    ]
  },
  {
    "id": 477,
    "name": "NIKE AF1 Ref. 1477",
    "brand": "Nike",
    "category": "Casual",
    "price": 218000,
    "rating": 4.5,
    "reviewsCount": 52,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_477.jpg",
    "featured": false,
    "images": [
      "products/shoe_477.jpg"
    ]
  },
  {
    "id": 478,
    "name": "NIKE AF1 Ref. 1478",
    "brand": "Nike",
    "category": "Casual",
    "price": 191000,
    "rating": 4.6,
    "reviewsCount": 63,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_478.jpg",
    "featured": false,
    "images": [
      "products/shoe_478.jpg"
    ]
  },
  {
    "id": 479,
    "name": "NIKE AF1 Ref. 1479",
    "brand": "Nike",
    "category": "Casual",
    "price": 214000,
    "rating": 4.7,
    "reviewsCount": 74,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_479.jpg",
    "featured": false,
    "images": [
      "products/shoe_479.jpg"
    ]
  },
  {
    "id": 480,
    "name": "NIKE AF1 Ref. 1480",
    "brand": "Nike",
    "category": "Casual",
    "price": 194000,
    "rating": 4.8,
    "reviewsCount": 5,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_480.jpg",
    "featured": true,
    "images": [
      "products/shoe_480.jpg"
    ]
  },
  {
    "id": 481,
    "name": "NIKE AF1 Ref. 1481",
    "brand": "Nike",
    "category": "Casual",
    "price": 186000,
    "rating": 4.9,
    "reviewsCount": 16,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_481.jpg",
    "featured": false,
    "images": [
      "products/shoe_481.jpg"
    ]
  },
  {
    "id": 482,
    "name": "NIKE AF1 Ref. 1482",
    "brand": "Nike",
    "category": "Casual",
    "price": 180000,
    "rating": 5.0,
    "reviewsCount": 27,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_482.jpg",
    "featured": false,
    "images": [
      "products/shoe_482.jpg"
    ]
  },
  {
    "id": 483,
    "name": "NIKE AF1 Ref. 1483",
    "brand": "Nike",
    "category": "Casual",
    "price": 188000,
    "rating": 4.4,
    "reviewsCount": 38,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_483.jpg",
    "featured": false,
    "images": [
      "products/shoe_483.jpg"
    ]
  },
  {
    "id": 484,
    "name": "NIKE AF1 Ref. 1484",
    "brand": "Nike",
    "category": "Casual",
    "price": 182000,
    "rating": 4.5,
    "reviewsCount": 49,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_484.jpg",
    "featured": false,
    "images": [
      "products/shoe_484.jpg"
    ]
  },
  {
    "id": 485,
    "name": "NIKE AF1 Ref. 1485",
    "brand": "Nike",
    "category": "Casual",
    "price": 194000,
    "rating": 4.6,
    "reviewsCount": 60,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_485.jpg",
    "featured": false,
    "images": [
      "products/shoe_485.jpg"
    ]
  },
  {
    "id": 486,
    "name": "NIKE AF1 Ref. 1486",
    "brand": "Nike",
    "category": "Casual",
    "price": 193000,
    "rating": 4.7,
    "reviewsCount": 71,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_486.jpg",
    "featured": false,
    "images": [
      "products/shoe_486.jpg"
    ]
  },
  {
    "id": 487,
    "name": "NIKE AF1 Ref. 1487",
    "brand": "Nike",
    "category": "Casual",
    "price": 190000,
    "rating": 4.8,
    "reviewsCount": 82,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_487.jpg",
    "featured": false,
    "images": [
      "products/shoe_487.jpg"
    ]
  },
  {
    "id": 488,
    "name": "NIKE AF1 Ref. 1488",
    "brand": "Nike",
    "category": "Casual",
    "price": 208000,
    "rating": 4.9,
    "reviewsCount": 13,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_488.jpg",
    "featured": false,
    "images": [
      "products/shoe_488.jpg"
    ]
  },
  {
    "id": 489,
    "name": "NIKE AF1 Ref. 1489",
    "brand": "Nike",
    "category": "Casual",
    "price": 180000,
    "rating": 5.0,
    "reviewsCount": 24,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_489.jpg",
    "featured": false,
    "images": [
      "products/shoe_489.jpg"
    ]
  },
  {
    "id": 490,
    "name": "NIKE AF1 Ref. 1490",
    "brand": "Nike",
    "category": "Casual",
    "price": 213000,
    "rating": 4.4,
    "reviewsCount": 35,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_490.jpg",
    "featured": false,
    "images": [
      "products/shoe_490.jpg"
    ]
  },
  {
    "id": 491,
    "name": "NIKE AF1 Ref. 1491",
    "brand": "Nike",
    "category": "Casual",
    "price": 209000,
    "rating": 4.5,
    "reviewsCount": 46,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_491.jpg",
    "featured": false,
    "images": [
      "products/shoe_491.jpg"
    ]
  },
  {
    "id": 492,
    "name": "NIKE AF1 Ref. 1492",
    "brand": "Nike",
    "category": "Casual",
    "price": 209000,
    "rating": 4.6,
    "reviewsCount": 57,
    "description": "Zapatos Nike AF1 de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_492.jpg",
    "featured": true,
    "images": [
      "products/shoe_492.jpg"
    ]
  },
  {
    "id": 493,
    "name": "NIKE NOCTA Ref. 1493",
    "brand": "Nike",
    "category": "Casual",
    "price": 181000,
    "rating": 4.7,
    "reviewsCount": 68,
    "description": "Zapatos Nike NOCTA de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_493.jpg",
    "featured": false,
    "images": [
      "products/shoe_493.jpg"
    ]
  },
  {
    "id": 494,
    "name": "NIKE NOCTA Ref. 1494",
    "brand": "Nike",
    "category": "Casual",
    "price": 219000,
    "rating": 4.8,
    "reviewsCount": 79,
    "description": "Zapatos Nike NOCTA de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_494.jpg",
    "featured": false,
    "images": [
      "products/shoe_494.jpg"
    ]
  },
  {
    "id": 495,
    "name": "NIKE NOCTA Ref. 1495",
    "brand": "Nike",
    "category": "Casual",
    "price": 206000,
    "rating": 4.9,
    "reviewsCount": 10,
    "description": "Zapatos Nike NOCTA de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_495.jpg",
    "featured": false,
    "images": [
      "products/shoe_495.jpg"
    ]
  },
  {
    "id": 496,
    "name": "NIKE TOP QUALITY Ref. 1496",
    "brand": "Nike",
    "category": "Casual",
    "price": 194000,
    "rating": 5.0,
    "reviewsCount": 21,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_496.jpg",
    "featured": false,
    "images": [
      "products/shoe_496.jpg"
    ]
  },
  {
    "id": 497,
    "name": "NIKE TOP QUALITY Ref. 1497",
    "brand": "Nike",
    "category": "Casual",
    "price": 213000,
    "rating": 4.4,
    "reviewsCount": 32,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_497.jpg",
    "featured": false,
    "images": [
      "products/shoe_497.jpg"
    ]
  },
  {
    "id": 498,
    "name": "NIKE TOP QUALITY Ref. 1498",
    "brand": "Nike",
    "category": "Casual",
    "price": 181000,
    "rating": 4.5,
    "reviewsCount": 43,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_498.jpg",
    "featured": false,
    "images": [
      "products/shoe_498.jpg"
    ]
  },
  {
    "id": 499,
    "name": "NIKE TOP QUALITY Ref. 1499",
    "brand": "Nike",
    "category": "Casual",
    "price": 184000,
    "rating": 4.6,
    "reviewsCount": 54,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_499.jpg",
    "featured": false,
    "images": [
      "products/shoe_499.jpg"
    ]
  },
  {
    "id": 500,
    "name": "NIKE TOP QUALITY Ref. 1500",
    "brand": "Nike",
    "category": "Casual",
    "price": 199000,
    "rating": 4.7,
    "reviewsCount": 65,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_500.jpg",
    "featured": false,
    "images": [
      "products/shoe_500.jpg"
    ]
  },
  {
    "id": 501,
    "name": "NIKE TOP QUALITY Ref. 1501",
    "brand": "Nike",
    "category": "Casual",
    "price": 217000,
    "rating": 4.8,
    "reviewsCount": 76,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_501.jpg",
    "featured": false,
    "images": [
      "products/shoe_501.jpg"
    ]
  },
  {
    "id": 502,
    "name": "NIKE TOP QUALITY Ref. 1502",
    "brand": "Nike",
    "category": "Casual",
    "price": 209000,
    "rating": 4.9,
    "reviewsCount": 7,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_502.jpg",
    "featured": false,
    "images": [
      "products/shoe_502.jpg"
    ]
  },
  {
    "id": 503,
    "name": "NIKE TOP QUALITY Ref. 1503",
    "brand": "Nike",
    "category": "Casual",
    "price": 186000,
    "rating": 5.0,
    "reviewsCount": 18,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_503.jpg",
    "featured": false,
    "images": [
      "products/shoe_503.jpg"
    ]
  },
  {
    "id": 504,
    "name": "NIKE TOP QUALITY Ref. 1504",
    "brand": "Nike",
    "category": "Casual",
    "price": 184000,
    "rating": 4.4,
    "reviewsCount": 29,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_504.jpg",
    "featured": true,
    "images": [
      "products/shoe_504.jpg"
    ]
  },
  {
    "id": 505,
    "name": "NIKE TOP QUALITY Ref. 1505",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 4.5,
    "reviewsCount": 40,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_505.jpg",
    "featured": false,
    "images": [
      "products/shoe_505.jpg"
    ]
  },
  {
    "id": 506,
    "name": "NIKE TOP QUALITY Ref. 1506",
    "brand": "Nike",
    "category": "Casual",
    "price": 185000,
    "rating": 4.6,
    "reviewsCount": 51,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_506.jpg",
    "featured": false,
    "images": [
      "products/shoe_506.jpg"
    ]
  },
  {
    "id": 507,
    "name": "NIKE TOP QUALITY Ref. 1507",
    "brand": "Nike",
    "category": "Casual",
    "price": 219000,
    "rating": 4.7,
    "reviewsCount": 62,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_507.jpg",
    "featured": false,
    "images": [
      "products/shoe_507.jpg"
    ]
  },
  {
    "id": 508,
    "name": "NIKE TOP QUALITY Ref. 1508",
    "brand": "Nike",
    "category": "Casual",
    "price": 215000,
    "rating": 4.8,
    "reviewsCount": 73,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_508.jpg",
    "featured": false,
    "images": [
      "products/shoe_508.jpg"
    ]
  },
  {
    "id": 509,
    "name": "NIKE TOP QUALITY Ref. 1509",
    "brand": "Nike",
    "category": "Casual",
    "price": 194000,
    "rating": 4.9,
    "reviewsCount": 84,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_509.jpg",
    "featured": false,
    "images": [
      "products/shoe_509.jpg"
    ]
  },
  {
    "id": 510,
    "name": "NIKE TOP QUALITY Ref. 1510",
    "brand": "Nike",
    "category": "Casual",
    "price": 181000,
    "rating": 5.0,
    "reviewsCount": 15,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_510.jpg",
    "featured": false,
    "images": [
      "products/shoe_510.jpg"
    ]
  },
  {
    "id": 511,
    "name": "NIKE TOP QUALITY Ref. 1511",
    "brand": "Nike",
    "category": "Casual",
    "price": 207000,
    "rating": 4.4,
    "reviewsCount": 26,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_511.jpg",
    "featured": false,
    "images": [
      "products/shoe_511.jpg"
    ]
  },
  {
    "id": 512,
    "name": "NIKE TOP QUALITY Ref. 1512",
    "brand": "Nike",
    "category": "Casual",
    "price": 209000,
    "rating": 4.5,
    "reviewsCount": 37,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_512.jpg",
    "featured": false,
    "images": [
      "products/shoe_512.jpg"
    ]
  },
  {
    "id": 513,
    "name": "NIKE TOP QUALITY Ref. 1513",
    "brand": "Nike",
    "category": "Casual",
    "price": 196000,
    "rating": 4.6,
    "reviewsCount": 48,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_513.jpg",
    "featured": false,
    "images": [
      "products/shoe_513.jpg"
    ]
  },
  {
    "id": 514,
    "name": "NIKE TOP QUALITY Ref. 1514",
    "brand": "Nike",
    "category": "Casual",
    "price": 193000,
    "rating": 4.7,
    "reviewsCount": 59,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_514.jpg",
    "featured": false,
    "images": [
      "products/shoe_514.jpg"
    ]
  },
  {
    "id": 515,
    "name": "NIKE TOP QUALITY Ref. 1515",
    "brand": "Nike",
    "category": "Casual",
    "price": 190000,
    "rating": 4.8,
    "reviewsCount": 70,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_515.jpg",
    "featured": false,
    "images": [
      "products/shoe_515.jpg"
    ]
  },
  {
    "id": 516,
    "name": "NIKE TOP QUALITY Ref. 1516",
    "brand": "Nike",
    "category": "Casual",
    "price": 189000,
    "rating": 4.9,
    "reviewsCount": 81,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_516.jpg",
    "featured": true,
    "images": [
      "products/shoe_516.jpg"
    ]
  },
  {
    "id": 517,
    "name": "NIKE TOP QUALITY Ref. 1517",
    "brand": "Nike",
    "category": "Casual",
    "price": 213000,
    "rating": 5.0,
    "reviewsCount": 12,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_517.jpg",
    "featured": false,
    "images": [
      "products/shoe_517.jpg"
    ]
  },
  {
    "id": 518,
    "name": "NIKE TOP QUALITY Ref. 1518",
    "brand": "Nike",
    "category": "Casual",
    "price": 190000,
    "rating": 4.4,
    "reviewsCount": 23,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_518.jpg",
    "featured": false,
    "images": [
      "products/shoe_518.jpg"
    ]
  },
  {
    "id": 519,
    "name": "NIKE TOP QUALITY Ref. 1519",
    "brand": "Nike",
    "category": "Casual",
    "price": 181000,
    "rating": 4.5,
    "reviewsCount": 34,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_519.jpg",
    "featured": false,
    "images": [
      "products/shoe_519.jpg"
    ]
  },
  {
    "id": 520,
    "name": "NIKE TOP QUALITY Ref. 1520",
    "brand": "Nike",
    "category": "Casual",
    "price": 209000,
    "rating": 4.6,
    "reviewsCount": 45,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_520.jpg",
    "featured": false,
    "images": [
      "products/shoe_520.jpg"
    ]
  },
  {
    "id": 521,
    "name": "NIKE TOP QUALITY Ref. 1521",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 4.7,
    "reviewsCount": 56,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_521.jpg",
    "featured": false,
    "images": [
      "products/shoe_521.jpg"
    ]
  },
  {
    "id": 522,
    "name": "NIKE TOP QUALITY Ref. 1522",
    "brand": "Nike",
    "category": "Casual",
    "price": 200000,
    "rating": 4.8,
    "reviewsCount": 67,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_522.jpg",
    "featured": false,
    "images": [
      "products/shoe_522.jpg"
    ]
  },
  {
    "id": 523,
    "name": "NIKE TOP QUALITY Ref. 1523",
    "brand": "Nike",
    "category": "Casual",
    "price": 185000,
    "rating": 4.9,
    "reviewsCount": 78,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_523.jpg",
    "featured": false,
    "images": [
      "products/shoe_523.jpg"
    ]
  },
  {
    "id": 524,
    "name": "NIKE TOP QUALITY Ref. 1524",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 5.0,
    "reviewsCount": 9,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_524.jpg",
    "featured": false,
    "images": [
      "products/shoe_524.jpg"
    ]
  },
  {
    "id": 525,
    "name": "NIKE TOP QUALITY Ref. 1525",
    "brand": "Nike",
    "category": "Casual",
    "price": 202000,
    "rating": 4.4,
    "reviewsCount": 20,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_525.jpg",
    "featured": false,
    "images": [
      "products/shoe_525.jpg"
    ]
  },
  {
    "id": 526,
    "name": "NIKE TOP QUALITY Ref. 1526",
    "brand": "Nike",
    "category": "Casual",
    "price": 194000,
    "rating": 4.5,
    "reviewsCount": 31,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_526.jpg",
    "featured": false,
    "images": [
      "products/shoe_526.jpg"
    ]
  },
  {
    "id": 527,
    "name": "NIKE TOP QUALITY Ref. 1527",
    "brand": "Nike",
    "category": "Casual",
    "price": 208000,
    "rating": 4.6,
    "reviewsCount": 42,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_527.jpg",
    "featured": false,
    "images": [
      "products/shoe_527.jpg"
    ]
  },
  {
    "id": 528,
    "name": "NIKE TOP QUALITY Ref. 1528",
    "brand": "Nike",
    "category": "Casual",
    "price": 182000,
    "rating": 4.7,
    "reviewsCount": 53,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_528.jpg",
    "featured": true,
    "images": [
      "products/shoe_528.jpg"
    ]
  },
  {
    "id": 529,
    "name": "NIKE TOP QUALITY Ref. 1529",
    "brand": "Nike",
    "category": "Casual",
    "price": 188000,
    "rating": 4.8,
    "reviewsCount": 64,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_529.jpg",
    "featured": false,
    "images": [
      "products/shoe_529.jpg"
    ]
  },
  {
    "id": 530,
    "name": "NIKE TOP QUALITY Ref. 1530",
    "brand": "Nike",
    "category": "Casual",
    "price": 180000,
    "rating": 4.9,
    "reviewsCount": 75,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_530.jpg",
    "featured": false,
    "images": [
      "products/shoe_530.jpg"
    ]
  },
  {
    "id": 531,
    "name": "NIKE TOP QUALITY Ref. 1531",
    "brand": "Nike",
    "category": "Casual",
    "price": 200000,
    "rating": 5.0,
    "reviewsCount": 6,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_531.jpg",
    "featured": false,
    "images": [
      "products/shoe_531.jpg"
    ]
  },
  {
    "id": 532,
    "name": "NIKE TOP QUALITY Ref. 1532",
    "brand": "Nike",
    "category": "Casual",
    "price": 213000,
    "rating": 4.4,
    "reviewsCount": 17,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_532.jpg",
    "featured": false,
    "images": [
      "products/shoe_532.jpg"
    ]
  },
  {
    "id": 533,
    "name": "NIKE TOP QUALITY Ref. 1533",
    "brand": "Nike",
    "category": "Casual",
    "price": 196000,
    "rating": 4.5,
    "reviewsCount": 28,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_533.jpg",
    "featured": false,
    "images": [
      "products/shoe_533.jpg"
    ]
  },
  {
    "id": 534,
    "name": "NIKE TOP QUALITY Ref. 1534",
    "brand": "Nike",
    "category": "Casual",
    "price": 190000,
    "rating": 4.6,
    "reviewsCount": 39,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_534.jpg",
    "featured": false,
    "images": [
      "products/shoe_534.jpg"
    ]
  },
  {
    "id": 535,
    "name": "NIKE TOP QUALITY Ref. 1535",
    "brand": "Nike",
    "category": "Casual",
    "price": 182000,
    "rating": 4.7,
    "reviewsCount": 50,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_535.jpg",
    "featured": false,
    "images": [
      "products/shoe_535.jpg"
    ]
  },
  {
    "id": 536,
    "name": "NIKE TOP QUALITY Ref. 1536",
    "brand": "Nike",
    "category": "Casual",
    "price": 182000,
    "rating": 4.8,
    "reviewsCount": 61,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_536.jpg",
    "featured": false,
    "images": [
      "products/shoe_536.jpg"
    ]
  },
  {
    "id": 537,
    "name": "NIKE TOP QUALITY Ref. 1537",
    "brand": "Nike",
    "category": "Casual",
    "price": 204000,
    "rating": 4.9,
    "reviewsCount": 72,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_537.jpg",
    "featured": false,
    "images": [
      "products/shoe_537.jpg"
    ]
  },
  {
    "id": 538,
    "name": "NIKE TOP QUALITY Ref. 1538",
    "brand": "Nike",
    "category": "Casual",
    "price": 218000,
    "rating": 5.0,
    "reviewsCount": 83,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_538.jpg",
    "featured": false,
    "images": [
      "products/shoe_538.jpg"
    ]
  },
  {
    "id": 539,
    "name": "NIKE TOP QUALITY Ref. 1539",
    "brand": "Nike",
    "category": "Casual",
    "price": 181000,
    "rating": 4.4,
    "reviewsCount": 14,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_539.jpg",
    "featured": false,
    "images": [
      "products/shoe_539.jpg"
    ]
  },
  {
    "id": 540,
    "name": "NIKE TOP QUALITY Ref. 1540",
    "brand": "Nike",
    "category": "Casual",
    "price": 201000,
    "rating": 4.5,
    "reviewsCount": 25,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_540.jpg",
    "featured": true,
    "images": [
      "products/shoe_540.jpg"
    ]
  },
  {
    "id": 541,
    "name": "NIKE TOP QUALITY Ref. 1541",
    "brand": "Nike",
    "category": "Casual",
    "price": 210000,
    "rating": 4.6,
    "reviewsCount": 36,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_541.jpg",
    "featured": false,
    "images": [
      "products/shoe_541.jpg"
    ]
  },
  {
    "id": 542,
    "name": "NIKE TOP QUALITY Ref. 1542",
    "brand": "Nike",
    "category": "Casual",
    "price": 181000,
    "rating": 4.7,
    "reviewsCount": 47,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_542.jpg",
    "featured": false,
    "images": [
      "products/shoe_542.jpg"
    ]
  },
  {
    "id": 543,
    "name": "NIKE TOP QUALITY Ref. 1543",
    "brand": "Nike",
    "category": "Casual",
    "price": 216000,
    "rating": 4.8,
    "reviewsCount": 58,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_543.jpg",
    "featured": false,
    "images": [
      "products/shoe_543.jpg"
    ]
  },
  {
    "id": 544,
    "name": "NIKE TOP QUALITY Ref. 1544",
    "brand": "Nike",
    "category": "Casual",
    "price": 202000,
    "rating": 4.9,
    "reviewsCount": 69,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_544.jpg",
    "featured": false,
    "images": [
      "products/shoe_544.jpg"
    ]
  },
  {
    "id": 545,
    "name": "NIKE TOP QUALITY Ref. 1545",
    "brand": "Nike",
    "category": "Casual",
    "price": 183000,
    "rating": 5.0,
    "reviewsCount": 80,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_545.jpg",
    "featured": false,
    "images": [
      "products/shoe_545.jpg"
    ]
  },
  {
    "id": 546,
    "name": "NIKE TOP QUALITY Ref. 1546",
    "brand": "Nike",
    "category": "Casual",
    "price": 217000,
    "rating": 4.4,
    "reviewsCount": 11,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_546.jpg",
    "featured": false,
    "images": [
      "products/shoe_546.jpg"
    ]
  },
  {
    "id": 547,
    "name": "NIKE TOP QUALITY Ref. 1547",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 4.5,
    "reviewsCount": 22,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_547.jpg",
    "featured": false,
    "images": [
      "products/shoe_547.jpg"
    ]
  },
  {
    "id": 548,
    "name": "NIKE TOP QUALITY Ref. 1548",
    "brand": "Nike",
    "category": "Casual",
    "price": 210000,
    "rating": 4.6,
    "reviewsCount": 33,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_548.jpg",
    "featured": false,
    "images": [
      "products/shoe_548.jpg"
    ]
  },
  {
    "id": 549,
    "name": "NIKE TOP QUALITY Ref. 1549",
    "brand": "Nike",
    "category": "Casual",
    "price": 186000,
    "rating": 4.7,
    "reviewsCount": 44,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_549.jpg",
    "featured": false,
    "images": [
      "products/shoe_549.jpg"
    ]
  },
  {
    "id": 550,
    "name": "NIKE TOP QUALITY Ref. 1550",
    "brand": "Nike",
    "category": "Casual",
    "price": 181000,
    "rating": 4.8,
    "reviewsCount": 55,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_550.jpg",
    "featured": false,
    "images": [
      "products/shoe_550.jpg"
    ]
  },
  {
    "id": 551,
    "name": "NIKE TOP QUALITY Ref. 1551",
    "brand": "Nike",
    "category": "Casual",
    "price": 212000,
    "rating": 4.9,
    "reviewsCount": 66,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_551.jpg",
    "featured": false,
    "images": [
      "products/shoe_551.jpg"
    ]
  },
  {
    "id": 552,
    "name": "NIKE TOP QUALITY Ref. 1552",
    "brand": "Nike",
    "category": "Casual",
    "price": 187000,
    "rating": 5.0,
    "reviewsCount": 77,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_552.jpg",
    "featured": true,
    "images": [
      "products/shoe_552.jpg"
    ]
  },
  {
    "id": 553,
    "name": "NIKE TOP QUALITY Ref. 1553",
    "brand": "Nike",
    "category": "Casual",
    "price": 203000,
    "rating": 4.4,
    "reviewsCount": 8,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_553.jpg",
    "featured": false,
    "images": [
      "products/shoe_553.jpg"
    ]
  },
  {
    "id": 554,
    "name": "NIKE TOP QUALITY Ref. 1554",
    "brand": "Nike",
    "category": "Casual",
    "price": 184000,
    "rating": 4.5,
    "reviewsCount": 19,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_554.jpg",
    "featured": false,
    "images": [
      "products/shoe_554.jpg"
    ]
  },
  {
    "id": 555,
    "name": "NIKE TOP QUALITY Ref. 1555",
    "brand": "Nike",
    "category": "Casual",
    "price": 191000,
    "rating": 4.6,
    "reviewsCount": 30,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_555.jpg",
    "featured": false,
    "images": [
      "products/shoe_555.jpg"
    ]
  },
  {
    "id": 556,
    "name": "NIKE TOP QUALITY Ref. 1556",
    "brand": "Nike",
    "category": "Casual",
    "price": 213000,
    "rating": 4.7,
    "reviewsCount": 41,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_556.jpg",
    "featured": false,
    "images": [
      "products/shoe_556.jpg"
    ]
  },
  {
    "id": 557,
    "name": "NIKE TOP QUALITY Ref. 1557",
    "brand": "Nike",
    "category": "Casual",
    "price": 191000,
    "rating": 4.8,
    "reviewsCount": 52,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_557.jpg",
    "featured": false,
    "images": [
      "products/shoe_557.jpg"
    ]
  },
  {
    "id": 558,
    "name": "NIKE TOP QUALITY Ref. 1558",
    "brand": "Nike",
    "category": "Casual",
    "price": 185000,
    "rating": 4.9,
    "reviewsCount": 63,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_558.jpg",
    "featured": false,
    "images": [
      "products/shoe_558.jpg"
    ]
  },
  {
    "id": 559,
    "name": "NIKE TOP QUALITY Ref. 1559",
    "brand": "Nike",
    "category": "Casual",
    "price": 216000,
    "rating": 5.0,
    "reviewsCount": 74,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_559.jpg",
    "featured": false,
    "images": [
      "products/shoe_559.jpg"
    ]
  },
  {
    "id": 560,
    "name": "NIKE TOP QUALITY Ref. 1560",
    "brand": "Nike",
    "category": "Casual",
    "price": 193000,
    "rating": 4.4,
    "reviewsCount": 5,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_560.jpg",
    "featured": false,
    "images": [
      "products/shoe_560.jpg"
    ]
  },
  {
    "id": 561,
    "name": "NIKE TOP QUALITY Ref. 1561",
    "brand": "Nike",
    "category": "Casual",
    "price": 214000,
    "rating": 4.5,
    "reviewsCount": 16,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_561.jpg",
    "featured": false,
    "images": [
      "products/shoe_561.jpg"
    ]
  },
  {
    "id": 562,
    "name": "NIKE TOP QUALITY Ref. 1562",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 4.6,
    "reviewsCount": 27,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_562.jpg",
    "featured": false,
    "images": [
      "products/shoe_562.jpg"
    ]
  },
  {
    "id": 563,
    "name": "NIKE TOP QUALITY Ref. 1563",
    "brand": "Nike",
    "category": "Casual",
    "price": 215000,
    "rating": 4.7,
    "reviewsCount": 38,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_563.jpg",
    "featured": false,
    "images": [
      "products/shoe_563.jpg"
    ]
  },
  {
    "id": 564,
    "name": "NIKE TOP QUALITY Ref. 1564",
    "brand": "Nike",
    "category": "Casual",
    "price": 218000,
    "rating": 4.8,
    "reviewsCount": 49,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_564.jpg",
    "featured": true,
    "images": [
      "products/shoe_564.jpg"
    ]
  },
  {
    "id": 565,
    "name": "NIKE TOP QUALITY Ref. 1565",
    "brand": "Nike",
    "category": "Casual",
    "price": 187000,
    "rating": 4.9,
    "reviewsCount": 60,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_565.jpg",
    "featured": false,
    "images": [
      "products/shoe_565.jpg"
    ]
  },
  {
    "id": 566,
    "name": "NIKE TOP QUALITY Ref. 1566",
    "brand": "Nike",
    "category": "Casual",
    "price": 203000,
    "rating": 5.0,
    "reviewsCount": 71,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_566.jpg",
    "featured": false,
    "images": [
      "products/shoe_566.jpg"
    ]
  },
  {
    "id": 567,
    "name": "NIKE TOP QUALITY Ref. 1567",
    "brand": "Nike",
    "category": "Casual",
    "price": 203000,
    "rating": 4.4,
    "reviewsCount": 82,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_567.jpg",
    "featured": false,
    "images": [
      "products/shoe_567.jpg"
    ]
  },
  {
    "id": 568,
    "name": "NIKE TOP QUALITY Ref. 1568",
    "brand": "Nike",
    "category": "Casual",
    "price": 218000,
    "rating": 4.5,
    "reviewsCount": 13,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_568.jpg",
    "featured": false,
    "images": [
      "products/shoe_568.jpg"
    ]
  },
  {
    "id": 569,
    "name": "NIKE TOP QUALITY Ref. 1569",
    "brand": "Nike",
    "category": "Casual",
    "price": 196000,
    "rating": 4.6,
    "reviewsCount": 24,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_569.jpg",
    "featured": false,
    "images": [
      "products/shoe_569.jpg"
    ]
  },
  {
    "id": 570,
    "name": "NIKE TOP QUALITY Ref. 1570",
    "brand": "Nike",
    "category": "Casual",
    "price": 205000,
    "rating": 4.7,
    "reviewsCount": 35,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_570.jpg",
    "featured": false,
    "images": [
      "products/shoe_570.jpg"
    ]
  },
  {
    "id": 571,
    "name": "NIKE TOP QUALITY Ref. 1571",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 4.8,
    "reviewsCount": 46,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_571.jpg",
    "featured": false,
    "images": [
      "products/shoe_571.jpg"
    ]
  },
  {
    "id": 572,
    "name": "NIKE TOP QUALITY Ref. 1572",
    "brand": "Nike",
    "category": "Casual",
    "price": 183000,
    "rating": 4.9,
    "reviewsCount": 57,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_572.jpg",
    "featured": false,
    "images": [
      "products/shoe_572.jpg"
    ]
  },
  {
    "id": 573,
    "name": "NIKE TOP QUALITY Ref. 1573",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 5.0,
    "reviewsCount": 68,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_573.jpg",
    "featured": false,
    "images": [
      "products/shoe_573.jpg"
    ]
  },
  {
    "id": 574,
    "name": "NIKE TOP QUALITY Ref. 1574",
    "brand": "Nike",
    "category": "Casual",
    "price": 202000,
    "rating": 4.4,
    "reviewsCount": 79,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_574.jpg",
    "featured": false,
    "images": [
      "products/shoe_574.jpg"
    ]
  },
  {
    "id": 575,
    "name": "NIKE TOP QUALITY Ref. 1575",
    "brand": "Nike",
    "category": "Casual",
    "price": 188000,
    "rating": 4.5,
    "reviewsCount": 10,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_575.jpg",
    "featured": false,
    "images": [
      "products/shoe_575.jpg"
    ]
  },
  {
    "id": 576,
    "name": "NIKE TOP QUALITY Ref. 1576",
    "brand": "Nike",
    "category": "Casual",
    "price": 191000,
    "rating": 4.6,
    "reviewsCount": 21,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_576.jpg",
    "featured": true,
    "images": [
      "products/shoe_576.jpg"
    ]
  },
  {
    "id": 577,
    "name": "NIKE TOP QUALITY Ref. 1577",
    "brand": "Nike",
    "category": "Casual",
    "price": 210000,
    "rating": 4.7,
    "reviewsCount": 32,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_577.jpg",
    "featured": false,
    "images": [
      "products/shoe_577.jpg"
    ]
  },
  {
    "id": 578,
    "name": "NIKE TOP QUALITY Ref. 1578",
    "brand": "Nike",
    "category": "Casual",
    "price": 208000,
    "rating": 4.8,
    "reviewsCount": 43,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_578.jpg",
    "featured": false,
    "images": [
      "products/shoe_578.jpg"
    ]
  },
  {
    "id": 579,
    "name": "NIKE TOP QUALITY Ref. 1579",
    "brand": "Nike",
    "category": "Casual",
    "price": 211000,
    "rating": 4.9,
    "reviewsCount": 54,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_579.jpg",
    "featured": false,
    "images": [
      "products/shoe_579.jpg"
    ]
  },
  {
    "id": 580,
    "name": "NIKE TOP QUALITY Ref. 1580",
    "brand": "Nike",
    "category": "Casual",
    "price": 218000,
    "rating": 5.0,
    "reviewsCount": 65,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_580.jpg",
    "featured": false,
    "images": [
      "products/shoe_580.jpg"
    ]
  },
  {
    "id": 581,
    "name": "NIKE TOP QUALITY Ref. 1581",
    "brand": "Nike",
    "category": "Casual",
    "price": 185000,
    "rating": 4.4,
    "reviewsCount": 76,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_581.jpg",
    "featured": false,
    "images": [
      "products/shoe_581.jpg"
    ]
  },
  {
    "id": 582,
    "name": "NIKE TOP QUALITY Ref. 1582",
    "brand": "Nike",
    "category": "Casual",
    "price": 212000,
    "rating": 4.5,
    "reviewsCount": 7,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_582.jpg",
    "featured": false,
    "images": [
      "products/shoe_582.jpg"
    ]
  },
  {
    "id": 583,
    "name": "NIKE TOP QUALITY Ref. 1583",
    "brand": "Nike",
    "category": "Casual",
    "price": 216000,
    "rating": 4.6,
    "reviewsCount": 18,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_583.jpg",
    "featured": false,
    "images": [
      "products/shoe_583.jpg"
    ]
  },
  {
    "id": 584,
    "name": "NIKE TOP QUALITY Ref. 1584",
    "brand": "Nike",
    "category": "Casual",
    "price": 201000,
    "rating": 4.7,
    "reviewsCount": 29,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_584.jpg",
    "featured": false,
    "images": [
      "products/shoe_584.jpg"
    ]
  },
  {
    "id": 585,
    "name": "NIKE TOP QUALITY Ref. 1585",
    "brand": "Nike",
    "category": "Casual",
    "price": 206000,
    "rating": 4.8,
    "reviewsCount": 40,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_585.jpg",
    "featured": false,
    "images": [
      "products/shoe_585.jpg"
    ]
  },
  {
    "id": 586,
    "name": "NIKE TOP QUALITY Ref. 1586",
    "brand": "Nike",
    "category": "Casual",
    "price": 219000,
    "rating": 4.9,
    "reviewsCount": 51,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_586.jpg",
    "featured": false,
    "images": [
      "products/shoe_586.jpg"
    ]
  },
  {
    "id": 587,
    "name": "NIKE TOP QUALITY Ref. 1587",
    "brand": "Nike",
    "category": "Casual",
    "price": 209000,
    "rating": 5.0,
    "reviewsCount": 62,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_587.jpg",
    "featured": false,
    "images": [
      "products/shoe_587.jpg"
    ]
  },
  {
    "id": 588,
    "name": "NIKE TOP QUALITY Ref. 1588",
    "brand": "Nike",
    "category": "Casual",
    "price": 196000,
    "rating": 4.4,
    "reviewsCount": 73,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_588.jpg",
    "featured": true,
    "images": [
      "products/shoe_588.jpg"
    ]
  },
  {
    "id": 589,
    "name": "NIKE TOP QUALITY Ref. 1589",
    "brand": "Nike",
    "category": "Casual",
    "price": 193000,
    "rating": 4.5,
    "reviewsCount": 84,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_589.jpg",
    "featured": false,
    "images": [
      "products/shoe_589.jpg"
    ]
  },
  {
    "id": 590,
    "name": "NIKE TOP QUALITY Ref. 1590",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 4.6,
    "reviewsCount": 15,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_590.jpg",
    "featured": false,
    "images": [
      "products/shoe_590.jpg"
    ]
  },
  {
    "id": 591,
    "name": "NIKE TOP QUALITY Ref. 1591",
    "brand": "Nike",
    "category": "Casual",
    "price": 217000,
    "rating": 4.7,
    "reviewsCount": 26,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_591.jpg",
    "featured": false,
    "images": [
      "products/shoe_591.jpg"
    ]
  },
  {
    "id": 592,
    "name": "NIKE TOP QUALITY Ref. 1592",
    "brand": "Nike",
    "category": "Casual",
    "price": 198000,
    "rating": 4.8,
    "reviewsCount": 37,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_592.jpg",
    "featured": false,
    "images": [
      "products/shoe_592.jpg"
    ]
  },
  {
    "id": 593,
    "name": "NIKE TOP QUALITY Ref. 1593",
    "brand": "Nike",
    "category": "Casual",
    "price": 218000,
    "rating": 4.9,
    "reviewsCount": 48,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_593.jpg",
    "featured": false,
    "images": [
      "products/shoe_593.jpg"
    ]
  },
  {
    "id": 594,
    "name": "NIKE TOP QUALITY Ref. 1594",
    "brand": "Nike",
    "category": "Casual",
    "price": 214000,
    "rating": 5.0,
    "reviewsCount": 59,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_594.jpg",
    "featured": false,
    "images": [
      "products/shoe_594.jpg"
    ]
  },
  {
    "id": 595,
    "name": "NIKE TOP QUALITY Ref. 1595",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 4.4,
    "reviewsCount": 70,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_595.jpg",
    "featured": false,
    "images": [
      "products/shoe_595.jpg"
    ]
  },
  {
    "id": 596,
    "name": "NIKE TOP QUALITY Ref. 1596",
    "brand": "Nike",
    "category": "Casual",
    "price": 209000,
    "rating": 4.5,
    "reviewsCount": 81,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_596.jpg",
    "featured": false,
    "images": [
      "products/shoe_596.jpg"
    ]
  },
  {
    "id": 597,
    "name": "NIKE TOP QUALITY Ref. 1597",
    "brand": "Nike",
    "category": "Casual",
    "price": 182000,
    "rating": 4.6,
    "reviewsCount": 12,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_597.jpg",
    "featured": false,
    "images": [
      "products/shoe_597.jpg"
    ]
  },
  {
    "id": 598,
    "name": "NIKE TOP QUALITY Ref. 1598",
    "brand": "Nike",
    "category": "Casual",
    "price": 196000,
    "rating": 4.7,
    "reviewsCount": 23,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_598.jpg",
    "featured": false,
    "images": [
      "products/shoe_598.jpg"
    ]
  },
  {
    "id": 599,
    "name": "NIKE TOP QUALITY Ref. 1599",
    "brand": "Nike",
    "category": "Casual",
    "price": 182000,
    "rating": 4.8,
    "reviewsCount": 34,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_599.jpg",
    "featured": false,
    "images": [
      "products/shoe_599.jpg"
    ]
  },
  {
    "id": 600,
    "name": "NIKE TOP QUALITY Ref. 1600",
    "brand": "Nike",
    "category": "Casual",
    "price": 218000,
    "rating": 4.9,
    "reviewsCount": 45,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_600.jpg",
    "featured": true,
    "images": [
      "products/shoe_600.jpg"
    ]
  },
  {
    "id": 601,
    "name": "NIKE TOP QUALITY Ref. 1601",
    "brand": "Nike",
    "category": "Casual",
    "price": 198000,
    "rating": 5.0,
    "reviewsCount": 56,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_601.jpg",
    "featured": false,
    "images": [
      "products/shoe_601.jpg"
    ]
  },
  {
    "id": 602,
    "name": "NIKE TOP QUALITY Ref. 1602",
    "brand": "Nike",
    "category": "Casual",
    "price": 201000,
    "rating": 4.4,
    "reviewsCount": 67,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_602.jpg",
    "featured": false,
    "images": [
      "products/shoe_602.jpg"
    ]
  },
  {
    "id": 603,
    "name": "NIKE TOP QUALITY Ref. 1603",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 4.5,
    "reviewsCount": 78,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_603.jpg",
    "featured": false,
    "images": [
      "products/shoe_603.jpg"
    ]
  },
  {
    "id": 604,
    "name": "NIKE TOP QUALITY Ref. 1604",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 4.6,
    "reviewsCount": 9,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_604.jpg",
    "featured": false,
    "images": [
      "products/shoe_604.jpg"
    ]
  },
  {
    "id": 605,
    "name": "NIKE TOP QUALITY Ref. 1605",
    "brand": "Nike",
    "category": "Casual",
    "price": 193000,
    "rating": 4.7,
    "reviewsCount": 20,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_605.jpg",
    "featured": false,
    "images": [
      "products/shoe_605.jpg"
    ]
  },
  {
    "id": 606,
    "name": "NIKE TOP QUALITY Ref. 1606",
    "brand": "Nike",
    "category": "Casual",
    "price": 188000,
    "rating": 4.8,
    "reviewsCount": 31,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_606.jpg",
    "featured": false,
    "images": [
      "products/shoe_606.jpg"
    ]
  },
  {
    "id": 607,
    "name": "NIKE TOP QUALITY Ref. 1607",
    "brand": "Nike",
    "category": "Casual",
    "price": 210000,
    "rating": 4.9,
    "reviewsCount": 42,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_607.jpg",
    "featured": false,
    "images": [
      "products/shoe_607.jpg"
    ]
  },
  {
    "id": 608,
    "name": "NIKE TOP QUALITY Ref. 1608",
    "brand": "Nike",
    "category": "Casual",
    "price": 190000,
    "rating": 5.0,
    "reviewsCount": 53,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_608.jpg",
    "featured": false,
    "images": [
      "products/shoe_608.jpg"
    ]
  },
  {
    "id": 609,
    "name": "NIKE TOP QUALITY Ref. 1609",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 4.4,
    "reviewsCount": 64,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_609.jpg",
    "featured": false,
    "images": [
      "products/shoe_609.jpg"
    ]
  },
  {
    "id": 610,
    "name": "NIKE TOP QUALITY Ref. 1610",
    "brand": "Nike",
    "category": "Casual",
    "price": 183000,
    "rating": 4.5,
    "reviewsCount": 75,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_610.jpg",
    "featured": false,
    "images": [
      "products/shoe_610.jpg"
    ]
  },
  {
    "id": 611,
    "name": "NIKE TOP QUALITY Ref. 1611",
    "brand": "Nike",
    "category": "Casual",
    "price": 181000,
    "rating": 4.6,
    "reviewsCount": 6,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_611.jpg",
    "featured": false,
    "images": [
      "products/shoe_611.jpg"
    ]
  },
  {
    "id": 612,
    "name": "NIKE TOP QUALITY Ref. 1612",
    "brand": "Nike",
    "category": "Casual",
    "price": 195000,
    "rating": 4.7,
    "reviewsCount": 17,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_612.jpg",
    "featured": true,
    "images": [
      "products/shoe_612.jpg"
    ]
  },
  {
    "id": 613,
    "name": "NIKE TOP QUALITY Ref. 1613",
    "brand": "Nike",
    "category": "Casual",
    "price": 217000,
    "rating": 4.8,
    "reviewsCount": 28,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_613.jpg",
    "featured": false,
    "images": [
      "products/shoe_613.jpg"
    ]
  },
  {
    "id": 614,
    "name": "NIKE TOP QUALITY Ref. 1614",
    "brand": "Nike",
    "category": "Casual",
    "price": 199000,
    "rating": 4.9,
    "reviewsCount": 39,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_614.jpg",
    "featured": false,
    "images": [
      "products/shoe_614.jpg"
    ]
  },
  {
    "id": 615,
    "name": "NIKE TOP QUALITY Ref. 1615",
    "brand": "Nike",
    "category": "Casual",
    "price": 213000,
    "rating": 5.0,
    "reviewsCount": 50,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_615.jpg",
    "featured": false,
    "images": [
      "products/shoe_615.jpg"
    ]
  },
  {
    "id": 616,
    "name": "NIKE TOP QUALITY Ref. 1616",
    "brand": "Nike",
    "category": "Casual",
    "price": 203000,
    "rating": 4.4,
    "reviewsCount": 61,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_616.jpg",
    "featured": false,
    "images": [
      "products/shoe_616.jpg"
    ]
  },
  {
    "id": 617,
    "name": "NIKE TOP QUALITY Ref. 1617",
    "brand": "Nike",
    "category": "Casual",
    "price": 217000,
    "rating": 4.5,
    "reviewsCount": 72,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_617.jpg",
    "featured": false,
    "images": [
      "products/shoe_617.jpg"
    ]
  },
  {
    "id": 618,
    "name": "NIKE TOP QUALITY Ref. 1618",
    "brand": "Nike",
    "category": "Casual",
    "price": 208000,
    "rating": 4.6,
    "reviewsCount": 83,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_618.jpg",
    "featured": false,
    "images": [
      "products/shoe_618.jpg"
    ]
  },
  {
    "id": 619,
    "name": "NIKE TOP QUALITY Ref. 1619",
    "brand": "Nike",
    "category": "Casual",
    "price": 183000,
    "rating": 4.7,
    "reviewsCount": 14,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_619.jpg",
    "featured": false,
    "images": [
      "products/shoe_619.jpg"
    ]
  },
  {
    "id": 620,
    "name": "NIKE TOP QUALITY Ref. 1620",
    "brand": "Nike",
    "category": "Casual",
    "price": 214000,
    "rating": 4.8,
    "reviewsCount": 25,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_620.jpg",
    "featured": false,
    "images": [
      "products/shoe_620.jpg"
    ]
  },
  {
    "id": 621,
    "name": "NIKE TOP QUALITY Ref. 1621",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 4.9,
    "reviewsCount": 36,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_621.jpg",
    "featured": false,
    "images": [
      "products/shoe_621.jpg"
    ]
  },
  {
    "id": 622,
    "name": "NIKE TOP QUALITY Ref. 1622",
    "brand": "Nike",
    "category": "Casual",
    "price": 184000,
    "rating": 5.0,
    "reviewsCount": 47,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_622.jpg",
    "featured": false,
    "images": [
      "products/shoe_622.jpg"
    ]
  },
  {
    "id": 623,
    "name": "NIKE TOP QUALITY Ref. 1623",
    "brand": "Nike",
    "category": "Casual",
    "price": 198000,
    "rating": 4.4,
    "reviewsCount": 58,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_623.jpg",
    "featured": false,
    "images": [
      "products/shoe_623.jpg"
    ]
  },
  {
    "id": 624,
    "name": "NIKE TOP QUALITY Ref. 1624",
    "brand": "Nike",
    "category": "Casual",
    "price": 191000,
    "rating": 4.5,
    "reviewsCount": 69,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_624.jpg",
    "featured": true,
    "images": [
      "products/shoe_624.jpg"
    ]
  },
  {
    "id": 625,
    "name": "NIKE TOP QUALITY Ref. 1625",
    "brand": "Nike",
    "category": "Casual",
    "price": 214000,
    "rating": 4.6,
    "reviewsCount": 80,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_625.jpg",
    "featured": false,
    "images": [
      "products/shoe_625.jpg"
    ]
  },
  {
    "id": 626,
    "name": "NIKE TOP QUALITY Ref. 1626",
    "brand": "Nike",
    "category": "Casual",
    "price": 203000,
    "rating": 4.7,
    "reviewsCount": 11,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_626.jpg",
    "featured": false,
    "images": [
      "products/shoe_626.jpg"
    ]
  },
  {
    "id": 627,
    "name": "NIKE TOP QUALITY Ref. 1627",
    "brand": "Nike",
    "category": "Casual",
    "price": 184000,
    "rating": 4.8,
    "reviewsCount": 22,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_627.jpg",
    "featured": false,
    "images": [
      "products/shoe_627.jpg"
    ]
  },
  {
    "id": 628,
    "name": "NIKE TOP QUALITY Ref. 1628",
    "brand": "Nike",
    "category": "Casual",
    "price": 198000,
    "rating": 4.9,
    "reviewsCount": 33,
    "description": "Zapatos Nike TOP QUALITY de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_628.jpg",
    "featured": false,
    "images": [
      "products/shoe_628.jpg"
    ]
  },
  {
    "id": 629,
    "name": "NIKE TOP QUALITY Air Max Ref. 1629",
    "brand": "Nike",
    "category": "Casual",
    "price": 180000,
    "rating": 5.0,
    "reviewsCount": 44,
    "description": "Zapatos Nike TOP QUALITY Air Max de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_629.jpg",
    "featured": false,
    "images": [
      "products/shoe_629.jpg"
    ]
  },
  {
    "id": 630,
    "name": "NIKE TOP QUALITY Air Max Ref. 1630",
    "brand": "Nike",
    "category": "Casual",
    "price": 189000,
    "rating": 4.4,
    "reviewsCount": 55,
    "description": "Zapatos Nike TOP QUALITY Air Max de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_630.jpg",
    "featured": false,
    "images": [
      "products/shoe_630.jpg"
    ]
  },
  {
    "id": 631,
    "name": "NIKE TOP QUALITY Air Max Ref. 1631",
    "brand": "Nike",
    "category": "Casual",
    "price": 212000,
    "rating": 4.5,
    "reviewsCount": 66,
    "description": "Zapatos Nike TOP QUALITY Air Max de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_631.jpg",
    "featured": false,
    "images": [
      "products/shoe_631.jpg"
    ]
  },
  {
    "id": 632,
    "name": "NIKE TOP QUALITY Air Max Ref. 1632",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 4.6,
    "reviewsCount": 77,
    "description": "Zapatos Nike TOP QUALITY Air Max de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_632.jpg",
    "featured": false,
    "images": [
      "products/shoe_632.jpg"
    ]
  },
  {
    "id": 633,
    "name": "NIKE TOP QUALITY Air Max Ref. 1633",
    "brand": "Nike",
    "category": "Casual",
    "price": 183000,
    "rating": 4.7,
    "reviewsCount": 8,
    "description": "Zapatos Nike TOP QUALITY Air Max de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_633.jpg",
    "featured": false,
    "images": [
      "products/shoe_633.jpg"
    ]
  },
  {
    "id": 634,
    "name": "NIKE TOP QUALITY Air Max Ref. 1634",
    "brand": "Nike",
    "category": "Casual",
    "price": 205000,
    "rating": 4.8,
    "reviewsCount": 19,
    "description": "Zapatos Nike TOP QUALITY Air Max de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_634.jpg",
    "featured": false,
    "images": [
      "products/shoe_634.jpg"
    ]
  },
  {
    "id": 635,
    "name": "NIKE TOP QUALITY Air Max Ref. 1635",
    "brand": "Nike",
    "category": "Casual",
    "price": 181000,
    "rating": 4.9,
    "reviewsCount": 30,
    "description": "Zapatos Nike TOP QUALITY Air Max de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_635.jpg",
    "featured": false,
    "images": [
      "products/shoe_635.jpg"
    ]
  },
  {
    "id": 636,
    "name": "NIKE TOP QUALITY Air Max Ref. 1636",
    "brand": "Nike",
    "category": "Casual",
    "price": 191000,
    "rating": 5.0,
    "reviewsCount": 41,
    "description": "Zapatos Nike TOP QUALITY Air Max de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_636.jpg",
    "featured": true,
    "images": [
      "products/shoe_636.jpg"
    ]
  },
  {
    "id": 637,
    "name": "NIKE Variedad Ref. 1637",
    "brand": "Nike",
    "category": "Casual",
    "price": 186000,
    "rating": 4.4,
    "reviewsCount": 52,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_637.jpg",
    "featured": false,
    "images": [
      "products/shoe_637.jpg"
    ]
  },
  {
    "id": 638,
    "name": "NIKE Variedad Ref. 1638",
    "brand": "Nike",
    "category": "Casual",
    "price": 207000,
    "rating": 4.5,
    "reviewsCount": 63,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_638.jpg",
    "featured": false,
    "images": [
      "products/shoe_638.jpg"
    ]
  },
  {
    "id": 639,
    "name": "NIKE Variedad Ref. 1639",
    "brand": "Nike",
    "category": "Casual",
    "price": 185000,
    "rating": 4.6,
    "reviewsCount": 74,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_639.jpg",
    "featured": false,
    "images": [
      "products/shoe_639.jpg"
    ]
  },
  {
    "id": 640,
    "name": "NIKE Variedad Ref. 1640",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 4.7,
    "reviewsCount": 5,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_640.jpg",
    "featured": false,
    "images": [
      "products/shoe_640.jpg"
    ]
  },
  {
    "id": 641,
    "name": "NIKE Variedad Ref. 1641",
    "brand": "Nike",
    "category": "Casual",
    "price": 208000,
    "rating": 4.8,
    "reviewsCount": 16,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_641.jpg",
    "featured": false,
    "images": [
      "products/shoe_641.jpg"
    ]
  },
  {
    "id": 642,
    "name": "NIKE Variedad Ref. 1642",
    "brand": "Nike",
    "category": "Casual",
    "price": 184000,
    "rating": 4.9,
    "reviewsCount": 27,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_642.jpg",
    "featured": false,
    "images": [
      "products/shoe_642.jpg"
    ]
  },
  {
    "id": 643,
    "name": "NIKE Variedad Ref. 1643",
    "brand": "Nike",
    "category": "Casual",
    "price": 183000,
    "rating": 5.0,
    "reviewsCount": 38,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_643.jpg",
    "featured": false,
    "images": [
      "products/shoe_643.jpg"
    ]
  },
  {
    "id": 644,
    "name": "NIKE Variedad Ref. 1644",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 4.4,
    "reviewsCount": 49,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_644.jpg",
    "featured": false,
    "images": [
      "products/shoe_644.jpg"
    ]
  },
  {
    "id": 645,
    "name": "NIKE Variedad Ref. 1645",
    "brand": "Nike",
    "category": "Casual",
    "price": 190000,
    "rating": 4.5,
    "reviewsCount": 60,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_645.jpg",
    "featured": false,
    "images": [
      "products/shoe_645.jpg"
    ]
  },
  {
    "id": 646,
    "name": "NIKE Variedad Ref. 1646",
    "brand": "Nike",
    "category": "Casual",
    "price": 207000,
    "rating": 4.6,
    "reviewsCount": 71,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_646.jpg",
    "featured": false,
    "images": [
      "products/shoe_646.jpg"
    ]
  },
  {
    "id": 647,
    "name": "NIKE Variedad Ref. 1647",
    "brand": "Nike",
    "category": "Casual",
    "price": 209000,
    "rating": 4.7,
    "reviewsCount": 82,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_647.jpg",
    "featured": false,
    "images": [
      "products/shoe_647.jpg"
    ]
  },
  {
    "id": 648,
    "name": "NIKE Variedad Ref. 1648",
    "brand": "Nike",
    "category": "Casual",
    "price": 202000,
    "rating": 4.8,
    "reviewsCount": 13,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_648.jpg",
    "featured": true,
    "images": [
      "products/shoe_648.jpg"
    ]
  },
  {
    "id": 649,
    "name": "NIKE Variedad Ref. 1649",
    "brand": "Nike",
    "category": "Casual",
    "price": 199000,
    "rating": 4.9,
    "reviewsCount": 24,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_649.jpg",
    "featured": false,
    "images": [
      "products/shoe_649.jpg"
    ]
  },
  {
    "id": 650,
    "name": "NIKE Variedad Ref. 1650",
    "brand": "Nike",
    "category": "Casual",
    "price": 215000,
    "rating": 5.0,
    "reviewsCount": 35,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_650.jpg",
    "featured": false,
    "images": [
      "products/shoe_650.jpg"
    ]
  },
  {
    "id": 651,
    "name": "NIKE Variedad Ref. 1651",
    "brand": "Nike",
    "category": "Casual",
    "price": 211000,
    "rating": 4.4,
    "reviewsCount": 46,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_651.jpg",
    "featured": false,
    "images": [
      "products/shoe_651.jpg"
    ]
  },
  {
    "id": 652,
    "name": "NIKE Variedad Ref. 1652",
    "brand": "Nike",
    "category": "Casual",
    "price": 196000,
    "rating": 4.5,
    "reviewsCount": 57,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_652.jpg",
    "featured": false,
    "images": [
      "products/shoe_652.jpg"
    ]
  },
  {
    "id": 653,
    "name": "NIKE Variedad Ref. 1653",
    "brand": "Nike",
    "category": "Casual",
    "price": 204000,
    "rating": 4.6,
    "reviewsCount": 68,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_653.jpg",
    "featured": false,
    "images": [
      "products/shoe_653.jpg"
    ]
  },
  {
    "id": 654,
    "name": "NIKE Variedad Ref. 1654",
    "brand": "Nike",
    "category": "Casual",
    "price": 191000,
    "rating": 4.7,
    "reviewsCount": 79,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_654.jpg",
    "featured": false,
    "images": [
      "products/shoe_654.jpg"
    ]
  },
  {
    "id": 655,
    "name": "NIKE Variedad Ref. 1655",
    "brand": "Nike",
    "category": "Casual",
    "price": 202000,
    "rating": 4.8,
    "reviewsCount": 10,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_655.jpg",
    "featured": false,
    "images": [
      "products/shoe_655.jpg"
    ]
  },
  {
    "id": 656,
    "name": "NIKE Variedad Ref. 1656",
    "brand": "Nike",
    "category": "Casual",
    "price": 211000,
    "rating": 4.9,
    "reviewsCount": 21,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_656.jpg",
    "featured": false,
    "images": [
      "products/shoe_656.jpg"
    ]
  },
  {
    "id": 657,
    "name": "NIKE Variedad Ref. 1657",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 5.0,
    "reviewsCount": 32,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_657.jpg",
    "featured": false,
    "images": [
      "products/shoe_657.jpg"
    ]
  },
  {
    "id": 658,
    "name": "NIKE Variedad Ref. 1658",
    "brand": "Nike",
    "category": "Casual",
    "price": 216000,
    "rating": 4.4,
    "reviewsCount": 43,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_658.jpg",
    "featured": false,
    "images": [
      "products/shoe_658.jpg"
    ]
  },
  {
    "id": 659,
    "name": "NIKE Variedad Ref. 1659",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 4.5,
    "reviewsCount": 54,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_659.jpg",
    "featured": false,
    "images": [
      "products/shoe_659.jpg"
    ]
  },
  {
    "id": 660,
    "name": "NIKE Variedad Ref. 1660",
    "brand": "Nike",
    "category": "Casual",
    "price": 219000,
    "rating": 4.6,
    "reviewsCount": 65,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_660.jpg",
    "featured": true,
    "images": [
      "products/shoe_660.jpg"
    ]
  },
  {
    "id": 661,
    "name": "NIKE Variedad Ref. 1661",
    "brand": "Nike",
    "category": "Casual",
    "price": 204000,
    "rating": 4.7,
    "reviewsCount": 76,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_661.jpg",
    "featured": false,
    "images": [
      "products/shoe_661.jpg"
    ]
  },
  {
    "id": 662,
    "name": "NIKE Variedad Ref. 1662",
    "brand": "Nike",
    "category": "Casual",
    "price": 195000,
    "rating": 4.8,
    "reviewsCount": 7,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_662.jpg",
    "featured": false,
    "images": [
      "products/shoe_662.jpg"
    ]
  },
  {
    "id": 663,
    "name": "NIKE Variedad Ref. 1663",
    "brand": "Nike",
    "category": "Casual",
    "price": 191000,
    "rating": 4.9,
    "reviewsCount": 18,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_663.jpg",
    "featured": false,
    "images": [
      "products/shoe_663.jpg"
    ]
  },
  {
    "id": 664,
    "name": "NIKE Variedad Ref. 1664",
    "brand": "Nike",
    "category": "Casual",
    "price": 217000,
    "rating": 5.0,
    "reviewsCount": 29,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_664.jpg",
    "featured": false,
    "images": [
      "products/shoe_664.jpg"
    ]
  },
  {
    "id": 665,
    "name": "NIKE Variedad Ref. 1665",
    "brand": "Nike",
    "category": "Casual",
    "price": 182000,
    "rating": 4.4,
    "reviewsCount": 40,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_665.jpg",
    "featured": false,
    "images": [
      "products/shoe_665.jpg"
    ]
  },
  {
    "id": 666,
    "name": "NIKE Variedad Ref. 1666",
    "brand": "Nike",
    "category": "Casual",
    "price": 203000,
    "rating": 4.5,
    "reviewsCount": 51,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_666.jpg",
    "featured": false,
    "images": [
      "products/shoe_666.jpg"
    ]
  },
  {
    "id": 667,
    "name": "NIKE Variedad Ref. 1667",
    "brand": "Nike",
    "category": "Casual",
    "price": 200000,
    "rating": 4.6,
    "reviewsCount": 62,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_667.jpg",
    "featured": false,
    "images": [
      "products/shoe_667.jpg"
    ]
  },
  {
    "id": 668,
    "name": "NIKE Variedad Ref. 1668",
    "brand": "Nike",
    "category": "Casual",
    "price": 188000,
    "rating": 4.7,
    "reviewsCount": 73,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_668.jpg",
    "featured": false,
    "images": [
      "products/shoe_668.jpg"
    ]
  },
  {
    "id": 669,
    "name": "NIKE Variedad Ref. 1669",
    "brand": "Nike",
    "category": "Casual",
    "price": 204000,
    "rating": 4.8,
    "reviewsCount": 84,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_669.jpg",
    "featured": false,
    "images": [
      "products/shoe_669.jpg"
    ]
  },
  {
    "id": 670,
    "name": "NIKE Variedad Ref. 1670",
    "brand": "Nike",
    "category": "Casual",
    "price": 183000,
    "rating": 4.9,
    "reviewsCount": 15,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_670.jpg",
    "featured": false,
    "images": [
      "products/shoe_670.jpg"
    ]
  },
  {
    "id": 671,
    "name": "NIKE Variedad Ref. 1671",
    "brand": "Nike",
    "category": "Casual",
    "price": 206000,
    "rating": 5.0,
    "reviewsCount": 26,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_671.jpg",
    "featured": false,
    "images": [
      "products/shoe_671.jpg"
    ]
  },
  {
    "id": 672,
    "name": "NIKE Variedad Ref. 1672",
    "brand": "Nike",
    "category": "Casual",
    "price": 186000,
    "rating": 4.4,
    "reviewsCount": 37,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_672.jpg",
    "featured": true,
    "images": [
      "products/shoe_672.jpg"
    ]
  },
  {
    "id": 673,
    "name": "NIKE Variedad Ref. 1673",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 4.5,
    "reviewsCount": 48,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_673.jpg",
    "featured": false,
    "images": [
      "products/shoe_673.jpg"
    ]
  },
  {
    "id": 674,
    "name": "NIKE Variedad Ref. 1674",
    "brand": "Nike",
    "category": "Casual",
    "price": 199000,
    "rating": 4.6,
    "reviewsCount": 59,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_674.jpg",
    "featured": false,
    "images": [
      "products/shoe_674.jpg"
    ]
  },
  {
    "id": 675,
    "name": "NIKE Variedad Ref. 1675",
    "brand": "Nike",
    "category": "Casual",
    "price": 185000,
    "rating": 4.7,
    "reviewsCount": 70,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_675.jpg",
    "featured": false,
    "images": [
      "products/shoe_675.jpg"
    ]
  },
  {
    "id": 676,
    "name": "NIKE Variedad Ref. 1676",
    "brand": "Nike",
    "category": "Casual",
    "price": 188000,
    "rating": 4.8,
    "reviewsCount": 81,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_676.jpg",
    "featured": false,
    "images": [
      "products/shoe_676.jpg"
    ]
  },
  {
    "id": 677,
    "name": "NIKE Variedad Ref. 1677",
    "brand": "Nike",
    "category": "Casual",
    "price": 196000,
    "rating": 4.9,
    "reviewsCount": 12,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_677.jpg",
    "featured": false,
    "images": [
      "products/shoe_677.jpg"
    ]
  },
  {
    "id": 678,
    "name": "NIKE Variedad Ref. 1678",
    "brand": "Nike",
    "category": "Casual",
    "price": 190000,
    "rating": 5.0,
    "reviewsCount": 23,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_678.jpg",
    "featured": false,
    "images": [
      "products/shoe_678.jpg"
    ]
  },
  {
    "id": 679,
    "name": "NIKE Variedad Ref. 1679",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 4.4,
    "reviewsCount": 34,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_679.jpg",
    "featured": false,
    "images": [
      "products/shoe_679.jpg"
    ]
  },
  {
    "id": 680,
    "name": "NIKE Variedad Ref. 1680",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 4.5,
    "reviewsCount": 45,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_680.jpg",
    "featured": false,
    "images": [
      "products/shoe_680.jpg"
    ]
  },
  {
    "id": 681,
    "name": "NIKE Variedad Ref. 1681",
    "brand": "Nike",
    "category": "Casual",
    "price": 196000,
    "rating": 4.6,
    "reviewsCount": 56,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_681.jpg",
    "featured": false,
    "images": [
      "products/shoe_681.jpg"
    ]
  },
  {
    "id": 682,
    "name": "NIKE Variedad Ref. 1682",
    "brand": "Nike",
    "category": "Casual",
    "price": 184000,
    "rating": 4.7,
    "reviewsCount": 67,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_682.jpg",
    "featured": false,
    "images": [
      "products/shoe_682.jpg"
    ]
  },
  {
    "id": 683,
    "name": "NIKE Variedad Ref. 1683",
    "brand": "Nike",
    "category": "Casual",
    "price": 185000,
    "rating": 4.8,
    "reviewsCount": 78,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_683.jpg",
    "featured": false,
    "images": [
      "products/shoe_683.jpg"
    ]
  },
  {
    "id": 684,
    "name": "NIKE Variedad Ref. 1684",
    "brand": "Nike",
    "category": "Casual",
    "price": 213000,
    "rating": 4.9,
    "reviewsCount": 9,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_684.jpg",
    "featured": true,
    "images": [
      "products/shoe_684.jpg"
    ]
  },
  {
    "id": 685,
    "name": "NIKE Variedad Ref. 1685",
    "brand": "Nike",
    "category": "Casual",
    "price": 201000,
    "rating": 5.0,
    "reviewsCount": 20,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_685.jpg",
    "featured": false,
    "images": [
      "products/shoe_685.jpg"
    ]
  },
  {
    "id": 686,
    "name": "NIKE Variedad Ref. 1686",
    "brand": "Nike",
    "category": "Casual",
    "price": 182000,
    "rating": 4.4,
    "reviewsCount": 31,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_686.jpg",
    "featured": false,
    "images": [
      "products/shoe_686.jpg"
    ]
  },
  {
    "id": 687,
    "name": "NIKE Variedad Ref. 1687",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 4.5,
    "reviewsCount": 42,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_687.jpg",
    "featured": false,
    "images": [
      "products/shoe_687.jpg"
    ]
  },
  {
    "id": 688,
    "name": "NIKE Variedad Ref. 1688",
    "brand": "Nike",
    "category": "Casual",
    "price": 213000,
    "rating": 4.6,
    "reviewsCount": 53,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_688.jpg",
    "featured": false,
    "images": [
      "products/shoe_688.jpg"
    ]
  },
  {
    "id": 689,
    "name": "NIKE Variedad Ref. 1689",
    "brand": "Nike",
    "category": "Casual",
    "price": 213000,
    "rating": 4.7,
    "reviewsCount": 64,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_689.jpg",
    "featured": false,
    "images": [
      "products/shoe_689.jpg"
    ]
  },
  {
    "id": 690,
    "name": "NIKE Variedad Ref. 1690",
    "brand": "Nike",
    "category": "Casual",
    "price": 217000,
    "rating": 4.8,
    "reviewsCount": 75,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_690.jpg",
    "featured": false,
    "images": [
      "products/shoe_690.jpg"
    ]
  },
  {
    "id": 691,
    "name": "NIKE Variedad Ref. 1691",
    "brand": "Nike",
    "category": "Casual",
    "price": 211000,
    "rating": 4.9,
    "reviewsCount": 6,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_691.jpg",
    "featured": false,
    "images": [
      "products/shoe_691.jpg"
    ]
  },
  {
    "id": 692,
    "name": "NIKE Variedad Ref. 1692",
    "brand": "Nike",
    "category": "Casual",
    "price": 202000,
    "rating": 5.0,
    "reviewsCount": 17,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_692.jpg",
    "featured": false,
    "images": [
      "products/shoe_692.jpg"
    ]
  },
  {
    "id": 693,
    "name": "NIKE Variedad Ref. 1693",
    "brand": "Nike",
    "category": "Casual",
    "price": 195000,
    "rating": 4.4,
    "reviewsCount": 28,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_693.jpg",
    "featured": false,
    "images": [
      "products/shoe_693.jpg"
    ]
  },
  {
    "id": 694,
    "name": "NIKE Variedad Ref. 1694",
    "brand": "Nike",
    "category": "Casual",
    "price": 212000,
    "rating": 4.5,
    "reviewsCount": 39,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_694.jpg",
    "featured": false,
    "images": [
      "products/shoe_694.jpg"
    ]
  },
  {
    "id": 695,
    "name": "NIKE Variedad Ref. 1695",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 4.6,
    "reviewsCount": 50,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_695.jpg",
    "featured": false,
    "images": [
      "products/shoe_695.jpg"
    ]
  },
  {
    "id": 696,
    "name": "NIKE Variedad Ref. 1696",
    "brand": "Nike",
    "category": "Casual",
    "price": 194000,
    "rating": 4.7,
    "reviewsCount": 61,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_696.jpg",
    "featured": true,
    "images": [
      "products/shoe_696.jpg"
    ]
  },
  {
    "id": 697,
    "name": "NIKE Variedad Ref. 1697",
    "brand": "Nike",
    "category": "Casual",
    "price": 204000,
    "rating": 4.8,
    "reviewsCount": 72,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_697.jpg",
    "featured": false,
    "images": [
      "products/shoe_697.jpg"
    ]
  },
  {
    "id": 698,
    "name": "NIKE Variedad Ref. 1698",
    "brand": "Nike",
    "category": "Casual",
    "price": 188000,
    "rating": 4.9,
    "reviewsCount": 83,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_698.jpg",
    "featured": false,
    "images": [
      "products/shoe_698.jpg"
    ]
  },
  {
    "id": 699,
    "name": "NIKE Variedad Ref. 1699",
    "brand": "Nike",
    "category": "Casual",
    "price": 184000,
    "rating": 5.0,
    "reviewsCount": 14,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_699.jpg",
    "featured": false,
    "images": [
      "products/shoe_699.jpg"
    ]
  },
  {
    "id": 700,
    "name": "NIKE Variedad Ref. 1700",
    "brand": "Nike",
    "category": "Casual",
    "price": 188000,
    "rating": 4.4,
    "reviewsCount": 25,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_700.jpg",
    "featured": false,
    "images": [
      "products/shoe_700.jpg"
    ]
  },
  {
    "id": 701,
    "name": "NIKE Variedad Ref. 1701",
    "brand": "Nike",
    "category": "Casual",
    "price": 189000,
    "rating": 4.5,
    "reviewsCount": 36,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_701.jpg",
    "featured": false,
    "images": [
      "products/shoe_701.jpg"
    ]
  },
  {
    "id": 702,
    "name": "NIKE Variedad Ref. 1702",
    "brand": "Nike",
    "category": "Casual",
    "price": 181000,
    "rating": 4.6,
    "reviewsCount": 47,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_702.jpg",
    "featured": false,
    "images": [
      "products/shoe_702.jpg"
    ]
  },
  {
    "id": 703,
    "name": "NIKE Variedad Ref. 1703",
    "brand": "Nike",
    "category": "Casual",
    "price": 189000,
    "rating": 4.7,
    "reviewsCount": 58,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_703.jpg",
    "featured": false,
    "images": [
      "products/shoe_703.jpg"
    ]
  },
  {
    "id": 704,
    "name": "NIKE Variedad Ref. 1704",
    "brand": "Nike",
    "category": "Casual",
    "price": 206000,
    "rating": 4.8,
    "reviewsCount": 69,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_704.jpg",
    "featured": false,
    "images": [
      "products/shoe_704.jpg"
    ]
  },
  {
    "id": 705,
    "name": "NIKE Variedad Ref. 1705",
    "brand": "Nike",
    "category": "Casual",
    "price": 195000,
    "rating": 4.9,
    "reviewsCount": 80,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_705.jpg",
    "featured": false,
    "images": [
      "products/shoe_705.jpg"
    ]
  },
  {
    "id": 706,
    "name": "NIKE Variedad Ref. 1706",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 5.0,
    "reviewsCount": 11,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_706.jpg",
    "featured": false,
    "images": [
      "products/shoe_706.jpg"
    ]
  },
  {
    "id": 707,
    "name": "NIKE Variedad Ref. 1707",
    "brand": "Nike",
    "category": "Casual",
    "price": 194000,
    "rating": 4.4,
    "reviewsCount": 22,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_707.jpg",
    "featured": false,
    "images": [
      "products/shoe_707.jpg"
    ]
  },
  {
    "id": 708,
    "name": "NIKE Variedad Ref. 1708",
    "brand": "Nike",
    "category": "Casual",
    "price": 218000,
    "rating": 4.5,
    "reviewsCount": 33,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_708.jpg",
    "featured": true,
    "images": [
      "products/shoe_708.jpg"
    ]
  },
  {
    "id": 709,
    "name": "NIKE Variedad Ref. 1709",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 4.6,
    "reviewsCount": 44,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_709.jpg",
    "featured": false,
    "images": [
      "products/shoe_709.jpg"
    ]
  },
  {
    "id": 710,
    "name": "NIKE Variedad Ref. 1710",
    "brand": "Nike",
    "category": "Casual",
    "price": 194000,
    "rating": 4.7,
    "reviewsCount": 55,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_710.jpg",
    "featured": false,
    "images": [
      "products/shoe_710.jpg"
    ]
  },
  {
    "id": 711,
    "name": "NIKE Variedad Ref. 1711",
    "brand": "Nike",
    "category": "Casual",
    "price": 201000,
    "rating": 4.8,
    "reviewsCount": 66,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_711.jpg",
    "featured": false,
    "images": [
      "products/shoe_711.jpg"
    ]
  },
  {
    "id": 712,
    "name": "NIKE Variedad Ref. 1712",
    "brand": "Nike",
    "category": "Casual",
    "price": 185000,
    "rating": 4.9,
    "reviewsCount": 77,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_712.jpg",
    "featured": false,
    "images": [
      "products/shoe_712.jpg"
    ]
  },
  {
    "id": 713,
    "name": "NIKE Variedad Ref. 1713",
    "brand": "Nike",
    "category": "Casual",
    "price": 198000,
    "rating": 5.0,
    "reviewsCount": 8,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_713.jpg",
    "featured": false,
    "images": [
      "products/shoe_713.jpg"
    ]
  },
  {
    "id": 714,
    "name": "NIKE Variedad Ref. 1714",
    "brand": "Nike",
    "category": "Casual",
    "price": 187000,
    "rating": 4.4,
    "reviewsCount": 19,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_714.jpg",
    "featured": false,
    "images": [
      "products/shoe_714.jpg"
    ]
  },
  {
    "id": 715,
    "name": "NIKE Variedad Ref. 1715",
    "brand": "Nike",
    "category": "Casual",
    "price": 189000,
    "rating": 4.5,
    "reviewsCount": 30,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_715.jpg",
    "featured": false,
    "images": [
      "products/shoe_715.jpg"
    ]
  },
  {
    "id": 716,
    "name": "NIKE Variedad Ref. 1716",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 4.6,
    "reviewsCount": 41,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_716.jpg",
    "featured": false,
    "images": [
      "products/shoe_716.jpg"
    ]
  },
  {
    "id": 717,
    "name": "NIKE Variedad Ref. 1717",
    "brand": "Nike",
    "category": "Casual",
    "price": 184000,
    "rating": 4.7,
    "reviewsCount": 52,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_717.jpg",
    "featured": false,
    "images": [
      "products/shoe_717.jpg"
    ]
  },
  {
    "id": 718,
    "name": "NIKE Variedad Ref. 1718",
    "brand": "Nike",
    "category": "Casual",
    "price": 219000,
    "rating": 4.8,
    "reviewsCount": 63,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_718.jpg",
    "featured": false,
    "images": [
      "products/shoe_718.jpg"
    ]
  },
  {
    "id": 719,
    "name": "NIKE Variedad Ref. 1719",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 4.9,
    "reviewsCount": 74,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_719.jpg",
    "featured": false,
    "images": [
      "products/shoe_719.jpg"
    ]
  },
  {
    "id": 720,
    "name": "NIKE Variedad Ref. 1720",
    "brand": "Nike",
    "category": "Casual",
    "price": 196000,
    "rating": 5.0,
    "reviewsCount": 5,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_720.jpg",
    "featured": true,
    "images": [
      "products/shoe_720.jpg"
    ]
  },
  {
    "id": 721,
    "name": "NIKE Variedad Ref. 1721",
    "brand": "Nike",
    "category": "Casual",
    "price": 198000,
    "rating": 4.4,
    "reviewsCount": 16,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_721.jpg",
    "featured": false,
    "images": [
      "products/shoe_721.jpg"
    ]
  },
  {
    "id": 722,
    "name": "NIKE Variedad Ref. 1722",
    "brand": "Nike",
    "category": "Casual",
    "price": 196000,
    "rating": 4.5,
    "reviewsCount": 27,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_722.jpg",
    "featured": false,
    "images": [
      "products/shoe_722.jpg"
    ]
  },
  {
    "id": 723,
    "name": "NIKE Variedad Ref. 1723",
    "brand": "Nike",
    "category": "Casual",
    "price": 199000,
    "rating": 4.6,
    "reviewsCount": 38,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_723.jpg",
    "featured": false,
    "images": [
      "products/shoe_723.jpg"
    ]
  },
  {
    "id": 724,
    "name": "NIKE Variedad Ref. 1724",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 4.7,
    "reviewsCount": 49,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_724.jpg",
    "featured": false,
    "images": [
      "products/shoe_724.jpg"
    ]
  },
  {
    "id": 725,
    "name": "NIKE Variedad Ref. 1725",
    "brand": "Nike",
    "category": "Casual",
    "price": 192000,
    "rating": 4.8,
    "reviewsCount": 60,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_725.jpg",
    "featured": false,
    "images": [
      "products/shoe_725.jpg"
    ]
  },
  {
    "id": 726,
    "name": "NIKE Variedad Ref. 1726",
    "brand": "Nike",
    "category": "Casual",
    "price": 216000,
    "rating": 4.9,
    "reviewsCount": 71,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_726.jpg",
    "featured": false,
    "images": [
      "products/shoe_726.jpg"
    ]
  },
  {
    "id": 727,
    "name": "NIKE Variedad Ref. 1727",
    "brand": "Nike",
    "category": "Casual",
    "price": 189000,
    "rating": 5.0,
    "reviewsCount": 82,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_727.jpg",
    "featured": false,
    "images": [
      "products/shoe_727.jpg"
    ]
  },
  {
    "id": 728,
    "name": "NIKE Variedad Ref. 1728",
    "brand": "Nike",
    "category": "Casual",
    "price": 217000,
    "rating": 4.4,
    "reviewsCount": 13,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_728.jpg",
    "featured": false,
    "images": [
      "products/shoe_728.jpg"
    ]
  },
  {
    "id": 729,
    "name": "NIKE Variedad Ref. 1729",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 4.5,
    "reviewsCount": 24,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_729.jpg",
    "featured": false,
    "images": [
      "products/shoe_729.jpg"
    ]
  },
  {
    "id": 730,
    "name": "NIKE Variedad Ref. 1730",
    "brand": "Nike",
    "category": "Casual",
    "price": 193000,
    "rating": 4.6,
    "reviewsCount": 35,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_730.jpg",
    "featured": false,
    "images": [
      "products/shoe_730.jpg"
    ]
  },
  {
    "id": 731,
    "name": "NIKE Variedad Ref. 1731",
    "brand": "Nike",
    "category": "Casual",
    "price": 218000,
    "rating": 4.7,
    "reviewsCount": 46,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_731.jpg",
    "featured": false,
    "images": [
      "products/shoe_731.jpg"
    ]
  },
  {
    "id": 732,
    "name": "NIKE Variedad Ref. 1732",
    "brand": "Nike",
    "category": "Casual",
    "price": 189000,
    "rating": 4.8,
    "reviewsCount": 57,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_732.jpg",
    "featured": true,
    "images": [
      "products/shoe_732.jpg"
    ]
  },
  {
    "id": 733,
    "name": "NIKE Variedad Ref. 1733",
    "brand": "Nike",
    "category": "Casual",
    "price": 216000,
    "rating": 4.9,
    "reviewsCount": 68,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_733.jpg",
    "featured": false,
    "images": [
      "products/shoe_733.jpg"
    ]
  },
  {
    "id": 734,
    "name": "NIKE Variedad Ref. 1734",
    "brand": "Nike",
    "category": "Casual",
    "price": 206000,
    "rating": 5.0,
    "reviewsCount": 79,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_734.jpg",
    "featured": false,
    "images": [
      "products/shoe_734.jpg"
    ]
  },
  {
    "id": 735,
    "name": "NIKE Variedad Ref. 1735",
    "brand": "Nike",
    "category": "Casual",
    "price": 190000,
    "rating": 4.4,
    "reviewsCount": 10,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_735.jpg",
    "featured": false,
    "images": [
      "products/shoe_735.jpg"
    ]
  },
  {
    "id": 736,
    "name": "NIKE Variedad Ref. 1736",
    "brand": "Nike",
    "category": "Casual",
    "price": 200000,
    "rating": 4.5,
    "reviewsCount": 21,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_736.jpg",
    "featured": false,
    "images": [
      "products/shoe_736.jpg"
    ]
  },
  {
    "id": 737,
    "name": "NIKE Variedad Ref. 1737",
    "brand": "Nike",
    "category": "Casual",
    "price": 204000,
    "rating": 4.6,
    "reviewsCount": 32,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_737.jpg",
    "featured": false,
    "images": [
      "products/shoe_737.jpg"
    ]
  },
  {
    "id": 738,
    "name": "NIKE Variedad Ref. 1738",
    "brand": "Nike",
    "category": "Casual",
    "price": 206000,
    "rating": 4.7,
    "reviewsCount": 43,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_738.jpg",
    "featured": false,
    "images": [
      "products/shoe_738.jpg"
    ]
  },
  {
    "id": 739,
    "name": "NIKE Variedad Ref. 1739",
    "brand": "Nike",
    "category": "Casual",
    "price": 206000,
    "rating": 4.8,
    "reviewsCount": 54,
    "description": "Zapatos Nike Variedad de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_739.jpg",
    "featured": false,
    "images": [
      "products/shoe_739.jpg"
    ]
  },
  {
    "id": 740,
    "name": "NIKE Vomero Ref. 1740",
    "brand": "Nike",
    "category": "Casual",
    "price": 188000,
    "rating": 4.9,
    "reviewsCount": 65,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_740.jpg",
    "featured": false,
    "images": [
      "products/shoe_740.jpg"
    ]
  },
  {
    "id": 741,
    "name": "NIKE Vomero Ref. 1741",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 5.0,
    "reviewsCount": 76,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_741.jpg",
    "featured": false,
    "images": [
      "products/shoe_741.jpg"
    ]
  },
  {
    "id": 742,
    "name": "NIKE Vomero Ref. 1742",
    "brand": "Nike",
    "category": "Casual",
    "price": 193000,
    "rating": 4.4,
    "reviewsCount": 7,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_742.jpg",
    "featured": false,
    "images": [
      "products/shoe_742.jpg"
    ]
  },
  {
    "id": 743,
    "name": "NIKE Vomero Ref. 1743",
    "brand": "Nike",
    "category": "Casual",
    "price": 208000,
    "rating": 4.5,
    "reviewsCount": 18,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_743.jpg",
    "featured": false,
    "images": [
      "products/shoe_743.jpg"
    ]
  },
  {
    "id": 744,
    "name": "NIKE Vomero Ref. 1744",
    "brand": "Nike",
    "category": "Casual",
    "price": 204000,
    "rating": 4.6,
    "reviewsCount": 29,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_744.jpg",
    "featured": true,
    "images": [
      "products/shoe_744.jpg"
    ]
  },
  {
    "id": 745,
    "name": "NIKE Vomero Ref. 1745",
    "brand": "Nike",
    "category": "Casual",
    "price": 210000,
    "rating": 4.7,
    "reviewsCount": 40,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_745.jpg",
    "featured": false,
    "images": [
      "products/shoe_745.jpg"
    ]
  },
  {
    "id": 746,
    "name": "NIKE Vomero Ref. 1746",
    "brand": "Nike",
    "category": "Casual",
    "price": 187000,
    "rating": 4.8,
    "reviewsCount": 51,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_746.jpg",
    "featured": false,
    "images": [
      "products/shoe_746.jpg"
    ]
  },
  {
    "id": 747,
    "name": "NIKE Vomero Ref. 1747",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 4.9,
    "reviewsCount": 62,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_747.jpg",
    "featured": false,
    "images": [
      "products/shoe_747.jpg"
    ]
  },
  {
    "id": 748,
    "name": "NIKE Vomero Ref. 1748",
    "brand": "Nike",
    "category": "Casual",
    "price": 216000,
    "rating": 5.0,
    "reviewsCount": 73,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_748.jpg",
    "featured": false,
    "images": [
      "products/shoe_748.jpg"
    ]
  },
  {
    "id": 749,
    "name": "NIKE Vomero Ref. 1749",
    "brand": "Nike",
    "category": "Casual",
    "price": 190000,
    "rating": 4.4,
    "reviewsCount": 84,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_749.jpg",
    "featured": false,
    "images": [
      "products/shoe_749.jpg"
    ]
  },
  {
    "id": 750,
    "name": "NIKE Vomero Ref. 1750",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 4.5,
    "reviewsCount": 15,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_750.jpg",
    "featured": false,
    "images": [
      "products/shoe_750.jpg"
    ]
  },
  {
    "id": 751,
    "name": "NIKE Vomero Ref. 1751",
    "brand": "Nike",
    "category": "Casual",
    "price": 204000,
    "rating": 4.6,
    "reviewsCount": 26,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_751.jpg",
    "featured": false,
    "images": [
      "products/shoe_751.jpg"
    ]
  },
  {
    "id": 752,
    "name": "NIKE Vomero Ref. 1752",
    "brand": "Nike",
    "category": "Casual",
    "price": 180000,
    "rating": 4.7,
    "reviewsCount": 37,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_752.jpg",
    "featured": false,
    "images": [
      "products/shoe_752.jpg"
    ]
  },
  {
    "id": 753,
    "name": "NIKE Vomero Ref. 1753",
    "brand": "Nike",
    "category": "Casual",
    "price": 195000,
    "rating": 4.8,
    "reviewsCount": 48,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_753.jpg",
    "featured": false,
    "images": [
      "products/shoe_753.jpg"
    ]
  },
  {
    "id": 754,
    "name": "NIKE Vomero Ref. 1754",
    "brand": "Nike",
    "category": "Casual",
    "price": 210000,
    "rating": 4.9,
    "reviewsCount": 59,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_754.jpg",
    "featured": false,
    "images": [
      "products/shoe_754.jpg"
    ]
  },
  {
    "id": 755,
    "name": "NIKE Vomero Ref. 1755",
    "brand": "Nike",
    "category": "Casual",
    "price": 191000,
    "rating": 5.0,
    "reviewsCount": 70,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_755.jpg",
    "featured": false,
    "images": [
      "products/shoe_755.jpg"
    ]
  },
  {
    "id": 756,
    "name": "NIKE Vomero Ref. 1756",
    "brand": "Nike",
    "category": "Casual",
    "price": 182000,
    "rating": 4.4,
    "reviewsCount": 81,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_756.jpg",
    "featured": true,
    "images": [
      "products/shoe_756.jpg"
    ]
  },
  {
    "id": 757,
    "name": "NIKE Vomero Ref. 1757",
    "brand": "Nike",
    "category": "Casual",
    "price": 219000,
    "rating": 4.5,
    "reviewsCount": 12,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_757.jpg",
    "featured": false,
    "images": [
      "products/shoe_757.jpg"
    ]
  },
  {
    "id": 758,
    "name": "NIKE Vomero Ref. 1758",
    "brand": "Nike",
    "category": "Casual",
    "price": 218000,
    "rating": 4.6,
    "reviewsCount": 23,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_758.jpg",
    "featured": false,
    "images": [
      "products/shoe_758.jpg"
    ]
  },
  {
    "id": 759,
    "name": "NIKE Vomero Ref. 1759",
    "brand": "Nike",
    "category": "Casual",
    "price": 210000,
    "rating": 4.7,
    "reviewsCount": 34,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_759.jpg",
    "featured": false,
    "images": [
      "products/shoe_759.jpg"
    ]
  },
  {
    "id": 760,
    "name": "NIKE Vomero Ref. 1760",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 4.8,
    "reviewsCount": 45,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_760.jpg",
    "featured": false,
    "images": [
      "products/shoe_760.jpg"
    ]
  },
  {
    "id": 761,
    "name": "NIKE Vomero Ref. 1761",
    "brand": "Nike",
    "category": "Casual",
    "price": 209000,
    "rating": 4.9,
    "reviewsCount": 56,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_761.jpg",
    "featured": false,
    "images": [
      "products/shoe_761.jpg"
    ]
  },
  {
    "id": 762,
    "name": "NIKE Vomero Ref. 1762",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 5.0,
    "reviewsCount": 67,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_762.jpg",
    "featured": false,
    "images": [
      "products/shoe_762.jpg"
    ]
  },
  {
    "id": 763,
    "name": "NIKE Vomero Ref. 1763",
    "brand": "Nike",
    "category": "Casual",
    "price": 219000,
    "rating": 4.4,
    "reviewsCount": 78,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_763.jpg",
    "featured": false,
    "images": [
      "products/shoe_763.jpg"
    ]
  },
  {
    "id": 764,
    "name": "NIKE Vomero Ref. 1764",
    "brand": "Nike",
    "category": "Casual",
    "price": 189000,
    "rating": 4.5,
    "reviewsCount": 9,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_764.jpg",
    "featured": false,
    "images": [
      "products/shoe_764.jpg"
    ]
  },
  {
    "id": 765,
    "name": "NIKE Vomero Ref. 1765",
    "brand": "Nike",
    "category": "Casual",
    "price": 202000,
    "rating": 4.6,
    "reviewsCount": 20,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_765.jpg",
    "featured": false,
    "images": [
      "products/shoe_765.jpg"
    ]
  },
  {
    "id": 766,
    "name": "NIKE Vomero Ref. 1766",
    "brand": "Nike",
    "category": "Casual",
    "price": 182000,
    "rating": 4.7,
    "reviewsCount": 31,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_766.jpg",
    "featured": false,
    "images": [
      "products/shoe_766.jpg"
    ]
  },
  {
    "id": 767,
    "name": "NIKE Vomero Ref. 1767",
    "brand": "Nike",
    "category": "Casual",
    "price": 183000,
    "rating": 4.8,
    "reviewsCount": 42,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_767.jpg",
    "featured": false,
    "images": [
      "products/shoe_767.jpg"
    ]
  },
  {
    "id": 768,
    "name": "NIKE Vomero Ref. 1768",
    "brand": "Nike",
    "category": "Casual",
    "price": 220000,
    "rating": 4.9,
    "reviewsCount": 53,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_768.jpg",
    "featured": true,
    "images": [
      "products/shoe_768.jpg"
    ]
  },
  {
    "id": 769,
    "name": "NIKE Vomero Ref. 1769",
    "brand": "Nike",
    "category": "Casual",
    "price": 213000,
    "rating": 5.0,
    "reviewsCount": 64,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_769.jpg",
    "featured": false,
    "images": [
      "products/shoe_769.jpg"
    ]
  },
  {
    "id": 770,
    "name": "NIKE Vomero Ref. 1770",
    "brand": "Nike",
    "category": "Casual",
    "price": 197000,
    "rating": 4.4,
    "reviewsCount": 75,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_770.jpg",
    "featured": false,
    "images": [
      "products/shoe_770.jpg"
    ]
  },
  {
    "id": 771,
    "name": "NIKE Vomero Ref. 1771",
    "brand": "Nike",
    "category": "Casual",
    "price": 188000,
    "rating": 4.5,
    "reviewsCount": 6,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_771.jpg",
    "featured": false,
    "images": [
      "products/shoe_771.jpg"
    ]
  },
  {
    "id": 772,
    "name": "NIKE Vomero Ref. 1772",
    "brand": "Nike",
    "category": "Casual",
    "price": 209000,
    "rating": 4.6,
    "reviewsCount": 17,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_772.jpg",
    "featured": false,
    "images": [
      "products/shoe_772.jpg"
    ]
  },
  {
    "id": 773,
    "name": "NIKE Vomero Ref. 1773",
    "brand": "Nike",
    "category": "Casual",
    "price": 213000,
    "rating": 4.7,
    "reviewsCount": 28,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_773.jpg",
    "featured": false,
    "images": [
      "products/shoe_773.jpg"
    ]
  },
  {
    "id": 774,
    "name": "NIKE Vomero Ref. 1774",
    "brand": "Nike",
    "category": "Casual",
    "price": 217000,
    "rating": 4.8,
    "reviewsCount": 39,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_774.jpg",
    "featured": false,
    "images": [
      "products/shoe_774.jpg"
    ]
  },
  {
    "id": 775,
    "name": "NIKE Vomero Ref. 1775",
    "brand": "Nike",
    "category": "Casual",
    "price": 191000,
    "rating": 4.9,
    "reviewsCount": 50,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_775.jpg",
    "featured": false,
    "images": [
      "products/shoe_775.jpg"
    ]
  },
  {
    "id": 776,
    "name": "NIKE Vomero Ref. 1776",
    "brand": "Nike",
    "category": "Casual",
    "price": 218000,
    "rating": 5.0,
    "reviewsCount": 61,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_776.jpg",
    "featured": false,
    "images": [
      "products/shoe_776.jpg"
    ]
  },
  {
    "id": 777,
    "name": "NIKE Vomero Ref. 1777",
    "brand": "Nike",
    "category": "Casual",
    "price": 193000,
    "rating": 4.4,
    "reviewsCount": 72,
    "description": "Zapatos Nike Vomero de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_777.jpg",
    "featured": false,
    "images": [
      "products/shoe_777.jpg"
    ]
  },
  {
    "id": 778,
    "name": "Oasiris Ref. 1778",
    "brand": "Oasiris",
    "category": "Casual",
    "price": 180000,
    "rating": 4.5,
    "reviewsCount": 83,
    "description": "Zapatos Oasiris  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_778.jpg",
    "featured": false,
    "images": [
      "products/shoe_778.jpg"
    ]
  },
  {
    "id": 779,
    "name": "Oasiris Ref. 1779",
    "brand": "Oasiris",
    "category": "Casual",
    "price": 167000,
    "rating": 4.6,
    "reviewsCount": 14,
    "description": "Zapatos Oasiris  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_779.jpg",
    "featured": false,
    "images": [
      "products/shoe_779.jpg"
    ]
  },
  {
    "id": 780,
    "name": "Oasiris Ref. 1780",
    "brand": "Oasiris",
    "category": "Casual",
    "price": 218000,
    "rating": 4.7,
    "reviewsCount": 25,
    "description": "Zapatos Oasiris  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_780.jpg",
    "featured": true,
    "images": [
      "products/shoe_780.jpg"
    ]
  },
  {
    "id": 781,
    "name": "Oasiris Ref. 1781",
    "brand": "Oasiris",
    "category": "Casual",
    "price": 153000,
    "rating": 4.8,
    "reviewsCount": 36,
    "description": "Zapatos Oasiris  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_781.jpg",
    "featured": false,
    "images": [
      "products/shoe_781.jpg"
    ]
  },
  {
    "id": 782,
    "name": "Oasiris Ref. 1782",
    "brand": "Oasiris",
    "category": "Casual",
    "price": 158000,
    "rating": 4.9,
    "reviewsCount": 47,
    "description": "Zapatos Oasiris  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_782.jpg",
    "featured": false,
    "images": [
      "products/shoe_782.jpg"
    ]
  },
  {
    "id": 783,
    "name": "Oasiris Ref. 1783",
    "brand": "Oasiris",
    "category": "Casual",
    "price": 160000,
    "rating": 5.0,
    "reviewsCount": 58,
    "description": "Zapatos Oasiris  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_783.jpg",
    "featured": false,
    "images": [
      "products/shoe_783.jpg"
    ]
  },
  {
    "id": 784,
    "name": "Oasiris Ref. 1784",
    "brand": "Oasiris",
    "category": "Casual",
    "price": 164000,
    "rating": 4.4,
    "reviewsCount": 69,
    "description": "Zapatos Oasiris  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_784.jpg",
    "featured": false,
    "images": [
      "products/shoe_784.jpg"
    ]
  },
  {
    "id": 785,
    "name": "Oasiris Ref. 1785",
    "brand": "Oasiris",
    "category": "Casual",
    "price": 163000,
    "rating": 4.5,
    "reviewsCount": 80,
    "description": "Zapatos Oasiris  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_785.jpg",
    "featured": false,
    "images": [
      "products/shoe_785.jpg"
    ]
  },
  {
    "id": 786,
    "name": "Oasiris Ref. 1786",
    "brand": "Oasiris",
    "category": "Casual",
    "price": 164000,
    "rating": 4.6,
    "reviewsCount": 11,
    "description": "Zapatos Oasiris  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_786.jpg",
    "featured": false,
    "images": [
      "products/shoe_786.jpg"
    ]
  },
  {
    "id": 787,
    "name": "Oasiris Ref. 1787",
    "brand": "Oasiris",
    "category": "Casual",
    "price": 163000,
    "rating": 4.7,
    "reviewsCount": 22,
    "description": "Zapatos Oasiris  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_787.jpg",
    "featured": false,
    "images": [
      "products/shoe_787.jpg"
    ]
  },
  {
    "id": 788,
    "name": "OFF-WHITE Ref. 1788",
    "brand": "Off-White",
    "category": "Casual",
    "price": 222000,
    "rating": 4.8,
    "reviewsCount": 33,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_788.jpg",
    "featured": false,
    "images": [
      "products/shoe_788.jpg"
    ]
  },
  {
    "id": 789,
    "name": "OFF-WHITE Ref. 1789",
    "brand": "Off-White",
    "category": "Casual",
    "price": 225000,
    "rating": 4.9,
    "reviewsCount": 44,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_789.jpg",
    "featured": false,
    "images": [
      "products/shoe_789.jpg"
    ]
  },
  {
    "id": 790,
    "name": "OFF-WHITE Ref. 1790",
    "brand": "Off-White",
    "category": "Casual",
    "price": 231000,
    "rating": 5.0,
    "reviewsCount": 55,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_790.jpg",
    "featured": false,
    "images": [
      "products/shoe_790.jpg"
    ]
  },
  {
    "id": 791,
    "name": "OFF-WHITE Ref. 1791",
    "brand": "Off-White",
    "category": "Casual",
    "price": 227000,
    "rating": 4.4,
    "reviewsCount": 66,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_791.jpg",
    "featured": false,
    "images": [
      "products/shoe_791.jpg"
    ]
  },
  {
    "id": 792,
    "name": "OFF-WHITE Ref. 1792",
    "brand": "Off-White",
    "category": "Casual",
    "price": 223000,
    "rating": 4.5,
    "reviewsCount": 77,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_792.jpg",
    "featured": true,
    "images": [
      "products/shoe_792.jpg"
    ]
  },
  {
    "id": 793,
    "name": "OFF-WHITE Ref. 1793",
    "brand": "Off-White",
    "category": "Casual",
    "price": 228000,
    "rating": 4.6,
    "reviewsCount": 8,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_793.jpg",
    "featured": false,
    "images": [
      "products/shoe_793.jpg"
    ]
  },
  {
    "id": 794,
    "name": "OFF-WHITE Ref. 1794",
    "brand": "Off-White",
    "category": "Casual",
    "price": 227000,
    "rating": 4.7,
    "reviewsCount": 19,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_794.jpg",
    "featured": false,
    "images": [
      "products/shoe_794.jpg"
    ]
  },
  {
    "id": 795,
    "name": "OFF-WHITE Ref. 1795",
    "brand": "Off-White",
    "category": "Casual",
    "price": 222000,
    "rating": 4.8,
    "reviewsCount": 30,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_795.jpg",
    "featured": false,
    "images": [
      "products/shoe_795.jpg"
    ]
  },
  {
    "id": 796,
    "name": "OFF-WHITE Ref. 1796",
    "brand": "Off-White",
    "category": "Casual",
    "price": 232000,
    "rating": 4.9,
    "reviewsCount": 41,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_796.jpg",
    "featured": false,
    "images": [
      "products/shoe_796.jpg"
    ]
  },
  {
    "id": 797,
    "name": "OFF-WHITE Ref. 1797",
    "brand": "Off-White",
    "category": "Casual",
    "price": 230000,
    "rating": 5.0,
    "reviewsCount": 52,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_797.jpg",
    "featured": false,
    "images": [
      "products/shoe_797.jpg"
    ]
  },
  {
    "id": 798,
    "name": "OFF-WHITE Ref. 1798",
    "brand": "Off-White",
    "category": "Casual",
    "price": 229000,
    "rating": 4.4,
    "reviewsCount": 63,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_798.jpg",
    "featured": false,
    "images": [
      "products/shoe_798.jpg"
    ]
  },
  {
    "id": 799,
    "name": "OFF-WHITE Ref. 1799",
    "brand": "Off-White",
    "category": "Casual",
    "price": 236000,
    "rating": 4.5,
    "reviewsCount": 74,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_799.jpg",
    "featured": false,
    "images": [
      "products/shoe_799.jpg"
    ]
  },
  {
    "id": 800,
    "name": "OFF-WHITE Ref. 1800",
    "brand": "Off-White",
    "category": "Casual",
    "price": 224000,
    "rating": 4.6,
    "reviewsCount": 5,
    "description": "Zapatos Off-White  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_800.jpg",
    "featured": false,
    "images": [
      "products/shoe_800.jpg"
    ]
  },
  {
    "id": 801,
    "name": "ON Ref. 1801",
    "brand": "On",
    "category": "Running",
    "price": 176000,
    "rating": 4.7,
    "reviewsCount": 16,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_801.jpg",
    "featured": false,
    "images": [
      "products/shoe_801.jpg"
    ]
  },
  {
    "id": 802,
    "name": "ON Ref. 1802",
    "brand": "On",
    "category": "Running",
    "price": 172000,
    "rating": 4.8,
    "reviewsCount": 27,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_802.jpg",
    "featured": false,
    "images": [
      "products/shoe_802.jpg"
    ]
  },
  {
    "id": 803,
    "name": "ON Ref. 1803",
    "brand": "On",
    "category": "Running",
    "price": 180000,
    "rating": 4.9,
    "reviewsCount": 38,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_803.jpg",
    "featured": false,
    "images": [
      "products/shoe_803.jpg"
    ]
  },
  {
    "id": 804,
    "name": "ON Ref. 1804",
    "brand": "On",
    "category": "Running",
    "price": 208000,
    "rating": 5.0,
    "reviewsCount": 49,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_804.jpg",
    "featured": true,
    "images": [
      "products/shoe_804.jpg"
    ]
  },
  {
    "id": 805,
    "name": "ON Ref. 1805",
    "brand": "On",
    "category": "Running",
    "price": 173000,
    "rating": 4.4,
    "reviewsCount": 60,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_805.jpg",
    "featured": false,
    "images": [
      "products/shoe_805.jpg"
    ]
  },
  {
    "id": 806,
    "name": "ON Ref. 1806",
    "brand": "On",
    "category": "Running",
    "price": 161000,
    "rating": 4.5,
    "reviewsCount": 71,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_806.jpg",
    "featured": false,
    "images": [
      "products/shoe_806.jpg"
    ]
  },
  {
    "id": 807,
    "name": "ON Ref. 1807",
    "brand": "On",
    "category": "Running",
    "price": 165000,
    "rating": 4.6,
    "reviewsCount": 82,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_807.jpg",
    "featured": false,
    "images": [
      "products/shoe_807.jpg"
    ]
  },
  {
    "id": 808,
    "name": "ON Ref. 1808",
    "brand": "On",
    "category": "Running",
    "price": 171000,
    "rating": 4.7,
    "reviewsCount": 13,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_808.jpg",
    "featured": false,
    "images": [
      "products/shoe_808.jpg"
    ]
  },
  {
    "id": 809,
    "name": "ON Ref. 1809",
    "brand": "On",
    "category": "Running",
    "price": 180000,
    "rating": 4.8,
    "reviewsCount": 24,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_809.jpg",
    "featured": false,
    "images": [
      "products/shoe_809.jpg"
    ]
  },
  {
    "id": 810,
    "name": "ON Ref. 1810",
    "brand": "On",
    "category": "Running",
    "price": 159000,
    "rating": 4.9,
    "reviewsCount": 35,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_810.jpg",
    "featured": false,
    "images": [
      "products/shoe_810.jpg"
    ]
  },
  {
    "id": 811,
    "name": "ON Ref. 1811",
    "brand": "On",
    "category": "Running",
    "price": 179000,
    "rating": 5.0,
    "reviewsCount": 46,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_811.jpg",
    "featured": false,
    "images": [
      "products/shoe_811.jpg"
    ]
  },
  {
    "id": 812,
    "name": "ON Ref. 1812",
    "brand": "On",
    "category": "Running",
    "price": 178000,
    "rating": 4.4,
    "reviewsCount": 57,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_812.jpg",
    "featured": false,
    "images": [
      "products/shoe_812.jpg"
    ]
  },
  {
    "id": 813,
    "name": "ON Ref. 1813",
    "brand": "On",
    "category": "Running",
    "price": 169000,
    "rating": 4.5,
    "reviewsCount": 68,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_813.jpg",
    "featured": false,
    "images": [
      "products/shoe_813.jpg"
    ]
  },
  {
    "id": 814,
    "name": "ON Ref. 1814",
    "brand": "On",
    "category": "Running",
    "price": 177000,
    "rating": 4.6,
    "reviewsCount": 79,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_814.jpg",
    "featured": false,
    "images": [
      "products/shoe_814.jpg"
    ]
  },
  {
    "id": 815,
    "name": "ON Ref. 1815",
    "brand": "On",
    "category": "Running",
    "price": 155000,
    "rating": 4.7,
    "reviewsCount": 10,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_815.jpg",
    "featured": false,
    "images": [
      "products/shoe_815.jpg"
    ]
  },
  {
    "id": 816,
    "name": "ON Ref. 1816",
    "brand": "On",
    "category": "Running",
    "price": 214000,
    "rating": 4.8,
    "reviewsCount": 21,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_816.jpg",
    "featured": true,
    "images": [
      "products/shoe_816.jpg"
    ]
  },
  {
    "id": 817,
    "name": "ON Ref. 1817",
    "brand": "On",
    "category": "Running",
    "price": 173000,
    "rating": 4.9,
    "reviewsCount": 32,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_817.jpg",
    "featured": false,
    "images": [
      "products/shoe_817.jpg"
    ]
  },
  {
    "id": 818,
    "name": "ON Ref. 1818",
    "brand": "On",
    "category": "Running",
    "price": 161000,
    "rating": 5.0,
    "reviewsCount": 43,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_818.jpg",
    "featured": false,
    "images": [
      "products/shoe_818.jpg"
    ]
  },
  {
    "id": 819,
    "name": "ON Ref. 1819",
    "brand": "On",
    "category": "Running",
    "price": 152000,
    "rating": 4.4,
    "reviewsCount": 54,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_819.jpg",
    "featured": false,
    "images": [
      "products/shoe_819.jpg"
    ]
  },
  {
    "id": 820,
    "name": "ON Ref. 1820",
    "brand": "On",
    "category": "Running",
    "price": 171000,
    "rating": 4.5,
    "reviewsCount": 65,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_820.jpg",
    "featured": false,
    "images": [
      "products/shoe_820.jpg"
    ]
  },
  {
    "id": 821,
    "name": "ON Ref. 1821",
    "brand": "On",
    "category": "Running",
    "price": 174000,
    "rating": 4.6,
    "reviewsCount": 76,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_821.jpg",
    "featured": false,
    "images": [
      "products/shoe_821.jpg"
    ]
  },
  {
    "id": 822,
    "name": "ON Ref. 1822",
    "brand": "On",
    "category": "Running",
    "price": 173000,
    "rating": 4.7,
    "reviewsCount": 7,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_822.jpg",
    "featured": false,
    "images": [
      "products/shoe_822.jpg"
    ]
  },
  {
    "id": 823,
    "name": "ON Ref. 1823",
    "brand": "On",
    "category": "Running",
    "price": 179000,
    "rating": 4.8,
    "reviewsCount": 18,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_823.jpg",
    "featured": false,
    "images": [
      "products/shoe_823.jpg"
    ]
  },
  {
    "id": 824,
    "name": "ON Ref. 1824",
    "brand": "On",
    "category": "Running",
    "price": 152000,
    "rating": 4.9,
    "reviewsCount": 29,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_824.jpg",
    "featured": false,
    "images": [
      "products/shoe_824.jpg"
    ]
  },
  {
    "id": 825,
    "name": "ON Ref. 1825",
    "brand": "On",
    "category": "Running",
    "price": 180000,
    "rating": 5.0,
    "reviewsCount": 40,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_825.jpg",
    "featured": false,
    "images": [
      "products/shoe_825.jpg"
    ]
  },
  {
    "id": 826,
    "name": "ON Ref. 1826",
    "brand": "On",
    "category": "Running",
    "price": 159000,
    "rating": 4.4,
    "reviewsCount": 51,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_826.jpg",
    "featured": false,
    "images": [
      "products/shoe_826.jpg"
    ]
  },
  {
    "id": 827,
    "name": "ON Ref. 1827",
    "brand": "On",
    "category": "Running",
    "price": 179000,
    "rating": 4.5,
    "reviewsCount": 62,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_827.jpg",
    "featured": false,
    "images": [
      "products/shoe_827.jpg"
    ]
  },
  {
    "id": 828,
    "name": "ON Ref. 1828",
    "brand": "On",
    "category": "Running",
    "price": 185000,
    "rating": 4.6,
    "reviewsCount": 73,
    "description": "Zapatos On  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_828.jpg",
    "featured": true,
    "images": [
      "products/shoe_828.jpg"
    ]
  },
  {
    "id": 829,
    "name": "PUMA Ref. 1829",
    "brand": "Puma",
    "category": "Casual",
    "price": 193000,
    "rating": 4.7,
    "reviewsCount": 84,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_829.jpg",
    "featured": false,
    "images": [
      "products/shoe_829.jpg"
    ]
  },
  {
    "id": 830,
    "name": "PUMA Ref. 1830",
    "brand": "Puma",
    "category": "Casual",
    "price": 215000,
    "rating": 4.8,
    "reviewsCount": 15,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_830.jpg",
    "featured": false,
    "images": [
      "products/shoe_830.jpg"
    ]
  },
  {
    "id": 831,
    "name": "PUMA Ref. 1831",
    "brand": "Puma",
    "category": "Casual",
    "price": 207000,
    "rating": 4.9,
    "reviewsCount": 26,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_831.jpg",
    "featured": false,
    "images": [
      "products/shoe_831.jpg"
    ]
  },
  {
    "id": 832,
    "name": "PUMA Ref. 1832",
    "brand": "Puma",
    "category": "Casual",
    "price": 212000,
    "rating": 5.0,
    "reviewsCount": 37,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_832.jpg",
    "featured": false,
    "images": [
      "products/shoe_832.jpg"
    ]
  },
  {
    "id": 833,
    "name": "PUMA Ref. 1833",
    "brand": "Puma",
    "category": "Casual",
    "price": 188000,
    "rating": 4.4,
    "reviewsCount": 48,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_833.jpg",
    "featured": false,
    "images": [
      "products/shoe_833.jpg"
    ]
  },
  {
    "id": 834,
    "name": "PUMA Ref. 1834",
    "brand": "Puma",
    "category": "Casual",
    "price": 195000,
    "rating": 4.5,
    "reviewsCount": 59,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_834.jpg",
    "featured": false,
    "images": [
      "products/shoe_834.jpg"
    ]
  },
  {
    "id": 835,
    "name": "PUMA Ref. 1835",
    "brand": "Puma",
    "category": "Casual",
    "price": 213000,
    "rating": 4.6,
    "reviewsCount": 70,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_835.jpg",
    "featured": false,
    "images": [
      "products/shoe_835.jpg"
    ]
  },
  {
    "id": 836,
    "name": "PUMA Ref. 1836",
    "brand": "Puma",
    "category": "Casual",
    "price": 193000,
    "rating": 4.7,
    "reviewsCount": 81,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_836.jpg",
    "featured": false,
    "images": [
      "products/shoe_836.jpg"
    ]
  },
  {
    "id": 837,
    "name": "PUMA Ref. 1837",
    "brand": "Puma",
    "category": "Casual",
    "price": 183000,
    "rating": 4.8,
    "reviewsCount": 12,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_837.jpg",
    "featured": false,
    "images": [
      "products/shoe_837.jpg"
    ]
  },
  {
    "id": 838,
    "name": "PUMA Ref. 1838",
    "brand": "Puma",
    "category": "Casual",
    "price": 184000,
    "rating": 4.9,
    "reviewsCount": 23,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_838.jpg",
    "featured": false,
    "images": [
      "products/shoe_838.jpg"
    ]
  },
  {
    "id": 839,
    "name": "PUMA Ref. 1839",
    "brand": "Puma",
    "category": "Casual",
    "price": 184000,
    "rating": 5.0,
    "reviewsCount": 34,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_839.jpg",
    "featured": false,
    "images": [
      "products/shoe_839.jpg"
    ]
  },
  {
    "id": 840,
    "name": "PUMA Ref. 1840",
    "brand": "Puma",
    "category": "Casual",
    "price": 184000,
    "rating": 4.4,
    "reviewsCount": 45,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_840.jpg",
    "featured": true,
    "images": [
      "products/shoe_840.jpg"
    ]
  },
  {
    "id": 841,
    "name": "PUMA Ref. 1841",
    "brand": "Puma",
    "category": "Casual",
    "price": 206000,
    "rating": 4.5,
    "reviewsCount": 56,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_841.jpg",
    "featured": false,
    "images": [
      "products/shoe_841.jpg"
    ]
  },
  {
    "id": 842,
    "name": "PUMA Ref. 1842",
    "brand": "Puma",
    "category": "Casual",
    "price": 191000,
    "rating": 4.6,
    "reviewsCount": 67,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_842.jpg",
    "featured": false,
    "images": [
      "products/shoe_842.jpg"
    ]
  },
  {
    "id": 843,
    "name": "PUMA Ref. 1843",
    "brand": "Puma",
    "category": "Casual",
    "price": 203000,
    "rating": 4.7,
    "reviewsCount": 78,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_843.jpg",
    "featured": false,
    "images": [
      "products/shoe_843.jpg"
    ]
  },
  {
    "id": 844,
    "name": "PUMA Ref. 1844",
    "brand": "Puma",
    "category": "Casual",
    "price": 210000,
    "rating": 4.8,
    "reviewsCount": 9,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_844.jpg",
    "featured": false,
    "images": [
      "products/shoe_844.jpg"
    ]
  },
  {
    "id": 845,
    "name": "PUMA Ref. 1845",
    "brand": "Puma",
    "category": "Casual",
    "price": 201000,
    "rating": 4.9,
    "reviewsCount": 20,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_845.jpg",
    "featured": false,
    "images": [
      "products/shoe_845.jpg"
    ]
  },
  {
    "id": 846,
    "name": "PUMA Ref. 1846",
    "brand": "Puma",
    "category": "Casual",
    "price": 199000,
    "rating": 5.0,
    "reviewsCount": 31,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_846.jpg",
    "featured": false,
    "images": [
      "products/shoe_846.jpg"
    ]
  },
  {
    "id": 847,
    "name": "PUMA Ref. 1847",
    "brand": "Puma",
    "category": "Casual",
    "price": 182000,
    "rating": 4.4,
    "reviewsCount": 42,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_847.jpg",
    "featured": false,
    "images": [
      "products/shoe_847.jpg"
    ]
  },
  {
    "id": 848,
    "name": "PUMA Ref. 1848",
    "brand": "Puma",
    "category": "Casual",
    "price": 214000,
    "rating": 4.5,
    "reviewsCount": 53,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_848.jpg",
    "featured": false,
    "images": [
      "products/shoe_848.jpg"
    ]
  },
  {
    "id": 849,
    "name": "PUMA Ref. 1849",
    "brand": "Puma",
    "category": "Casual",
    "price": 193000,
    "rating": 4.6,
    "reviewsCount": 64,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_849.jpg",
    "featured": false,
    "images": [
      "products/shoe_849.jpg"
    ]
  },
  {
    "id": 850,
    "name": "PUMA Ref. 1850",
    "brand": "Puma",
    "category": "Casual",
    "price": 193000,
    "rating": 4.7,
    "reviewsCount": 75,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_850.jpg",
    "featured": false,
    "images": [
      "products/shoe_850.jpg"
    ]
  },
  {
    "id": 851,
    "name": "PUMA Ref. 1851",
    "brand": "Puma",
    "category": "Casual",
    "price": 189000,
    "rating": 4.8,
    "reviewsCount": 6,
    "description": "Zapatos Puma  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_851.jpg",
    "featured": false,
    "images": [
      "products/shoe_851.jpg"
    ]
  },
  {
    "id": 852,
    "name": "TIMBERLAND Ref. 1852",
    "brand": "Timberland",
    "category": "Boots",
    "price": 199000,
    "rating": 4.9,
    "reviewsCount": 17,
    "description": "Zapatos Timberland  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_852.jpg",
    "featured": true,
    "images": [
      "products/shoe_852.jpg"
    ]
  },
  {
    "id": 853,
    "name": "TIMBERLAND Ref. 1853",
    "brand": "Timberland",
    "category": "Boots",
    "price": 174000,
    "rating": 5.0,
    "reviewsCount": 28,
    "description": "Zapatos Timberland  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_853.jpg",
    "featured": false,
    "images": [
      "products/shoe_853.jpg"
    ]
  },
  {
    "id": 854,
    "name": "TIMBERLAND Ref. 1854",
    "brand": "Timberland",
    "category": "Boots",
    "price": 165000,
    "rating": 4.4,
    "reviewsCount": 39,
    "description": "Zapatos Timberland  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_854.jpg",
    "featured": false,
    "images": [
      "products/shoe_854.jpg"
    ]
  },
  {
    "id": 855,
    "name": "TIMBERLAND Ref. 1855",
    "brand": "Timberland",
    "category": "Boots",
    "price": 154000,
    "rating": 4.5,
    "reviewsCount": 50,
    "description": "Zapatos Timberland  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_855.jpg",
    "featured": false,
    "images": [
      "products/shoe_855.jpg"
    ]
  },
  {
    "id": 856,
    "name": "VANS Ref. 1856",
    "brand": "Vans",
    "category": "Casual",
    "price": 168000,
    "rating": 4.6,
    "reviewsCount": 61,
    "description": "Zapatos Vans  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_856.jpg",
    "featured": false,
    "images": [
      "products/shoe_856.jpg"
    ]
  },
  {
    "id": 857,
    "name": "VANS Ref. 1857",
    "brand": "Vans",
    "category": "Casual",
    "price": 169000,
    "rating": 4.7,
    "reviewsCount": 72,
    "description": "Zapatos Vans  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_857.jpg",
    "featured": false,
    "images": [
      "products/shoe_857.jpg"
    ]
  },
  {
    "id": 858,
    "name": "VANS Ref. 1858",
    "brand": "Vans",
    "category": "Casual",
    "price": 152000,
    "rating": 4.8,
    "reviewsCount": 83,
    "description": "Zapatos Vans  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_858.jpg",
    "featured": false,
    "images": [
      "products/shoe_858.jpg"
    ]
  },
  {
    "id": 859,
    "name": "VANS Ref. 1859",
    "brand": "Vans",
    "category": "Casual",
    "price": 171000,
    "rating": 4.9,
    "reviewsCount": 14,
    "description": "Zapatos Vans  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_859.jpg",
    "featured": false,
    "images": [
      "products/shoe_859.jpg"
    ]
  },
  {
    "id": 860,
    "name": "VANS Ref. 1860",
    "brand": "Vans",
    "category": "Casual",
    "price": 175000,
    "rating": 5.0,
    "reviewsCount": 25,
    "description": "Zapatos Vans  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_860.jpg",
    "featured": false,
    "images": [
      "products/shoe_860.jpg"
    ]
  },
  {
    "id": 861,
    "name": "VANS Ref. 1861",
    "brand": "Vans",
    "category": "Casual",
    "price": 155000,
    "rating": 4.4,
    "reviewsCount": 36,
    "description": "Zapatos Vans  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_861.jpg",
    "featured": false,
    "images": [
      "products/shoe_861.jpg"
    ]
  },
  {
    "id": 862,
    "name": "VANS Ref. 1862",
    "brand": "Vans",
    "category": "Casual",
    "price": 170000,
    "rating": 4.5,
    "reviewsCount": 47,
    "description": "Zapatos Vans  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_862.jpg",
    "featured": false,
    "images": [
      "products/shoe_862.jpg"
    ]
  },
  {
    "id": 863,
    "name": "VANS Ref. 1863",
    "brand": "Vans",
    "category": "Casual",
    "price": 152000,
    "rating": 4.6,
    "reviewsCount": 58,
    "description": "Zapatos Vans  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_863.jpg",
    "featured": false,
    "images": [
      "products/shoe_863.jpg"
    ]
  },
  {
    "id": 864,
    "name": "VANS Ref. 1864",
    "brand": "Vans",
    "category": "Casual",
    "price": 208000,
    "rating": 4.7,
    "reviewsCount": 69,
    "description": "Zapatos Vans  de alta calidad. Este modelo ofrece comodidad superior, materiales duraderos seleccionados y un dise\u00f1o moderno e ideal para toda ocasi\u00f3n.",
    "sizes": [
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "colors": [
      {
        "name": "Color Foto",
        "value": "#4B5563"
      },
      {
        "name": "Negro",
        "value": "#111827"
      },
      {
        "name": "Blanco",
        "value": "#F3F4F6"
      }
    ],
    "image": "products/shoe_864.jpg",
    "featured": true,
    "images": [
      "products/shoe_864.jpg"
    ]
  }
];
