const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const astroPlugin = require('eslint-plugin-astro');
const astroParser = require('astro-eslint-parser');
const storybookPlugin = require('eslint-plugin-storybook');
const importPlugin = require('eslint-plugin-import');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const securityPlugin = require('eslint-plugin-security');
const preactPlugin = require('eslint-plugin-preact');

// Helpers to extract ONLY storybook/* rules from Storybook 10 flat preset
const pickStorybookOnly = (rulesObj = {}) =>
  Object.fromEntries(Object.entries(rulesObj).filter(([name]) => name.startsWith('storybook/')));

const getStorybookOnlyRules = (plugin) => {
  // Storybook 10: flat preset is an array of blocks under 'flat/recommended'
  const flatBlocks = plugin?.configs?.['flat/recommended'];
  if (Array.isArray(flatBlocks)) {
    const mergedRules = Object.assign({}, ...flatBlocks.map((b) => b.rules || {}));
    return pickStorybookOnly(mergedRules);
  }
  // Fallback (classic shape, if present)
  const classic = plugin?.configs?.recommended?.rules;
  if (classic) return pickStorybookOnly(classic);
  return {};
};

// Helper: keep only preact/* rules from the preset (works with classic or flat presets)
const getPreactOnlyRules = (plugin) => {
  // Flat preset (ESLint 9)
  const flatBlocks = plugin?.configs?.['flat/recommended'];
  if (Array.isArray(flatBlocks)) {
    const merged = Object.assign({}, ...flatBlocks.map((b) => b.rules || {}));
    return Object.fromEntries(
      Object.entries(merged).filter(([name]) => name.startsWith('preact/'))
    );
  }
  // Classic preset
  const classic = plugin?.configs?.recommended?.rules || {};
  return Object.fromEntries(
    Object.entries(classic).filter(([name]) => name.startsWith('preact/'))
  );
};

const storybookOnlyRules = getStorybookOnlyRules(storybookPlugin);
const preactOnlyRules = getPreactOnlyRules(preactPlugin);

module.exports = [
  {
    ignores: ["**/.yarn/**",".astro/","coverage"],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      security: securityPlugin,
      preact: preactPlugin,
      // react: require('eslint-plugin-react'),
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      // ...preactPlugin.configs.recommended.rules,
      ...preactOnlyRules,
      ...securityPlugin.configs.recommended.rules,
      ...importPlugin.configs.errors.rules,
      ...importPlugin.configs.warnings.rules,
      // 'preact/jsx-no-undef': 'off',
      // 'preact/react-in-jsx-scope': 'off' 
    },
    settings: {
      // react: {
      //   version: 'detect',
      // },
      'import/resolver': {
        typescript: {},
      },
    }
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: 'module',
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
    },
    plugins: {
      security: securityPlugin,
      'jsx-a11y': jsxA11yPlugin,
      storybook: storybookPlugin,
    },
    rules: {
      ...securityPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      // ...storybookPlugin.configs.recommended.rules,
      ...storybookOnlyRules,
    },
  },
];
