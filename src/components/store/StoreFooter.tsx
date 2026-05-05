import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function StoreFooter() {
  return (
    <footer className="bg-secondary mt-16">
      <div className="container-x py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="text-2xl font-display font-extrabold mb-3">Har<span className="text-primary">Dukan</span></div>
          <p className="text-muted-foreground mb-4">Perfect ecommerce platform to start your business from scratch.</p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin].map((I, i) => (
              <a key={i} href="#" className="w-9 h-9 grid place-items-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition">
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">My Account</h4>
          <ul className="space-y-2 text-muted-foreground">
            {["Track Orders", "Shipping", "Wishlist", "My Account", "Order History", "Returns"].map(i => <li key={i}><a href="#" className="hover:text-primary">{i}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Information</h4>
          <ul className="space-y-2 text-muted-foreground">
            {["Our Story", "Careers", "Privacy Policy", "Terms & Conditions", "Latest News", "Contact Us"].map(i => <li key={i}><a href="#" className="hover:text-primary">{i}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Talk To Us</h4>
          <p className="text-muted-foreground mb-2">Got Questions? Call us</p>
          <p className="text-xl font-bold mb-3">+670 413 90 762</p>
          <p className="flex items-center gap-2 text-muted-foreground mb-1"><Mail className="w-4 h-4" /> support@hardukan.com</p>
          <p className="flex items-start gap-2 text-muted-foreground"><MapPin className="w-4 h-4 mt-0.5" /> 79 Sleepy Hollow St., Jamaica, NY 1432</p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x py-4 text-xs text-muted-foreground text-center">© 2026 HarDukan — Microservices-Based Multi-Vendor Marketplace</div>
      </div>
    </footer>
  );
}
