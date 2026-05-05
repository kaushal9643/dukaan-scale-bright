import { Link, NavLink } from "react-router-dom";
import { Search, Bell, ShoppingCart, User, ChevronDown, Menu } from "lucide-react";
import { useCart } from "@/store/cart";
import { categories } from "@/data/marketplace";
import { useState } from "react";

export default function StoreHeader() {
  const count = useCart((s) => s.count());
  const [openCats, setOpenCats] = useState(false);

  return (
    <header className="bg-background border-b sticky top-0 z-40">
      <div className="container-x py-4 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-accent grid place-items-center text-accent-foreground font-bold">H</div>
          <span className="text-2xl font-display font-extrabold">Har<span className="text-primary">Dukan</span></span>
        </Link>

        <div className="flex-1 max-w-2xl hidden md:flex">
          <div className="flex w-full border-2 border-primary rounded-lg overflow-hidden">
            <input placeholder="Search for products..." className="flex-1 px-4 py-2.5 text-sm outline-none bg-background" />
            <button className="bg-primary text-primary-foreground px-5 grid place-items-center"><Search className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="flex items-center gap-5 ml-auto">
          <Link to="/login" className="hidden sm:flex items-center gap-2 text-sm">
            <div className="w-9 h-9 rounded-full border grid place-items-center"><User className="w-4 h-4" /></div>
            <div className="leading-tight">
              <div className="text-muted-foreground text-xs">Hello,</div>
              <div className="font-semibold">Sign In</div>
            </div>
          </Link>
          <button className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-[10px] font-bold w-5 h-5 rounded-full grid place-items-center">0</span>
          </button>
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-[10px] font-bold w-5 h-5 rounded-full grid place-items-center">{count}</span>
          </Link>
        </div>
      </div>

      <nav className="container-x flex items-stretch gap-2 pb-0">
        <div className="relative">
          <button onClick={() => setOpenCats((v) => !v)} className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-t-lg font-semibold">
            <Menu className="w-4 h-4" /> All Departments <ChevronDown className="w-4 h-4" />
          </button>
          {openCats && (
            <div className="absolute top-full left-0 w-72 bg-background border shadow-elevated rounded-b-lg z-50 overflow-hidden">
              {categories.map((c) => (
                <NavLink key={c.name} to={`/products?cat=${encodeURIComponent(c.name)}`} onClick={() => setOpenCats(false)}
                  className="flex items-center justify-between px-5 py-3 text-sm hover:bg-secondary">
                  {c.name} <ChevronDown className="-rotate-90 w-4 h-4" />
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 flex items-center justify-center gap-8 text-sm font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/products", label: "Products" },
            { to: "/shops", label: "Shops" },
            { to: "/offers", label: "Offers" },
            { to: "/become-seller", label: "Become A Seller" },
          ].map((l) => (
            <NavLink key={l.to} to={l.to} end className={({ isActive }) => `py-3 ${isActive ? "text-primary" : "hover:text-primary"}`}>
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
