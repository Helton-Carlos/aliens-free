<script setup lang="ts">
import Card from "../components//Card/Card.vue";
import { ref } from "vue";
import { api } from "../server/axios";
import { IInfo } from "../types/utilities";

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
  <div>
    <div class="bg-gray-light w-full min-h-screen py-4">
      <div class="w-11/12 mx-auto">
        <div>
          <h3 class="text-lg font-semibold">Services</h3>
          <div class="md:flex md:gap-4">
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
        </div>
        <div>
          <h3 class="text-lg font-semibold">Recent Coin</h3>
          <div class="md:flex md:gap-4">
            <Card
              v-for="(moeda, index) in money"
              :key="index"
              :imagem="moeda.image"
              :title="maskMoney(moeda.high)"
              :subtitle="`${moeda.code}/${moeda.codein}`"
              :arrow="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
