// Hero.test.tsx
// import { render, screen, fireEvent } from '@testing-library/preact';
import { render, screen } from '@testing-library/preact';
import HeroContext from './HeroContext.tsx';

describe('Hero', () => {
	it('renders the hero section', () => {
		render(<HeroContext title="Test Title" description="Test Description" />);
		expect(screen.getByRole('heading')).toHaveTextContent(/^Test Title$/i);
		expect(screen.getByText('Test Description')).toBeInTheDocument();
		expect(screen.queryByRole('button')).not.toBeInTheDocument();
	});

	// it('handles button click', () => {
	// 	render(<HeroContext title="Test" description="Test" />);
	// 	fireEvent.click(screen.getByRole('button'));
	// 	expect(screen.getByRole('heading')).toHaveTextContent('Button Clicked');
	// });
});
