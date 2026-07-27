import Reveal from "./Reveal";

const STATS = [
  { value: "1,800°C", label: "Peak rated service temperature" },
  { value: "40+", label: "Countries supplied" },
  { value: "120+", label: "Castable & PCPF formulations" },
  { value: "24/7", label: "Technical & logistics support" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-panel">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="py-9 px-5 sm:px-7">
                <div className="font-mono text-2xl sm:text-3xl text-moltenlight">{s.value}</div>
                <div className="mt-2 text-[12px] sm:text-[13px] text-steel leading-snug">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
