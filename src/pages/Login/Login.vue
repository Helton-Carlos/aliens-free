<script setup lang="ts">
import Button from "@/components/Button/Button.vue";
import SingIn from "@/components/SingIn/SingIn.vue";
import SingUp from "@/components/SingUp/SingUp.vue";
import { ref } from "vue";

const showSingIn = ref<boolean>(true);
const showSingUp = ref<boolean>(false);

const btnColorIn = ref<string>("white");
const btnColorUp = ref<string>("dark");

function bntSignIn() {
  showSingIn.value = true;
  showSingUp.value = false;
  btnColorIn.value = "white";
  btnColorUp.value = "dark";
}

function bntSignUp() {
  showSingUp.value = true;
  showSingIn.value = false;
  btnColorIn.value = "dark";
  btnColorUp.value = "white";
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center my-2 ">
      <div class="mt-8 mx-auto justify-items-center">
        <Button
          :color="btnColorIn"
          class="md:w-[250px]"
          @onClick="bntSignIn()"
        >
          Sign in
        </Button>
       
        <Button
          :color="btnColorUp"
          class="md:w-[250px]"
          @onClick="bntSignUp()"
        >
          Sign up
        </Button>
      </div>
      <div>
      </div>
    </div>

    <div class="md:w-[500px] md:m-auto mx-2">
      <SingIn v-if="showSingIn" />
      <SingUp v-else />
    </div>
  </div>
</template>
