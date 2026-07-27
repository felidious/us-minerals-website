import { Layers, Box, ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import { ThermalGauge } from "./ThermalScale";

const CASTABLE_GRADES = [
  "Low & ultra-low cement castables (LCC / ULCC)",
  "Insulating & lightweight castables",
  "Self-flow and pumpable mixes",
  "Gunning, shotcrete & ramming masses",
];

const PCPF_ITEMS = [
  "Burner blocks & nozzles",
  "Ladle well blocks and impact pads",
  "Runner & launder systems",
  "Kiln inlet and riser segments",
];

const RAW_MATERIALS = [
  "Tabular alumina",
  "Calcined & reactive bauxite",
  "Fused & sintered spinel",
  "Silicon carbide",
  "Dead-burned magnesia",
  "Microsilica",
  "Calcium aluminate cement",
  "Andalusite",
];

export default function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-14">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-molten">
                What we manufacture
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-cream mt-3 max-w-2xl text-balance">
                Two product lines. One thermal standard.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Castables */}
          <Reveal>
            <div className="group relative h-full border border-white/8 bg-panel flex flex-col overflow-hidden">
              {/* Product photo — swap the src for a real photo at
                 /public/images/products/castables.jpg (or .png) and
                 update the path below. */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8">
                <img
                  src="/images/products/castables.jpeg"
                  alt="Refractory castable material"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative p-8 sm:p-10 flex flex-col flex-1 overflow-hidden">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-molten/10 blur-3xl group-hover:bg-molten/20 transition-colors duration-700" />
                <div className="relative flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 flex items-center justify-center border border-molten/30 text-molten">
                    <Layers size={18} />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    Product line 01
                  </span>
                </div>

                <h3 className="relative font-display text-2xl sm:text-3xl text-cream mb-3">
                  Refractory Castables
                </h3>
                <p className="relative text-steel text-[14px] sm:text-[15px] leading-relaxed mb-7 max-w-md">
                  Monolithic mixes cast, pumped or gunned directly into place —
                  formulated for ladle linings, kiln zones, incinerators and
                  boiler refractory where a continuous, joint-free surface
                  outperforms brick.
                </p>

                <ul className="relative space-y-2.5 mb-8">
                  {CASTABLE_GRADES.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-[13.5px] text-cream/85">
                      <Check size={15} className="text-molten mt-0.5 shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto pt-6 border-t border-white/8">
                  <ThermalGauge tempC={1760} label="Max service temperature — ULCC grade" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* PCPF Shapes */}
          <Reveal delay={100}>
            <div className="group relative h-full border border-white/8 bg-panel flex flex-col overflow-hidden">
              {/* Product photo — swap the src for a real photo at
                 /public/images/products/pcpf-shapes.jpg (or .png) and
                 update the path below. */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8">
                <img
                  src="/images/products/PCPF.jpeg"
                  alt="PCPF pre-cast pre-fired refractory shapes"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative p-8 sm:p-10 flex flex-col flex-1 overflow-hidden">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-thermal/20 blur-3xl group-hover:bg-thermal/30 transition-colors duration-700" />
                <div className="relative flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 flex items-center justify-center border border-thermallight/40 text-thermallight">
                    <Box size={18} />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    Product line 02
                  </span>
                </div>

                <h3 className="relative font-display text-2xl sm:text-3xl text-cream mb-3">
                  PCPF Shapes
                </h3>
                <p className="relative text-steel text-[14px] sm:text-[15px] leading-relaxed mb-7 max-w-md">
                  Pre-Cast, Pre-Fired shapes machined and fired to dimension
                  before they ever reach site — so there's no on-site curing
                  shrink, no cure schedule, and installation crews get precise,
                  repeatable geometry every time.
                </p>

                <ul className="relative space-y-2.5 mb-8">
                  {PCPF_ITEMS.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-[13.5px] text-cream/85">
                      <Check size={15} className="text-thermallight mt-0.5 shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto pt-6 border-t border-white/8">
                  <ThermalGauge tempC={1650} label="Max service temperature — spinel-bonded grade" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Raw materials strip */}
        <Reveal delay={160}>
          <div className="mt-6 border border-white/8 bg-panel2 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                  Product line 03
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-cream mt-2">
                  Raw &amp; aggregate materials
                </h3>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-molten hover:text-moltenlight transition-colors shrink-0"
              >
                Request a spec sheet <ArrowUpRight size={14} />
              </a>
            </div>
            <p className="text-steel text-[14px] sm:text-[15px] leading-relaxed max-w-2xl mb-7">
              We also supply the graded aggregates and binder systems behind
              our own castables direct to formulators and captive-mix plants.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {RAW_MATERIALS.map((m) => (
                <span
                  key={m}
                  className="font-mono text-[12px] text-steel border border-white/10 px-3 py-1.5 hover:border-molten/40 hover:text-cream transition-colors"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
