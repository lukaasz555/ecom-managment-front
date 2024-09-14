import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';
import Button from '@primevue/themes/aura/button';

const lightPreset = definePreset(Aura, {
	semantic: {
		iconSize: '1rem',
		transitionDuration: '0.15s',
		focusRing: {
			width: '2px',
			style: 'dashed',
			color: '{color.primary}',
			offset: '1px',
			shadow: 'none',
		},
		borderRadius: {
			none: '0',
			xs: '2px',
			sm: '5x',
			md: '8px',
			lg: '12px',
			xl: '15px',
		},
		primary: {
			50: '{emerald.50}',
			100: '{emerald.100}',
			200: '{emerald.200}',
			300: '{emerald.300}',
			400: '{emerald.400}',
			500: '{emerald.500}',
			600: '{emerald.600}',
			700: '{emerald.700}',
			800: '{emerald.800}',
			900: '{emerald.900}',
			950: '{emerald.950}',
		},
	},
});

export default {
	preset: lightPreset,
	options: {
		darkModeSelector: '.p-dark',
	},
};
