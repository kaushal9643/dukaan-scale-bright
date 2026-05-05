import { orders } from "@/data/marketplace";

export default function VendorOrders() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <div className="bg-[hsl(222_47%_9%)] border border-[hsl(222_47%_14%)] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-left bg-[hsl(222_47%_11%)] text-[hsl(215_20%_65%)]">
            <tr><th className="p-3">Order ID</th><th>Customer</th><th>Items</th><th>Date</th><th>Amount</th><th>Status</th></tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id} className="border-t border-[hsl(222_47%_14%)]">
                <td className="p-3 font-medium">{o.id}</td>
                <td>{o.customer}</td>
                <td>{o.items}</td>
                <td>{o.date}</td>
                <td className="text-price font-semibold">${o.amount}</td>
                <td><span className={`text-xs font-semibold ${o.status === "Paid" ? "text-success" : o.status === "Pending" ? "text-warning" : "text-destructive"}`}>{o.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
