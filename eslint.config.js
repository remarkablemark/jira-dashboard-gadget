// @ts-check
const eslint = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-plugin-prettier');
const react = require('eslint-plugin-react');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
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
    'simple-import-sort': simpleImportSort,
    prettier,
    react,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': 'error',
    'no-debugger': 'error',
    'prettier/prettier': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
});

module.exports = config;
