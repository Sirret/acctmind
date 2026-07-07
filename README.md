# ACCTS — "Rooted" website theme

A rebuilt, multi-page site for a Holistic Naturopathic Nutritional Therapist. Plain HTML + CSS + a little JS — no build step, no framework. Open `index.html` in a browser and it works.

## File structure

```
acctmind-theme/
├── index.html        Home
├── approach.html     Approach & Stories (about + testimonials + windows of opportunity)
├── services.html     Consultations (three tiers)
├── programs.html     The Deep Dive Program
├── journal.html      Blog / articles index
├── contact.html      Contact form + details
├── css/
│   └── theme.css     The whole design system (colours, type, components)
└── js/
    └── theme.js      Mobile menu, active-link, scroll reveals, form handling
```

## About the navigation (your two asks)

- **Separate pages, but no new tabs.** Each section is its own real HTML page, and every internal link is a plain relative link (`href="services.html"`), so it opens in the **same tab** — nothing pops out into a new window. Only the social/podcast links open a new tab (that's the expected behaviour for off-site links).
- **The current page is highlighted automatically** in the nav — `theme.js` reads the filename and marks it, so you never have to hand-edit "active" states.

## The theme — "Neuronet" (matches your logo)

Rebuilt around the ACCTS logo: a blue neural-network brain inside a chevron diamond. Cool, precise, tech-meets-brain.

- **Colours** (sampled from `assets/favicon.png`, set in `css/theme.css` under `:root`):
  - `--navy #05165A` deepest brand navy (dark sections, headings)
  - `--navy-2 #0A2A7A` secondary navy
  - `--brand #1256C9` royal blue (primary UI accents)
  - `--azure #0095FF` bright azure — the logo's brain spark (highlights, links, marks)
  - `--sky #8CC3FF` / `--sky-soft #BFE0FF` light blues
  - `--paper #F2F7FD` cool cyan-white background
  Change any value once and it updates everywhere.
- **Type:** *Fraunces* (display serif) + *Nunito Sans* (body), from Google Fonts.
- **Logo mark:** an inline SVG that echoes your logo — a gradient chevron diamond with a brain-node cluster. Two variants (header on light, footer on navy) so it stays visible on both.
- **Signature illustration:** the hero brain is drawn as a glowing neural network inside the chevron diamond; the same node-cluster motif recurs in the section panels.
- **Favicon:** your uploaded logo (`assets/favicon.png`) is wired into every page.
- **Motion:** gentle scroll-reveal fade-ups and hover lifts. Respects `prefers-reduced-motion`.

## To make it yours

1. **Text:** all copy is freshly written placeholder-quality content in the theme's voice. Edit directly in each `.html` file.
2. **Real photos:** the coloured SVG graphics are stand-ins. Swap any `.split-media`, `.thumb`, or hero art block for an `<img src="assets/your-photo.jpg" alt="…">`.
3. **Booking + forms:** the contact form and newsletter are front-end only right now. Point them at your booking tool (e.g. your Kajabi/Bttr link) or an email service to go live. Search `data-contact-form` in `contact.html`.
4. **Consultation prices:** placeholders in `services.html` say "Tailored" — drop in real figures when ready.

## Note

The site includes a standing disclaimer (in every footer) that it offers holistic nutrition guidance and does not diagnose or treat medical conditions — keep that in place. Health claims in the Journal should stay measured and, ideally, cite sources.
