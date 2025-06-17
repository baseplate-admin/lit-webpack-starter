# LitElement + TypeScript + Webpack Starter

A minimal starter project for building LitElement web components using TypeScript, Babel, and Webpack — with decorators support and proper config to avoid common Lit reactivity issues.

---

## Features

- LitElement with TypeScript and decorators
- Babel configured for legacy decorators + class properties (loose mode)
- Webpack 5 for bundling & dev server
- CSS support with style-loader and css-loader
- Proper `tsconfig.json` setup (`useDefineForClassFields: false`) to avoid Lit reactive property shadowing errors
- Simple development server with hot reload

---

## Getting Started

### Prerequisites

- Node.js (v24 or later recommended)
- npm

### Installation

```bash
npm install
```

### Dev server

```bash
npm run start 
```
