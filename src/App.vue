<script setup lang="ts">
import Nav from './components/Nav/Nav.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
<div>
  <div class="w-11/12 mx-auto py-7" v-if="route.meta.navBar">
    <Nav />
  </div>
  <router-view></router-view>
</div>
</template>