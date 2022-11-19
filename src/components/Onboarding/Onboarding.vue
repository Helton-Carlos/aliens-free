<script setup lang="ts">
import { boarding } from './onBoarding';
import { ref } from 'vue'
import Button from "../Button/Button.vue";

const board = boarding()
const count = ref<number>(0)
</script>

<template>
  <div class="text-center w-5/6">
    <img :src="board[count].image" :alt="board[count].title" class="m-auto" />
    <h3 class="text-white pt-2 font-medium">{{ board[count].title }}</h3>
    <p class="text-gray pt-2 text-sm">
      {{ board[count].subtitle }}
    </p>

    <Button title="Next" class="m-4" @onClick='count++' />
  </div>
</template>
