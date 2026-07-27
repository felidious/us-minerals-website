/**
 * Animated brand mark for US Minerals — a blue globe with a white "S",
 * wrapped in tilted swoosh rings (as in the source logo). The rings stay
 * fixed while a specular highlight rotates across the sphere, giving the
 * impression of the planet itself turning.
 */
export default function JupiterMark({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="jm-sphere-clip">
          <circle cx="32" cy="32" r="15" />
        </clipPath>
        <radialGradient id="jm-sphere-grad" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#CFE7F9" />
          <stop offset="40%" stopColor="#4E92D0" />
          <stop offset="100%" stopColor="#123A5E" />
        </radialGradient>
      </defs>

      {/* rings — back half, behind the sphere */}
      <g transform="rotate(-18 32 32)">
        <path d="M 2 32 A 30 9.5 0 0 1 62 32" fill="none" stroke="#6FA3C4" strokeWidth="1.3" opacity="0.55" />
        <path d="M 5 32 A 27 8 0 0 1 59 32" fill="none" stroke="#8FC1E8" strokeWidth="1.6" opacity="0.75" />
      </g>

      {/* sphere */}
      <circle cx="32" cy="32" r="15" fill="url(#jm-sphere-grad)" />
      <g clipPath="url(#jm-sphere-clip)">
        <g className="origin-[32px_32px] animate-[spin_7s_linear_infinite]">
          <ellipse cx="23" cy="22" rx="10" ry="7" fill="#FFFFFF" opacity="0.45" />
        </g>
      </g>
      <circle cx="32" cy="32" r="15" fill="none" stroke="#0E2E4A" strokeWidth="1" opacity="0.5" />

      {/* white "S" mark */}
      <text
        x="32"
        y="33"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="17"
        fill="#FFFFFF"
      >
        US
      </text>

      {/* rings — front half, over the sphere */}
      <g transform="rotate(-18 32 32)">
        <path d="M 5 32 A 27 8 0 0 0 59 32" fill="none" stroke="#4A86BE" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M 2 32 A 30 9.5 0 0 0 62 32" fill="none" stroke="#8FC1E8" strokeWidth="1.1" opacity="0.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}
