<script setup lang="ts">
import Card from "../components/Card/Card.vue";
</script>

<template>
  <div>
    <div class="w-11/12 flex justify-between mx-auto py-4">
      <div>
        <img
          class="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div class="flex items-center">
        <img src="../assets/icon/Lupa.svg" alt="Lupa" class="cursor-pointer" />
        <img src="../assets/icon/Menu.svg" alt="Menu" class="cursor-pointer" />
        <img
          src="../assets/icon/Notificacao.svg"
          alt="Notificação"
          class="cursor-pointer"
        />
      </div>
    </div>

    <div class="bg-white w-full min-h-screen py-4">
      <div class="w-11/12 mx-auto">
        <div>
          <h3 class="text-lg font-semibold">Services</h3>
          <Card
            imagem="./src/assets/icon/Nave.svg"
            title="P2P Trading"
            subtitle="Bank Transfer, Paypal Revolut..."
          />
          <Card
            imagem="./src/assets/icon/Card.svg"
            title="P2P Trading"
            subtitle="Bank Transfer, Paypal Revolut..."
          />
        </div>

        <div>
          <h3 class="text-lg font-semibold">Recent Coin</h3>
          <Card
            imagem="./src/assets/icon/Crypto_blue.svg"
            title="2,059.83"
            subtitle="BTC/BUSD"
          />
          <Card
            imagem="./src/assets/icon/Crypto_yellow.svg"
            title="40,059.83"
            subtitle="SOL/BUSD"
          />
        </div>
      </div>
    </div>
  </div>
</template>
