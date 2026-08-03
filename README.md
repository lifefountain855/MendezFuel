# MendezFuel — Frontend Website

A lightweight React + Vite single-page website for the MendezFuel storefront: menu, ordering UI, locations, and business information.

This README explains the purpose of the project, how the code is organized, how to run it locally, and notes for future development.

## What this is
MendezFuel is the client-side web frontend for a small food/beverage business. It provides a multi-page user interface (client-side routing) for browsing the menu (deli, smoothies, beer, etc.), viewing locations, and placing orders through a front-end order UI.

### Stack
- Language(s): JavaScript (JSX), HTML, CSS (Tailwind)
- Framework / runtime: React + Vite (development server + build)
- Notable libraries:
  - react-router-dom — client-side routing
  - tailwindcss — utility-first styling
  - framer-motion — animations
  - lucide-react — icons

## Project layout
```
package.json        # scripts and dependencies
vite.config.js      # vite configuration
index.html          # app shell
public/             # static assets (logo, hero, icons, sitemap)
src/
  main.jsx          # app bootstrap (React render)
  index.css         # Tailwind + global styles
  App.jsx           # top-level layout, routes, and page wiring
  assets/           # images and SVG assets
  components/       # reusable UI components (Navbar, Hero, Footer, helpers)
  pages/            # route components (Home, Menu, OrderOnline, Locations, About...)
```

How it fits together
- main.jsx mounts the app and renders App.jsx inside React StrictMode.
- App.jsx contains the layout (Navbar, Footer) and react-router-dom routes that map URL paths to pages in src/pages.
- Pages render the app content and compose smaller components from src/components. Styling is done primarily with Tailwind utility classes.

## Purpose & main functionality
- Present the business (branding, hero, About, Privacy).
- Display menu sections (Menu, Beer, Deli, Smoothies).
- Provide an Order Online page (client-side UI for ordering — front-end only unless connected to an API).
- Provide Locations and contact information.
- Basic auth page (Auth.jsx) and privacy policy page.

## Style & conventions
- Functional React components written in JSX (.jsx files).
- Client-side routing with react-router-dom (routes defined in App.jsx).
- Tailwind CSS utility-first classes for layout and styling; index.css contains the global Tailwind setup.
- Components are grouped by role (pages/ vs components/).
- Animations via framer-motion and icons via lucide-react.
- Linting script available: oxlint (configured in package.json).

## How to run it
1. Install dependencies:

```bash
npm install
```

2. Start the dev server (Vite HMR):

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview a production build locally:

```bash
npm run preview
```

5. Lint:

```bash
npm run lint
```

(These scripts are declared in package.json; the app is a static client-side site built by Vite. No obvious server or environment variables are required for the UI itself.)

## Where the content lives
- Page content and UI markup: src/pages/*.jsx
- Reusable UI: src/components/*.jsx
- Images/icons: src/assets and public/
- App wiring and routes: src/App.jsx and src/main.jsx

## Notes & missing items to consider
- There is no LICENSE file in the repository (so licensing is unspecified).
- No backend integration or documented API endpoints found in the repo — OrderOnline appears to be a front-end implementation; if you expect order persistence, add API integration and document env vars.
- Type declarations exist as devDependencies (@types/react) but the code base is JavaScript (JSX). Consider converting to TypeScript if you want type safety.

## Development notes & conventions
- Files use functional React components (.jsx).
- Routing logic lives in src/App.jsx (react-router-dom). Add new pages by creating a new file in src/pages and a corresponding Route in App.jsx.
- Reusable components live in src/components. Keep components small and focused.
- Tailwind is used for styling: prefer utility classes over custom CSS where possible. Global styles and Tailwind directives are in src/index.css.
- Animations are implemented with framer-motion where subtle motion is needed.

## Things to consider / next steps
- Add backend integration for persisting orders (OrderOnline) and for any authentication flows.
- Convert to TypeScript if you want stronger type checks (devDependencies already include @types/react).
- Add a LICENSE file to make the project license explicit.
- Add tests and CI (e.g., GitHub Actions) to run linting and builds automatically.

## Where to look first in the code
- Routes & app wiring: src/App.jsx
- Add a new route: modify src/App.jsx and add component under src/pages/
- Navigation UI: src/components/Navbar.jsx
- Order UI: src/pages/OrderOnline.jsx

## Questions you might ask next
- Where is client-side routing defined and how do I add a new top-level page?
- How does OrderOnline.jsx collect or submit order data — should I wire up a network request?
- Which component controls the Navbar links and active styling?

---

If you want, I can also:
- Add a LICENSE (MIT by default) and a CONTRIBUTING guide.
- Wire a simple mock API for OrderOnline to demonstrate end-to-end behavior.
