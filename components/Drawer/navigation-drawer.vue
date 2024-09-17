<template>
	<Drawer v-model="isVisible" position="left">
		<p>123</p>
		<p>sadasdsa</p>
		<p>32131</p>
	</Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Drawer from 'primevue/drawer';

const isVisible = ref(true);
</script>
