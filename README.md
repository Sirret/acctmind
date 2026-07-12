# ACCTS — "Clinical Clarity" website

A multi-page site for ACCTS, a naturopathic brain-health practice supporting children, adults, and the elderly. Plain HTML + CSS + a little JS — no build step, no framework. Open `index.html` (redirects to `concept-3/index.html`) in a browser and it works.

## File structure

```
concept-3/
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
```

## The theme — "Clinical Clarity"

Navy/blue palette (`--navy`, `--navy-2`, `--brand`, `--azure`, `--sky`) defined once in `styles.css` under `:root` — change a value there and it updates everywhere. Type is *Archivo* (display, bold headings) + *Public Sans* (body), from Google Fonts.

## To make it yours

1. **Text:** all copy is freshly written placeholder-quality content in the site's voice. Edit directly in each `.html` file.
2. **Real photos:** swap the Kajabi-hosted stock images for real photography.
3. **Video testimonials:** the "Real stories" section on `children.html` (and `about.html`/`adults.html`) uses a scroll-snap carousel (`.testi-carousel` / `.testi-track`) sized for ~6-7 clips. Swap the placeholder `.testi-video` divs for real embeds/thumbnails — the carousel markup and script stay the same.
4. **Booking + forms:** the contact form, waitlist form, and booking calendar are front-end only right now. Point them at your booking tool (e.g. Kajabi/Calendly) or an email service to go live. Search `data-demo-form` and `data-contact-form`.
5. **Consultation prices:** figures on the homepage and elsewhere are placeholders — confirm before publishing.

## Note

The site includes a standing disclaimer (in every footer) that it offers naturopathic nutrition guidance and does not diagnose or treat medical conditions — keep that in place.
