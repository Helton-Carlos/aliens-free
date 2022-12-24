<script setup lang="ts">
import { ref } from "vue";
import { INav } from "./INav";
import { useRouter } from "vue-router";
import Input from "../../components/Input/Input.vue";

defineEmits<{ (e: "onNotification"): void; (e: "onIndex"): void }>();

const name = ref<string>("Helton");
const search = ref<string>("");
const router = useRouter();

const inputShow = ref<boolean>(false);
const menuShow = ref<boolean>(false);

function onSearch() {
  inputShow.value = !inputShow.value;
}

function onMenu() {
  menuShow.value = !menuShow.value;
}

function onRouter(event: INav) {
  menuShow.value = !menuShow.value;
  if (event.name === "Exit") {
    router.push({ name: "sign" });
  } else {
    window.localStorage.removeItem('localStorage');
    router.push({ name: event.name });
  }
}

const menuNav = ref<INav[]>([
  { image: "./src/assets/nav/Bitcon.svg", name: "Bitcon" },
  { image: "./src/assets/nav/Chart.svg", name: "Chart" },
  { image: "./src/assets/nav/Extrato.svg", name: "Extrat" },
  { image: "./src/assets/nav/Investiment.svg", name: "Investiment" },
  { image: "./src/assets/nav/User.svg", name: "User" },
  { image: "./src/assets/nav/Exit.svg", name: "Exit" },
]);
</script>

<template>
  <div>
    <div class="flex justify-between">
      <div class="flex items-center">
        <img
          class="h-10 w-10 rounded-full cursor-pointer"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="user"
          @click="$emit('onIndex')"
        />
        <p class="text-green font-medium px-2" v-if="!inputShow">
          User: {{ name }}
        </p>
      </div>

      <div v-if="inputShow">
        <Input
          id="text"
          type="text"
          placeholder="Search ..."
          v-model:modelValue="search"
          class="md:w-[500px]"
        />
      </div>

      <div class="flex items-center">
        <img
          src="../../assets/icon/Lupa.svg"
          alt="Lupa"
          class="cursor-pointer pr-2"
          @click="onSearch"
        />
        <img
          v-if="!inputShow"
          src="../../assets/icon/Menu.svg"
          alt="Menu"
          class="cursor-pointer px-2"
          @click="onMenu"
        />
        <img
          v-if="!inputShow"
          src="../../assets/icon/Notificacao.svg"
          alt="Notificação"
          class="cursor-pointer"
          @click="$emit('onNotification')"
        />
      </div>
    </div>

    <div
      v-show="menuShow"
      class="md:flex md:justify-between items-center gap-4 mx-auto mt-7 pb-2"
    >
      <div
        class="flex items-center gap-2 py-4 cursor-pointer md:py-0"
        v-for="(Nav, Index) in menuNav"
        :key="Index"
        @click="onRouter(Nav)"
      >
        <img :src="Nav.image" :alt="Nav.name" class="w-[20px] md:h-[20px]" />
        <p class="text-gray hover:text-green">{{ Nav.name }}</p>
        <hr class="text-gray-light" />
      </div>
    </div>
  </div>
</template>
