<script setup>
defineProps({
  label: {
    type: String,
  },
});
</script>

<template>
  <button type="button" class="button button--primary rounded-full">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button--primary {
  background-color: $primary;
  color: $text-light;
  padding: 0 $gap;
  font-size: $font-medium;

  &:hover {
    background-color: darken($color: $primary, $amount: 10);
  }
}
</style>