import type { MenuItem } from 'primevue/menuitem';

export const navigationItems: MenuItem[] = [
	{ icon: 'pi pi-fw pi-home', label: 'Dashboard', to: '/dashboard/' },
	{
		icon: 'pi pi-fw pi-shopping-bag',
		label: 'Orders',
		to: '/dashboard/orders',
		order: 2,
	},
	{
		icon: 'pi pi-fw pi-database',
		label: 'Products',
		to: '/dashboard/products',
	},
	{
		icon: 'pi pi-fw pi-users',
		label: 'Customers',
		to: '/dashboard/customers',
	},
	{
		icon: 'pi pi-fw pi-percentage',
		label: 'Discounts',
		to: '/dashboard/discounts',
	},
	{
		icon: 'pi pi-fw pi-dollar',
		label: 'Payments',
		to: '/dashboard/payments',
	},
	{
		icon: 'pi pi-fw pi-envelope',
		label: 'Messages',
		to: '/dashboard/messages',
	},
	{
		icon: 'pi pi-fw pi-user-edit',
		label: 'Staff',
		to: '/dashboard/staff',
	},
	{
		icon: 'pi pi-fw pi-cog',
		label: 'Settings',
		to: '/dashboard/settings',
	},
	// {
	// 	icon: 'pi pi-fw pi-sign-out',
	// 	label: 'Logout',
	// 	to: '/logout',
	// },
];
