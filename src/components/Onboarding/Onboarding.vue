<script setup lang="ts">
import { boarding } from './onBoarding';
import { ref } from 'vue'
import Button from "../Button/Button.vue";
import Ellipse from '../Icon/Ellipse.vue';

const board = boarding()
const count = ref<number>(0)

function allCount(index: number) {
  count.value = index 
}
</script>

<template>
  <div class="text-center w-5/6">
    <img :src="board[count].image" :alt="board[count].title" class="m-auto h-[55%] mt-4" />
    <h3 class="text-white pt-4 font-medium">{{ board[count].title }}</h3>
    <p class="text-gray pt-2 text-sm">
      {{ board[count].subtitle }}
    </p>
    
    <div class="flex justify-center gap-2 py-2">
      <Ellipse :value='count === 0' @onClick='allCount(0)'/>
      <Ellipse :value='count === 1' @onClick='allCount(1)'/> 
      <Ellipse :value='count === 2' @onClick='allCount(2)'/>
    </div>

    <Button title="Next" class="m-4" @onClick='count++' />
  </div>
</template>
