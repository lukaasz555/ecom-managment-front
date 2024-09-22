export interface TableColumn<T> {
	field: keyof T;
	header: string;
	style?: {
		[key: string]: string | number;
	};
}
