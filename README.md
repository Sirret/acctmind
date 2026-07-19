# ACCTS — "Clinical Clarity" website

A multi-page site for ACCTS, a naturopathic brain-health practice supporting children, adults, and the elderly. Plain HTML + CSS + a little JS — no build step, no framework. Open `index.html` for a chooser linking to the concepts below.

**concept-3 ("Clinical Clarity") is the client-approved final direction.** concept-2 ("Clinic Trust") is a fully-built alternate design, kept as an actively-maintained parallel option for comparison — both are real, complete sites, each with its own design system. concept-4 is a frozen backup copy of concept-3 (see `CLAUDE.md` — it requires explicit confirmation before any edit).

## File structure

```
concept-3/  (final direction — full site)
├── index.html               Home
├── children.html             Brain nutrition for children
├── adults.html                Brain nutrition for adults & the ageing brain
├── about.html                 About Natsai
├── retreat.html               Retreat wellness center waitlist
├── contact.html                Contact form + details
├── book-a-free-call.html      Free-call booking page
├── privacy-policy.html
├── terms-conditions.html
├── styles.css                 The whole design system (colours, type, components)
└── script.js                  Mobile menu, video-testimonial carousel, form handling

concept-2/  (alternate design — children-only, full site)
├── index.html                 Home
├── about.html                  About (founder story, partners coming soon)
├── packages.html                Six-Week Plan (£585) + Deep Dive Wellness Community
├── book-a-free-call.html       Practice Better booking placeholder
├── contact.html                 Contact form
├── blog.html                    Blog index (template)
├── blog-early-intervention.html Example article
├── privacy-policy.html
├── terms-conditions.html
├── styles.css                   Navy/green/azure design system
└── script.js                    Mobile menu, video carousel, form handling
```

## The two designs

- **concept-3 — "Clinical Clarity":** navy/blue palette (`--navy`, `--navy-2`, `--brand`, `--azure`, `--sky`), *Archivo* (display) + *Public Sans* (body). Covers children, adults & the ageing brain, plus a retreat waitlist.
- **concept-2 — "Clinic Trust":** navy/green/azure palette (`--navy`, `--navy-2`, `--azure`, `--green`), *Sora* (display) + *Inter* (body). Scoped to children only, with star-rating trust badges and a practitioner bio card as its signature elements. Its one package is the £585 Six-Week Plan (booked via Practice Better) plus the Deep Dive Wellness Community for Children (hosted on Kajabi).

## To make it yours

1. **Text:** all copy is freshly written placeholder-quality content in each site's voice. Edit directly in each `.html` file.
2. **Real photos:** both sites currently reuse the same Kajabi-hosted stock images — swap for real photography whenever it's available.
3. **Video testimonials:** both sites use a scroll-snap carousel (`.testi-carousel` / `.testi-track`) for video clips — concept-3's is portrait (9:16), concept-2's is landscape (16:9). Swap the placeholder `.testi-video` divs for real embeds/thumbnails; the carousel markup and script stay the same.
4. **Booking + forms:** contact forms, the booking-calendar placeholder, and (on concept-2) the blog are front-end only right now. Point them at your real tools (concept-2: Practice Better for 1:1 booking, Kajabi for the community) or an email service to go live. Search `data-demo-form`.
5. **Consultation prices:** figures are placeholders — confirm before publishing.

## Note

The site includes a standing disclaimer (in every footer) that it offers naturopathic nutrition guidance and does not diagnose or treat medical conditions — keep that in place.
