---
locale: en
title: Gustavstudio
description: Interactive digital experience for an art direction and multimedia production studio. Static architecture with Astro and progressive loading of high-resolution imagery.
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
category: Design studio & creative production
image: /projects/studiogustav.webp
imageAlt: Creative studio website with editorial typography.
technologies: [Astro v4, Tailwind CSS, TypeScript, View Transitions API]
metrics:
  [
    { label: LIGHTHOUSE, value: 99/100 },
    { label: FIRST CONTENTFUL, value: 0.4s },
    { label: JS PAYLOAD, value: '<14kb' },
  ]
highlights:
  - Automated WebP/AVIF image pipeline and fluid CSS micro-interactions.
  - Zero content shift (CLS = 0) with editorial typography and visual interaction.
href: 'https://studiogustav.com'
linkLabel: Visit site
---
