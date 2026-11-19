# Beauzead Ltd HR Demo

A frontend-only Human Resource Management System demo built with React, TypeScript, Vite, and Tailwind CSS.

The app includes sample dashboard, employee, leave, expense, payroll, and calendar screens. It has no backend, database, authentication, or persistent storage. Actions that change sample records only affect the current page session.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

## Deploy to AWS Amplify

Connect this repository and deployment branch in AWS Amplify Hosting. Amplify
uses the root `amplify.yml` to install dependencies and publish the Vite `dist`
directory.

Because this app uses client-side routes, add this rewrite under **Hosting >
Rewrites and redirects** in the Amplify console:

| Source | Target | Type |
|--------|--------|------|
| `/<*>` | `/index.html` | `200 (Rewrite)` |

## Project layout

- `src/pages/` contains the routed React screens.
- `src/components/` contains the UI and page components.
- `src/lib/mock-data.ts` provides the in-memory sample records.
- `src/types/` contains frontend data types.

Payslips are generated in the browser. No real employee or payroll data should be entered into this demo.
