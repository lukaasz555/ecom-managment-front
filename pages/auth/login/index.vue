<template>
	<NuxtLayout name="auth">
		<div class="container">
			<LoginForm />
			<p>some data</p>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
import { z } from 'zod';
</script>

<style lang="scss" scoped>
.container {
	background-color: #fff7f7;
}
</style>
