<script setup lang="ts">
import Table from "../../components/Table/Table.vue";
import { ITable } from "../../types/utilities";
import { ref } from "vue";

const infoTable = ref<ITable[]>([
  { day: 2, historic: "pag-cred", money: "5.00", status: "exit" },
  { day: 3, historic: "deposito", money: "8.50", status: "into" },
]);
</script>

<template>
  <div class="bg-white w-full min-h-screen py-4">
    <div class="w-11/12 mx-auto">
      <h3 class="text-lg font-semibold">Extract</h3>
      <div class="md:flex md:gap-4">
        <Table :infoTable="infoTable" />
      </div>
    </div>
  </div>
</template>
