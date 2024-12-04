<template>
  <AppDialog
    :title="`${isEditMode ? 'Edit' : 'Add'} User`"
    :loading="isLoading"
    v-model="modelValue"
  >
    <div class="px-8 mb-4">
      <ValidationForm @submit="handleUserData">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 lg:col-span-6">
            <InputField
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
              validation="required"
              v-model="userData.firstName"
            />
          </div>
          <div class="col-span-12 lg:col-span-6">
            <InputField
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              validation="required"
              v-model="userData.lastName"
            />
          </div>
          <div class="col-span-12 lg:col-span-6">
            <InputField
              name="phone"
              label="Phone"
              placeholder="Enter your phone"
              validation="required"
              v-model="userData.phone"
            />
          </div>
          <div class="col-span-12 lg:col-span-6">
            <InputField
              name="email"
              label="Email"
              placeholder="Enter your email"
              validation="required|email"
              v-model="userData.email"
            />
          </div>
        </div>
      </ValidationForm>
    </div>
  </AppDialog>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import type { User } from "../types";
import AppDialog from "@/components/AppDialog.vue";
import { addNewUser, editUserData } from "../services";
import { useToastPlugin } from "@/composables/useToastPlugin";

const props = defineProps<{
  user: Maybe<User>;
}>();
const emit = defineEmits<{
  (e: "getUsers", status: "reset"): void;
}>();

const modelValue = defineModel<boolean>();
const userData = ref<User>({} as User);
const isEditMode = computed(() => !!props.user);
const isLoading = ref(false);

const { showSuccess, showError } = useToastPlugin();
const addUser = async () => {
  try {
    isLoading.value = true;
    await addNewUser(userData.value);
    showSuccess("User added successfully");
    emit("getUsers", "reset");
    modelValue.value = false;
  } catch {
    showError("Something went wrong");
  } finally {
    isLoading.value = false;
  }
};

const editUser = async () => {
  try {
    isLoading.value = true;
    await editUserData(userData.value.id, userData.value);
    showSuccess("User edited successfully");
    emit("getUsers", "reset");
    modelValue.value = false;
  } catch {
    showError("Something went wrong");
  } finally {
    isLoading.value = false;
  }
};

const handleUserData = () => {
  isEditMode.value ? editUser() : addUser();
};

watchEffect(() => {
  userData.value = props.user ? { ...props.user } : ({} as User);
});
</script>

<style scoped></style>
