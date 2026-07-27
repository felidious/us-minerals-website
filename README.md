# US Minerals — Website

A Next.js 14 (App Router) + Tailwind CSS site for a refractory raw materials
business, showcasing **Refractory Castables**, **PCPF Shapes**, and **raw
materials**, with a global contact form.

## Design concept

- **Signature device — the Thermal Scale:** a 0–1800°C gradient ramp (black →
  deep red → molten orange → straw yellow → white-hot), the same way a
  pyrometric cone or thermal camera reads a furnace. It runs as an ambient
  line in the hero/footer and as a per-product gauge showing each grade's
  rated service temperature — real data, not decoration.
- **Type system:** Space Grotesk (display), Inter (body), IBM Plex Mono
  (labels/specs — echoing a refractory datasheet).
- **Palette:** near-black charcoal void, molten orange/amber accents, a cool
  steel-blue for structure and a "thermal blue" for contrast.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Wiring up the contact form

`app/api/contact/route.ts` currently validates the submission and logs it to
the server console so the form works out of the box. Before going live, wire
it to a real provider — a few common options:

- **Resend** (resend.com) — a few lines with their Node SDK to send you an
  email per enquiry.
- **SendGrid / Postmark** — similar drop-in email APIs.
- **A CRM webhook** (HubSpot, Zoho, Pipedrive) — POST the payload straight
  into your pipeline.

Also update:
- The email/phone in `components/ContactForm.tsx`.
- The company name/mark in `components/Nav.tsx` and `components/Footer.tsx`
  if your brand name or logo changes.
- Product grades, temperatures and copy in `components/Products.tsx` to match
  your actual formulations.

## Structure

```
app/
  layout.tsx        Fonts, metadata
  page.tsx           Assembles all sections
  globals.css        Design tokens / base styles
  api/contact/route.ts  Contact form endpoint
components/
  Nav.tsx            Sticky nav + mobile menu
  Hero.tsx           Landing thesis statement
  ThermalScale.tsx   Signature gradient gauge component
  Stats.tsx          Credibility stats strip
  Products.tsx       Castables / PCPF Shapes / Raw Materials
  Applications.tsx   Industries served
  Capabilities.tsx   Why-us capability register
  GlobalReach.tsx    Network globe + regions served
  ContactForm.tsx    Lead capture form
  Footer.tsx
  Reveal.tsx         Scroll-reveal wrapper (IntersectionObserver)
```

## Deploying

Works out of the box on Vercel (`vercel deploy`) or any Node hosting that
supports Next.js 14.
