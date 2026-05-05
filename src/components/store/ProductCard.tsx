import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "@/data/marketplace";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link to={`/products/${p.slug}`} className="group bg-background rounded-xl border overflow-hidden shadow-card hover:shadow-elevated transition">
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
        {p.badge && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">{p.badge}</span>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{p.vendor}</div>
        <h3 className="font-semibold text-sm line-clamp-2 min-h-[2.5rem]">{p.title}</h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
          <Star className="w-3.5 h-3.5 fill-accent text-accent" /> {p.rating} <span>({p.reviews})</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-price">${p.price}</span>
          {p.oldPrice && <span className="text-xs text-muted-foreground line-through">${p.oldPrice}</span>}
        </div>
      </div>
    </Link>
  );
}
