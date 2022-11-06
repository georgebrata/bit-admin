<template>
  <div class="grid grid-cols-2 gap-1">
    <div class="col-span-1" v-if="label">
      <label :for="id">
        {{ label }}
        <span class="required" v-if="required">*</span>
      </label>
    </div>
    <div class="col-span-1">
      <input
        class="custom-input"
        type="text"
        required="required"
        :value="modelValue"
        @input="updateContent"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "Placeholder",
  },
  modelValue: {
    type: String,
  },
  label: {
    type: String,
    required: false,
    default: null,
  },
  id: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateContent = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style lang="scss" scoped>
.custom-input {
  width: 100%;
  outline: none;
  font-size: $font-size;
  line-height: $line-height;
  border-radius: $input-radius;
  border: 1px solid $border-color;
  height: $input-height;
  padding: 9px $input-padding;

  &:focus {
    border: 1px solid $text-dark;
  }
}

.required {
  color: $primary;
}
</style>