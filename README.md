# travishuff.com

Personal website for Travis Huff — producer, engineer, mixer, programmer.

Built with Bun, React, TypeScript, and Vite. Amber-on-black terminal aesthetic with IBM Plex Mono.

## Runtime

- [Bun](https://bun.sh/) 1.3.14
- Dependencies are locked with `bun.lock`

## Pages

- **`/`** — Homepage: cycling job titles, notable credits with Spotify links, center photo with CRT scanlines + glitch animation, scrolling ticker
- **`/credits`** — Released co-writes and full production credits with Spotify links
- **`/gear`** — Recording gear and music gear lists
- **`*`** — Unknown routes redirect to homepage

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

Install dependencies:

```bash
bun install --frozen-lockfile
```

Start the local dev server:

```bash
bun run dev
```

Build the production site:

```bash
bun run build
```

## Linting & Formatting

```bash
bun run lint          # ESLint
bun run format        # Prettier (auto-fix)
bun run format:check  # Prettier (check only)
bun run typecheck     # TypeScript type checking
bun run check         # lint + typecheck + unit tests
```

## Testing

### Unit Tests

Unit tests use [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) with jsdom.

```bash
bun run test      # watch mode
bun run test:run  # single run
```

48 tests across 8 files cover components, pages, and data integrity:

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
bun run test:e2e  # run all e2e tests
```

30 tests across 6 specs:

- **Routes** — all 3 pages render correctly, unknown routes redirect to homepage, `/discography` redirects to homepage, navigation between pages works
- **Spotify links** — 6 links with correct URLs, `target="_blank"`, `rel="noopener noreferrer"`
- **Click-away** — background click navigates home on all sub-pages, content click does not
- **Glitch animation** — photo, scanlines, glitch slices present; CSS animations and clip-path applied; 7s duration; sepia filter
- **Responsive** — photo centered on mobile, correct aspect ratio, bottom text pinned, 90vw photo width, nav functional, sub-page content scrolls
- **Gear styling** — unstyled lists, consistent font/spacing, bottom borders, zero margin/padding from global reset

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that:

1. Installs dependencies (`bun install --frozen-lockfile`)
2. Builds the site (`bun run build`)
3. Uploads `dist/` to the server via FTP
