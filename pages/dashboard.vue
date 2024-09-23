<template>
	<NuxtPage />
	<ConfirmDialog />
</template>

<script setup lang="ts">
definePageMeta({
	middleware: 'auth-check',
	layout: 'dashboard',
});
</script>
