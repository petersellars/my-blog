import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Hero from './Hero.astro';
// eslint-disable-next-line import/no-unresolved
import { loadRenderers } from 'astro:container';
import { getContainerRenderer as preactContainerRenderer } from '@astrojs/preact';

test('Hero component is rendered correctly', async () => {
	const renderers = await loadRenderers([preactContainerRenderer()]);
	const container = await AstroContainer.create({ renderers });
	const result = await container.renderToResponse(Hero);

	expect(result.status).toBe(200);
});

test('Hero renders with required props', async () => {
	const renderers = await loadRenderers([preactContainerRenderer()]);
	const container = await AstroContainer.create({ renderers });
	const result = await container.renderToString(Hero, {
		props: {
			title: 'Test Title',
			description: 'Test Description',
			buttons: [
				{ text: 'Button1', link: '/button1' },
				{ text: 'Button2', link: '/button2', variant: 'secondary' }
			],
			backgroundImage: '/test-image.jpg',
			overlayOpacity: 0.5
		}
	});

	// Check for content in the Server Side Rendering (SSR) output
	expect(result).toContain('Test Title');
	expect(result).toContain('Test Description');
	expect(result).toContain('Button1');
	expect(result).toContain('Button2');
	expect(result).toContain('/test-image.jpg'); // this will appear in the BackgroundImage props
});

test('Hero renders without buttons', async () => {
	const renderers = await loadRenderers([preactContainerRenderer()]);
	const container = await AstroContainer.create({ renderers });
	const result = await container.renderToString(Hero, {
		props: {
			title: 'Test Title',
			description: 'Test Description',
			buttons: [],
			backgroundImage: '/test-image.jpg',
			overlayOpacity: 0.5
		}
	});

	// Check for content in the Server Side Rendering (SSR) output
	expect(result).toContain('Test Title');
	expect(result).toContain('Test Description');
	expect(result).toContain('/test-image.jpg'); // this will appear in the BackgroundImage props

	expect(result).not.toContain('<button');
});
