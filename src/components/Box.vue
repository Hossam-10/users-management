<template>
  <div :class="['bg-white p-4 rounded-lg w-full shadow', classContent]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  classContent: {
    type: String,
    default: "",
  },
});
</script>
