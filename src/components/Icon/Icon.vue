<script setup lang="ts">
import Spinner from './Spinner.vue';
import Ellipse from './Ellipse.vue';
import Close from './Close.vue';

const icons = {
  Spinner,
  Ellipse,
  Close,
};

defineProps<{
  name: keyof typeof icons;
}>();
</script>

<template>
  <div>
    <component :is="icons[name]" />
  </div>
</template>
