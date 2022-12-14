<script setup lang="ts">
import Card from "../Card/Card.vue";
import { ref } from "vue";
import { api } from "../../server/axios";
import { IInfo } from "./Info";

const money = ref<IInfo[]>([]);

function getMoney() {
  api.get("/money").then((response) => {
    const { moedas } = response.data;
    money.value = moedas;
  });
}

getMoney();
</script>

<template>
  <div class="w-11/12 mx-auto">
    <div>
      <h3 class="text-lg font-semibold">Services</h3>
      <Card
        imagem="./src/assets/icon/Nave.svg"
        title="P2P Trading"
        subtitle="Bank Transfer, Paypal Revolut..."
        :arrow="true"
      />
      <Card
        imagem="./src/assets/icon/Card.svg"
        title="P2P Trading"
        subtitle="Bank Transfer, Paypal Revolut..."
        :arrow="true"
      />
    </div>
    <div>
      <h3 class="text-lg font-semibold">Recent Coin</h3>
      <Card
        v-for="(moeda, index) in money"
        :key="index"
        :imagem="moeda.image"
        :title="moeda.high"
        :subtitle="`${moeda.code}/${moeda.codein}`"
        :arrow="true"
      />
    </div>
  </div>
</template>
