# Dev environment

The development environment in Vite is denoted by environment variables `import.meta.env.MODE`, `import.meta.env.PROD`, and `import.meta.env.DEV` (automatically set to the opposite of `PROD`).

The Vite dev server runs in development mode by default, while the Vite build process runs in production mode by default. These can be modified by passing in a `NODE_ENV` environment variable.

## Development mode features

The `DevApp` component wraps the production mode `App` component when the app is started with `NODE_ENV=development`.

- Provides a top bar with feature toggles and triggers.
- Manages content import and data filtering and shaping (via Effect). Passes data directly to the `App` component.

`App` component features

- `CardTooltip` showing debug information on `Card` hover
