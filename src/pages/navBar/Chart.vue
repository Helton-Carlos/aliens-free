<script setup lang="ts">
import { useRoute  } from "vue-router";
import Chart from "@/components/Chart/Chart.vue";

const route = useRoute ();
</script>

<template>
  <div class="bg-white w-full min-h-screen py-4">
    <div class="w-11/12 mx-auto">
      <h3 class="text-lg font-semibold">📈{{route.meta.title}}</h3>
      <div class="md:flex md:gap-4">
        <Chart />
      </div>
    </div>
  </div>
</template>
