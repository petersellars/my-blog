/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

// See: https://github.com/withastro/astro/issues/12723
// Needed to make the getViteConfig work as expected
// resoulution of vite in package.json

export default getViteConfig({
	test: {
		globals: true,      // ✅ This makes describe, it, expect, etc. globally available
		environment: 'node',
		setupFiles: './vitest.setup.ts',
		coverage: {
			include: ['src/components/sections/*.tsx', 'src/components/sections/*.astro'],
			exclude: ['src/components/sections/*.stories.tsx']
		}
	}
});
