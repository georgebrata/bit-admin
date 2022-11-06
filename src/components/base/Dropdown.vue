<template>
  <div class="grid grid-cols-2 gap-1">
    <div class="col-span-1 flex items-center">
      <label :for="id">{{ label }}</label>
    </div>
    <div class="col-span-1">
      <div class="dropdown" tabindex="0" :id="id" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
          {{ selected }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
          <div v-for="(option, i) of options" :key="i" @click="select(option)">
            <span :class="{ disabled: disabled }">{{ option }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: "",
  },
  placeholder: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(["input"]);
const selected = ref(props.placeholder || props.options[0]);
const open = ref(false);

function select(option) {
  if (props.disabled) {
    open.value = false;
    emit("input", option);
    return;
  }
  selected.value = option;
  open.value = false;
  emit("input", option);
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  width: 100%;
  height: $input-height;
  text-align: left;
  outline: none;
  line-height: $line-height;
}

.dropdown .selected {
  background-color: white;
  border: 0;
  border-bottom: 1px solid $border-color;
  color: $text-dark;
  height: $input-height;
  padding: 5px $input-padding;
  cursor: pointer;
  user-select: none;

  &.open,
  &:focus {
    outline: none;
    border: 1px solid $text-dark;
  }

  &:focus {
    border-radius: $input-radius;
  }

  &.open {
    border-radius: $input-radius $input-radius 0px 0px;
  }
}

.dropdown .selected:after {
  position: absolute;
  content: "";
  top: 15px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: $text-dark transparent transparent transparent;
}

.dropdown .items {
  color: $text-dark;
  border-radius: 0px 0px $input-radius $input-radius;
  overflow: hidden;
  border-right: 1px solid $text-dark;
  border-left: 1px solid $text-dark;
  border-bottom: 1px solid $text-dark;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 1;
}

.dropdown .items div {
  color: $text-dark;
  padding: 3px 12px;
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid $border-color;

  .disabled {
    opacity: $opacity-low;
  }
}

.dropdown .items div:hover {
  background-color: lightgrey;
}

.selectHide {
  display: none;
}
</style>
