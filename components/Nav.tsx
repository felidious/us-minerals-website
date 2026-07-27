"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import JupiterMark from "./JupiterMark";

const LINKS = [
  { href: "#products", label: "Products" },
  { href: "#applications", label: "Applications" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#reach", label: "Global Reach" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? "bg-void/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <JupiterMark size={100} />
          <span className="font-display italic font-bold text-[30px] tracking-[0.01em] text-[#6FA8DC]">
            US MINERALS
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-steel hover:text-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-1.5 border border-molten/50 text-cream text-[13px] font-mono uppercase tracking-[0.1em] px-4 py-2 hover:bg-molten hover:text-void hover:border-molten transition-colors"
        >
          Request a quote <ArrowUpRight size={14} />
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden text-cream p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-void border-t border-white/5 px-5 pb-6 pt-2">
          <nav className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-white/5 font-mono text-sm uppercase tracking-[0.14em] text-steel"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-1.5 bg-molten text-void text-[13px] font-mono uppercase tracking-[0.1em] px-4 py-3"
          >
            Request a quote <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
