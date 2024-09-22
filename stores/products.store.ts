import { defineStore } from 'pinia';
import type { Product } from '~/interfaces/product';

interface ProductsStore {
	product: Product | null;
	products: Product[];
	loading: boolean;
	isError: boolean;
}

const initState: () => ProductsStore = () => ({
	product: null,
	products: [],
	loading: false,
	isError: false,
});

export const useProductsStore = defineStore({
	id: 'productsStore',
	state: initState,
	actions: {
		async fetchProducts(): Promise<void> {
			this.loading = true;

			const mockData = Array.from({ length: 25 }, (_, index) => {
				const product: Product = {
					id: index + 1,
					title: `Product ${index + 1}`,
					isAvailable: Math.random() > 0.5,
					price: parseFloat((Math.random() * 100).toFixed(2)),
					stock: Math.floor(Math.random() * 100),
					categoryId: Math.floor(Math.random() * 7) + 1,
				};
				return product;
			});

			const { data, error }: { data: Product[]; error: boolean } =
				await new Promise((resolve) => {
					setTimeout(() => {
						resolve({ data: mockData, error: false });
					}, 777);
				});

			if (error) this.isError = true;
			if (data) {
				this.products = data;
				this.isError = false;
			}

			this.loading = false;
		},
	},
});
