/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/preact';
import HeroContext from './HeroContext.tsx';

describe('Hero', () => {
	it('renders title and description', () => {
		render(<HeroContext title="My Title" description="This is a hero section." />);

		expect(screen.getByText('My Title')).toBeInTheDocument();
		expect(screen.getByText('This is a hero section.')).toBeInTheDocument();
	});

	it('does not render background image when none provided', () => {
		render(<HeroContext title="No Image" description="Test" />);

		const image = screen.queryByRole('img');
		expect(image).not.toBeInTheDocument();
	});
  
	it('renders background image when provided', () => {
		render(<HeroContext title="With Image" description="Image Test" backgroundImage="../assets/images/hero/hero-minions.web" />);

		const image = screen.getByRole('img');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('src', '../assets/images/hero/hero-minions.web');
	});

	it('applies overlay opacity when provided', () => {
		const { container } = render(
			<HeroContext
				title="Overlay"
				description="Testing opacity"
				backgroundImage="../assets/images/hero/hero-minions.web"
				overlayOpacity={0.5}
			/>
		);

		const overlay = container.querySelector('.hero-background') as HTMLElement;
		expect(overlay).toHaveAttribute('style', 'opacity: 0.5;');
	});

	it('renders buttons with correct link and text', () => {
		render(
			<HeroContext
				title="CTA Test"
				description="Testing buttons"
				buttons={[
					{ text: 'Join Now', link: '/join' },
					{ text: 'Learn More', link: '/learn', variant: 'ghostLight', target: '_blank' }
				]}
			/>
		);

		const button1 = screen.getByRole('link', { name: /join now/i });
		const button2 = screen.getByRole('link', { name: /learn more/i });

		expect(button1).toHaveAttribute('href', '/join');
		expect(button1).toHaveClass('btn primary');
		expect(button1).toHaveAttribute('target', '_self');

		expect(button2).toHaveAttribute('href', '/learn');
		expect(button2).toHaveClass('btn ghostLight');
		expect(button2).toHaveAttribute('target', '_blank');
	});

	it('renders nothing for empty buttons array', () => {
		const { container } = render(
			<HeroContext title="No CTA" description="Testing empty buttons" buttons={[]} />
		);
		const buttonsContainer = container.querySelector('div.flex.flex-wrap.gap-4.mt-8'); // Matches the div for buttons!
		expect(buttonsContainer).toBeNull();
	});

});
