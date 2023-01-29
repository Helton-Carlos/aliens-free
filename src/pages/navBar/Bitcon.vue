<script setup lang="ts">
import { useRoute } from "vue-router";
import Card from "@/components/Card/Card.vue";
import { ref } from "vue";
import { api } from "@/server/axios";
import { IInfo } from "@/types/utilities";

const money = ref<IInfo[]>([]);
const route = useRoute();

function getMoney() {
  api.get("/money").then((response) => {
    const { moedas } = response.data;
    money.value = moedas;
  });
}

function maskMoney(money: string) {
  return `$ ${money.substr(0, 4).replace(".", ",")}`;
}

getMoney();
</script>

<template>
  <div class="bg-white w-full min-h-screen py-4">
    <div class="w-11/12 mx-auto">
      <h3 class="text-lg font-semibold">🪙{{ route.meta.title }}</h3>
      <div class="md:flex md:gap-4">
        <Card
          v-for="(moeda, index) in money"
          :key="index"
          :image="moeda.image"
          :title="maskMoney(moeda.high)"
          :subtitle="`${moeda.code}/${moeda.codein}`"
          :arrow="true"
        />
      </div>
    </div>
  </div>
</template>
