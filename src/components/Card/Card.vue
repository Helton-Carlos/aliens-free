<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  imagem: string;
  arrow: boolean;
}>();
</script>

<template>
  <div class="p-4 mb-4 bg-white rounded-lg shadow-md md:w-full">
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="w-12 h-12" :src="imagem" :alt="title" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-full truncate capitalize">
          {{ title }}
        </p>
        <p class="text-sm text-gray-medio">{{ subtitle }}</p>
      </div>
      <div
        class="inline-flex items-center text-base font-semibold bg-gray p-2 rounded-lg"
        v-show="arrow"
      >
        <img src="../../assets/icon/Seta.svg" alt="Seta" class="h-3" />
      </div>
    </div>
  </div>
</template>
