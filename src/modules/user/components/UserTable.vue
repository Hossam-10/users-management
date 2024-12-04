<template>
  <DataTable :value="users" :loading="loading">
    <template #loading> Loading customers data. Please wait. </template>

    <Column field="fullName" header="Name">
      <template #body="slotProps">
        {{ slotProps.data.firstName }} {{ slotProps.data.lastName }}
      </template>
    </Column>
    <Column field="email" header="Email"></Column>
    <Column field="phone" header="Phone"></Column>
    <Column field="status" header="Status">
      <template #body="slotProps">
        <span class="capitalize">{{ slotProps.data.status }}</span>
      </template>
    </Column>
    <Column field="actions" header="">
      <template #body="slotProps">
        <div class="flex items-center gap-2">
          <AppButton
            classContent="bg-red-100 !p-2 rounded-md"
            @click="$emit('deleteUser', slotProps.data.id)"
          >
            <Trash2 :size="16" color="red" />
          </AppButton>
          <AppButton classContent="bg-blue-100 !p-2 rounded-md">
            <Pencil :size="16" color="blue" />
          </AppButton>
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import type { User } from "../types";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { Trash2, Pencil } from "lucide-vue-next";

const props = defineProps<{
  users: User[];
  loading: boolean;
}>();
defineEmits<{
  (e: "deleteUser", id: number): void;
}>()
</script>

<style scoped lang="scss">
@media screen and (max-width: 63.9375rem) {
  :deep(.p-datatable-table) {
    tr {
      display: flex;
    }
    th,
    td {
      display: flex;
      width: 200px;
      word-break: break-all;
    }
  }
}
</style>
