<template>
  <label class="wrapper flex items-center">
    {{ label }}
    <input class="checkbox" type="checkbox" @change="change" />
    <span class="checkmark"></span>
  </label>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: { type: String, default: "", required: true },
  modelValue: { default: "" },
});
const emit = defineEmits(["update:modelValue"]);

function change(evt) {
  emit("update:modelValue", evt.target.checked);
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
}

.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
  width: 21px;
  border-radius: 2px;
  background-color: #eee;
  border: 1px solid #ccc;
}

.wrapper:hover input ~ .checkmark {
  border-color: $text-dark;
}

.wrapper input:focus ~ .checkmark {
  border-color: $text-dark;
}

.wrapper input:checked ~ .checkmark {
  background-color: $primary;
  border: 1px solid $primary;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.wrapper input:checked ~ .checkmark:after {
  display: block;
}

.wrapper .checkmark:after {
  left: 7px;
  top: 0px;
  width: 7px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>