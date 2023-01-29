<script setup lang="ts">
import { ref } from "vue";
import { api } from "../server/axios";
import { IInfo } from "@/types/utilities";
import Card from "@/components/Card/Card.vue";

const money = ref<IInfo[]>([]);

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
  <div class="bg-gray-light w-full min-h-screen py-4">
    <div class="w-11/12 mx-auto">
      <h3 class="text-lg font-semibold">💵Services</h3>
      <div class="md:flex md:gap-4">
        <Card
          image="./src/assets/icon/Nave.svg"
          title="P2P Trading"
          subtitle="Bank Transfer, Paypal Revolut..."
          :arrow="true"
        />
        <Card
          image="./src/assets/icon/Card.svg"
          title="P2P Trading"
          subtitle="Bank Transfer, Paypal Revolut..."
          :arrow="true"
        />
      </div>
      <h3 class="text-lg font-semibold">💶Recent Coin</h3>
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
