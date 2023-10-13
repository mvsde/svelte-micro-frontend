# Svelte Micro Frontend Boilerplate

Basic [Svelte](https://svelte.dev) plus [Vite](https://vitejs.dev) configuration for micro frontend development.

## Requirements

- [Node.js](https://nodejs.org)
- [npm CLI](https://docs.npmjs.com/cli/) (bundled with Node.js)

## Installation

[Download the source files](https://github.com/mvsde/svelte-micro-frontend/archive/refs/heads/main.zip) (don’t clone since you want to create a “new” project).

Install dependencies with:

```sh
npm install
```

## Usage

Start development server:

```sh
npm run dev
```

Build production files:

```sh
npm run build
```

## Embed the micro frontend

Reference the output JS file inside the `<head>` before any `<link rel="stylesheet">`:

```html
<script defer src="dist/svelte-micro-frontend.iife.js"></script>
```

Add the following inside the `<body>` where you want the micro frontend to appear:

```html
<div id="svelte-micro-frontend"></div>
```
