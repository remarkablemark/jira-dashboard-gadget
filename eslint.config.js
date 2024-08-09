// @ts-check
/* eslint-disable @typescript-eslint/no-require-imports */
const eslint = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-plugin-prettier');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
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
    'react-hooks': reactHooks,
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
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
});

module.exports = config;
