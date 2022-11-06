<script setup>
defineProps({
  label: {
    type: String,
  },
});
</script>

<template>
  <button type="button" class="button button__secondary rounded-full">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button__secondary {
  background-color: white;
  color: $text-dark;
  padding: 0 $gap;
  font-size: $font-medium;
  border: 1px solid darkgray;

  &:hover {
    background-color: darkgray;
    color: $text-light;
  }
}
</style>