<script setup>
import { reactive } from "vue";
import Title from "@/components/base/Title.vue";
import Select from "@/components/base/Select.vue";
import Dropdown from "@/components/base/Dropdown.vue";
import Input from "@/components/base/Input.vue";
import RadioBtn from "@/components/base/RadioBtn.vue";
import Checkbox from "@/components/base/Checkbox.vue";

const options = ["Executive Summary", "Executive direct", "Simple"];
const companies = ["Company name", "Company 2", "Company 3"];
const reccurrences = ["Daily", "Weekly", "Monthly"];
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const props = defineProps({
  report: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>

<template>
  <div class="w-full">
    <div class="w-full mb-5">
      <Title>Details</Title>
    </div>
    <div class="grid gap-4 grid-cols-1 w-1/2">
      <Select id="type" label="Type" :options="options" v-model="report.type" />
      <Select
        id="company"
        label="Company"
        :options="companies"
        v-model="report.company"
      />
      <Input id="name" label="Name" required v-model="report.name" />
    </div>
    <div class="w-full mt-10 mb-5">
      <Title>Settings</Title>
    </div>
    <div class="grid gap-4 grid-cols-1 w-1/2">
      <RadioBtn label="Export now" value="export" v-model="report.export" />
      <RadioBtn label="Scheduled" value="scheduled" v-model="report.export" />
      <div
        class="w-full pl-8 grid gap-4 grid-cols-1"
        v-if="report.export === 'scheduled'"
      >
        <Select
          id="recureence"
          label="Reccurrence"
          :options="reccurrences"
          v-model="report.reccurrences"
        />
        <Select id="on" label="On" :options="weekdays" v-model="report.on" />
      </div>
    </div>
    <div class="grid gap-4 grid-cols-1 w-1/2 mt-5">
      <Checkbox id="attach" label="Attach files" v-model="report.attachFiles" />
      <Checkbox id="notify" label="Notify owner" v-model="report.notifyOwner" />
      <Checkbox
        id="copy"
        label="Send me a copy via e-mail"
        v-model="report.emailCopy"
      />
    </div>
  </div>
</template>
      