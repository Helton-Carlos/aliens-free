<script setup lang="ts">
import Button from "../../components/Button/Button.vue";
import Input from "../../components/Input/Input.vue";
import Loading from "vue-loading-overlay";
import { useRouter } from "vue-router";
import { api } from "../../server/axios";
import { ref } from "vue";

const router = useRouter();

const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const passwordConfirm = ref<string>("");

const isLoading = ref<boolean>(false);
const fullPage = ref<boolean>(true);
function checkForm() {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;

    if ( name.value && email.value && password.value && passwordConfirm.value ) {
      api.get("/users").then((response) => {
        response.data;
      });

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
    <h2 class="text-white p-2 text-lg font-bold">Sign up</h2>

    <form class="mx-5 flex justify-center flex-col" @submit.prevent="checkForm">
      <Input
        id="name"
        type="text"
        label="name"
        placeholder="Type your name"
        v-model:modelValue="name"
        class="mb-4"
      />
      <Input
        id="email"
        type="email"
        label="email"
        placeholder="Type your email"
        v-model:modelValue="email"
        class="mb-4"
      />
      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="Type your password"
        v-model:modelValue="password"
        class="mb-4"
      />
      <Input
        id="password"
        type="password"
        label="Confirm the password"
        placeholder="Confirm the password"
        v-model:modelValue="passwordConfirm"
        class="mb-4"
      />

      <Button title="To save" class="py-2 my-2 w-full" type="submit" />
    </form>

    <div class="vl-parent">
      <!-- https://github.com/ankurk91/vue-loading-overlay -->
      <loading
        v-model:active="isLoading"
        color="#5ED5A8"
        loader="spinner"
        width="50px"
        background-color="#000000"
        :can-cancel="true"
        :is-full-page="fullPage"
      />
    </div>
  </div>
</template>
