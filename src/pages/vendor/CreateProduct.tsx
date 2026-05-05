import { useState } from "react";
import { ChevronLeft, Image as ImageIcon, Plus } from "lucide-react";
import { toast } from "sonner";

const colors = ["#fff", "#ef4444", "#22c55e", "#3b82f6", "#facc15", "#ec4899", "#14b8a6"];

export default function CreateProduct() {
  const [imgPreview, setImgPreview] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Product created (demo)");
  };

  return (
    <div>
      <p className="text-sm text-[hsl(215_20%_65%)] mb-4 flex items-center gap-1"><ChevronLeft className="w-4 h-4" /> Dashboard / <span className="text-white">Create Product</span></p>

      <form onSubmit={submit} className="grid lg:grid-cols-3 gap-6">
        {/* Image */}
        <div className="space-y-4">
          <label className="block aspect-square bg-[hsl(222_47%_9%)] border border-[hsl(222_47%_14%)] rounded-xl overflow-hidden cursor-pointer">
            {imgPreview ? (
              <img src={imgPreview} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full grid place-items-center text-[hsl(215_20%_55%)] text-sm">
                <div className="text-center"><ImageIcon className="w-12 h-12 mx-auto mb-2" /> Upload main image</div>
              </div>
            )}
            <input type="file" accept="image/*" className="hidden" onChange={(e) => {
              const f = e.target.files?.[0]; if (f) setImgPreview(URL.createObjectURL(f));
            }} />
          </label>
          <div className="bg-[hsl(222_47%_9%)] border border-[hsl(222_47%_14%)] rounded-xl p-6 text-center text-sm text-[hsl(215_20%_55%)]">
            <div className="font-semibold text-white">765 x 850</div>
            Please choose an image according to the expected ratio
          </div>
        </div>

        {/* Middle */}
        <div className="space-y-4">
          <Field label="Product Title *"><input required className="ip" placeholder="Enter title" /></Field>
          <Field label="Short Description * (Max 150 words)"><textarea rows={5} className="ip" /></Field>
          <Field label="Tags *"><input className="ip" placeholder="comma,separated,tags" /></Field>
          <Field label="Warranty *"><input className="ip" defaultValue="No Warranty" /></Field>
          <Field label="Slug *"><input className="ip" placeholder="auto-generated-slug" /></Field>
          <Field label="Brand"><input className="ip" placeholder="e.g. Apple" /></Field>
          <Field label="Colors">
            <div className="flex items-center gap-2">
              {colors.map(c => <button key={c} type="button" className="w-8 h-8 rounded-full border-2 border-[hsl(222_47%_14%)]" style={{ background: c }} />)}
              <button type="button" className="w-8 h-8 rounded-full border-2 border-[hsl(222_47%_14%)] grid place-items-center"><Plus className="w-4 h-4" /></button>
            </div>
          </Field>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <Field label="Category *">
            <select className="ip"><option>Electronics</option><option>Fashion</option><option>Home & Kitchen</option><option>Sports & Fitness</option></select>
          </Field>
          <Field label="Subcategory *"><select className="ip"><option>Mobiles</option><option>Laptops</option></select></Field>
          <Field label="Detailed Description * (Min 100 words)"><textarea rows={10} className="ip" /></Field>
          <Field label="Video URL"><input className="ip" placeholder="https://..." /></Field>
          <Field label="Price"><input type="number" className="ip" placeholder="0.00" /></Field>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold">Publish Product</button>
        </div>
      </form>
      <style>{`.ip{width:100%;background:hsl(222 47% 6%);border:1px solid hsl(222 47% 14%);border-radius:.5rem;padding:.6rem .75rem;font-size:.875rem;color:white;outline:none}.ip:focus{border-color:hsl(222 89% 55%)}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      {children}
    </div>
  );
}
