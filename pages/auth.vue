<template>
	<NuxtPage />
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user.store';

definePageMeta({
	layout: 'auth',
	middleware: 'auth-check',
});

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

if (route.path === '/auth') {
	userStore.isLoggedIn ? router.push('/') : router.push('/auth/login');
}
</script>
