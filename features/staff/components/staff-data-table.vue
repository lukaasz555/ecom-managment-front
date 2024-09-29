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
					@onDeleteClick="deleteMember"
					@onEditClick="editMember"
				/>
			</template>
		</Column>
	</DataTable>
</template>

<script setup lang="ts">
import { useStaffStore } from '~/stores/staff.store';
import { staffTableColumns } from '../staff-table-columns';

const staffStore = useStaffStore();
const { loading, staffMembers } = storeToRefs(staffStore);

function deleteMember(): void {}
function editMember(): void {}
</script>
