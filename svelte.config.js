import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components/*',
			$data: 'src/data/*',
			$routes: 'src/routes/*',
			$utils: 'src/utils/*',
			$styles: 'src/styles/*',
			$lib: './src/lib',
			$assets: './src/assets'
		}
	}
};

export default config;
