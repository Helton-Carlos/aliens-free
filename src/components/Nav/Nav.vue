<script setup lang="ts">
import { ref } from "vue";
import { INav } from "./INav";
import { useRouter } from "vue-router";
import { userLocalStorageStore } from "@/store/user";
import Input from "@/components/Input/Input.vue";

const search = ref<string>("");
const router = useRouter();

const { 
  userStatus, 
  removeUserStorage
} = userLocalStorageStore();

const { name, money, image } = userStatus();

const inputShow = ref<boolean>(false);
const menuShow = ref<boolean>(false);

const menuNav = ref<INav[]>([
  { image: "./src/assets/nav/Bitcon.svg", name: "bitcon" },
  { image: "./src/assets/nav/Chart.svg", name: "chart" },
  { image: "./src/assets/nav/Extrato.svg", name: "extract" },
  { image: "./src/assets/nav/Investiment.svg", name: "investiment" },
  { image: "./src/assets/nav/User.svg", name: "user" },
  { image: "./src/assets/nav/Exit.svg", name: "exit" },
]);

function onNotification() {
  menuShow.value = false;

  router.push({ name: 'notificationView'});
}

function onSearch() {
  inputShow.value = !inputShow.value;
}

function onMenu() {
  menuShow.value = !menuShow.value;
}

function onIndex() {
  menuShow.value = false;
  router.push({ name: 'home'});
}

function onRouter(event: INav) {
  menuShow.value = !menuShow.value;
  
  if (event.name === "exit") {
    removeUserStorage();

    router.push({ name: "login" });
  } else {
    router.push({ name: event.name });
  }
}
</script>

<template>
  <div>
    <div class="flex justify-between">
      <div class="flex items-center">
        <img
          :src="image"
          alt="user"
          class="h-10 w-10 rounded-full cursor-pointer"
          @click="onIndex()"
        />
        
        <div class="text-green ">
          <p 
            v-if="!inputShow"
            class="font-medium px-2" 
          >
            User: {{ name }}
          </p>
          <p 
            v-if="!inputShow" 
            class="font-medium px-2 flex"
          >
            Money: <div class="pl-1" id="value">{{ money }}</div> 
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
          src="@/assets/icon/Lupa.svg"
          alt="Lupa"
          class="cursor-pointer pr-2"
          @click="onSearch"
        />

        <img
          v-if="!inputShow"
          src="@/assets/icon/Menu.svg"
          alt="Menu"
          class="cursor-pointer px-2"
          @click="onMenu"
        />

        <img
          v-if="!inputShow"
          src="@/assets/icon/Notificacao.svg"
          alt="Notificação"
          class="cursor-pointer"
          @click="onNotification"
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
        <img 
          :src="Nav.image" 
          :alt="Nav.name" 
          class="w-[20px] md:h-[20px]" 
        />

        <p class="text-gray capitalize hover:text-green">
          {{ Nav.name }}
        </p>

        <hr class="text-gray-light" />
      </div>
    </div>
  </div>
</template>
