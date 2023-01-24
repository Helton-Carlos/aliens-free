<script setup lang="ts">
defineEmits<{ (e:'onClick'): void }>();
</script>

<template>
  <div>
    <img src="@/assets/Close.svg" class="hover:cursor-pointer" alt="close" @click="$emit('onClick')">
  </div>
</template>
