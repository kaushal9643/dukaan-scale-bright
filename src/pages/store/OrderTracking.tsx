import { useParams } from "react-router-dom";
import { products } from "@/data/marketplace";
import { Check } from "lucide-react";

const steps = ["Ordered", "Packed", "Shipped", "Out for Delivery", "Delivered"];

export default function OrderTracking() {
  const { id = "8e752f" } = useParams();
  const item = products[2];
  const current = 0; // Ordered

  return (
    <div className="container-x py-8">
      <div className="bg-surface border rounded-xl p-6 mb-6">
        <h1 className="text-2xl font-bold mb-6">Order #{id}</h1>

        <div className="relative flex justify-between mb-2">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-col items-center flex-1 relative">
              <div className={`w-8 h-8 rounded-full grid place-items-center z-10 ${i <= current ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                {i < current ? <Check className="w-4 h-4" /> : <span className="text-xs">{i + 1}</span>}
              </div>
              <span className={`text-xs mt-2 ${i <= current ? "font-semibold" : "text-muted-foreground"}`}>{s}</span>
              {i < steps.length - 1 && (
                <div className={`absolute top-4 left-1/2 w-full h-1 ${i < current ? "bg-primary" : "bg-secondary"}`} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm space-y-1">
          <p><strong>Payment Status:</strong> <span className="text-success font-medium">Paid</span></p>
          <p><strong>Total:</strong> $120.00</p>
          <p><strong>Date:</strong> 11/04/2026</p>
        </div>
      </div>
      <div className="bg-background border rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Order Items</h2>
        <div className="flex items-center gap-4 bg-surface p-4 rounded-lg">
          <img src={item.image} alt={item.title} className="w-20 h-20 rounded-md object-cover" />
          <div className="flex-1">
            <div className="font-semibold">{item.title}</div>
            <div className="text-sm text-muted-foreground">Quantity: 1 • Size: M</div>
          </div>
          <div className="font-bold text-price">${item.price}.00</div>
        </div>
      </div>
    </div>
  );
}
