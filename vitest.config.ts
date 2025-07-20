import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite'; // or @vitejs/plugin-react if using Preact with React syntax

export default defineConfig({
	plugins: [preact()],
	test: {
		globals: true,      // ✅ This makes `describe`, `it`, `expect`, etc. globally available
		environment: 'jsdom',
		setupFiles: './vitest.setup.ts'
	}
});