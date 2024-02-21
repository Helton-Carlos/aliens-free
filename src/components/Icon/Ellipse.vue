<script setup lang="ts">
defineProps<{ 
  value: boolean 
}>();

defineEmits<{ 
  (e:'onClick'): void 
}>();
</script>

<template>
  <div>
    <img 
      v-if="value === false"
      src="@/assets/Ellipse-on.svg" 
      alt="Ellipse-on"
      class="hover:cursor-pointer"  
      @click="$emit('onClick')" 
    />

    <img
      v-else
      alt="Ellipse-off"
      src="@/assets/Ellipse-off.svg"  
      @click="$emit('onClick')"
    />
  </div>
</template>
