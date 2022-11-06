<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useLayoutStore } from "@/store/layoutStore";
import { useLogger } from "@/composables/useLogger";
const props = defineProps({
  icon: {
    type: Function,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const layout = useLayoutStore();
const route = useRoute();
const { logger } = useLogger();

const isActivePath = computed(() => {
  return route.path === props.path;
});
</script>

<template>
  <div class="sidebar--item" @click="logger(path.concat(' route'))">
    <router-link
      :to="path"
      :class="{ open: layout.isSidebarOpen, active: isActivePath }"
    >
      <component v-if="icon" :is="icon" class="h-5 w-5" />
      <span class="capitalize">{{ name }}</span>
    </router-link>
  </div>
</template>



<style lang="scss" scoped>
.sidebar--item a {
  color: $text-light;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  margin: 2em 0;
  opacity: $opacity-low;

  span {
    margin-top: 0.25em;
    font-size: $font-small;
    transition: font-size $animation-speed ease-out;
    text-align: center;
  }

  svg {
    margin: 0 auto;
  }

  &.open {
    flex-direction: row;
    align-items: center;
    margin: $gap 0;

    span {
      font-size: $font-medium;
    }
    svg {
      margin: 0 $gap;
    }
  }

  &:hover,
  &.active {
    color: $primary;
    opacity: $opacity-high;
  }
}
</style>
