import { Phone, Mail, MapPin } from "lucide-react";
import { ThermalAmbient } from "./ThermalScale";
import JupiterMark from "./JupiterMark";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <ThermalAmbient />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <JupiterMark size={38} />
              <span className="flex flex-col leading-tight">
                <span className="font-display italic font-bold text-lg tracking-[0.01em] text-[#6FA8DC]">
                  US MINERALS
                </span>
                <span className="font-display italic font-semibold text-[10.5px] tracking-[0.02em] text-[#6FA8DC]/80">
                  Bulk Stockist &amp; Re-Processor
                </span>
              </span>
            </a>
            <p className="text-steel text-[13px] mt-4 max-w-sm leading-relaxed">
              Refractory castables, PCPF shapes and raw materials, engineered
              and shipped worldwide.
            </p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-[0.12em] text-steel mt-7">
              <a href="#products" className="hover:text-cream transition-colors">
                Products
              </a>
              <a href="#applications" className="hover:text-cream transition-colors">
                Applications
              </a>
              <a href="#reach" className="hover:text-cream transition-colors">
                Global Reach
              </a>
              <a href="#contact" className="hover:text-cream transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steeldark">
              Call us
            </span>
            <div className="mt-3 space-y-1.5">
              <a href="tel:+919362310388" className="flex items-center gap-2 text-[13.5px] text-cream/85 hover:text-molten transition-colors">
                <Phone size={13} className="shrink-0 text-molten" /> +91 93623 10388
              </a>
              <a href="tel:+919498128388" className="flex items-center gap-2 text-[13.5px] text-cream/85 hover:text-molten transition-colors">
                <Phone size={13} className="shrink-0 text-molten" /> +91 94981 28388
              </a>
            </div>

            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steeldark mt-6 block">
              Email
            </span>
            <div className="mt-3 space-y-1.5">
              <a href="mailto:usminerals@useminerals.com" className="flex items-center gap-2 text-[13.5px] text-cream/85 hover:text-molten transition-colors break-all">
                <Mail size={13} className="shrink-0 text-molten" /> usminerals@useminerals.com
              </a>
              <a href="mailto:usminerals@yahoo.com" className="flex items-center gap-2 text-[13.5px] text-cream/85 hover:text-molten transition-colors break-all">
                <Mail size={13} className="shrink-0 text-molten" /> usminerals@yahoo.com
              </a>
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steeldark">
              Address
            </span>
            <div className="mt-3 flex items-start gap-2 text-[13.5px] text-cream/85 leading-relaxed max-w-xs">
              <MapPin size={14} className="shrink-0 text-molten mt-0.5" />
              <span>
                No. 5/166-2, Kamarajar Nagar, Sipcot I Post, Hosur &ndash; 635 126, Tamil Nadu, India.
                <br />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-2 justify-between text-[12px] text-steeldark font-mono">
          <span>&copy; {new Date().getFullYear()} US Minerals. All rights reserved.</span>
          <span>Built for 1,800&deg;C and above.</span>
        </div>
      </div>
    </footer>
  );
}
