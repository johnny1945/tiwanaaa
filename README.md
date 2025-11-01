# Aithentic Product Showcase

Aithentic is a modern product storytelling website that blends immersive hero experiences, conversion-focused service modules, dynamic news popups, and a backend-ready contact workflow. The site demonstrates how marketing, design, and engineering collaborate to launch high-performing digital experiences quickly.

## Highlights

- ?? **Centered hero narrative** with animated call-to-actions tailored for rapid product launches
- ?? **Updated content architecture** for the Aithentic brand across About, Platform Highlights, and Experience Library sections
- ?? **Interactive modals** that reveal deeper insights for platform services, recent articles, and footer service offerings
- ?? **Backend-powered contact form** that validates input and stores submissions to a text file for easy follow-up
- ? **Refreshed visual language** featuring gradient-driven imagery, hover animations, and accessible focus states

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or newer
- npm (ships with Node.js)

### Installation

```bash
git clone https://github.com/Amitkumar0111/tiwana-website
cd tiwana-website
npm install
```

### Running the project

Serve the static site and API locally (default: <http://localhost:3000>):

```bash
npm start
```

For live-reload during development:

```bash
npm run dev
```

### Contact submissions

- Form data is validated in the browser and sent to `POST /api/contact`
- Submissions are appended to `data/contact-submissions.txt`
- The server automatically creates the `data` directory if it does not exist

## Project Structure

```
??? assets/
?   ??? css/         ? Global styles
?   ??? images/      ? Brand imagery & hero assets
?   ??? js/          ? Frontend interactions (modals, counters, contact form)
??? data/            ? Generated at runtime for contact submissions
??? index.html       ? Marketing site markup
??? package.json     ? Node.js configuration
??? server.js        ? Express server handling static hosting + contact API
```

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the production server |
| `npm run dev` | Run the server with live reload via nodemon |

## License

This project remains open for customization for Aithentic client engagements. Adapt the content, imagery, or backend integration as needed for your launch.
