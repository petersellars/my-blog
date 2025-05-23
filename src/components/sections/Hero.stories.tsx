/** @jsxImportSource preact */
import type { Meta, StoryObj } from '@storybook/preact';
import Hero from './Hero';

const meta = {
  title: 'Components/Sections/Hero',
  component: Hero,
  args: {
    content: {
      title: 'Hero Title Text',
      description: 'Hero description text. Used for subtitles or context.',
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
      backgroundImage: '/assets/images/hero/hero-minions.webp',
      overlayOpacity: 0.1,
      tags: ['autodocs']
    } as Meta<typeof Hero>,
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {};

export const NoButtonsVariant: Story = {
  args: {
    content: {
      ...meta.args.content,
      buttons: [],
    },
  },
} as StoryObj<typeof Hero>;