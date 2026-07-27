"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const INTERESTS = ["Refractory Castables", "PCPF Shapes", "Raw Materials", "Not sure yet"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-molten">
                Get in touch
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-cream mt-3 text-balance">
                Send us your specification.
              </h2>
              <p className="text-steel text-[14px] sm:text-[15px] leading-relaxed mt-5 max-w-md">
                Tell us the furnace type, zone and current lining material —
                our engineers will come back with a grade recommendation and
                a quote, wherever you're ordering from.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10 space-y-5">
                <a
                  href="mailto:usminerals@useminerals.com"
                  className="flex items-center gap-3.5 text-cream/90 hover:text-molten transition-colors"
                >
                  <span className="h-9 w-9 flex items-center justify-center border border-white/10 shrink-0">
                    <Mail size={15} />
                  </span>
                  <span className="text-[14px] break-all">
                    usminerals@useminerals.com &middot; usminerals@yahoo.com
                  </span>
                </a>
                <a
                  href="tel:+919362310388"
                  className="flex items-center gap-3.5 text-cream/90 hover:text-molten transition-colors"
                >
                  <span className="h-9 w-9 flex items-center justify-center border border-white/10 shrink-0">
                    <Phone size={15} />
                  </span>
                  <span className="text-[14px]">+91 93623 10388 &middot; +91 94981 28388</span>
                </a>
                <div className="flex items-start gap-3.5 text-cream/90">
                  <span className="h-9 w-9 flex items-center justify-center border border-white/10 shrink-0">
                    <MapPin size={15} />
                  </span>
                  <span className="text-[14px] leading-relaxed">
                    No. 5/166-2, Kamarajar Nagar, Sipcot I Post,
                    <br />
                    Hosur &ndash; 635 126, Tamil Nadu, India.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <form onSubmit={handleSubmit} className="border border-white/8 bg-panel p-6 sm:p-9">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required autoComplete="name" />
                  <Field label="Company" name="company" autoComplete="organization" />
                  <Field label="Work email" name="email" type="email" required autoComplete="email" />
                  <Field label="Phone (with country code)" name="phone" autoComplete="tel" />
                  <Field label="Country" name="country" autoComplete="country-name" />
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-[0.14em] text-steel mb-2">
                      Interested in
                    </label>
                    <select
                      name="interest"
                      className="w-full bg-void border border-white/12 px-3.5 py-3 text-[14px] text-cream focus:border-molten transition-colors"
                      defaultValue={INTERESTS[0]}
                    >
                      {INTERESTS.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block font-mono text-[11px] uppercase tracking-[0.14em] text-steel mb-2">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Furnace type, zone, current lining, tonnage or volume needed…"
                    className="w-full bg-void border border-white/12 px-3.5 py-3 text-[14px] text-cream placeholder:text-steeldark focus:border-molten transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-molten text-void font-mono text-[13px] uppercase tracking-[0.1em] px-7 py-3.5 hover:bg-moltenlight transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send inquiry"}
                  {status !== "sending" && <Send size={14} />}
                </button>

                {status === "sent" && (
                  <p className="mt-4 flex items-center gap-2 text-[13.5px] text-moltenlight">
                    <CheckCircle2 size={16} /> Received — our team will reply within one business day.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 flex items-center gap-2 text-[13.5px] text-red-400">
                    <AlertCircle size={16} /> {errorMsg}
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[11px] uppercase tracking-[0.14em] text-steel mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full bg-void border border-white/12 px-3.5 py-3 text-[14px] text-cream focus:border-molten transition-colors"
      />
    </div>
  );
}
