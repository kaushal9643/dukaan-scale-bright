import { vendors, orders, products } from "@/data/marketplace";
import { Store, Users, ShoppingBag, DollarSign } from "lucide-react";

export default function AdminDashboard() {
  const totalSales = orders.reduce((n, o) => n + o.amount, 0);
  const stats = [
    { label: "Total Vendors", value: vendors.length, icon: Store, color: "hsl(222 89% 55%)" },
    { label: "Active Users", value: "12,480", icon: Users, color: "hsl(142 71% 45%)" },
    { label: "Orders", value: orders.length, icon: ShoppingBag, color: "hsl(45 100% 51%)" },
    { label: "Revenue", value: `$${totalSales.toLocaleString()}`, icon: DollarSign, color: "hsl(0 84% 60%)" },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, Admin</h1>
        <p className="text-sm text-[hsl(215_20%_65%)]">Marketplace overview</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-[hsl(222_47%_9%)] border border-[hsl(222_47%_14%)] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg grid place-items-center" style={{ background: `${s.color}25`, color: s.color }}><s.icon className="w-5 h-5" /></div>
            </div>
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-xs text-[hsl(215_20%_65%)]">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[hsl(222_47%_9%)] border border-[hsl(222_47%_14%)] rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">Top Vendors</h2>
          <table className="w-full text-sm">
            <thead className="text-left text-[hsl(215_20%_65%)] border-b border-[hsl(222_47%_14%)]">
              <tr><th className="pb-2">Vendor</th><th>Products</th><th>Sales</th><th>Rating</th></tr>
            </thead>
            <tbody>
              {vendors.map(v => (
                <tr key={v.id} className="border-b border-[hsl(222_47%_14%)] last:border-0">
                  <td className="py-3 font-medium">{v.name}</td>
                  <td>{v.products}</td>
                  <td>${v.sales}</td>
                  <td>{v.rating} ⭐</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-[hsl(222_47%_9%)] border border-[hsl(222_47%_14%)] rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">Trending Products</h2>
          <ul className="space-y-3">
            {products.slice(0, 5).map(p => (
              <li key={p.id} className="flex items-center gap-3">
                <img src={p.image} alt="" className="w-12 h-12 rounded-md object-cover" />
                <div className="flex-1">
                  <div className="font-medium text-sm">{p.title}</div>
                  <div className="text-xs text-[hsl(215_20%_65%)]">{p.vendor} • {p.category}</div>
                </div>
                <div className="text-price font-bold text-sm">${p.price}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
