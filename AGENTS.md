# Repository Guidelines

## Project Structure & Module Organization
This is a Vite + React + TypeScript single-page app.
- `App.tsx` and `index.tsx` are the main entry points.
- `components/` holds shared UI and layout pieces.
- `pages/` contains route-level screens (see `pages/legal/` for policy pages).
- `context/` provides app-wide state (e.g., cart).
- `services/`, `utils/`, `types.ts`, and `data.ts` house logic, helpers, and typed data.
- `public/` stores static assets served as-is; `index.css` and `tailwind.config.js` define styling.
- `dist/` is the build output; `docs/` contains project notes.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server.
- `npm run build` produces the production bundle in `dist/`.
- `npm run preview` serves the production build locally.

## Coding Style & Naming Conventions
- Language: TypeScript + React with React Router.
- Indentation: 2 spaces; use single quotes in TS/TSX.
- Components and pages use `PascalCase.tsx` (e.g., `CartDrawer.tsx`).
- Hooks should follow `useX` naming if added.
- Styling uses Tailwind utility classes in TSX; keep large class sets readable.
- No lint/format script is configured; keep changes consistent with nearby code.

## Testing Guidelines
No test framework is currently configured. If you add tests, place them near the module
and prefer `*.test.tsx` or `*.test.ts`. Document the command in this file if added.

## Commit & Pull Request Guidelines
Recent history uses a Conventional Commit style such as `feat(scope): summary`.
Keep messages in that format when possible; scope is optional.
For PRs: include a clear description, link relevant issues, and add screenshots or
screen recordings for UI changes. Note any manual testing performed.

## Security & Configuration Tips
Local secrets should live in `.env.local` (see `README.md` for `GEMINI_API_KEY`).
Never commit API keys. Use `public/` for safe, public assets only.
