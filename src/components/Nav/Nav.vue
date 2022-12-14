<script setup lang="ts">
import { ref } from "vue";
import { INav } from "./INav";
import { useRouter } from "vue-router";
import { useUserStore } from "../../store/index";
import Input from "../../components/Input/Input.vue";

defineEmits<{ (e: "onNotification"): void; (e: "onIndex"): void }>();

const useUser = useUserStore();
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
  if (event.name === "exit") {
    window.localStorage.removeItem("localStorage");
    router.push({ name: "sign" });
  } else {
    router.push({ name: event.name });
  }
}

const menuNav = ref<INav[]>([
  { image: "./src/assets/nav/Bitcon.svg", name: "bitcon" },
  { image: "./src/assets/nav/Chart.svg", name: "chart" },
  { image: "./src/assets/nav/Extrato.svg", name: "extract" },
  { image: "./src/assets/nav/Investiment.svg", name: "investiment" },
  { image: "./src/assets/nav/User.svg", name: "user" },
  { image: "./src/assets/nav/Exit.svg", name: "exit" },
]);
</script>

<template>
  <div>
    <div class="flex justify-between">
      <div class="flex items-center">
        <img
          class="h-10 w-10 rounded-full cursor-pointer"
          :src="useUser.image"
          alt="user"
          @click="$emit('onIndex')"
        />
        <div class="text-green ">
          <p class="font-medium px-2" v-if="!inputShow">
            User: {{ useUser.user }}
          </p>
          <p class="font-medium px-2 flex" v-if="!inputShow">
            Money: <div class="pl-1" id="value">{{ useUser.money }}</div> 
          </p>
        </div>
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
          alt="Notifica????o"
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
        <p class="text-gray capitalize hover:text-green">{{ Nav.name }}</p>
        <hr class="text-gray-light" />
      </div>
    </div>
  </div>
</template>
