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
		async deleteStaffMember(staffId: number): Promise<void> {
			this.loading = true;
			try {
				await StaffService.deleteMember(staffId);
				this.staffMembers = this.staffMembers.filter(
					(member) => member.id !== staffId
				);
			} catch (err) {
				this.isError = true;
			} finally {
				this.loading = false;
			}
		},
		async updateStaffMember(staffMember: Staff): Promise<void> {
			this.loading = true;
			try {
				const updatedMember = await StaffService.updateMember(staffMember);
				this.staffMembers = this.staffMembers.map((member) =>
					member.id === updatedMember.id ? updatedMember : member
				);
			} catch (err) {
				this.isError = true;
			} finally {
				this.loading = false;
			}
		},
	},
});
