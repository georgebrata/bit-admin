<template>
  <label class="wrapper flex items-center">
    {{ label }}
    <input type="radio" :checked="isChecked" :value="value" @click="change" />
    <span class="checkmark"></span>
  </label>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: { type: String, default: "", required: true },
  modelValue: { default: "" },
  value: { type: String, default: undefined },
});
const emit = defineEmits(["update:modelValue"]);

const isChecked = computed(() => {
  return props.modelValue === props.value;
});

function change(evt) {
  emit("update:modelValue", event.target.value);
}
</script>

<style lang="scss" scoped>
/* Customize the label (the wrapper) */
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
  font-size: $font-size;
}
/* Hide the browser's default radio button */
.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #eee;
  border: 1px solid #ccc;
}
/* On mouse-over, add a grey background color */
.wrapper:hover input ~ .checkmark {
  border-color: $text-dark;
}
/* When the radio button is checked, add a blue background */
.wrapper input:focus ~ .checkmark {
  border-color: $text-dark;
}
.wrapper input:checked ~ .checkmark {
  border: 2px solid $primary;
  background-color: white;
}
/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the indicator (dot/circle) when checked */
.wrapper input:checked ~ .checkmark:after {
  display: block;
}
/* Style the indicator (dot/circle) */
.wrapper .checkmark:after {
  top: 4px;
  left: 4px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: $primary;
}
</style>