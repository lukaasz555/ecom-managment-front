<template>
	<div>Staff...</div>
	<StaffDataTable @deleteMember="deleteStaffHandler" />
</template>

<script setup lang="ts">
import StaffDataTable from '~/features/staff/components/staff-data-table.vue';
import { useStaffStore } from '../../stores/staff.store';
import type { Staff } from '~/features/staff/staff';

const staffStore = useStaffStore();

async function deleteStaffHandler(memberId: number): Promise<void> {
	await staffStore.deleteStaffMember(memberId);
}

async function updateStaffHandler(staff: Staff): Promise<void> {
	await staffStore.updateStaffMember(staff);
}
</script>
