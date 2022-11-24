<script setup lang="ts">
import { ref, onMounted } from "vue";
import { api } from "../server/axios";

interface companes {
  id: number;
  name: string;
  numero: number;
}

const companes = ref<companes[]>([]);
const numberCompanes = ref<number>(0);

onMounted(() => {
  api.get("/users").then((response) => {
    const { company } = response.data;

    company.filter((value) => {
      companes.value.push(value.numero);
      
      let total: number;
      total = 0;

      for (let i = 0; i < companes.value.length; i++) {
        total += companes.value[i];;
      }
      numberCompanes.value = total
    });
  });
});
</script>

<template>
  <div class="h-screen lg:items-center lg:flex lg:justify-center">
    <p class="text-gray">{{ companes }}</p>
    <p class="text-gray">{{ numberCompanes }}</p>
  </div>
</template>
