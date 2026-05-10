# tolbxela.github.io

Personal site at [tolbxela.com](https://tolbxela.com). Astro + Vite, minimal.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Deploy

Pushes to `master` are built and published to GitHub Pages by `.github/workflows/deploy.yml`.

In the repo settings, set **Pages → Build and deployment → Source = GitHub Actions** and enable **Enforce HTTPS**. The `CNAME` (`tolbxela.com`) lives in `public/` and is copied into `dist/` on every build.
