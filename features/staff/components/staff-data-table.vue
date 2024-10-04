<template>
	<div v-if="loading">Loading ...</div>
	<DataTable :value="staffMembers">
		<Column
			v-for="column in staffTableColumns"
			:key="column.field"
			:field="column.field"
			:header="column.header"
			:style="column.style"
		>
			<template v-if="column.field === 'name'" #body="{ data }">
				{{ data.name }} {{ data.lastname }}
			</template>
			<template v-if="column.field === 'id'" #body="{ data }">
				<ActionButtons
					@onDeleteClick="deleteMember(data.id)"
					@onEditClick="editMember"
				/>
			</template>
		</Column>
	</DataTable>
</template>

<script setup lang="ts">
import { useStaffStore } from '~/stores/staff.store';
import { staffTableColumns } from '../staff-table-columns';

const emit = defineEmits<{
	(e: 'deleteMember', memberId: number): void;
	(e: 'editMember', memberId: number): void;
}>();

const confirm = useConfirm();
const staffStore = useStaffStore();
const { loading, staffMembers } = storeToRefs(staffStore);
staffStore.fetchStaffMembers();

function deleteMember(memberId: number) {
	confirm.require({
		header: 'Delete',
		message: 'Are you sure you want to delete this staff member?',
		acceptProps: {
			label: 'Delete',
			severity: 'danger',
		},
		accept: () => emit('deleteMember', memberId),
		rejectProps: {
			label: 'Cancel',
			outlined: true,
			severity: 'secondary',
		},
		reject: () => {},
	});
}

function editMember(): void {
	// ... dialog + form?
}
</script>
