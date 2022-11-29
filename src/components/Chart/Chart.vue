<script setup lang="ts">
import { ref } from "vue";

const series = ref<number[]>([42, 47, 52, 58, 65]);
const chartOptions = {
  chart: {
    width: 380,
    type: "polarArea",
  },
  labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
  fill: {
    opacity: 1,
  },
  stroke: {
    width: 1,
    colors: undefined,
  },
  yaxis: {
    show: false,
  },
  legend: {
    position: "bottom",
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0,
      },
      spokes: {
        strokeWidth: 0,
      },
    },
  },
  theme: {
    monochrome: {
      enabled: true,
      shadeTo: "light",
      shadeIntensity: 0.6,
    },
  },
};
</script>

<template>
  <div id="chart">
    <apexchart
      type="polarArea"
      width="380"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
