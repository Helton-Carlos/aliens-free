<script setup lang="ts">
import { ref } from "vue";
const name = ref<string>("Helton");
</script>

<template>
  <div class="flex items-center">
    <img
      class="h-10 w-10 rounded-full"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <p class="text-green font-medium px-2">User: {{ name }}</p>
  </div>
  <div class="flex items-center">
    <img src="../../assets/icon/Lupa.svg" alt="Lupa" class="cursor-pointer" />
    <img src="../../assets/icon/Menu.svg" alt="Menu" class="cursor-pointer" />
    <img
      src="../../assets/icon/Notificacao.svg"
      alt="Notificação"
      class="cursor-pointer"
    />
  </div>
</template>
