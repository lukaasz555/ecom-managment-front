import { useUserStore } from '~/stores/user.store';

export default defineNuxtRouteMiddleware((to, from) => {
	const userStore = useUserStore();

	if (to.path.startsWith('/auth')) {
		if (userStore.isLoggedIn) {
			return navigateTo('/');
		}
	}

	if (!to.path.includes('auth') && !userStore.isLoggedIn) {
		console.log('should redirect to login');
		return navigateTo('/auth/login');
	}
});
