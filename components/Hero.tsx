import { ArrowUpRight, FlaskConical } from "lucide-react";
import { ThermalAmbient } from "./ThermalScale";

export default function Hero() {
  return (
    <section id="top" className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-veil noise-veil pointer-events-none" />
      <div className="absolute inset-0 bg-thermal-radial pointer-events-none" />

      <ThermalAmbient className="mt-16" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="flex items-center gap-2 mb-7 animate-rise">
          <FlaskConical size={14} className="text-molten" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-steel">
            Refractory Castables &middot; PCPF Shapes &middot; Raw Materials
          </span>
        </div>

        <h1
          className="font-display text-balance text-[13vw] leading-[0.98] sm:text-[7vw] lg:text-[5.2rem] xl:text-[5.8rem] text-cream max-w-5xl animate-rise"
          style={{ animationDelay: "80ms" }}
        >
          The lining stands
          <br />
          between <span className="text-molten">1,800&deg;C</span>
          <br />
          and failure.
        </h1>

        <p
          className="mt-8 max-w-xl text-[15px] sm:text-base text-steel leading-relaxed animate-rise"
          style={{ animationDelay: "160ms" }}
        >
          We formulate monolithic castables and manufacture pre-cast, pre-fired
          shapes engineered for the zones where ordinary materials give out —
          ladles, tundish systems, kilns, reformers and furnace roofs. Shipped
          to plants on six continents.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-3.5 animate-rise"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 bg-molten text-void font-mono text-[13px] uppercase tracking-[0.1em] px-6 py-3.5 hover:bg-moltenlight transition-colors"
          >
            Explore products <ArrowUpRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-white/15 text-cream font-mono text-[13px] uppercase tracking-[0.1em] px-6 py-3.5 hover:border-molten/60 hover:text-molten transition-colors"
          >
            Talk to an engineer
          </a>
        </div>
      </div>
    </section>
  );
}
