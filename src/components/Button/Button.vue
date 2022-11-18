<script setup lang="ts">
defineProps<{ title: string }>()
defineEmits<{ onClick: void }>()
</script>

<template>
  <button class="bg-green px-4 py-2" @click="onClick">
   {{ title }}
  </button>
</template>
