import type { StorybookConfig } from '@storybook/preact-vite';
import preact from '@preact/preset-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/preact-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
  stories: ['../src/components/**/*.stories.@(ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        autodocs: true,
      },
    },
    '@storybook/addon-essentials',  // Already includes Docs, but you override it above
  ],
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins || []), preact()];
    return config;
  },
};

export default config;  