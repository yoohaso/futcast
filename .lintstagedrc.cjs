module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,json,css,md}': ['prettier --write'],
  '*.{ts,tsx}': () => 'tsc --project tsconfig.app.json --noEmit',
  'vite.config.ts': () => 'tsc --noEmit --project tsconfig.node.json',
};
