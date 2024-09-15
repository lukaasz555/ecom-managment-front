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

// Temp. includes 'cuz not handling forgot-password yet
if (route.path.includes('auth')) {
	userStore.isLoggedIn ? router.push('/') : router.push('/auth/login');
}
</script>
