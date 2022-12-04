<script setup lang="ts">
import { ref } from "vue";
import Input from "../../components/Input/Input.vue";
import { useRouter } from "vue-router";

const name = ref<string>("Helton");
const search = ref<string>("");

const router = useRouter();
const inputShow = ref<boolean>(false);

function onSearch() {
  inputShow.value = !inputShow.value;
}

function onMenu() {}

function onNotification() {
  router.push({ name: "index" });
}
</script>

<template>
  <div class="flex justify-between">
    <div class="flex items-center">
      <img
        class="h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
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
        class="cursor-pointer pl-2"
        @click="onNotification"
      />
    </div>
  </div>
</template>
