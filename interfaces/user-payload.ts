import type { RolesEnum } from '~/enums';
import type { PrivilegesType } from '~/types/privileges.type';

export interface UserPayload {
	id: number;
	email: string;
	role: RolesEnum;
	privileges: PrivilegesType;
}
