<script setup lang="ts">
defineProps<{ title: string, subtitle: string, imagem: string }>()
</script>

<template>
  <div class="p-4 mb-4 bg-white rounded-lg shadow-md">
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img
          class="w-12 h-12 rounded-full"
          :src="imagem"
          alt="Neil image"
        />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-full truncate">{{ title }}</p>
        <p class="text-sm text-gray-medio">{{ subtitle }}</p>
      </div>
      <div
        class="inline-flex items-center text-base font-semibold bg-gray-medio p-2 rounded-lg"
      >
        <img src="../../assets/icon/Seta.svg" alt="Seta" class="h-3" />
      </div>
    </div>
  </div>
</template>
