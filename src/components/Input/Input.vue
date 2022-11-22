<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ label: string, placeholder: string, type: string }>()

const value = ref<string>('')
</script>

<template>
  <div>
    <label for="first_name" class="block mb-2 capitalize text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
    <input
      :type="type"
      class="block mb-8 bg-dark w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:border-green focus:ring-green focus:outline-none focus:ring focus:ring-opacity-40"
      :placeholder="placeholder"
      v-model="value"
      required
    />
  </div>
</template>
