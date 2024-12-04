<template>
  <!-- Sidebar -->

  <aside
    class="bg-gray-800 text-white fixed left-0 top-16 h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out"
    :class="[
      isMobile ? 'w-64 z-20' : isSidebarExpanded ? 'w-64' : 'w-16',
      isMobile && 'shadow-lg',
    ]"
  >
    <div class="p-4">
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.name">
          <router-link
            :to="item.to"
            class="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
            exact-active-class="!bg-green-600"
          >
            <component :is="item.icon" :size="24" />
            <span
              v-if="isSidebarExpanded || isMobile"
              class="ml-3 transition-opacity duration-200"
            >
              {{ item.name }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { Home, Users } from "lucide-vue-next";

defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
  isSidebarExpanded: {
    type: Boolean,
    default: false,
  },
});
defineEmits(["closeSidebar"]);

const menuItems = [
  { name: "Dashboard", icon: Home, to: "/" },
  { name: "Users", icon: Users, to: "/users" },
];
</script>
