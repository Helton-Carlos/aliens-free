<script setup lang="ts">
import { ref } from "vue";
import Input from "../../components/Input/Input.vue";

defineEmits<{ (e: "onNotification"): void; (e: "onIndex"): void }>();

const name = ref<string>("Helton");
const search = ref<string>("");

const inputShow = ref<boolean>(false);
const menuShow = ref<boolean>(false);

function onSearch() {
  inputShow.value = !inputShow.value;
}

function onMenu() {
  menuShow.value = !menuShow.value;
}
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

    <div v-show="menuShow" class="flex justify-between items-center py-4">
      <div class="text-center">
        <img
          src="../../assets/icon/Deposit.svg"
          alt="Deposit"
          class="cursor-pointer h-[50px] lg:h-[80px]"
          @click="onSearch"
        />
        <p class="text-gray">Deposit</p>
      </div>

      <div class="text-center">
        <img
          src="../../assets/icon/Referral.svg"
          alt="Referral"
          class="cursor-pointer h-[50px] lg:h-[80px]"
          @click="onSearch"
        />
        <p class="text-gray">Referral</p>
      </div>

      <div class="text-center">
        <img
          src="../../assets/icon/Grid-trading.svg"
          alt="Grid-trading"
          class="cursor-pointer h-[50px] lg:h-[80px]"
          @click="onSearch"
        />
        <p class="text-gray">Trading</p>
      </div>

      <div class="text-center">
        <img
          src="../../assets/icon/Savings.svg"
          alt="Savings"
          class="cursor-pointer h-[50px] lg:h-[80px]"
          @click="onSearch"
        />
        <p class="text-gray">Savings</p>
      </div>
    </div>
  </div>
</template>
