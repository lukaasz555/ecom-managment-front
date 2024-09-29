<template>
	<NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'auth',
	middleware: 'auth-check',
});
</script>
