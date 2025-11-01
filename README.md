Aithentic Product Showcase Site

Aithentic is a launchpad-themed marketing site for digital product teams. It now includes:

- A fully rethemed hero, services, works, testimonials, and contact sections tailored to SaaS and product launches
- Interactive modals for services, blog articles, and footer "Other Services" listings
- Animated footer link underlines for additional polish
- A lightweight Express backend that persists contact submissions to `data/contact-submissions.txt`

Getting Started
---------------

### Prerequisites

- Node.js 18 or newer

### Installation

```bash
npm install
```

### Running locally

The project ships with an Express server that serves the static site and exposes the `/api/contact` endpoint used by the contact form.

```bash
npm start
```

By default the site is available at [http://localhost:3000](http://localhost:3000).

### Contact submissions

Each successful form submission appends a timestamped entry to `data/contact-submissions.txt`. The directory and file are created automatically on first use.

Project Structure Highlights
----------------------------

- `index.html` – marketing site content and markup
- `assets/css/style.css` – custom styling, animations, and modal layouts
- `assets/js/main.js` – front-end behaviour, modals, counters, and contact form logic
- `server.js` – Express server handling contact persistence and static asset serving
