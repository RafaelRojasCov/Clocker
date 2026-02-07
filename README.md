# Clocker (Pomofocus Clone)

## Requirements

- Node.js +16
- Typescript
- React
- Yarn

## Development

To run the project locally:

```bash
yarn install
yarn start
```

To build for production:

```bash
yarn build
```

## Deployment

This project automatically deploys to GitHub Pages on every push to the `main` branch using GitHub Actions.

### GitHub Pages Configuration

To enable automatic deployment, ensure the following settings in your GitHub repository:

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy the site to `https://RafaelRojasCov.github.io/Clocker/`

The deployment workflow is defined in `.github/workflows/deploy.yml`.
