<script setup lang="ts">
import CardUser from '@/components/Card/CardUser.vue';
import { useRoute  } from "vue-router";

const route = useRoute ();
</script>

<template>
  <div class="bg-white w-full min-h-screen py-4">
    <div class="w-11/12 mx-auto">
      <h3 class="text-lg font-semibold">👤{{route.meta.title}}</h3>
      <div class="md:flex md:gap-4">
        <CardUser />
      </div>
    </div>
  </div>
</template>
