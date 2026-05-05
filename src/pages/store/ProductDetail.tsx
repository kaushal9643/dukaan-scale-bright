import { useParams, Link } from "react-router-dom";
import { products } from "@/data/marketplace";
import { Star, ShoppingCart, Heart, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { useCart } from "@/store/cart";
import { useState } from "react";
import { toast } from "sonner";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const add = useCart(s => s.add);
  const [qty, setQty] = useState(1);

  if (!product) return <div className="container-x py-16 text-center">Product not found.</div>;

  return (
    <div className="container-x py-8">
      <p className="text-sm text-muted-foreground mb-4"><Link to="/" className="hover:text-primary">Home</Link> / <Link to="/products" className="hover:text-primary">Products</Link> / {product.title}</p>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-surface border rounded-xl overflow-hidden aspect-square">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="text-sm text-muted-foreground mb-2">By <span className="font-semibold text-foreground">{product.vendor}</span></div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <div className="flex items-center gap-2 mb-4 text-sm">
            <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-accent text-accent" /> {product.rating}</span>
            <span className="text-muted-foreground">({product.reviews} reviews)</span>
            <span className="ml-3 text-success font-medium">In stock: {product.stock}</span>
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-extrabold text-price">${product.price}</span>
            {product.oldPrice && <span className="text-lg text-muted-foreground line-through">${product.oldPrice}</span>}
          </div>
          <p className="text-muted-foreground mb-6">Premium quality product backed by {product.vendor}. Fast shipping, easy returns, and 1-year warranty included.</p>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center border rounded-md">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-2">-</button>
              <span className="px-4 font-semibold">{qty}</span>
              <button onClick={() => setQty(q => q + 1)} className="px-3 py-2">+</button>
            </div>
            <button onClick={() => { add(product, qty); toast.success("Added to cart"); }}
              className="flex-1 bg-primary text-primary-foreground py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:opacity-90">
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>
            <button className="w-12 h-12 border rounded-md grid place-items-center hover:bg-secondary"><Heart className="w-4 h-4" /></button>
          </div>

          <div className="grid grid-cols-3 gap-3 text-xs">
            {[{ I: Truck, t: "Free shipping" }, { I: ShieldCheck, t: "1-yr warranty" }, { I: RotateCcw, t: "7-day return" }].map(({ I, t }) => (
              <div key={t} className="border rounded-md p-3 flex items-center gap-2"><I className="w-4 h-4 text-primary" /> {t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
