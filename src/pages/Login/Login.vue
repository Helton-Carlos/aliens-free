<script setup lang="ts">
import { ref } from 'vue';
import { api } from '@/server/axios';
import { useRouter } from 'vue-router';

import Button from '@/components/Button/Button.vue';
import Input from '@/components/Input/Input.vue';

const router = useRouter();
const showSingIn = ref<boolean>(true);
const showSingUp = ref<boolean>(false);

const name = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const passwordConfirm = ref<string>('');

const btnColorIn = ref<string>('white');
const btnColorUp = ref<string>('dark');

function bntSignIn() {
  showSingIn.value = true;
  showSingUp.value = false;
  btnColorIn.value = 'white';
  btnColorUp.value = 'dark';

  cleanInput();
}

function bntSignUp() {
  showSingUp.value = true;
  showSingIn.value = false;
  btnColorIn.value = 'dark';
  btnColorUp.value = 'white';

  cleanInput();
}

async function singIn() {
  try {
    await api.get('/users').then((response) => {
      const { users } = response.data;

      let user = users.find(
        (item: { email: string }) => item.email === email.value,
      );

      if (user) {
        const { name, id, email } = user;

        const userStorage = {
          id,
          name,
          email,
        };

        localStorage.setItem('user', JSON.stringify(userStorage));

        router.push({ name: 'home' });
      } else {
        return alert('Dados incorreta');
      }
    });
  } catch (error) {
    console.log(error);
  }
}

async function signUp() {
  if (name.value && email.value) {
    if (password.value === passwordConfirm.value) {
      try {
        await api
          .post('/users', {
            name: name.value,
            email: email.value,
            password: password.value,
          })
          .then(() => {
            bntSignIn();
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      return alert('Senha incorreta');
    }
  } else {
    alert('Preencha os campos');
  }
}

function cleanInput() {
  name.value = '';
  email.value = '';
  password.value = '';
  passwordConfirm.value = '';
}
</script>

<template>
  <div class="flex flex-col justify-center min-h-screen md:items-center">
    <div class="flex justify-between items-center my-2">
      <div class="mt-8 mx-auto justify-items-center">
        <Button
          :color="btnColorIn"
          class="md:w-[250px]"
          @onClick="bntSignIn()"
          data-testid="button-sing-in"
        >
          Sign in
        </Button>

        <Button
          :color="btnColorUp"
          class="md:w-[250px]"
          @onClick="bntSignUp()"
          data-testid="button-sing-up"
        >
          Sign up
        </Button>
      </div>
    </div>

    <div class="mx-2 md:m-auto">
      <div v-if="showSingIn" class="md:flex gap-10">
        <img
          src="@/assets/ilustration-login.svg"
          alt="user-astronaut"
          class="hidden mx-auto w-[150px] md:block"
        />

        <form class="mx-5" @submit.prevent="singIn">
          <Input
            id="email"
            type="email"
            label="E-mail"
            placeholder="johndoe@gmail.com"
            v-model:modelValue="email"
            class="mb-4 w-full md:w-[400px]"
            data-testid="email-id"
          />

          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="Your password"
            v-model:modelValue="password"
            class="mb-4 w-full md:w-[400px]"
            data-testid="password-id"
          />

          <Button class="py-2 my-2 w-full" type="submit" data-testid="btn-id">
            Sign in
          </Button>
        </form>
      </div>

      <div v-else>
        <h2 class="text-white p-2 text-lg font-bold">Sign up</h2>

        <form
          class="mx-5 flex justify-center flex-col"
          @submit.prevent="signUp"
        >
          <Input
            id="name"
            type="text"
            label="Name"
            placeholder="John Doe"
            v-model:modelValue="name"
            class="mb-4 w-full md:w-[400px]"
            data-testid="name-id"
          />

          <Input
            id="email"
            type="email"
            label="E-mail"
            placeholder="johndoe@gmail.com"
            v-model:modelValue="email"
            class="mb-4 w-full md:w-[400px]"
            data-testid="email-id"
          />

          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="Your password"
            v-model:modelValue="password"
            class="mb-4 w-full md:w-[400px]"
            data-testid="password-id"
          />

          <Input
            id="password-confirm"
            type="password"
            label="Confirm the password"
            placeholder="Confirm the password"
            v-model:modelValue="passwordConfirm"
            data-testid="password-confirm-id"
            class="mb-4 w-full md:w-[400px]"
          />

          <Button class="py-2 my-2 w-full" type="submit" data-testid="btn-id">
            Confirm
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>
