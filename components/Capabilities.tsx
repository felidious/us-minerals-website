import Reveal from "./Reveal";

const CAPS = [
  {
    code: "LAB",
    title: "In-house testing lab",
    text: "Cold crushing strength, RUL, thermal shock and abrasion testing on every batch before it ships.",
  },
  {
    code: "FML",
    title: "Custom formulation",
    text: "Grades adjusted to your furnace atmosphere, cycling pattern and installation method.",
  },
  {
    code: "MFG",
    title: "Precision PCPF manufacturing",
    text: "CNC-tooled moulds and controlled firing curves hold shape tolerances brick-for-brick.",
  },
  {
    code: "LOG",
    title: "Export-ready logistics",
    text: "Moisture-sealed, palletised and container-optimised packaging for ocean and air freight.",
  },
  {
    code: "FLD",
    title: "Field support",
    text: "Installation supervision and curing schedules provided for first-time and shutdown crews.",
  },
  {
    code: "DOC",
    title: "Full documentation",
    text: "Mill certificates, MSDS and compliance paperwork issued with every shipment.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-molten">
                Capability register
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-cream mt-3 text-balance">
                Built to survive the plant, not just the lab.
              </h2>
              <p className="text-steel text-[14px] leading-relaxed mt-5 max-w-sm">
                Every shipment carries the same discipline our own furnaces
                are tested against — from raw material intake to the crew
                installing it on your shutdown window.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/8 border-y border-white/8">
              {CAPS.map((c, i) => (
                <Reveal key={c.code} delay={i * 60}>
                  <div className="group flex items-start gap-5 sm:gap-8 py-6">
                    <span className="font-mono text-xs text-steeldark pt-1 w-12 shrink-0">
                      {c.code}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-cream group-hover:text-molten transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-steel text-[13.5px] leading-relaxed mt-1.5 max-w-lg">
                        {c.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
