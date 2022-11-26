<script setup lang="ts">
import Close from "../components/Icon/Close.vue";
import Button from "../components/Button/Button.vue";
import Input from "../components/Input/Input.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const email = ref<string | number>("");
const password = ref<string | number>("")

function clickClose() {
  router.push({ name: "index" });
}

function checkForm() {
  console.log(email.value);
  console.log(password.value);
}

function bntNextPage() {
  router.push({ name: "home" });
}
</script>

<template>
  <div>
    <Close @onClick="clickClose" class="p-5" />

    <div class="flex justify-center">
      <Button
        title="sign in"
        color="dark"
        class="m-2 w-full lg:w-[250px]"
        @onClick="bntNextPage()"
      />
      <Button
        title="sign up"
        class="m-2 w-full lg:w-[250px]"
        @onClick="bntNext()"
      />
    </div>

    <div class="lg:w-2/4 lg:m-auto lg:mt-4">
      <h2 class="text-white p-5 text-lg font-bold">Sign in</h2>

      <form class="mx-5 flex justify-center flex-col" @submit.prevent="checkForm">
        <Input id="email" type="email" label="email" placeholder="Enter your email" v-model:modelValue="email" class="mb-4" />
        <Input id="password" type="password" label="Password" placeholder="Enter your password" v-model:modelValue="password" class="mb-4"/>

        <Button title="Sign in" class="py-2 w-full" type="submit" />
      </form>
    </div>
  </div>
</template>
