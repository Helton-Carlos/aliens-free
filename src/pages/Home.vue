<script setup lang="ts">
import Card from "../components/Card/Card.vue";
import Nav from "../components/Nav/Nav.vue";
</script>

<template>
  <div>
    <div class="w-11/12 mx-auto py-6">
      <Nav />
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
