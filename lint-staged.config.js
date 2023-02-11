module.exports = {
  '*.{ts,vue}': [() => 'npm run check-types'],
  '**/*.{js,ts,vue}': ['npm run check-lint', 'npm run check-format']
}
