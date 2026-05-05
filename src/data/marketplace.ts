import { ReactNode } from "react";

export type Product = {
  id: string;
  title: string;
  slug: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: "Electronics" | "Fashion" | "Home & Kitchen" | "Sports & Fitness";
  vendor: string;
  badge?: string;
  stock: number;
};

export const categories = [
  { name: "Electronics", icon: "Smartphone" },
  { name: "Fashion", icon: "Shirt" },
  { name: "Home & Kitchen", icon: "Sofa" },
  { name: "Sports & Fitness", icon: "Dumbbell" },
] as const;

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=75`;

export const products: Product[] = [
  { id: "p1", title: "Smart Watch Pro Series 7", slug: "smart-watch-pro-7", price: 129, oldPrice: 179, rating: 4.7, reviews: 312, image: img("photo-1523275335684-37898b6baf30"), category: "Electronics", vendor: "Infricode", badge: "Bestseller", stock: 24 },
  { id: "p2", title: "Wireless Noise-Cancel Headphones", slug: "wireless-headphones", price: 89, oldPrice: 120, rating: 4.6, reviews: 521, image: img("photo-1505740420928-5e560c06d30e"), category: "Electronics", vendor: "AudioHub", badge: "-26%", stock: 40 },
  { id: "p3", title: "iPhone 14 Pro Max 256GB", slug: "iphone-14-pro-max", price: 1099, rating: 4.9, reviews: 1240, image: img("photo-1511707171634-5f897ff02aa9"), category: "Electronics", vendor: "MobileMart", stock: 12 },
  { id: "p4", title: "Classic Denim Jacket", slug: "denim-jacket", price: 59, oldPrice: 79, rating: 4.4, reviews: 98, image: img("photo-1551028719-00167b16eac5"), category: "Fashion", vendor: "UrbanWear", stock: 32 },
  { id: "p5", title: "Running Sneakers Air-Flex", slug: "running-sneakers", price: 75, rating: 4.5, reviews: 210, image: img("photo-1542291026-7eec264c27ff"), category: "Fashion", vendor: "StepUp", badge: "New", stock: 50 },
  { id: "p6", title: "Minimalist Sofa Lounge", slug: "sofa-lounge", price: 449, oldPrice: 599, rating: 4.8, reviews: 76, image: img("photo-1555041469-a586c61ea9bc"), category: "Home & Kitchen", vendor: "HomeNest", stock: 6 },
  { id: "p7", title: "Ceramic Cookware Set 12pc", slug: "cookware-set", price: 159, rating: 4.6, reviews: 142, image: img("photo-1584990347449-a8d18a8e7a37"), category: "Home & Kitchen", vendor: "KitchenPro", stock: 18 },
  { id: "p8", title: "Yoga Mat Premium 6mm", slug: "yoga-mat", price: 29, oldPrice: 45, rating: 4.7, reviews: 305, image: img("photo-1601925260368-ae2f83cf8b7f"), category: "Sports & Fitness", vendor: "FitGear", stock: 80 },
  { id: "p9", title: "Adjustable Dumbbell 20kg", slug: "dumbbell-20kg", price: 119, rating: 4.5, reviews: 89, image: img("photo-1517836357463-d25dfeac3438"), category: "Sports & Fitness", vendor: "FitGear", stock: 22 },
  { id: "p10", title: "4K Ultra HD Smart TV 55\"", slug: "smart-tv-55", price: 549, oldPrice: 699, rating: 4.6, reviews: 410, image: img("photo-1593784991095-a205069470b6"), category: "Electronics", vendor: "MobileMart", badge: "Hot", stock: 9 },
  { id: "p11", title: "Leather Crossbody Bag", slug: "leather-bag", price: 89, rating: 4.4, reviews: 64, image: img("photo-1548036328-c9fa89d128fa"), category: "Fashion", vendor: "UrbanWear", stock: 25 },
  { id: "p12", title: "Aroma Diffuser & LED Lamp", slug: "aroma-diffuser", price: 35, oldPrice: 49, rating: 4.5, reviews: 188, image: img("photo-1544537150-6e4b999de2a7"), category: "Home & Kitchen", vendor: "HomeNest", stock: 60 },
];

export const vendors = [
  { id: "v1", name: "Infricode", products: 24, sales: 1280, rating: 4.8 },
  { id: "v2", name: "AudioHub", products: 18, sales: 940, rating: 4.6 },
  { id: "v3", name: "MobileMart", products: 36, sales: 2150, rating: 4.9 },
  { id: "v4", name: "UrbanWear", products: 52, sales: 1830, rating: 4.5 },
  { id: "v5", name: "HomeNest", products: 41, sales: 760, rating: 4.7 },
  { id: "v6", name: "FitGear", products: 29, sales: 612, rating: 4.6 },
];

export const orders = [
  { id: "ORD-8e752f", customer: "Shahriar A.", amount: 120, status: "Paid", date: "11/04/2026", items: 1 },
  { id: "ORD-001", customer: "John Doe", amount: 250, status: "Paid", date: "11/04/2026", items: 2 },
  { id: "ORD-002", customer: "Jane Smith", amount: 180, status: "Pending", date: "11/03/2026", items: 1 },
  { id: "ORD-003", customer: "Alice Johnson", amount: 340, status: "Paid", date: "11/03/2026", items: 3 },
  { id: "ORD-004", customer: "Bob Lee", amount: 90, status: "Failed", date: "11/02/2026", items: 1 },
  { id: "ORD-005", customer: "Riya Patel", amount: 549, status: "Paid", date: "11/02/2026", items: 1 },
];
