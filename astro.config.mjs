// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/CranberryDocs',
	site: 'https://creepersaur.github.io',

	integrations: [
		starlight({
			title: 'Cranberry',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/creepersaur/cranberry-lang' }],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/app.css',
				'./src/styles/code.css',
			],
			logo: {
				src: './src/assets/Cranberry_highres.svg'
			},
			expressiveCode: {
				tabWidth: 4,
				styleOverrides: {
					borderRadius: '0.3rem',
				},
				shiki: {
					langs: [
						await import('./src/shiki/cranberry.tmLanguage.json')
					]
				},
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', slug: 'getting_started/example' },
						{ label: 'First Project', slug: 'getting_started/example' },
						{ label: 'Hello Cranberry', slug: 'getting_started/example' }
					],
				},
				{
					label: 'Basic Topics',
					items: [
						// Each item here is one entry in the navigation menu.
						{ slug: 'basic_topics/syntax_overview' },
						{ slug: 'basic_topics/variables' },
						{ slug: 'basic_topics/blocks' },
						{ slug: 'basic_topics/if_statements' },
						{ slug: 'basic_topics/loops' },
						{ slug: 'basic_topics/ranges' },
						{ slug: 'basic_topics/functions' },
					],
				},
			],
		}),
	],
});
