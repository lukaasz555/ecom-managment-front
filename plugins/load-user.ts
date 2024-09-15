import { useUserStore } from '~/stores/user.store';

export default defineNuxtPlugin(() => {
	if (import.meta.client) {
		const userStore = useUserStore();
		userStore.getUserFromLocalStorage();
	}
});
