import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/data/marketplace";

export type CartItem = { product: Product; qty: number };

type CartState = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (p, qty = 1) =>
        set((s) => {
          const existing = s.items.find((i) => i.product.id === p.id);
          if (existing) {
            return { items: s.items.map((i) => i.product.id === p.id ? { ...i, qty: i.qty + qty } : i) };
          }
          return { items: [...s.items, { product: p, qty }] };
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.product.id !== id) })),
      setQty: (id, qty) => set((s) => ({ items: s.items.map((i) => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i) })),
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((n, i) => n + i.qty, 0),
      total: () => get().items.reduce((n, i) => n + i.qty * i.product.price, 0),
    }),
    { name: "hardukan-cart" }
  )
);
