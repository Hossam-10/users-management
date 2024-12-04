<template>
  <div class="min-h-screen bg-gray-100 overflow-x-hidden">
    <!-- Navbar -->
    <Navbar @toggleSidebar="toggleSidebar" />

    <!-- Sidebar and Main Content -->
    <div class="pt-16 flex">
      <Transition name="slide">
        <!-- Sidebar -->
        <Sidebar
          v-if="isSidebarOpen || !isMobile"
          :isMobile="isMobile"
          :isSidebarExpanded="isSidebarExpanded"
          @closeSidebar="closeSidebar"
        />
      </Transition>

      <!-- Overlay for mobile -->
      <Transition name="fade">
        <div
          v-if="isMobile && isSidebarOpen"
          class="fixed inset-0 bg-black bg-opacity-50 z-10"
          @click="closeSidebar"
        ></div>
      </Transition>

      <!-- Main Content -->
      <main
        class="flex-1 p-6 transition-all duration-300 ease-in-out max-w-full"
        :class="{
          'md:ml-64': isSidebarExpanded && !isMobile,
          'md:ml-16': !isSidebarExpanded && !isMobile,
        }"
      >
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

const isSidebarOpen = ref(false);
const isSidebarExpanded = ref(true);
const isMobile = ref(false);

const toggleSidebar = () => {
  if (isMobile.value) {
    isSidebarOpen.value = !isSidebarOpen.value;
  } else {
    isSidebarExpanded.value = !isSidebarExpanded.value;
  }
};

const closeSidebar = () => {
  if (isMobile.value) {
    isSidebarOpen.value = false;
  }
};

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    isSidebarOpen.value = false;
  }
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
