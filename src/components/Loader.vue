<template>
  <div class="progress flex items-center justify-center">
    <!-- <Spinner aria-label="main pro" :style="styles" class="max-h-full" /> -->
    <div class="lds-dual-ring" :style="styles"></div>
  </div>
</template>

<script setup lang="ts">
defineProps(["styles", "defaultSize"]);
</script>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -25%);
  --border-color: #fff;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  margin: 5px 12px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: var(--border) solid var(--border-color);
  border-color: var(--border-color) transparent var(--border-color) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
