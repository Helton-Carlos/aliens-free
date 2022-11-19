<script setup lang="ts">
import Spinner from './Spinner.vue'
defineProps<{ name: string, required: true }>()
</script>

<template>
  <div>
    <component :is="Spinner"/>
  </div>
</template>
