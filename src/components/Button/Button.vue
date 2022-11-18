<script setup lang="ts">
defineProps<{ title: string }>();
defineEmits<{ onClick: void }>();
</script>

<template>
  <button
    class="bg-green px-7 py-1 rounded drop-shadow-md hover:bg-green-hover"
    @click="onClick"
  >
    <p class="font-medium">{{ title }}</p>
  </button>
</template>
