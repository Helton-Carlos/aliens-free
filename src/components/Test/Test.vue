<script setup lang="ts">
import { ref } from "vue";
const count = ref<number>(0);

function increment() {
  count.value++;
}
</script>

<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>
