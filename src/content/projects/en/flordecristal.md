---
locale: en
title: Flor de Cristal
description: Online store for a jewellery brand
order: 2
terminalDurationMs: 5000
name: Flor de Cristal
path: workspace://projects/flordecristal
status: release/v4.8.0
terminalPrompt:
  user: daljo25@workstation
  path: '~/projects/flordecristal $'
  command: php artisan serve
serverOutput:
  - 'INFO Server running on http://127.0.0.1:8000'
  - Press Ctrl+C to stop the server
category: Online sales platform
image: /projects/flordecristal.webp
imageAlt: E-commerce dashboard with tables, filters and indicators.
technologies: [Laravel 11, Laravel-Modules, Tailwind CSS, MySQL, Vue]
metrics:
  [
    { label: UPTIME, value: 99.8% },
    { label: HAPPY CUSTOMERS, value: '99%' },
    { label: SALES / DAY, value: 167 },
  ]
highlights:
  - Inventory management.
  - Shipping management.
  - Asynchronous PDF report processing.
  - Stripe payments.
href: 'https://flordecristal.shop'
linkLabel: Visit site
---
