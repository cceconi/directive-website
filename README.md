# directive-website

Source for [directivephp.com](https://directivephp.com) — the website for the Directive PHP framework. Built with [Astro](https://astro.build).

## Prerequisites

- **Node.js** ≥ 22.12.0
- A local checkout of [cceconi/directive-cli](https://github.com/cceconi/directive-cli) (for docs content)

## Local Development

1. Install dependencies:
   ```sh
   npm install
   ```

2. Set the `DOCS_PATH` environment variable to the `doc/` folder inside your local `directive-cli` checkout:
   ```sh
   export DOCS_PATH=/path/to/directive-cli/doc/
   ```
   Without this variable the site falls back to `/web/directive-cli-doc/` (the Docker volume used in CI).

3. Start the dev server:
   ```sh
   npm run dev
   # → http://localhost:4321
   ```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## Deployment

Deployment is fully automated via GitHub Actions:

- **Push to `main`** → triggers `.github/workflows/deploy.yml`, which builds the Astro site and publishes it to GitHub Pages at `directivephp.com`
- **New CLI release tag** → `cceconi/directive-cli` dispatches a `cli-docs-updated` event; the same deploy workflow runs and pulls the docs at the tagged version via sparse-checkout

The Pages source is set to **GitHub Actions** (not branch deploy) in the repository settings.
