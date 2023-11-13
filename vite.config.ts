import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
//import { modeOsPrefers, modeUserPrefers, modeCurrent } from '@skeletonlabs/skeleton';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()]
});
