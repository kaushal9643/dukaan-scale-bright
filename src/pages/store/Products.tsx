import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/marketplace";
import ProductCard from "@/components/store/ProductCard";
import { useMemo, useState } from "react";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const cat = params.get("cat") ?? "";
  const [sort, setSort] = useState("popular");

  const list = useMemo(() => {
    let l = products.filter(p => !cat || p.category === cat);
    if (sort === "low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "high") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "rating") l = [...l].sort((a, b) => b.rating - a.rating);
    return l;
  }, [cat, sort]);

  return (
    <div className="container-x py-8">
      <div className="bg-surface border rounded-xl px-6 py-5 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">{cat || "All Products"}</h1>
        <p className="text-sm text-muted-foreground">Home . {cat || "Products"}</p>
      </div>

      <div className="grid md:grid-cols-[240px_1fr] gap-6">
        <aside className="bg-background border rounded-xl p-5 h-fit sticky top-32">
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-1 text-sm">
            <li><button onClick={() => setParams({})} className={`block w-full text-left px-3 py-2 rounded ${!cat ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>All</button></li>
            {categories.map(c => (
              <li key={c.name}>
                <button onClick={() => setParams({ cat: c.name })}
                  className={`block w-full text-left px-3 py-2 rounded ${cat === c.name ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">{list.length} products</p>
            <select value={sort} onChange={e => setSort(e.target.value)} className="border rounded-md px-3 py-2 text-sm bg-background">
              <option value="popular">Most popular</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
