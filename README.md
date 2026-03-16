# travishuff.com

Personal website for Travis Huff — producer, engineer, mixer, programmer.

Built with React + TypeScript + Vite. Amber-on-black terminal aesthetic with IBM Plex Mono.

## Pages

- **`/`** — Homepage: cycling job titles, notable credits with Spotify links, center photo with CRT scanlines + glitch animation, scrolling ticker
- **`/credits`** — Released co-writes and full production credits with Spotify links
- **`/gear`** — Recording gear and music gear lists
- **`*`** — Unknown routes redirect to homepage

## Data

Content data lives in `src/data/` for easy updates without touching component code:

| File | Contents |
|---|---|
| `cowrites.ts` | 9 co-write entries with optional Spotify links |
| `credits.ts` | 61 production credits with optional Spotify links |
| `gear.ts` | 30 recording + 29 music gear items |
| `ticker.ts` | 26 ticker artist names |
| `titles.ts` | 4 cycling titles |
| `notableCredits.ts` | 6 notable credits with Spotify links |

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/) for client-side routing
- CSS Modules for component-scoped styles
- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) via Google Fonts
- [ESLint 9](https://eslint.org/) + [typescript-eslint](https://typescript-eslint.io/) for linting
- [Prettier](https://prettier.io/) for code formatting
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) for unit tests
- [Playwright](https://playwright.dev/) for end-to-end tests

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
```

## Linting & Formatting

```bash
npm run lint          # ESLint
npm run format        # Prettier (auto-fix)
npm run format:check  # Prettier (check only)
npm run typecheck     # TypeScript type checking
```

## Testing

### Unit Tests

Unit tests use [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) with jsdom.

```bash
npm test          # watch mode
npm run test:run  # single run
```

50 tests across 8 files cover components, pages, and data integrity:

- `CyclingTitle` — title cycling, interval cleanup
- `Ticker` — content rendering, aria-hidden duplicate
- `CreditsBlock` — all 6 credits, Spotify links, new-tab attributes
- `Nav` — links, routes, email, roles tagline
- `PageLayout` — children, background click navigates home, content click does not
- `Credits` — co-writes, production credits (including former discography entries), role legend
- `Gear` — both gear sections, known items, removed items absent
- `Data` — entry counts, required fields, Spotify link counts, URL validation, no duplicates

### End-to-End Tests

E2E tests use [Playwright](https://playwright.dev/) with Chromium (auto-starts the dev server).

```bash
npm run test:e2e  # run all e2e tests
```

29 tests across 6 specs:

- **Routes** — all 3 pages render correctly, unknown routes redirect to homepage, `/discography` redirects to homepage, navigation between pages works
- **Spotify links** — 6 links with correct URLs, `target="_blank"`, `rel="noopener noreferrer"`
- **Click-away** — background click navigates home on all sub-pages, content click does not
- **Glitch animation** — photo, scanlines, glitch slices present; CSS animations and clip-path applied; 7s duration; sepia filter
- **Responsive** — photo centered on mobile, correct aspect ratio, bottom text pinned, 90vw photo width, nav functional, sub-page content scrolls
- **Gear styling** — unstyled lists, consistent font/spacing, bottom borders, zero margin/padding from global reset

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that:

1. Installs dependencies (`npm ci`)
2. Builds the site (`npm run build`)
3. Uploads `dist/` to the server via FTP
