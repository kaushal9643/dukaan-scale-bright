import { Outlet, NavLink, useLocation, Link } from "react-router-dom";
import { LayoutDashboard, ShoppingBag, CreditCard, PlusSquare, Package, Calendar, CalendarPlus, Inbox, Settings, Bell, Tag, LogOut, Users, Store } from "lucide-react";

type NavItem = { to: string; icon: any; label: string; section?: string };

const vendorNav: NavItem[] = [
  { to: "/vendor", icon: LayoutDashboard, label: "Dashboard" },
  { section: "Main Menu", to: "/vendor/orders", icon: ShoppingBag, label: "Orders" },
  { to: "/vendor/payments", icon: CreditCard, label: "Payments" },
  { section: "Products", to: "/vendor/create-product", icon: PlusSquare, label: "Create Product" },
  { to: "/vendor/products", icon: Package, label: "All Products" },
  { section: "Events", to: "/vendor/events", icon: Calendar, label: "All Events" },
  { to: "/vendor/create-event", icon: CalendarPlus, label: "Create Event" },
  { section: "Controllers", to: "/vendor/inbox", icon: Inbox, label: "Inbox" },
  { to: "/vendor/settings", icon: Settings, label: "Settings" },
  { to: "/vendor/notifications", icon: Bell, label: "Notifications" },
  { section: "Extras", to: "/vendor/discounts", icon: Tag, label: "Discount Codes" },
];

const adminNav: NavItem[] = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { section: "Manage", to: "/admin/vendors", icon: Store, label: "Vendors" },
  { to: "/admin/users", icon: Users, label: "Users" },
  { to: "/admin/orders", icon: ShoppingBag, label: "Orders" },
];

export default function DashboardLayout({ role }: { role: "vendor" | "admin" }) {
  const { pathname } = useLocation();
  const nav = role === "vendor" ? vendorNav : adminNav;
  const title = role === "vendor" ? "Infricode" : "HarDukan Admin";
  const subtitle = role === "vendor" ? "653 Banani, Dhaka" : "Platform Control";

  return (
    <div className="min-h-screen bg-[hsl(222_47%_5%)] text-[hsl(210_40%_98%)] flex">
      <aside className="w-64 bg-[hsl(222_47%_8%)] border-r border-[hsl(222_47%_14%)] flex flex-col">
        <div className="p-5 flex items-center gap-3 border-b border-[hsl(222_47%_14%)]">
          <div className="w-10 h-10 rounded-md bg-gradient-accent grid place-items-center text-foreground font-bold">{title[0]}</div>
          <div>
            <div className="font-bold leading-tight">{title}</div>
            <div className="text-xs text-[hsl(215_20%_65%)]">{subtitle}</div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-3 px-2 text-sm">
          {nav.map((item) => (
            <div key={item.to}>
              {item.section && <div className="px-3 pt-4 pb-1 text-[10px] uppercase tracking-wider text-[hsl(215_20%_55%)]">{item.section}</div>}
              <NavLink to={item.to} end={item.to === `/${role}`}
                className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md transition ${isActive ? "bg-primary text-primary-foreground" : "text-[hsl(215_20%_75%)] hover:bg-[hsl(222_47%_14%)] hover:text-white"}`}>
                <item.icon className="w-4 h-4" /> {item.label}
              </NavLink>
            </div>
          ))}
          <div className="px-3 pt-4 pb-1 text-[10px] uppercase tracking-wider text-[hsl(215_20%_55%)]">Account</div>
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-[hsl(215_20%_75%)] hover:bg-[hsl(222_47%_14%)]">
            <LogOut className="w-4 h-4" /> Logout
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-x-auto">
        <Outlet />
      </main>
    </div>
  );
}
