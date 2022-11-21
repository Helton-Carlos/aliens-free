<script setup lang="ts">
import Close from '../components/Icon/Close.vue';
import Button from '../components/Button/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function clickClose() {
  router.push({ name: "index" });
}

function bntNext() {
  alert("2")
}
</script>

<template>
  <div>
    <Close @onClick="clickClose" class="p-5"/>

    <div class="flex justify-center">
      <Button title="sign in" color="dark" class="m-2" @onClick='bntNext()'/>
      <Button title="sign up" class="m-2" @onClick='bntNext()'/>
    </div>

    <div>
      <h2 class="text-white p-5 text-lg">Sign in</h2>
    </div>
  </div>
</template>
