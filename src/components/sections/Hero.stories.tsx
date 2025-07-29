/** @jsxImportSource preact */
import type { Meta, StoryObj } from '@storybook/preact';
import Hero, { type HeroProps } from './HeroContext.tsx';

const meta: Meta<HeroProps> = {
	component: Hero,
	title: 'Components/Hero',
	argTypes: {
		title: {
			description: 'Hero content title text'
		},
		description: {
			description: 'Hero content description text'
		},
		backgroundImage: {
			description: 'Hero content background image'
		},
		overlayOpacity: {
			description: 'Hero content background image overlay opacity'
		},
		buttons: {
			description: 'Hero content buttons'
		}
	},
	parameters: {
		docs: {
			description: {
				component: 'The `Hero` component displays a prominent section with a title, often used at the top of pages.'
			}
		}
	}
};

export default meta;

type Story = StoryObj<HeroProps>;

const baseArgs: HeroProps = {
	title: 'Hero Title',
	description: 'Hero description goes here.',
	backgroundImage: './assets/images/hero/hero-minions.webp',
	overlayOpacity: 0.1,
	buttons: [
		{
			text: 'Get Started',
			link: '/',
			target: '_blank'
		},
		{
			text: 'Docs',
			link: '/docs',
			variant: 'secondary',
			target: '_blank'
		}
	]
};

export const Default: Story = {
	args: baseArgs
};

export const NoButtons: Story = {
	args: {
		...baseArgs,
		buttons: [] // 👈 override only the buttons
	}
};