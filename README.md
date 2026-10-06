# Spidy

A cinematic React/Vite landing page using the exact React Bits DriftWall JS-CSS registry component, adapted with Spider-Man imagery, pointer-reactive parallax, a scroll-scrubbed supplied video, glow/cursor motion, and a cinematic dark/red visual system.

## Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## React Bits DriftWall

The component source is based on the exact JS-CSS registry item requested:
`https://reactbits.dev/r/DriftWall-JS-CSS.json`

The registry lists no additional dependencies. The official CLI command is:

```bash
npx shadcn@latest add https://reactbits.dev/r/DriftWall-JS-CSS
```

This project keeps the component source locally under `src/components/` so it works without relying on a generated shadcn components directory.

## Supplied video

The uploaded `Video Project 2.mp4` is included as `public/landing-scroll.mp4`. It is scrubbed by page scroll rather than autoplayed, creating the landing-page scroll-video effect.

## Image credits

The page uses Spider-Man cosplay photographs hosted by Wikimedia Commons. The selected files are CC BY / CC BY-SA licensed according to their Commons pages; check the individual source pages before public deployment and preserve required attribution/share-alike terms.

- https://commons.wikimedia.org/wiki/File:Spider-Man_cosplay.jpg
- https://commons.wikimedia.org/wiki/File:Spider-Man_cosplay_2022.jpg
- https://commons.wikimedia.org/wiki/File:Asia_Comic_Expo_2023_-_Spider-Man_cosplay_1.jpg
- https://commons.wikimedia.org/wiki/File:SDCC_2017_-_Spider-Man_Cosplay_(35308459724).jpg
- https://commons.wikimedia.org/wiki/File:NYCC_2018_Cosplay_of_Spider-Man.jpg

## Spidy additions
- `ScrollExpand` (React Bits) frames the title picture; `scrollDistance` and `smoothing` in `src/main.jsx` control its pace.
- The hero video scrub is eased (`0.06` in the `loop` function) and the hero is `360vh` tall in `src/styles.css`; raise either to slow it further.
- Light/dark toggle: star button in the nav, saved in `localStorage`.
- Login page: `LOGIN` in the nav (or `/#login`). Front-end only, so connect your own auth backend in `submit`.
- `public/landing-scroll.mp4` is a 1080p re-encode of your video with a keyframe every 6 frames for sharper scrubbing.
