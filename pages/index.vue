<template>
	<div>main page /</div>
	<div>
		<!-- TODO: remove buttons -->
		<Button
			v-if="userStore.isLoggedIn"
			button-text="Logout"
			@click="userStore.logout()"
		/>
		<Button v-else button-text="Login" link @click="redirectToLogin" />
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user.store';
import Button from '~/components/Button.vue';

const userStore = useUserStore();

function redirectToLogin(): void {
	const router = useRouter();
	router.push('/auth/login');
}
</script>
