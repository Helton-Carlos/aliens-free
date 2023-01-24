<script setup lang="ts">
defineProps<{ value: boolean }>()
defineEmits<{ (e:'onClick'): void }>();
</script>

<template>
  <div>
    <img src="@/assets/Ellipse-on.svg" class="hover:cursor-pointer" alt="Ellipse-on" @click="$emit('onClick')" v-if="value === false">
    <img src="@/assets/Ellipse-off.svg" alt="Ellipse-off" @click="$emit('onClick')" v-else>
  </div>
</template>
