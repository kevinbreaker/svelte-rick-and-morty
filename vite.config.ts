import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite';

import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit(), Icons({ compiler: 'svelte', autoInstall: true, scale: 1.0, defaultClass: 'icon' })],
	resolve: {
		alias: {
			$components: resolve('src/components'),
			$atoms: resolve('src/components/atoms'),
			$molecules: resolve('src/components/molecules'),
			$organisms: resolve('src/components/organisms'),
			$mock: resolve('src/mocks'),
			$services: resolve('src/services'),
			$stores: resolve('src/stores'),
			$types: resolve('src/types')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
