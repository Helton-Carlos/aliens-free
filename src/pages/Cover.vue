<script setup lang="ts">
import { useRouter  } from 'vue-router';
import { onMounted } from 'vue';
import Icon from '@/components/Icon/Icon.vue';

const router = useRouter()

onMounted(()=> {
  setTimeout(()=>{
    router.push({ name: "boarding" })
  }, 800)
})
</script>

<template>
  <div class="h-screen lg:items-center lg:flex lg:justify-center">
    <div class="m-4 mt-10 lg:mt-4">
      <img src="../assets/Jato.svg" alt="Jato" />
    </div>
    
    <div class="mx-4 lg:w-[450px]">
      <h1 class="w-[145px] text-white text-3xl border-b-4 border-green">
        Aliens Free
      </h1>

      <h2 class="text-green lg:text-4xl pt-2 font-semibold">
        Join the world's largest crypto exchange.
      </h2>

      <p class="text-gray pt-2 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div class="mt-4 flex justify-center">
        <Icon name="Spinner" required />
      </div>
    </div>
  </div>
</template>
