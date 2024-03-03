const react = require('eslint-plugin-react');
const prettier = require('eslint-plugin-prettier');

module.exports = {
  files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  plugins: {
    prettier,
    react,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'prettier/prettier': 'error',
  },
};
