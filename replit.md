# icyber.tech Portfolio

## Overview

A personal portfolio website for Rahama, built with React + Vite + TypeScript in a pnpm monorepo. Features a dark-themed UI with sections for Home, About, Services, and Contact.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 20
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React 19, Vite 7, Tailwind CSS v4, shadcn/ui components
- **Routing**: Wouter
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod
- **API**: Express 5 (backend api-server)
- **Contact form**: web3forms API

## Structure

```text
workspace/
├── artifacts/
│   ├── icyber-portfolio/       # Main React frontend (port 5000)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── layout/     # Navbar, Footer
│   │   │   │   ├── sections/   # Hero, About, Services, Contact
│   │   │   │   └── ui/         # shadcn/ui components
│   │   │   ├── hooks/          # use-toast, use-mobile, use-contact
│   │   │   ├── lib/            # utils
│   │   │   └── pages/          # Home, AboutPage, ServicesPage, ContactPage
│   │   ├── attached_assets/    # Images (logo, avatar)
│   │   ├── index.html
│   │   └── vite.config.ts
│   └── api-server/             # Express API server
├── lib/
│   ├── api-client-react/       # React Query hooks
│   ├── api-zod/                # Zod schemas
│   ├── api-spec/               # OpenAPI spec
│   └── db/                     # Drizzle ORM (PostgreSQL)
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## Dev Workflow

- Frontend dev server: `pnpm --filter @workspace/icyber-portfolio run dev` (port 5000)
- Frontend runs on `0.0.0.0:5000` with `allowedHosts: true` for Replit proxy

## Pages

- `/` — Home (Hero, About, Services, Contact sections)
- `/about` — About page
- `/services` — Services page
- `/contact` — Contact page

## Key Files

- `artifacts/icyber-portfolio/vite.config.ts` — Vite config with `@` alias pointing to `src/`
- `artifacts/icyber-portfolio/src/index.css` — Global styles with Tailwind v4
- `artifacts/icyber-portfolio/src/hooks/use-contact.ts` — Contact form logic using web3forms API
