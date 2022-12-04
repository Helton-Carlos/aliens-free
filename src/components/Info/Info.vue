<script setup lang="ts">
import Card from "../Card/Card.vue";
</script>

<template>
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
</template>
