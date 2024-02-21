<script setup lang="ts">
defineEmits<{ (e:'onClick'): void }>();
</script>

<template>
  <div>
    <img 
      src="@/assets/Close.svg" 
      alt="close"
      class="hover:cursor-pointer"  
      @click="$emit('onClick')"
    >
  </div>
</template>
