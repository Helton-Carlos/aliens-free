<script setup lang="ts">
import Button from "@/components/Button/Button.vue";
import Input from "@/components/Input/Input.vue";
import { useCookies } from "vue3-cookies";
import { useRouter } from "vue-router";
import { api } from "@/server/axios";
import { ref } from "vue";

const router = useRouter();
const { cookies } = useCookies();

const email = ref<string>("");
const password = ref<string>("");

function checkForm() {
  setTimeout(() => {
    if (email.value && password.value) {
      api.get("/users").then((response) => {
        const { id, user, email, token, money, image } =
          response.data.client[0];

        window.localStorage.setItem(
          "localStorage",
          JSON.stringify({ id, user, email, token, money, image })
        );
        cookies.set("myCoookie", token);

        router.push({ name: "home" });
      });
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
    <div>
      <img 
        src="@/assets/ilustration-login.svg" 
        alt="user-astronaut" 
        class="mx-auto my-4" 
      />
    </div>

    <form 
      class="mx-5 flex justify-center flex-col" 
      @submit.prevent="checkForm"
    >
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

      <Button 
        title="Sign in" 
        class="py-2 my-2 w-full" 
        type="submit" 
        data-testid="btn-id"  
      />
    </form>
  </div>
</template>
