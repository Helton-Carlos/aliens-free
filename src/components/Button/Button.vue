<script setup lang="ts">
defineProps<{ title: string, color?: string }>();
defineEmits<{ (e:'onClick'): void }>();
</script>

<template>
  <button
    class="px-7 py-1 rounded drop-shadow-md"
    :class="{
      'bg-green hover:bg-green-hover': color == null,
      'bg-dark text-white hover:text-gray': color === 'dark',
      'bg-white text-black': color === 'white',
    }"
    @click="$emit('onClick')"
  >
    <p class="font-medium">{{ title }}</p>
  </button>
</template>
