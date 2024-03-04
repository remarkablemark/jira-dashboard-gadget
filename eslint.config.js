// @ts-check
const eslint = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-plugin-prettier');
const react = require('eslint-plugin-react');
const tseslint = require('typescript-eslint');

const config = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);

config.push({
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: {
    react,
    prettier,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': 'error',
    'no-debugger': 'error',
    'prettier/prettier': 'error',
  },
});

module.exports = config;
