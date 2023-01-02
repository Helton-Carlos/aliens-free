<script setup lang="ts">
import { ref } from 'vue';

const user = ref<string>("user")
</script>

<template>
  <div class="bg-white w-full min-h-screen py-4">
    <div class="w-11/12 mx-auto">
      <h3 class="text-lg font-semibold">👤User</h3>
      <div class="md:flex md:gap-4">
        {{ user }}
      </div>
    </div>
  </div>
</template>
