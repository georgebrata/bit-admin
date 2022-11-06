<template>
  <h1 class="page--title">
    <slot></slot>
  </h1>
</template>


<style lang="scss" scoped>
.page--title {
  font-size: $font-large;
  color: $text-dark;
  opacity: $opacity-high;
  @apply mt-5;
}
</style>