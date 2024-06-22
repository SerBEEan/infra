/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
	},
	resolve: {
		alias: {
			shared: resolve(__dirname, 'src/shared'),
			entities: resolve(__dirname, 'src/entities'),
			features: resolve(__dirname, 'src/features'),
			widgets: resolve(__dirname, 'src/widgets'),
			pages: resolve(__dirname, 'src/pages'),
			processes: resolve(__dirname, 'src/processes'),
			app: resolve(__dirname, 'src/app'),
		},
	},
});
