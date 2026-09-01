# Portfolio — Pratik Sonar

Personal portfolio.
This portfolio is inspired by developer of quickshell.
Arch user here/
Hahaha

**Stack:** Vite · React · [Motion](https://motion.dev)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # -> dist/
npm run preview  # serve the production build locally
```

`vite.config.js` sets `base: "./"`, so the same `dist/` works on Vercel,
Netlify, and GitHub Pages project sites with no extra config.

### Deploy to Vercel

Import the repo — Framework preset **Vite**, build `npm run build`, output
`dist`. Nothing else to set.

### Deploy to GitHub Pages

Push `dist/` to a `gh-pages` branch, or add an Actions workflow that runs
`npm run build` and publishes `dist/`.

## Editing content

All copy lives in [`src/data/content.js`](src/data/content.js) — profile text,
stats, focus timeline, projects, skills, and links. Components don't hold
hard-coded strings.

## Replacing the avatar

Drop a square image at `public/avatar.svg` (or use `public/avatar.png` and
change `AVATAR` in `src/components/Hero.jsx`). The current file is a generated
monogram placeholder.

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

