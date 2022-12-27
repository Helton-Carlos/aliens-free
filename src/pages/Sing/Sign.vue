<script setup lang="ts">
import Close from "../../components/Icon/Close.vue";
import Button from "../../components/Button/Button.vue";
import SingIn from "../../components/SingIn/SingIn.vue";
import SingUp from "../../components/SingUp/SingUp.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const showSingIn = ref<boolean>(true);
const showSingUp = ref<boolean>(false);

const btnColorIn = ref<string>("white");
const btnColorUp = ref<string>("dark");

function clickClose() {
  router.push({ name: "cover" });
}

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
      <Close @onClick="clickClose" class="p-5 lg:p-8" />

      <div class="mt-4 justify-items-center">
        <Button
          title="sign in"
          :color="btnColorIn"
          class="md:w-[250px]"
          @onClick="bntSignIn()"
        />
        <Button
          title="sign up"
          :color="btnColorUp"
          class="md:w-[250px]"
          @onClick="bntSignUp()"
        />
      </div>
      <div>
      </div>
    </div>

    <div class="lg:w-2/4 lg:m-auto">
      <SingIn v-if="showSingIn" />
      <SingUp v-else />
    </div>
  </div>
</template>
