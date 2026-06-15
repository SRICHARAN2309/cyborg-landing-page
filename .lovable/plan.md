## Cyborg Landing Page — IIT Bombay Techfest Challenge

A single-page, mobile-friendly landing site themed around a cyborg/cybernetic challenge entry for IIT Bombay's Techfest. Moody Blade Runner aesthetic — dark steel surfaces, amber/orange neon accents, brushed-chrome typography, HUD detailing.

### Design system (src/styles.css)
- Background: deep charcoal `#0d0d0d` → steel `#1f1a17` gradients
- Primary accent: amber `#ff6b1a` (CTAs, glow, HUD lines)
- Secondary accent: gold `#c9a84c` (kickers, stat numerals)
- Foreground: warm off-white on dark
- Tokens: `--background`, `--foreground`, `--primary`, `--accent`, `--muted`, plus `--gradient-chrome`, `--gradient-amber-glow`, `--shadow-neon`
- Fonts (loaded via `<link>` in `__root.tsx`): Orbitron + Rajdhani for display, Inter for body
- Effects: scanline overlay, subtle film grain, animated amber glow, monospace HUD numerals, corner-bracket frames

### Page sections (src/routes/index.tsx)
1. **Sticky nav** — Techfest mark, anchor links (Overview / Capabilities / Specs / FAQ), amber "Register" CTA
2. **Hero** — split layout, AI-generated cyborg portrait, kicker "TECHFEST 2026 // IIT BOMBAY", H1 headline (e.g. "Engineer the Next Cybernetic Frontier"), tagline about the challenge, primary CTA "Enter the Challenge" + ghost "View Brief", HUD corner brackets and event date/venue chip
3. **About the challenge** — short brief block: what the challenge is, who it's for, judging criteria (3 short pillars)
4. **Capabilities grid** — 6 cards with lucide icons (Neural Link, Optical HUD, Kinetic Frame, Adaptive Armor, Quantum Core, Synaptic Mesh) with hover amber glow
5. **Stats band** — 4 animated count-up metrics (Participants, Prize Pool ₹, Universities, Days)
6. **Timeline strip** — 4 phases (Registration → Submission → Finals → Awards) with dates
7. **FAQ** — shadcn Accordion, 5–6 entries (eligibility, team size, submission format, prizes, contact)
8. **Footer** — Techfest mark, link columns, social, amber divider, fine print

### Files to create/modify
- `src/styles.css` — tokens, gradients, scanline/grain utilities, font vars
- `src/routes/__root.tsx` — Google Fonts `<link>`s; page `<title>`, meta description, OG/Twitter tags
- `src/routes/index.tsx` — assemble sections
- `src/components/landing/` — `Nav.tsx`, `Hero.tsx`, `About.tsx`, `Capabilities.tsx`, `Stats.tsx`, `Timeline.tsx`, `FAQ.tsx`, `Footer.tsx`, `HudFrame.tsx`
- `src/assets/cyborg-hero.jpg` — generated cinematic chrome cyborg portrait, amber rim light

### SEO
- Title ~55 chars ("Cybernetic Challenge — Techfest 2026, IIT Bombay"), meta description ~150 chars, OG + Twitter tags, single H1, semantic sections, alt text on hero

### Out of scope
- No backend, auth, registration form submission (CTA links to a placeholder anchor) — can be added later if you want Lovable Cloud wired in
- Copy uses plausible Techfest-style placeholder text; swap in official details anytime
