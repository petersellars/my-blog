/** @jsxImportSource preact */
import { h } from 'preact';
import type { Meta, StoryObj } from '@storybook/preact';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  args: {
    content: {
      title: 'Welcome to Our Site',
      description: 'This is a short description of what we do and why it matters.',
      buttons: [
        {
          text: 'Get Started',
          link: '#get-started',
          variant: 'primary',
        },
        {
          text: 'Learn More',
          link: '#learn-more',
          variant: 'secondary',
        },
      ],
      backgroundImage: '/assets/images/home/piha-hero.webp',
      overlayOpacity: 0.1,
    },
  } as any, // ← Fix: force args type to align (safe here for story usage)
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {};