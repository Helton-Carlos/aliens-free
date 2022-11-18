<script setup lang="ts">
defineProps<{ title: string }>()
defineEmits<{ onClick: void }>()
</script>

<template>
  <button class="bg-green" @click="onClick">
   {{ title }}
  </button>
</template>
