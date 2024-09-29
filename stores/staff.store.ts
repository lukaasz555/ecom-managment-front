import { defineStore } from 'pinia';
import type { Staff } from '~/features/staff/staff';
import { StaffService } from '~/features/staff/staff.service';

interface StaffStore {
	staffMembers: Staff[];
	loading: boolean;
	isError: boolean;
}

const initState: () => StaffStore = () => ({
	staffMembers: [],
	loading: false,
	isError: false,
});

export const useStaffStore = defineStore({
	id: 'staffStore',
	state: initState,
	actions: {
		async fetchStaffMembers(): Promise<void> {
			this.loading = true;

			try {
				this.staffMembers = await StaffService.getStaffMembers();
			} catch (err) {
				this.isError = true;
			} finally {
				this.loading = false;
			}
		},
	},
});
