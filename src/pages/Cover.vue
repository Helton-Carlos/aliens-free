<script setup lang="ts">
import { useRouter  } from 'vue-router';
import { onMounted } from 'vue';
import Icon from '@/components/Icon/Icon.vue';

const router = useRouter()

onMounted(()=> {
  setTimeout(()=>{
    router.push({ name: "boarding" })
  }, 3000)
})
</script>

<template>
  <div class="h-screen lg:items-center lg:flex lg:justify-center">
    <div class="m-4 pt-8 mt-10 lg:mt-4 md:pt-0">
      <img src="@/assets/Jato.svg" alt="Jato" class="w-[270px] mx-auto md:w-[320px]" />
    </div>
    
    <div class="mx-4 text-center lg:w-[450px]">
      <h1 class="w-[145px] mx-auto text-white text-3xl border-b-4 border-green">
        Aliens Free
      </h1>

      <h2 class="text-green lg:text-4xl pt-2 font-semibold">
        Join the world's largest crypto exchange.
      </h2>

      <p class="text-gray pt-2 text-sm">
        Connect to the world's largest cryptocurrency exchange.
      </p>

      <div class="mt-4 flex justify-center">
        <Icon name="Spinner" required />
      </div>
    </div>
  </div>
</template>
