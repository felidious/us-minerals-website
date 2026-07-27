import { Flame, Factory, Fuel, Zap, Recycle, Gem } from "lucide-react";
import Reveal from "./Reveal";

const APPLICATIONS = [
  {
    icon: Flame,
    title: "Steel & ladle metallurgy",
    text: "Ladle, tundish, EAF and blast furnace linings built for repeated thermal cycling.",
  },
  {
    icon: Factory,
    title: "Cement & lime",
    text: "Kiln inlet, riser and cooler linings holding tight tolerances under abrasive dust load.",
  },
  {
    icon: Gem,
    title: "Glass manufacturing",
    text: "Low-contamination castables and shapes for furnace crowns and regenerators.",
  },
  {
    icon: Fuel,
    title: "Petrochemical & reformers",
    text: "Erosion and CO-resistant linings for reformers, crackers and sulphur recovery units.",
  },
  {
    icon: Zap,
    title: "Power generation",
    text: "Boiler, incinerator and FGD refractory rated for cyclic firing and flue chemistry.",
  },
  {
    icon: Recycle,
    title: "Waste-to-energy",
    text: "Abrasion-tolerant castables for grate, combustion chamber and post-combustion zones.",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-molten">
            Where it goes to work
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-cream mt-3 max-w-2xl text-balance mb-14">
            Six industries. One shared enemy: heat.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
          {APPLICATIONS.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 90}>
              <div className="group relative h-full bg-void p-7 sm:p-8 hover:bg-panel transition-colors duration-500">
                <a.icon size={20} className="text-molten mb-6" />
                <h3 className="font-display text-lg text-cream mb-2.5">{a.title}</h3>
                <p className="text-steel text-[13.5px] leading-relaxed">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
