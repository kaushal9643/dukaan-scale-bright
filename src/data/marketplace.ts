import smartwatch from "@/assets/products/smartwatch.jpg";
import headphones from "@/assets/products/headphones.jpg";
import phone from "@/assets/products/phone.jpg";
import jacket from "@/assets/products/jacket.jpg";
import sneakers from "@/assets/products/sneakers.jpg";
import sofa from "@/assets/products/sofa.jpg";
import cookware from "@/assets/products/cookware.jpg";
import yogamat from "@/assets/products/yogamat.jpg";
import dumbbell from "@/assets/products/dumbbell.jpg";
import tv from "@/assets/products/tv.jpg";
import bag from "@/assets/products/bag.jpg";
import diffuser from "@/assets/products/diffuser.jpg";

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

export const products: Product[] = [
  { id: "p1", title: "Smart Watch Pro Series 7", slug: "smart-watch-pro-7", price: 129, oldPrice: 179, rating: 4.7, reviews: 312, image: smartwatch, category: "Electronics", vendor: "Infricode", badge: "Bestseller", stock: 24 },
  { id: "p2", title: "Wireless Noise-Cancel Headphones", slug: "wireless-headphones", price: 89, oldPrice: 120, rating: 4.6, reviews: 521, image: headphones, category: "Electronics", vendor: "AudioHub", badge: "-26%", stock: 40 },
  { id: "p3", title: "iPhone 14 Pro Max 256GB", slug: "iphone-14-pro-max", price: 1099, rating: 4.9, reviews: 1240, image: phone, category: "Electronics", vendor: "MobileMart", stock: 12 },
  { id: "p4", title: "Classic Denim Jacket", slug: "denim-jacket", price: 59, oldPrice: 79, rating: 4.4, reviews: 98, image: jacket, category: "Fashion", vendor: "UrbanWear", stock: 32 },
  { id: "p5", title: "Running Sneakers Air-Flex", slug: "running-sneakers", price: 75, rating: 4.5, reviews: 210, image: sneakers, category: "Fashion", vendor: "StepUp", badge: "New", stock: 50 },
  { id: "p6", title: "Minimalist Sofa Lounge", slug: "sofa-lounge", price: 449, oldPrice: 599, rating: 4.8, reviews: 76, image: sofa, category: "Home & Kitchen", vendor: "HomeNest", stock: 6 },
  { id: "p7", title: "Ceramic Cookware Set 12pc", slug: "cookware-set", price: 159, rating: 4.6, reviews: 142, image: cookware, category: "Home & Kitchen", vendor: "KitchenPro", stock: 18 },
  { id: "p8", title: "Yoga Mat Premium 6mm", slug: "yoga-mat", price: 29, oldPrice: 45, rating: 4.7, reviews: 305, image: yogamat, category: "Sports & Fitness", vendor: "FitGear", stock: 80 },
  { id: "p9", title: "Adjustable Dumbbell 20kg", slug: "dumbbell-20kg", price: 119, rating: 4.5, reviews: 89, image: dumbbell, category: "Sports & Fitness", vendor: "FitGear", stock: 22 },
  { id: "p10", title: "4K Ultra HD Smart TV 55\"", slug: "smart-tv-55", price: 549, oldPrice: 699, rating: 4.6, reviews: 410, image: tv, category: "Electronics", vendor: "MobileMart", badge: "Hot", stock: 9 },
  { id: "p11", title: "Leather Crossbody Bag", slug: "leather-bag", price: 89, rating: 4.4, reviews: 64, image: bag, category: "Fashion", vendor: "UrbanWear", stock: 25 },
  { id: "p12", title: "Aroma Diffuser & LED Lamp", slug: "aroma-diffuser", price: 35, oldPrice: 49, rating: 4.5, reviews: 188, image: diffuser, category: "Home & Kitchen", vendor: "HomeNest", stock: 60 },
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
