import type { RolesEnum } from '~/enums/roles.enum';
import type { PrivilegesType } from '~/types/privileges.type';

interface UserPayload {
	id: number;
	email: string;
	role: RolesEnum;
	privileges: PrivilegesType;
}

interface UserStore {
	token: string | null;
	user: UserPayload | null;
	isLoading: boolean;
	isError: boolean;
}

type LoginData = {
	email: string;
	password: string;
};

const initState: () => UserStore = () => ({
	token: null,
	user: null,
	isLoading: false,
	isError: false,
});

export const useUserStore = defineStore('userStore', {
	state: initState,
	actions: {
		async login(loginData: LoginData): Promise<void> {
			this.isLoading = true;

			const { data, error } = await useFetch(
				'http://localhost:4004/api/v1/management/auth/signin',
				{
					method: 'POST',
					body: {
						...loginData,
					},
				}
			);
			if (error) this.isError = true;
			if (data.value && typeof data.value === 'string') {
				// todo: retrieve data from token & save to ls
				this.token = data.value;
			}
			this.isLoading = false;
		},
	},
	getters: {
		isLoggedIn: (state) => !!state.token,
	},
});
