module.exports = {
  '*.{ts,astro}': [() => 'npm run lint:typecheck'],
  '**/*.{js,ts,astro}': ['npm run lint:eslint', 'npm run lint:prettier']
}
