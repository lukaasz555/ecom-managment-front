<template>
	<div class="dashboard__wrapper" style="border: 2px solid lime">
		<header>HEADER</header>
		<main>
			<NuxtPage />
		</main>
		<footer>FOOTER</footer>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'dashboard',
	middleware: 'auth-check',
});
</script>
