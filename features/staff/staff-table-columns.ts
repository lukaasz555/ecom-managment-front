import type { TableColumn } from '~/interfaces/table-column';
import type { Staff } from './staff';

export const staffTableColumns: TableColumn<Staff>[] = [
	{
		field: 'name',
		header: 'Name',
	},
	{
		field: 'email',
		header: 'Email',
	},
	{
		field: 'role',
		header: 'Role',
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
