<script setup>
import { useRoute } from "vue-router";
import Title from "@/components/base/Title.vue";

const route = useRoute();
</script>

<template>
  <Title>{{ route.name }}</Title>
</template>
      