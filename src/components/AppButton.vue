<template>
  <button
    :class="[
      'capitalize',
      classContent,
      disabled ? `${disabledClass} cursor-not-allowed` : '',
    ]"
    :type="type"
    :disabled="disabled || loading"
    :loading="loading"
    v-bind="$attrs"
  >
    <span v-if="loading">
      <Loader
        :styles="{
          width: '25px',
          height: '25px',
          '--border': '3px',
          '--border-color': loaderColor,
        }"
      />
    </span>
    <slot v-else>
      <span class="flex justify-center items-center gap-2 whitespace-nowrap"
        ><slot name="icon"></slot>{{ submitTitle }}<slot name="iconLeft"></slot
      ></span>
    </slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    loading?: boolean;
    disabledClass?: string;
    classContent?: string;
    submitTitle?: string;
    loaderColor?: string;
  }>(),
  {
    type: "button",
    loaderColor: "#ffffff",
  }
);
</script>
