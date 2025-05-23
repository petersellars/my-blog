const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const astroPlugin = require('eslint-plugin-astro');
const astroParser = require('astro-eslint-parser');
const storybookPlugin = require('eslint-plugin-storybook');
const importPlugin = require('eslint-plugin-import');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const securityPlugin = require('eslint-plugin-security');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const preactPlugin = require('eslint-plugin-preact');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      security: securityPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      preact: preactPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...preactPlugin.configs.recommended.rules,
      ...securityPlugin.configs.recommended.rules,
      ...importPlugin.configs.errors.rules,
      ...importPlugin.configs.warnings.rules,
    },
    settings: {
      react: {
        pragma: 'h',
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      astro: astroPlugin,
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
    plugins: {
      security: securityPlugin,
      'jsx-a11y': jsxA11yPlugin,
      storybook: storybookPlugin,
    },
    rules: {
      ...securityPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      ...storybookPlugin.configs.recommended.rules,
    },
  },
];
