import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  imports: [],
  templateUrl: './product-listing.component.html',
})
export class ProductListingComponent {
  products = [
    {
      id: 1,
      name: 'Wireless Noise-Cancelling Headphones',
      price: 199.99,
      originalPrice: 249.99, // For showing discounts
      description:
        'Premium over-ear headphones with 40hr battery life and adaptive noise cancellation.',
      image: '/images/headphones.jpg',
      category: 'electronics',
      rating: 4.5,
      reviewCount: 128,
      isNew: true,
      inStock: true,
      variants: [
        { color: 'Black', sku: 'HP-BK' },
        { color: 'Silver', sku: 'HP-SL' },
      ],
    },
    {
      id: 2,
      name: 'Organic Cotton T-Shirt',
      price: 29.99,
      description: 'Unisex eco-friendly tee made from 100% organic cotton.',
      image: '/images/tshirt.jpg',
      category: 'clothing',
      rating: 4.2,
      reviewCount: 56,
      inStock: true,
      variants: [
        { size: 'S', color: 'White', sku: 'TS-S-WH' },
        { size: 'M', color: 'White', sku: 'TS-M-WH' },
        { size: 'L', color: 'Heather Gray', sku: 'TS-L-GY' },
      ],
    },
    {
      id: 3,
      name: 'Smart LED Desk Lamp',
      price: 59.95,
      description:
        'APP-controlled lamp with 5 brightness levels and circadian lighting.',
      image: '/images/lamp.jpg',
      category: 'home',
      rating: 4.7,
      reviewCount: 89,
      isNew: false,
      inStock: false, // Out of stock
      tags: ['bestseller', 'smart-home'],
    },
    {
      id: 4,
      name: 'Stainless Steel Water Bottle',
      price: 24.5,
      originalPrice: 34.99,
      description:
        'Insulated 750ml bottle keeps drinks cold for 24hr or hot for 12hr.',
      image: '/images/bottle.jpg',
      category: 'accessories',
      rating: 4.8,
      reviewCount: 214,
      inStock: true,
      tags: ['eco-friendly'],
    },
    {
      id: 5,
      name: 'Yoga Mat (Non-Slip)',
      price: 45.0,
      description: 'Extra-thick 6mm mat with alignment markers for beginners.',
      image: '/images/yogamat.jpg',
      category: 'fitness',
      rating: 4.4,
      reviewCount: 73,
      inStock: true,
    },
    {
      id: 6,
      name: 'Wireless Charging Pad',
      price: 19.99,
      description: '10W fast charging compatible with Qi-enabled devices.',
      image: '/images/charger.jpg',
      category: 'electronics',
      rating: 3.9,
      reviewCount: 42,
      isNew: true,
      inStock: true,
    },
  ];
}
