<script setup lang="ts">
import Nav from './components/Nav/Nav.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
<div>
  <div 
    v-if="route.meta.navBar"
    class="w-11/12 mx-auto py-7" 
  >
    <Nav />
  </div>

  <router-view />
</div>
</template>