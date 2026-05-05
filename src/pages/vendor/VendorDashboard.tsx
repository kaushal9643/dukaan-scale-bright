import { orders } from "@/data/marketplace";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, PieChart, Pie, Cell, Legend } from "recharts";

const revenue = [
  { m: "Jan", v: 12000 }, { m: "Feb", v: 14500 }, { m: "Mar", v: 13200 },
  { m: "Apr", v: 18000 }, { m: "May", v: 22500 }, { m: "Jun", v: 38000 }, { m: "Jul", v: 36000 },
];
const devices = [
  { name: "Phone", value: 52, color: "hsl(142 71% 45%)" },
  { name: "Tablet", value: 18, color: "hsl(45 100% 51%)" },
  { name: "Computer", value: 30, color: "hsl(222 89% 55%)" },
];

export default function VendorDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[hsl(222_47%_9%)] border border-[hsl(222_47%_14%)] rounded-xl p-6">
          <div className="flex items-baseline justify-between mb-1">
            <h2 className="text-xl font-bold">Revenue</h2>
          </div>
          <p className="text-sm text-[hsl(215_20%_65%)] mb-4">Last 6 months performance</p>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={revenue}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(222 89% 55%)" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="hsl(222 89% 55%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="m" stroke="hsl(215 20% 65%)" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(222 47% 9%)", border: "1px solid hsl(222 47% 14%)" }} />
              <Area type="monotone" dataKey="v" stroke="hsl(222 89% 55%)" strokeWidth={2} fill="url(#rev)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-[hsl(222_47%_9%)] border border-[hsl(222_47%_14%)] rounded-xl p-6">
          <h2 className="text-xl font-bold mb-1">Device Usage</h2>
          <p className="text-sm text-[hsl(215_20%_65%)] mb-4">How visitors visit your shop</p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={devices} dataKey="value" innerRadius={55} outerRadius={90} paddingAngle={3}>
                {devices.map(d => <Cell key={d.name} fill={d.color} />)}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-[hsl(222_47%_9%)] border border-[hsl(222_47%_14%)] rounded-xl p-6">
        <h2 className="text-xl font-bold mb-1">Recent Orders</h2>
        <p className="text-sm text-[hsl(215_20%_65%)] mb-4">A quick snapshot of your latest transactions.</p>
        <table className="w-full text-sm">
          <thead className="text-left text-[hsl(215_20%_65%)] border-b border-[hsl(222_47%_14%)]">
            <tr><th className="py-2">Order ID</th><th>Customer</th><th>Amount</th><th>Status</th></tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id} className="border-b border-[hsl(222_47%_14%)] last:border-0">
                <td className="py-3 font-medium">{o.id}</td>
                <td>{o.customer}</td>
                <td>${o.amount}</td>
                <td>
                  <span className={`text-xs font-semibold ${o.status === "Paid" ? "text-success" : o.status === "Pending" ? "text-warning" : "text-destructive"}`}>{o.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
