import adapter from '@sveltejs/adapter-auto';

import { windi } from 'svelte-windicss-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

// import type { Config } from '@sveltejs/kit';

const config = {
	preprocess: [vitePreprocess(), windi()],
	

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/components',
			$atoms: './src/components/atoms',
			$molecules: './src/components/molecules',
			$organisms: './src/components/organisms',
			$stores: './src/stores',
			$services: './src/services',
			$mock: './src/mocks',
			$types: './src/types'
		}
	}
};

export default config;
