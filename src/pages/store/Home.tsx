import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, Headphones, Tag, Smartphone, Shirt, Sofa, Dumbbell } from "lucide-react";
import hero from "@/assets/hero-watches.jpg";
import { products, categories } from "@/data/marketplace";
import ProductCard from "@/components/store/ProductCard";

const iconMap = { Smartphone, Shirt, Sofa, Dumbbell } as const;

export default function Home() {
  const featured = products.slice(0, 8);
  const deals = products.filter(p => p.oldPrice).slice(0, 4);
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground relative overflow-hidden">
        <div className="container-x grid md:grid-cols-2 items-center gap-8 py-16 md:py-20">
          <div>
            <p className="text-accent font-semibold mb-3">Starting from $40</p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">The best watch<br/>Collection 2026</h1>
            <p className="text-lg opacity-90 mb-6">Exclusive offer <span className="text-accent font-bold">10%</span> off this week</p>
            <Link to="/products?cat=Electronics" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-md font-semibold hover:bg-accent transition">
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <img src={hero} alt="Premium watches collection" width={1280} height={800} className="rounded-xl object-cover w-full max-h-[420px]" />
        </div>
      </section>

      {/* Trust strip */}
      <section className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Truck, t: "Free Shipping", s: "On orders over $50" },
          { icon: ShieldCheck, t: "Secure Payment", s: "100% protected" },
          { icon: Headphones, t: "24/7 Support", s: "Real human help" },
          { icon: Tag, t: "Best Prices", s: "Verified vendors" },
        ].map(({ icon: I, t, s }) => (
          <div key={t} className="flex items-center gap-3 p-4 bg-surface rounded-xl border">
            <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary grid place-items-center"><I className="w-5 h-5" /></div>
            <div><div className="font-semibold text-sm">{t}</div><div className="text-xs text-muted-foreground">{s}</div></div>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="container-x py-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
          <Link to="/products" className="text-primary text-sm font-medium">View all →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => {
            const Icon = iconMap[c.icon as keyof typeof iconMap];
            return (
              <Link key={c.name} to={`/products?cat=${encodeURIComponent(c.name)}`}
                className="group p-6 bg-surface border rounded-xl hover:border-primary hover:shadow-card transition text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 text-primary grid place-items-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-semibold">{c.name}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured */}
      <section className="container-x py-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-primary text-sm font-medium">View all →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* Deals banner */}
      <section className="container-x py-8">
        <div className="rounded-2xl bg-gradient-accent p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-sm font-semibold mb-2">Limited time</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Mega Deals — up to 40% off</h2>
            <p className="opacity-80 mb-5">Hand-picked offers from our top-rated vendors.</p>
            <Link to="/offers" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-md font-semibold">
              See offers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {deals.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
