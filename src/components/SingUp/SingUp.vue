<script setup lang="ts">
import Button from "@/components/Button/Button.vue";
import Input from "@/components/Input/Input.vue";

import { useRouter } from "vue-router";
import { api } from "@/server/axios";
import { ref } from "vue";

const router = useRouter();

const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const passwordConfirm = ref<string>("");

function checkForm() {
   setTimeout(() => {
    if (name.value && email.value && password.value && passwordConfirm.value) {
      api.get("/users").then((response) => {
        response.data;
      })

      router.push({ name: "home" });
    } else {
      alert("Preencha os campos");
    }

    email.value = "";
    password.value = "";
  }, 2000);
}
</script>

<template>
  <div>
    <h2 class="text-white p-2 text-lg font-bold">
      Sign up
    </h2>

    <form 
      class="mx-5 flex justify-center flex-col" 
      @submit.prevent="checkForm"
    >
      <Input
        id="name"
        type="text"
        label="Name"
        placeholder="John Doe"
        v-model:modelValue="name"
        class="mb-4"
        data-testid="name-id"
      />

      <Input
        id="email"
        type="email"
        label="E-mail"
        placeholder="johndoe@gmail.com"
        v-model:modelValue="email"
        class="mb-4"
        data-testid="email-id"
      />

      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="Your password"
        v-model:modelValue="password"
        class="mb-4"
        data-testid="password-id"
      />

      <Input
        id="password-confirm"
        type="password"
        label="Confirm the password"
        placeholder="Confirm the password"
        v-model:modelValue="passwordConfirm"
        data-testid="password-confirm-id"
        class="mb-4"
      />

      <Button
        class="py-2 my-2 w-full" 
        type="submit"
        data-testid="btn-id"
      >
       Confirm
      </Button>
    </form>
  </div>
</template>
