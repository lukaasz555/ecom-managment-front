<template>
	<main>
		<NuxtPage />
	</main>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'auth',
});

const route = useRoute();
const router = useRouter();

if (route.path === '/auth') {
	router.push('/auth/login');
}
</script>
