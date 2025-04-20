# Stand Against Deportation

A Static Site Generation (SSG) web app using Nuxt.js to oppose U.S. deportation policies violating due process, hosted on Netlify, with data fetched from a Rails API at build time.

## Features

- News feed from Bluesky/NewsAPI
- Advocacy tools (petitions, legislator contacts)
- Multilingual support (English, Spanish, Haitian Creole)
- Community engagement features (forum, volunteer opportunities)
- Static site generation for fast loading and SEO benefits
- Responsive design with Tailwind CSS

## Setup

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Generate static site
npm run generate

# Preview production build
npm run preview
```

## Multilingual Support

The app supports three languages:
- English (default)
- Spanish
- Haitian Creole

Language files are located in the `locales` directory. The app uses Nuxt i18n for internationalization.

## Project Structure

- `pages/`: Nuxt.js pages
- `components/`: Vue components
- `server/api/`: API endpoints (mock data for development)
- `layouts/`: Page layouts
- `locales/`: Translation files
- `public/`: Static assets

## Mock Data

For development, the app uses mock data in the `server/api/` directory. In production, this would be replaced with data from the Rails API.

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file includes the necessary configuration.

To deploy:

1. Push your code to a Git repository
2. Connect the repository to Netlify
3. Netlify will automatically build and deploy the site
