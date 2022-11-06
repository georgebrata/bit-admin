<script setup>
import {
  GiftIcon,
  QuestionMarkCircleIcon,
  BellAlertIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/solid";
import Badge from "@/components/base/Badge.vue";
import Dropdown from "@/components/base/Dropdown.vue";

import { useLogger } from "@/composables/useLogger";

const { logger } = useLogger();
const user = "John Smith";
</script>

<template>
  <header class="header--wrapper flex flex-row-reverse w-full py-3">
    <div class="icons--wrapper flex gap-4 mx-10">
      <GiftIcon class="h-4 w-4 hidden md:block" @click="logger('gift icon')" />
      <QuestionMarkCircleIcon
        class="h-4 w-4"
        @click="logger('question mark icon')"
      />
      <Badge label="24">
        <BellAlertIcon class="h-4 w-4" @click="logger('notifications icon')" />
      </Badge>
    </div>
    <div class="user--wrapper w-1/3">
      <Dropdown
        id="user"
        disabled
        :placeholder="`Welcome, ${user}`"
        :options="['My account', 'Settings', 'Log out']"
        @input="(evt) => logger(evt)"
      />
    </div>
  </header>
</template>

<style scoped lang="scss">
.icons--wrapper,
.user--wrapper {
  cursor: pointer;
}
.header--wrapper {
  height: $header-height;
  align-items: center;
}
.user--wrapper {
  font-size: calc($font-size / 1.25);
}
</style>
