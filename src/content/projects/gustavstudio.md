---
title: Gustavstudio
description: Experiencia digital interactiva para una firma de dirección de arte y producción multimedia. Arquitectura estática con Astro y carga progresiva de imágenes de alta resolución.
order: 3
terminalDurationMs: 5000
name: Gustavstudio
path: workspace://projects/gustavstudio
status: astro.config.mjs
terminalPrompt:
  user: daljo25@workstation
  path: '~/projects/gustavstudio $'
  command: pnpm dev
serverOutput:
  - Local http://localhost:4321/
  - Network use --host to expose
category: Estudio de diseño & producción creativa
image: /projects/studiogustav.webp
imageAlt: Sitio web de estudio creativo con tipografía editorial.
technologies: [Astro v4, Tailwind CSS, TypeScript, View Transitions API]
metrics:
  [
    { label: LIGHTHOUSE, value: 99/100 },
    { label: FIRST CONTENTFUL, value: 0.4s },
    { label: JS PAYLOAD, value: '<14kb' },
  ]
highlights:
  - Pipeline automatizado de imágenes WebP/AVIF y microinteracciones CSS fluidas.
  - Cero saltos de contenido (CLS = 0) con tipografía editorial e interacción visual.
href: 'https://studiogustav.com'
linkLabel: Visitar sitio
---
