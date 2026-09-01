Portfolio — Pratik Sonar

<<<<<<< HEAD
Personal portfolio site with a clean dark aesthetic: a static professional background, scroll reveals, a hero entrance stagger, a typewriter subtitle, and a pause-on-hover skills marquee.
=======
Personal portfolio.

This portfolio is inspired by developer of quickshell

Arch user here

Hahaha
>>>>>>> 2513e717e179b199746de31dc0cd75f0e288033f

Stack: Vite, React, Motion (https://motion.dev)

────────────────────────────────────

Getting Started

Install dependencies and run the development server:

    npm install
    npm run dev        (http://localhost:5173)

<<<<<<< HEAD
Build for production:

    npm run build       →  outputs to dist/
    npm run preview      (serve the production build locally)

vite.config.js sets base: "./", so the same dist/ output works on Vercel, Netlify, and GitHub Pages project sites with no extra configuration.

────────────────────────────────────

Deployment

Vercel

Import the repository, select the Vite framework preset, and use npm run build as the build command with dist as the output directory. No further configuration is required.

GitHub Pages

Push the contents of dist/ to a gh-pages branch, or add a GitHub Actions workflow that runs npm run build and publishes dist/.

────────────────────────────────────

Editing Content

All copy lives in src/data/content.js — profile text, statistics, the focus timeline, projects, skills, and links. Components do not contain hard-coded strings, so content updates never require touching component code.

────────────────────────────────────

Replacing the Avatar

Drop a square image at public/avatar.svg, or use public/avatar.png and update the AVATAR constant in src/components/Hero.jsx. The current file is a generated monogram placeholder.

────────────────────────────────────

Animations Reference

| Effect | File |
| --- | --- |
| Minimal cursor-tracking light | src/components/MouseGlow.jsx |
| Scroll reveal (fade + rise) | src/components/Reveal.jsx |
| Hero entrance stagger | src/components/Hero.jsx |
| Typewriter subtitle | src/components/Typewriter.jsx |
| Skills marquee (pause on hover) | src/components/Skills.jsx |
| Project card hover (border sweep, lift, corner glow) | global.css |
| Focus row hover (slide + dot) | global.css |
| Static background gradient, faint masked grid, rim frame | src/styles/global.css |
=======
## Animations & where they live

| Effect | File |
| --- | --- |
| Minimal cursor-tracking light | `src/components/MouseGlow.jsx` |
| Scroll reveal (fade + rise) | `src/components/Reveal.jsx` |
| Hero entrance stagger | `src/components/Hero.jsx` |
| Typewriter subtitle | `src/components/Typewriter.jsx` |
| Skills marquee (pause on hover) | `src/components/Skills.jsx` |
| Project card hover (border sweep, lift, corner glow) | `global.css` |
| Focus row hover (slide + dot) | `global.css` |
| Static background gradient + faint masked grid + rim frame | `src/styles/global.css` |

>>>>>>> 2513e717e179b199746de31dc0cd75f0e288033f
