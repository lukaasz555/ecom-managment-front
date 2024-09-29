import type { Product } from '~/interfaces/product';
import type { TableColumn } from '~/interfaces/table-column';

export const productsTableColumns: TableColumn<Product>[] = [
	{
		field: 'title',
		header: 'Title',
	},
	{
		field: 'price',
		header: 'Price',
		style: {
			'text-align': 'center',
		},
	},
	{
		field: 'categoryId',
		header: 'Category',
		style: {
			'text-align': 'center',
		},
	},
	{
		field: 'stock',
		header: 'Stock',
		style: {
			'text-align': 'center',
		},
	},
	{
		field: 'isAvailable',
		header: 'Available',
		style: {
			'text-align': 'center',
		},
	},
	{
		field: 'id',
		header: 'Actions',
		style: {
			width: '100%',
			display: 'flex',
			'align-items': 'center',
			'justify-content': 'flex-end',
		},
	},
];
