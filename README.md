# travishuff.com

Personal website for Travis Huff — producer, engineer, mixer, programmer.

Built with React + Vite. Amber-on-black terminal aesthetic with IBM Plex Mono.

## Pages

- **`/`** — Homepage: cycling job titles, notable credits with Spotify links, center photo with CRT scanlines + glitch animation, scrolling ticker
- **`/credits`** — Released co-writes and full production credits
- **`/discography`** — Full discography table
- **`/gear`** — Recording gear and music gear lists

## Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/) for client-side routing
- CSS Modules for component-scoped styles
- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) via Google Fonts

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that:
1. Installs dependencies (`npm ci`)
2. Builds the site (`npm run build`)
3. Uploads `dist/` to the server via FTP

FTP credentials are stored as GitHub repository secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.
