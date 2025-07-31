/**
 * @vitest-environment jsdom
 */
import type { Meta, StoryObj } from '@storybook/preact';
import BackgroundImage, { type BackgroundImageProps } from './BackgroundImageContext.tsx';

const meta: Meta<BackgroundImageProps> = {
	component: BackgroundImage,
	title: 'Components/BackgroundImage',
	args: {
		image: './assets/images/hero/hero-minions.webp',
		overlayOpacity: 0.3
	}
};

export default meta;

type Story = StoryObj<typeof BackgroundImage>;

export const Default: Story = {};