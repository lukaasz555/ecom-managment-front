export interface Product {
	id: number;
	title: string;
	isAvailable: boolean;
	price: number;
	stock: number;
	categoryId: number | null;
}
