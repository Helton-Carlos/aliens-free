<script setup lang="ts">
import Card from "../components//Card/Card.vue";
import { ref, onMounted } from "vue";
import { api } from "../server/axios";
import { IInfo } from "../types/utilities";
import { useCookies } from "vue3-cookies";

const money = ref<IInfo[]>([]);
const { cookies } = useCookies();

function getMoney() {
  api.get("/money").then((response) => {
    const { moedas } = response.data;
    money.value = moedas;
  });
}

function maskMoney(money: string) {
  return `$ ${money.substr(0, 4).replace(".", ",")}`;
}

onMounted(() => {
  let my_cookie_value = cookies.get("myCoookie");
  console.log(my_cookie_value);
  cookies.set("myCoookie", "abcdefg");
});

getMoney();
</script>

<template>
  <div class="bg-gray-light w-full min-h-screen py-4">
    <div class="w-11/12 mx-auto">
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
</template>
