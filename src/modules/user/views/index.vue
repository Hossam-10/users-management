<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-text-900">Users</h2>
      <AppButton classContent="bg-green-600 !rounded-lg !p-3"
        >Add User</AppButton
      >
    </div>

    <!--Users table-->
    <Box>
      <div class="w-full flex justify-center lg:justify-end mb-4">
        <InputField
          name="search"
          placeholder="Search by name"
          inputClass="!ps-10"
          v-model="search"
        >
          <template #icon><Search :size="16" color="gray" /></template>
        </InputField>
      </div>

      <div class="w-full overflow-auto">
        <UserTable
          :users="usersRequest.users"
          :loading="isLoading"
          @deleteUser="setDeletedUser"
        />
        <Paginator
          v-show="usersRequest.users.length"
          class="mt-8 paginator bg-transparent"
          :first="usersRequest.skip"
          :rows="10"
          :totalRecords="usersRequest.total"
          @page="handlePagination"
        />
      </div>
    </Box>

    <!--Delete user dialog-->
    <DeleteUserDialog
      v-if="deleteUserDialogState"
      :userId="deletedUserId!"
      @getUsers="getUsersRequest"
      v-model="deleteUserDialogState"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import type { UsersRequest } from "../types";
import { getUsers, getSearchedUsers, deleteUserData } from "../services";
import { searchParamsHandler } from "@/helpers/appHelpers";
import { debounce } from "@/helpers/debounce";
import { Search } from "lucide-vue-next";
import type { PageState } from "primevue/paginator";

import UserTable from "../components/UserTable.vue";
const DeleteUserDialog = defineAsyncComponent(
  () => import("../components/DeleteUserDialog.vue")
);

const isLoading = ref(true);
const usersRequest = ref<UsersRequest>({
  users: [],
  total: 0,
  skip: 0,
  limit: 10,
});

//users request
const page = ref(1);
const search = ref("");
const requestQuery = computed(() => {
  return {
    limit: 10,
    skip: (page.value - 1) * 10,
    q: search.value,
  };
});
const getUsersRequest = async (getStatus: string = '') => {
  try {
    getStatus === "reset" && (page.value = 1);
    const requestMethod = search.value ? getSearchedUsers : getUsers;
    const response = await requestMethod(
      searchParamsHandler(requestQuery.value)
    );
    usersRequest.value = response;
    usersRequest.value.users = usersRequest.value.users.map((user) => ({
      ...user,
      status: Math.random() > 0.5 ? "active" : "not active",
    }));
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};

//handle debounce search
const debouncedSearch = debounce(getUsersRequest, 500);
watch(search, () => {
  page.value = 1;
  debouncedSearch();
});

//handle pagination
const handlePagination = (paginationInfo: PageState) => {
  page.value = paginationInfo.page + 1;
  getUsersRequest();
};

//delete user
const deleteUserDialogState = ref(false);
const setDeleteDialogState = (val: boolean) => {
  deleteUserDialogState.value = val;
};
const deletedUserId = ref<Maybe<number>>(null);
const setDeletedUser = (id: number) => {
  deletedUserId.value = id;
  setDeleteDialogState(true);
};

onMounted(async () => {
  await getUsersRequest();
});
</script>
