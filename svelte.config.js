import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ pages: 'docs' })
	},
	paths: {
		base: process.env.NODE_ENV === 'production' ? '/Svelte-ReaPer-Store' : ''
	}
};

export default config;
