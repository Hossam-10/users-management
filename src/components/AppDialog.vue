<template>
  <Dialog
    class="w-[90%] md:w-[70%] lg:w-[50%]"
    v-model:visible="modelValue"
    modal
    :header="title"
    ref="dialog"
    :draggable="false"
  >
    <template #header>
      <slot name="header">
        <h6 class="text-text-900">{{ title }}</h6>
      </slot>
    </template>

    <template #default>
      <slot></slot>
    </template>

    <template #footer>
      <slot name="footer">
        <div class="flex justify-end space-x-4">
          <AppButton
            classContent="py-3 px-6 border-none !text-text-900 font-medium text-sm"
            @click="handleCancelAction"
          >
            {{ cancelText }}
          </AppButton>
          <AppButton
            classContent="py-3 px-10 action-btn"
            :loading="loading"
            type="submit"
            @click="submitForm"
          >
            {{ submitText }}
          </AppButton>
        </div>
      </slot>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { DialogPassThroughOptions } from "primevue/dialog";

import Dialog from "primevue/dialog";

type DialogTabItem = {
  title: string;
  submitText?: string;
  cancelText?: string;
  loading?: boolean;
};
withDefaults(defineProps<DialogTabItem>(), {
  cancelText: "Cancel",
  submitText: "Continue",
  loading: false,
});
const emit = defineEmits<{
  (e: "confirm"): void;
}>();

const modelValue = defineModel<boolean>();
const dialog = ref<DialogPassThroughOptions>();
const submitForm = async () => {
  const form = (dialog.value?.content as HTMLElement)?.querySelector("form");
  if (form) {
    await form?.dispatchEvent(new Event("submit"));
  } else {
    emit("confirm");
  }
};
const handleCancelAction = () => {
  modelValue.value = false;
};
</script>

<style lang="scss">
.p-dialog-content {
  min-height: 100px;
  overflow-x: hidden;
}
</style>
