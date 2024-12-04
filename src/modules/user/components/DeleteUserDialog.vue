<template>
  <AppDialog
    title="Delete User"
    :loading="isLoading"
    @confirm="deleteUser"
    v-model="modelValue"
  >
    <p class="ps-8">Are You sure you want to delete this User ?</p>
  </AppDialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

import AppDialog from "@/components/AppDialog.vue";
import { deleteUserData } from "../services";

const props = defineProps({
  userId: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits<{
  (e: "getUsers", status: "reset"): void;
}>();

const modelValue = defineModel<boolean>();
const isLoading = ref(false);
const deleteUser = async () => {
  try {
    isLoading.value = true;
    await deleteUserData(props.userId);
    emit("getUsers", "reset");
    modelValue.value = false;
  } catch {
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped></style>
