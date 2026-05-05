import { Link } from "react-router-dom";
import { useCart } from "@/store/cart";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const { items, setQty, remove, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-x py-20 text-center">
        <h1 className="text-3xl font-bold mb-3">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Start shopping and add some products!</p>
        <Link to="/products" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="container-x py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid md:grid-cols-[1fr_360px] gap-6">
        <div className="space-y-3">
          {items.map(({ product, qty }) => (
            <div key={product.id} className="flex gap-4 bg-background border rounded-xl p-4">
              <img src={product.image} alt={product.title} className="w-24 h-24 rounded-lg object-cover" />
              <div className="flex-1">
                <Link to={`/products/${product.slug}`} className="font-semibold hover:text-primary">{product.title}</Link>
                <div className="text-xs text-muted-foreground">{product.vendor}</div>
                <div className="mt-2 text-price font-bold">${product.price}</div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button onClick={() => remove(product.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                <div className="flex items-center border rounded-md">
                  <button onClick={() => setQty(product.id, qty - 1)} className="px-2 py-1">-</button>
                  <span className="px-3 text-sm font-semibold">{qty}</span>
                  <button onClick={() => setQty(product.id, qty + 1)} className="px-2 py-1">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <aside className="bg-background border rounded-xl p-6 h-fit sticky top-32">
          <h3 className="font-semibold mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${total().toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-success">Free</span></div>
            <div className="border-t pt-2 mt-2 flex justify-between font-bold text-base"><span>Total</span><span className="text-price">${total().toFixed(2)}</span></div>
          </div>
          <Link to="/order/8e752f" className="mt-5 block text-center bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90">Checkout</Link>
        </aside>
      </div>
    </div>
  );
}
