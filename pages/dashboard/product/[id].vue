<template>
	<h1>TODO</h1>
	<div v-if="productsStore.loading">
		<div>Loading...</div>
	</div>
	<div v-if="!product">
		<div>Product not found</div>
	</div>
	<div v-else>
		<div>title: {{ productsStore.product?.title }}</div>
		<div>productId: {{ productId }}</div>
	</div>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products.store';

const route = useRoute();
const productId = Number(route.params.id);
const productsStore = useProductsStore();

const product = computed(() => productsStore.product);
productId && productsStore.fetchProduct(productId);
</script>
