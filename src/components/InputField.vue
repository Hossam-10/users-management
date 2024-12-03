<template>
  <div class="form-group">
    <Field
      :name="name"
      :rules="validation"
      :modelValue="modelValue"
      v-slot="{ handleChange, value, errors, field }"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <label
        :class="`flex flex-col gap-y-2 p-input-icon-left flex-grow  relative capitalize ${labelClassContainer}`"
      >
        <span :class="`text-sm text-text-500 ${labelClass}`" v-if="label">
          {{ label }}
        </span>
        <div class="w-full relative" :class="inputContainerClass">
          <slot name="icon"></slot>
          <InputText
            @keyup="$emit('write', value)"
            :class="[
              'w-full py-[0.875rem] rounded border-[0.047rem] border-solid border-strk-100 ps-4 text-sm text-text-900',
              { 'is-invalid': errors.length > 0 },
              { 'cursor-not-allowed': disabled },
              inputClass,
            ]"
            :feedback="false"
            :placeholder="placeholder"
            :type="type"
            :id="name"
            :disabled="disabled"
            toggleMask
            @update:modelValue="handleChange"
            v-bind="field"
          />
          <div class="absolute top-1/2 translate-y-[-50%] right-4">
            <slot name="icon-right"></slot>
          </div>
        </div>
      </label>
    </Field>
    <ErrorMessage :name="name" class="text-red-500 text-xs mt-1" />
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";

defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    default: "",
  },
  validation: {
    type: String,
    default: "",
  },
  labelClassContainer: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
  inputContainerClass: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
input:disabled {
  background: theme("colors.background.50");
  color: theme("colors.text.400");
}
</style>
