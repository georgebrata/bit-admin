<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="badge--wrapper" :data-badge="label">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
$badge-size: 15px;

.badge--wrapper {
  position: relative;
}

[data-badge]:after {
  background: $secondary;
  border-radius: 30px;
  color: $text-light;
  content: attr(data-badge);
  font-size: calc($font-size / 1.75);
  margin-top: -25px;
  width: $badge-size;
  height: $badge-size;
  padding: 1px;
  position: absolute;
  text-align: center;
  left: 10px;
}
</style>