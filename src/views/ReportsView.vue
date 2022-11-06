<script setup>
import { ref, reactive } from "vue";
import Title from "@/components/base/Title.vue";
import PrimaryBtn from "@/components/base/PrimaryBtn.vue";
import ReportForm from "@/components/ReportForm.vue";
import Modal from "@/components/base/Modal.vue";
import { useToast } from "vue-toastification";

const isModalOpen = ref(false);
const toast = useToast();

function openModal() {
  isModalOpen.value = true;
}
function closeModal() {
  isModalOpen.value = false;
}
function saveReport() {
  console.log("Report saved: ", reportData);
  // await ReportsService.save(report)
  toast.success("Successfully saved the report!");
  isModalOpen.value = false;
}

const reportData = reactive({
  export: "scheduled",
});
</script>

<template>
  <Title>Page title</Title>
  <div class="flex flex-col items-center justify-center h-[700px]">
    <img
      alt="Reports illustration"
      src="@/assets/images/illustration.png"
      width="100"
      height="100"
    />
    <h1>Start creating reports</h1>
    <p>You don't have any reports defined yet</p>
    <PrimaryBtn class="mt-5" @click="openModal">create report</PrimaryBtn>
  </div>

  <Modal :open="isModalOpen" @close="closeModal" @save="saveReport">
    <ReportForm :report="reportData" />
  </Modal>
</template>

<style lang="scss" scoped>
h1 {
  font-size: $font-large;
  @apply mt-5;
}

p {
  font-size: $font-small;
}

h1,
p {
  opacity: 0.7;
}
</style>
