import { useUserStore } from '~/stores/user.store';

export default defineNuxtRouteMiddleware(async (to, from) => {
	if (import.meta.client) {
		const userStore = useUserStore();
		if (!userStore.isLoggedIn) {
			await userStore.getUserFromLocalStorage();
		}

		if (to.path.includes('auth')) {
			if (userStore.isLoggedIn) {
				return navigateTo('/dashboard');
			}
		} else if (to.path === '/') {
			return navigateTo(userStore.isLoggedIn ? '/dashboard' : '/auth/login');
		} else if (!to.path.includes('auth') && !userStore.isLoggedIn) {
			return navigateTo('/auth/login');
		}
	}
});
