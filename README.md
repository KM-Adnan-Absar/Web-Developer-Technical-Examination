# RemoteRecruit — Home Page

A fully responsive recreation of the RemoteRecruit marketing home page, built with React and Tailwind CSS.

**Live demo:** _add your deployed URL here after deploying_
**Repository:** _add your GitHub repo URL here_

## Project Setup

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd remoterecruit

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
# App runs at http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview the production build
npm run preview
```

## Framework & Libraries Used

- **React 18** (via Vite) — component-based UI
- **Tailwind CSS 3** — utility-first styling, fully responsive (mobile / tablet / desktop breakpoints)
- **Vite** — dev server & build tooling
- No external animation library — scroll-reveal animations are implemented with the native `IntersectionObserver` API (`useScrollAnimation` hook) plus Tailwind keyframes, to keep the bundle small and avoid extra dependencies.

## Project Structure

```
src/
  components/
    Navbar.jsx        — sticky nav with mobile hamburger menu
    Hero.jsx           — hero section with stats, floating cards, animated entrance
    LogoStrip.jsx       — auto-scrolling trusted-by logo marquee
    Features.jsx       — 6-card feature grid with scroll-reveal + hover states
    HowItWorks.jsx      — 4-step process with connector line
    Pricing.jsx         — 3-tier pricing cards (highlighted "Growth" plan)
    Testimonials.jsx    — customer quote cards
    FAQ.jsx             — accordion-style FAQ (mock data)
    CTABanner.jsx        — closing call-to-action band
    Footer.jsx           — sitemap + socials
    ScrollToTop.jsx       — scroll-to-top button, appears after 500px scroll
  hooks/
    useScrollAnimation.js — IntersectionObserver hook driving fade/slide reveals
  index.css            — Tailwind directives, custom utility classes (glass, gradient-text, etc.)
  App.jsx               — composes all sections
```

## Design Notes

- **Palette:** dark navy background (`#0F1B2D`) with a teal accent (`#00C9A7`) and blue/purple gradient highlights — chosen to read as a modern, trustworthy SaaS/recruiting product.
- **Typography:** `Plus Jakarta Sans` for display headings, `Inter` for body copy.
- **Responsiveness:** layouts use CSS Grid / Flexbox with Tailwind's `sm:`/`md:`/`lg:` breakpoints; the nav collapses to a hamburger menu under `md`, and grids reflow from 3 → 2 → 1 columns going down to mobile.
- **Animations:**
  - Scroll-triggered fade/slide-up reveals on every major section (IntersectionObserver-based, respects content already in view on load).
  - Hover transitions on buttons, cards, and links (scale, shadow, color).
  - Floating decorative cards in the hero with a CSS `float` keyframe.
  - Infinite auto-scrolling logo marquee.
  - Accordion expand/collapse in the FAQ section using CSS grid-template-rows transitions (avoids layout jump / janky height animations).
- **Scroll-to-top button:** fixed bottom-right, fades in after scrolling 500px, smooth-scrolls to top on click.

## Known Issues / Limitations

- The Figma file referenced in the assessment was only accessible with **view permission**, and the live design canvas could not be rendered through automated inspection in this environment — so layout, copy, and exact spacing/colors are an original interpretation of a "RemoteRecruit" remote-hiring SaaS home page rather than a pixel-exact match to the source file. If you can share exported frames/screenshots or a public embed link, I'm happy to do a fidelity pass to align spacing, colors, and copy precisely.
- Images are sourced as inline SVG/emoji/CSS gradients rather than real photography, since no image assets were provided — swap in real assets via the same component props for a production launch.
- No backend/CMS — all content (job listings, testimonials, FAQ, pricing) is mock/static data, per the assessment's instructions.
- Lighthouse performance/accessibility numbers haven't been measured against a deployed instance yet; run `npm run build && npm run preview` and audit via Chrome DevTools before submission to confirm the ≥90 target.

## Deployment

This is a static Vite app and deploys cleanly to **Vercel** or **Netlify**:

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
# drag-and-drop the dist/ folder into Netlify, or:
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```
