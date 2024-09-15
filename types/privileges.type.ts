import type { ModulesEnum, PrivilegesEnum } from '~/enums';

export type PrivilegesType = {
	[key in ModulesEnum]: PrivilegesEnum;
};
