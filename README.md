# Envision Portal Docs

Documentation site for [Envision Portal](https://github.com/envision-portal), a web platform for managing, standardizing, and sharing biomedical research datasets.

Built with [Docus](https://docus.dev) on top of Nuxt 4.

## Getting Started

Requires [mise](https://mise.jdx.dev) for toolchain management.

```bash
mise install       # install Node.js and pnpm
pnpm install       # install dependencies
pnpm dev           # start dev server at http://localhost:3000
```

## Project Structure

```
content/
├── index.md                    # Homepage
├── 1.getting-started/          # Intro, installation, migration, troubleshooting
├── 2.datasets/                 # Dataset lifecycle: create, metadata, publish
├── 3.access/                   # Roles, permissions, access requests
├── 4.discover/                 # Browsing and discovering datasets
└── 5.development/              # API reference and developer guide
```

## Building

```bash
pnpm build
```

Output goes to `.output/`, ready for deployment to any Node.js host.
