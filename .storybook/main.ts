import type { StorybookConfig } from '@storybook/preact-vite';
import { preact } from '@preact/preset-vite';

const config: StorybookConfig = {
	framework: {
		name: '@storybook/preact-vite',
		options: {}
	},
	stories: ['../src/components/**/*.stories.@(ts|tsx)'],
	addons: [],
	viteFinal: async (config) => {
		config.plugins = [...(config.plugins || []), preact()];
		return config;
	}
};

export default config;
