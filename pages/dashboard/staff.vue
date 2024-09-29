<template>
	<div>Staff...</div>
</template>

<script setup lang="ts">
import { useStaffStore } from '~/stores/staff.store';

const staffStore = useStaffStore();
staffStore.fetchStaffMembers();
</script>
