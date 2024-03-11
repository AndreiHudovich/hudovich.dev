module.exports = {
  '*.{ts,astro}': [() => 'npm run lint:tsc'],
  '**/*.{js,ts,astro}': ['npm run lint:eslint', 'npm run lint:prettier']
}
