import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Twitter, Facebook } from "lucide-react";

export function SiteFooter() {
  const cols: { title: string; links: { label: string; to?: string }[] }[] = [
    { title: "Shop", links: [
      { label: "PC Components", to: "/categories" },
      { label: "Gaming PCs", to: "/shop" },
      { label: "Laptops", to: "/shop" },
      { label: "Monitors", to: "/shop" },
      { label: "Peripherals", to: "/shop" },
      { label: "Accessories", to: "/shop" },
    ]},
    { title: "Support", links: [
      { label: "Contact", to: "/contact" },
      { label: "FAQ" }, { label: "Warranty" }, { label: "Returns" }, { label: "Shipping" }, { label: "Track Order" },
    ]},
    { title: "Company", links: [
      { label: "About", to: "/about" },
      { label: "Custom Builds" }, { label: "Careers" }, { label: "Press" }, { label: "Blog" }, { label: "Partners" },
    ]},
  ];
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
        <div className="lg:col-span-2">
          <div className="text-2xl sm:text-3xl font-display font-bold tracking-widest">
            F<span className="text-primary">/</span>AST <span className="text-xs tracking-[0.3em] text-muted-foreground ml-2">COMPUTERS</span>
          </div>
          <p className="mt-3 sm:mt-4 text-sm text-muted-foreground max-w-xs">High performance PCs, custom builds and gaming gear for those who refuse to compromise.</p>
          <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
            {[Instagram, Youtube, Twitter, Facebook].map((I, i) => (
              <a key={i} href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition">
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs uppercase tracking-widest text-primary font-bold">{c.title}</div>
            <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition">{l.label}</Link>
                  ) : (
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6 flex flex-wrap gap-3 sm:gap-4 items-center justify-between text-xs text-muted-foreground">
          <div className="flex flex-col gap-1">
            <div>© 2026 Fast Computers. All rights reserved.</div>
            <div>
              Powered by <a href="https://thatoneumerpk.web.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">thatoneumer</a>
            </div>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
