<template>
  <div class="flex flex-col gap-8">
    <Box>
      <p class="capitalize text-text-400 mb-3">Registered Users</p>
      <Skeleton v-if="isLoading" width="10rem"></Skeleton>
      <h4 v-else class="text-text-900 font-medium">{{ registeredUsers }}</h4>
    </Box>
    <Box>
      <p class="capitalize text-text-400 mb-3">Active Requests</p>
      <h4 class="text-text-900 font-medium">129</h4></Box
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getUsers } from "@/modules/user/services";
import { useToastPlugin } from "@/composables/useToastPlugin";

const { showError } = useToastPlugin();
const registeredUsers = ref(0);
const isLoading = ref(true);
const getNumberOfUsers = async () => {
  try {
    const response = await getUsers();
    registeredUsers.value = response.total;
  } catch {
    showError("Something went wrong while getting users statistics");
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await getNumberOfUsers();
});
</script>
