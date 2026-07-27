import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const REGIONS = [
  "Middle East & GCC",
  "Sub-Saharan Africa",
  "South & Southeast Asia",
  "East Asia",
  "Europe",
  "Americas",
];

const NODES = [
  { x: 200, y: 40 },
  { x: 340, y: 120 },
  { x: 340, y: 280 },
  { x: 200, y: 360 },
  { x: 60, y: 280 },
  { x: 60, y: 120 },
];

export default function GlobalReach() {
  return (
    <section id="reach" className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative mx-auto max-w-md aspect-square">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <circle cx="200" cy="200" r="150" stroke="#4C5560" strokeWidth="1" fill="none" opacity="0.5" />
                <ellipse cx="200" cy="200" rx="150" ry="55" stroke="#4C5560" strokeWidth="1" fill="none" opacity="0.35" />
                <ellipse cx="200" cy="200" rx="55" ry="150" stroke="#4C5560" strokeWidth="1" fill="none" opacity="0.35" />
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  stroke="#FF6A1A"
                  strokeWidth="1"
                  strokeDasharray="2 10"
                  fill="none"
                  opacity="0.5"
                  className="origin-center animate-[spin_26s_linear_infinite]"
                />
                {NODES.map((n, i) => (
                  <g key={i}>
                    <line x1="200" y1="200" x2={n.x} y2={n.y} stroke="#8B95A1" strokeWidth="0.75" opacity="0.3" />
                    <circle cx={n.x} cy={n.y} r="4.5" fill="#FF6A1A" className="animate-pulseglow" />
                    <circle cx={n.x} cy={n.y} r="9" stroke="#FF6A1A" strokeWidth="1" fill="none" opacity="0.4" />
                  </g>
                ))}
                <circle cx="200" cy="200" r="6" fill="#FFF4E0" />
              </svg>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-molten">
                Global reach
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-cream mt-3 text-balance">
                Wherever the furnace is, we ship there.
              </h2>
              <p className="text-steel text-[14px] sm:text-[15px] leading-relaxed mt-5 max-w-lg">
                Export documentation, container packing and freight coordination
                are handled in-house, so a plant in any of these regions can
                order direct without a local intermediary.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                {REGIONS.map((r) => (
                  <li key={r} className="flex items-center gap-2.5 text-[13.5px] text-cream/85">
                    <span className="h-1.5 w-1.5 bg-molten shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 border border-white/15 text-cream font-mono text-[13px] uppercase tracking-[0.1em] px-6 py-3.5 hover:border-molten/60 hover:text-molten transition-colors"
              >
                Check delivery to your region <ArrowUpRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
