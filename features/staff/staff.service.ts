import { ApiService } from '~/services/api.service';
import type { Staff } from './staff';

const CONTROLLER = 'management';
export class StaffService extends ApiService {
	static async getStaffMembers(): Promise<Staff[]> {
		const apiService = new ApiService();
		const staffMembers = await apiService.getData<Staff[]>(
			CONTROLLER,
			'staffMembers'
		);
		return staffMembers;
	}

	static async deleteMember(staffId: number): Promise<void> {
		const apiService = new ApiService();
		return await apiService.deleteData(CONTROLLER, `staffMembers/${staffId}`);
	}

	static async updateMember(staffMember: Staff): Promise<Staff> {
		const apiService = new ApiService();
		const updatedMember = await apiService.updateData<Staff>(
			CONTROLLER,
			`staffMembers/${staffMember.id}`,
			staffMember
		);
		return updatedMember;
	}

	static async updatePrivileges(): Promise<void> {
		// TODO: implement
	}
}
