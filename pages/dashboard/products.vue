<template>
	<div>/products</div>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products.store';

const productsStore = useProductsStore();
productsStore.fetchProducts();
</script>
