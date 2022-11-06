<script setup>
import { ref } from "vue";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  GifIcon,
  XCircleIcon,
  FireIcon,
  LifebuoyIcon,
  UserGroupIcon,
  TvIcon,
  SignalIcon,
  ShieldExclamationIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  StarIcon,
  SwatchIcon,
} from "@heroicons/vue/24/solid";
import SidebarItem from "./SidebarItem.vue";
import { useLayoutStore } from "@/store/layoutStore";
import routes from "@/router/routes.js";

const menuItems = [...routes];
const isSidebarOpen = ref(false);
const layout = useLayoutStore();

function toggleSidebar() {
  layout.toggleSidebar();
}
</script>

<template>
  <nav
    class="sidebar--wrapper absolute top-0 left-0 min-h-screen"
    :class="{ open: layout.isSidebarOpen }"
  >
    <div class="flex relative mb-20">
      <router-link to="/" class="logo-link">
        <img
          alt="Bitdefender logo"
          src="@/assets/images/bitdefender-logo.png"
          width="100"
        />
      </router-link>
      <div
        class="sidebar--expander flex items-center ml-3"
        @click="toggleSidebar"
      >
        <ChevronLeftIcon
          v-if="layout.isSidebarOpen"
          class="h-4 w-4 text-white"
        />
        <ChevronRightIcon v-else class="h-4 w-4 text-white" />
      </div>
    </div>
    <div class="overflow-y-auto max-h-[750px]">
      <SidebarItem
        v-for="item in menuItems"
        :key="item.label"
        :icon="item.icon"
        :name="item.name"
        :path="item.path"
      />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.sidebar--wrapper {
  background-color: $sidebar-background;
  width: $sidebar-close-width;
  transition: width $animation-speed ease-out;

  &.open {
    width: $sidebar-open-width;
  }
}

.sidebar--expander {
  background-color: $sidebar-background;
  cursor: pointer;
  position: absolute;
  height: calc(100% - 20px);
  width: 100%;
  top: 10px;
  right: -10px;
  clip-path: polygon(0 0, 0 100%, 75% 100%, 100% 75%, 100% 25%, 75% 0);

  svg {
    position: absolute;
    right: 0;
    z-index: 0;
  }
}

.logo-link {
  z-index: 1;

  img {
    transition: width $animation-speed ease-out;
    width: $sidebar-close-width;
  }
}
</style>
