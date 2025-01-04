module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,json,css,md}': ['prettier --write'],
  '*.{ts,tsx}': ['tsc --noEmit'],
};
