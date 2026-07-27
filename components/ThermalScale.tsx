const SCALE_MAX = 1800;

/**
 * The Thermal Scale is the site's signature device: a 0–1800°C gradient
 * ramp (black → deep red → molten orange → straw yellow → white-hot),
 * mirroring how pyrometric cones and thermal-imaging cameras read a
 * furnace. Every product's rated service temperature is plotted on the
 * same ramp, so a buyer can compare grades at a glance instead of
 * parsing a spec table.
 */

export function ThermalAmbient({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-[3px] w-full overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-y-0 left-0 w-[200%] bg-thermal-scale bg-[length:50%_100%] bg-repeat-x animate-drift" />
      <div className="absolute inset-0 bg-thermal-scale opacity-40 blur-[6px] animate-pulseglow" />
    </div>
  );
}

export function ThermalGauge({
  tempC,
  label = "Max service temperature",
}: {
  tempC: number;
  label?: string;
}) {
  const pct = Math.min(100, (tempC / SCALE_MAX) * 100);
  return (
    <div className="w-full">
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
          {label}
        </span>
        <span className="font-mono text-sm text-moltenlight">{tempC.toLocaleString()}°C</span>
      </div>
      <div className="relative h-1.5 w-full bg-panel3">
        <div className="absolute inset-y-0 left-0 bg-thermal-scale" style={{ width: "100%" }} />
        <div
          className="absolute inset-y-0 right-0 bg-void/90"
          style={{ left: `${pct}%` }}
        />
        <div
          className="absolute -top-[3px] h-3 w-[2px] bg-moltenwhite shadow-[0_0_10px_3px_rgba(255,244,224,0.55)]"
          style={{ left: `calc(${pct}% - 1px)` }}
        />
      </div>
      <div className="flex justify-between mt-1.5 font-mono text-[10px] text-steeldark">
        <span>0°C</span>
        <span>{SCALE_MAX.toLocaleString()}°C</span>
      </div>
    </div>
  );
}
