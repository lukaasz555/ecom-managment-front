import type { MenuItem } from 'primevue/menuitem';

export const navigationItems: MenuItem[] = [
	{ icon: 'pi pi-fw pi-home', label: 'Home', to: '/dashboard/' },
	{ icon: 'pi pi-fw pi-home', label: 'Orders', to: '/dashboard/orders' },
	{ icon: 'pi pi-fw pi-home', label: 'Products', to: '/dashboard/products' },
];
