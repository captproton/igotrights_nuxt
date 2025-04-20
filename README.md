# Stand Against Deportation

A Static Site Generation (SSG) web app using Nuxt.js to oppose U.S. deportation policies violating due process, hosted on Netlify, with data fetched from a Rails API at build time.

## Features

- News feed from Bluesky/NewsAPI
- Advocacy tools (petitions, legislator contacts)
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

# Run linting
npm run lint

# Run type checking
npm run typecheck

# Run tests
npm run test
```

## CI/CD

This project uses GitHub Actions for continuous integration. The following checks are run on each push and pull request:

1. **Linting**: ESLint checks for code quality and style issues
2. **Type Checking**: TypeScript type checking with `nuxi typecheck`
3. **Testing**: Unit tests with Vitest
4. **Build**: Ensures the project builds correctly

The CI workflow is defined in `.github/workflows/ci.yml`.

## Project Structure

- `pages/`: Nuxt.js pages
- `components/`: Vue components
- `server/api/`: API endpoints (mock data for development)
- `layouts/`: Page layouts
- `locales/`: Translation files
- `public/`: Static assets
- `tests/`: Unit tests
- `.github/workflows/`: CI/CD configuration

## Multilingual Support

The app supports three languages:
- English (default)
- Spanish
- Haitian Creole

Language files are located in the `locales` directory.

## Mock Data

For development, the app uses mock data in the `server/api/` directory. In production, this would be replaced with data from the Rails API.

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file includes the necessary configuration.

To deploy:

1. Push your code to a Git repository
2. Connect the repository to Netlify
3. Netlify will automatically build and deploy the site
