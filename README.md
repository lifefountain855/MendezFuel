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

## Where the content lives
- Page content and UI markup: src/pages/*.jsx
- Reusable UI: src/components/*.jsx
- Images/icons: src/assets and public/
- App wiring and routes: src/App.jsx and src/main.jsx

## Development notes & conventions
- Files use functional React components (.jsx).
- Routing logic lives in src/App.jsx (react-router-dom). Add new pages by creating a new file in src/pages and a corresponding Route in App.jsx.
- Reusable components live in src/components. Keep components small and focused.
- Tailwind is used for styling: prefer utility classes over custom CSS where possible. Global styles and Tailwind directives are in src/index.css.
- Animations are implemented with framer-motion where subtle motion is needed.

### Thanks!
Thanks for viewing my repo. If you like it, and want something like it reach out!
