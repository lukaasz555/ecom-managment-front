<template>
	<NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
	middleware: 'auth-check',
});
</script>
