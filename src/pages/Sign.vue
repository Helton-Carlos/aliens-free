<script setup lang="ts">
import Close from '../components/Icon/Close.vue';
import Button from '../components/Button/Button.vue';
import Input from '../components/Input/Input.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function clickClose() {
  router.push({ name: "index" });
}

function bntNext() {
  alert("2")
}

function bntNextPage() {
  router.push({ name: "home" });
}
</script>

<template>
  <div>
    <Close @onClick="clickClose" class="p-5"/>

    <div class="flex justify-center">
      <Button title="sign in" color="dark" class="m-2 w-full lg:w-[250px]" @onClick='bntNextPage()'/>
      <Button title="sign up" class="m-2 w-full lg:w-[250px]" @onClick='bntNext()'/>
    </div>

    <div class="lg:w-2/4 lg:m-auto lg:mt-4">
      <h2 class="text-white p-5 text-lg font-bold">Sign in</h2>

      <form class="mx-5 flex justify-center flex-col">
        <Input label="Email" type="email" placeholder="Enter your email" />
        <Input label="Password" type="password" placeholder="Enter your password" />
        
        <Button title="Sign in" class="py-2 w-full" @onClick='bntNext()'/>
      </form>
    </div>
  </div>
</template>
