<script setup lang="ts">
defineProps<{ 
  color?: string 
}>();

defineEmits<{ 
  (e:'onClick'): void 
}>();
</script>

<template>
  <button
    data-testid="button"
    class="px-7 py-2 rounded drop-shadow-md font-medium my-2"
    :class="{
      'bg-green hover:bg-green-hover': color == null,
      'bg-dark text-white hover:text-gray': color === 'dark',
      'bg-white text-black': color === 'white',
    }"
    @click="$emit('onClick')"
  >
    <slot />
  </button>
</template>
