<template>
	<div>Staff...</div>
	<StaffDataTable />
</template>

<script setup lang="ts">
import { useStaffStore } from '~/stores/staff.store';
import StaffDataTable from '~/features/staff/components/staff-data-table.vue';

const staffStore = useStaffStore();
staffStore.fetchStaffMembers();
</script>
