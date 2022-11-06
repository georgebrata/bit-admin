<script setup>
import { ref } from "vue";

import Title from "@/components/base/Title.vue";
import PrimaryBtn from "@/components/base/PrimaryBtn.vue";
import SecondaryBtn from "@/components/base/SecondaryBtn.vue";

import {
  XMarkIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from "@heroicons/vue/24/solid";
defineProps({
  title: {
    type: String,
    default: "Modal",
  },
  open: {
    type: Boolean,
  },
});

const isFullscreen = ref(false);

function fullscreen(enabled) {
  isFullscreen.value = enabled;
}
</script>

<template>
  <div
    class="modal"
    :class="{ open: open, full: isFullscreen }"
    @keydown.esc="$emit('close')"
  >
    <div class="modal__header">
      <h1 class="modal__title">{{ title }}</h1>

      <div class="modal__actions">
        <ArrowsPointingOutIcon
          v-if="!isFullscreen"
          tabindex="0"
          class="w-6 h-6 cursor-pointer"
          title="Fullscreen modal"
          @click="fullscreen(true)"
        />
        <ArrowsPointingInIcon
          v-else
          tabindex="0"
          class="w-6 h-6 cursor-pointer"
          title="Minimize modal"
          @click="fullscreen(false)"
        />
        <XMarkIcon
          tabindex="0"
          class="w-6 h-6 cursor-pointer"
          title="Close modal"
          @click="$emit('close')"
        />
      </div>
    </div>
    <div class="modal__content">
      <slot />
    </div>
    <div class="modal__footer">
      <PrimaryBtn @click="$emit('save')">save</PrimaryBtn>
      <SecondaryBtn @click="$emit('close')">cancel</SecondaryBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: none;
  position: absolute;
  height: 0;
  width: 0;
  right: 0;
  top: 0;
  transition: all $animation-speed ease-out;

  &.open {
    -webkit-box-shadow: 1px 1px 100px 100px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 1px 100px 100px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 2;

    height: 90%;
    width: 90%;
    right: 5%;
  }

  &.full {
    height: 100vh;
    width: 100vw;
    right: 0;
    top: 0;
    position: fixed;
  }
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgray;
}

.modal__title {
  font-size: $font-large;
  color: $text-dark;
  opacity: $opacity-high;
}

.modal__actions {
  display: flex;
  gap: 1em;

  svg:hover {
    color: $primary;
  }
}

.modal__header,
.modal__footer,
.modal__content {
  padding: $app-padding;
}

.modal__header,
.modal__footer {
  height: 100px;
}
.modal__content {
  height: 100%;
  overflow-y: auto;
}

.modal__footer {
  border-bottom: 1px solid darkgray;
  border-top: 1px solid darkgray;
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>