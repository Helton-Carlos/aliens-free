<script setup lang="ts">
import Info from "../components/Info/Info.vue";
import Nav from "../components/Nav/Nav.vue";
</script>

<template>
  <div>
    <div class="w-11/12 mx-auto py-6">
      <Nav />
    </div>

    <div class="bg-white w-full min-h-screen py-4">
      <Info />
    </div>
  </div>
</template>
