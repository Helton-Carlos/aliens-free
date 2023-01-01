<script setup lang="ts">
import Table from "../../components/Table/Table.vue";
import Chart from "../../components/Chart/Chart.vue";
import { ITable } from "../../types/utilities";
import { ref } from "vue";

const infoTable = ref<ITable[]>([
  { day: 2, historic: "deposito", money: "8.00", status: "into" },
  { day: 5, historic: "deposito", money: "8.50", status: "into" },
  { day: 7, historic: "deposito", money: "12.50", status: "into" },
]);
</script>

<template>
  <div class="bg-white w-full min-h-screen py-4">
    <div class="w-11/12 mx-auto md:flex md:gap-4">
      <div>
        <h3 class="text-lg font-semibold">💹Investiment-Table</h3>
        <div class="md:flex md:gap-4">
          <Table :infoTable="infoTable" />
        </div>
      </div>
      <div>
        <h3 class="text-lg font-semibold">📊Investiment-Month</h3>
        <div class="md:flex md:gap-4">
          <Chart />
        </div>
      </div>
    </div>
  </div>
</template>
