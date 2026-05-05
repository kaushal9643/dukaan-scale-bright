import { products } from "@/data/marketplace";
import { Pencil, Trash2 } from "lucide-react";

export default function AllProducts() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="bg-[hsl(222_47%_9%)] border border-[hsl(222_47%_14%)] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-left bg-[hsl(222_47%_11%)] text-[hsl(215_20%_65%)]">
            <tr><th className="p-3">Product</th><th>Category</th><th>Stock</th><th>Price</th><th>Rating</th><th></th></tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-t border-[hsl(222_47%_14%)]">
                <td className="p-3 flex items-center gap-3"><img src={p.image} alt="" className="w-10 h-10 rounded-md object-cover" /> <span className="font-medium">{p.title}</span></td>
                <td>{p.category}</td>
                <td>{p.stock}</td>
                <td className="text-price font-semibold">${p.price}</td>
                <td>{p.rating} ⭐</td>
                <td className="text-right pr-4">
                  <button className="p-2 hover:bg-[hsl(222_47%_14%)] rounded"><Pencil className="w-4 h-4" /></button>
                  <button className="p-2 hover:bg-[hsl(222_47%_14%)] rounded text-destructive"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
