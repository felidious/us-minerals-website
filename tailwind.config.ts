import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0B0D0F",
        panel: "#14171A",
        panel2: "#1B2023",
        panel3: "#20262A",
        steel: "#8B95A1",
        steeldark: "#4C5560",
        molten: "#FF6A1A",
        moltendeep: "#B23A0E",
        moltenlight: "#FFC24D",
        moltenwhite: "#FFF4E0",
        thermal: "#3E6B8A",
        thermallight: "#6FA3C4",
        cream: "#F2F0EA",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "thermal-scale":
          "linear-gradient(90deg, #0B0D0F 0%, #3E1608 22%, #B23A0E 45%, #FF6A1A 65%, #FFC24D 85%, #FFF4E0 100%)",
        "thermal-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,106,26,0.18), transparent 55%)",
      },
      keyframes: {
        pulseglow: {
          "0%, 100%": { opacity: "0.55", filter: "blur(6px)" },
          "50%": { opacity: "1", filter: "blur(10px)" },
        },
        drift: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        pulseglow: "pulseglow 3.2s ease-in-out infinite",
        drift: "drift 40s linear infinite",
        rise: "rise 0.8s cubic-bezier(0.16,1,0.3,1) both",
        scan: "scan 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
