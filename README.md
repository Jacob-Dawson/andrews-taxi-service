# Andrew's Taxi Service

A sleek, premium taxi service website built as a front-end portfolio project. Designed to demonstrate real-world client work — originally built for Andrew's Taxi Service — rebuilt from scratch using a modern React stack with a focus on UI polish, mobile-first layout, and interactive UX.

![Andrew's Taxi Service](./public/images/hero.jpg)

## Live Demo

[View Live →](#) <!-- Replace with your Netlify / Vercel URL -->

## Tech Stack

- **React 19** — component-based UI
- **TypeScript** — fully typed throughout
- **Tailwind CSS v4** — utility-first styling with custom design tokens
- **Vite** — fast dev server and build tooling

## Features

- Sticky navbar with scroll-aware transparency and animated mobile hamburger
- Full-screen hero with staggered entrance animations and atmospheric layered backgrounds
- Services grid with icon cards and hover interactions
- Asymmetric bento-grid "Why Us" section with live stats
- Decorative SVG coverage map with airport and city fare lists
- Interactive pricing table with tab switcher (Airports / Towns & Cities)
- Featured testimonial with review card grid
- Contact section with prominent phone CTA
- **Multi-step booking modal** — journey details → personal details → confirmation screen, with form validation, journey summary, and a bottom-drawer layout on mobile
- Scroll-reveal animations via `IntersectionObserver` throughout
- Mobile-first responsive layout

## Project Structure

```
src/
├── assets/
│   └── hero.jpg
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── WhyUs.tsx
│   ├── Coverage.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── BookingModal.tsx
│   └── Reveal.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Design Decisions

**Sleek & premium aesthetic** — deep charcoal backgrounds (`#0C0C10`), warm gold accents (`#C9A96E`), Cormorant Garamond display font paired with DM Sans for body text. The goal was a private hire feel rather than a generic taxi app.

**CSS-first Tailwind v4** — design tokens defined via `@theme` and `@layer utilities` in `index.css` rather than a JavaScript config file, following Tailwind v4's CSS-first approach.

**Booking modal** — built as a controlled multi-step form with `useState`, lifted booking state to `App.tsx` and passed `onBook` down to `Navbar`, `Hero`, and `Contact` — avoiding context for a component tree this shallow.

**Scroll reveals** — a lightweight `Reveal` wrapper component uses `IntersectionObserver` with `disconnect()` on trigger, so each element animates in once and the observer is cleaned up immediately after.

## Notes

All data (pricing, testimonials, phone numbers, coverage areas) is placeholder. The site is intended as a portfolio demonstration of the original work done for this client.

---

Built by [Jay](https://github.com/Jacob-Dawson)