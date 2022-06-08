import { defineConfig } from 'windicss/helpers';
import plugin from 'windicss/plugin';
import buttonStyleShortcuts from './styles/button';

export default defineConfig({
	darkMode: 'class',
	theme: {
		extend: {
			screens: {},
			colors: {},
			fontFamily: {},
			spacing: {},
			borderRadius: {}
		}
	},
	shortcuts: {
		...buttonStyleShortcuts
	},
	plugins: [
		plugin(({ addUtilities }) => {}),
		plugin(({ addComponents }) => {}),
		plugin(({ addDynamic, variants }) => {}),
		require('windicss/plugin/filters'),
		require('windicss/plugin/forms'),
		require('windicss/plugin/aspect-ratio'),
		require('windicss/plugin/line-clamp'),
		require('windicss/plugin/typography')({
			modifiers: ['DEFAULT', 'sm', 'lg', 'red']
		})
	]
});
