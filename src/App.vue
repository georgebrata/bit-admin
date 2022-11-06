<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "@/components/layout/Sidebar.vue";
import Header from "@/components/layout/Header.vue";
import { useLayoutStore } from "@/store/layoutStore";
const layout = useLayoutStore();
</script>

<template>
  <Header />
  <Sidebar />
  <main class="main--wrapper" :class="{ open: layout.isSidebarOpen }">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.main--wrapper {
  height: calc(100% - $header-height - $app-padding);
  width: calc(100% - $sidebar-close-width);
  margin-left: $sidebar-close-width;
  padding: 0 $app-padding;
  transition: all $animation-speed ease-out;
  position: relative;

  &.open {
    width: calc(100% - $sidebar-open-width);
    margin-left: $sidebar-open-width;
  }
}
</style>
