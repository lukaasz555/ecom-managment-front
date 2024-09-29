import { ApiService } from '~/services/api.service';
import type { Staff } from './staff';

export class StaffService extends ApiService {
	static async getStaffMembers() {
		const apiService = new ApiService();
		const staffMembers = await apiService.getData<Staff[]>(
			'management',
			'staffMembers'
		);
		return staffMembers;
	}
}
