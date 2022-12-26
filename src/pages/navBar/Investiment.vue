<script setup lang="ts">
import Table from "../../components/Table/Table.vue";
import Chart from "../../components/Chart/Chart.vue";
</script>

<template>
  <div class="bg-white w-full min-h-screen py-4">
    <div class="w-11/12 mx-auto md:flex md:gap-4">
      <div>
        <h3 class="text-lg font-semibold">Investiment-Table</h3>
        <div class="md:flex md:gap-4">
          <Table />
        </div>
      </div>
      <div>
        <h3 class="text-lg font-semibold">Investiment-Month</h3>
        <div class="md:flex md:gap-4">
          <Chart />
        </div>
      </div>
    </div>
  </div>
</template>
