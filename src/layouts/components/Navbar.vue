<template>
  <nav class="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <button
            @click="$emit('toggleSidebar')"
            class="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <Menu :size="24" />
          </button>
        </div>
        <div class="flex items-center space-x-4">
          <button
            class="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <Bell :size="24" />
          </button>
          <span class="font-medium text-gray-700">{{ userName }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Menu, Bell } from "lucide-vue-next";
import { ref } from "vue";

defineEmits(["toggleSidebar"]);
const userName = ref("Mohamed Amin");
</script>
