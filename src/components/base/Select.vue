<template>
  <div class="grid grid-cols-2 gap-1">
    <div class="col-span-1 flex items-center" v-if="label">
      <label :for="id">
        {{ label }}
        <span class="required" v-if="required">*</span>
      </label>
    </div>
    <div class="col-span-1">
      <select
        class="custom-select"
        :name="id"
        :id="id"
        :required="required"
        :value="modelValue"
        @input="updateContent"
      >
        <option value="" default selected disabled hidden v-if="placeholder">
          {{ placeholder }}
        </option>
        <option :value="o" v-for="o in options" :key="o">{{ o }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Choose ...",
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
.custom-select {
  width: 100%;
  outline: none;
  font-size: $font-size;
  line-height: $line-height;
  border-radius: $input-radius;
  border: 1px solid $border-color;
  height: $input-height;
  padding-left: $input-padding;

  &:focus {
    border: 1px solid $text-dark;
  }
}

.required {
  color: $primary;
}

select {
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  margin-right: 2em;
  padding-right: 2em;
}
</style>