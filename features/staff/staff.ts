import type { RolesEnum } from '~/enums';
import type { PrivilegesType } from '~/types/privileges.type';

export interface Staff {
	id: number;
	name: string;
	lastname: string;
	email: string;
	phone: string;
	role: RolesEnum;
	createdAt: string;
	privileges: PrivilegesType;
	additionalNote: string | null;
}
