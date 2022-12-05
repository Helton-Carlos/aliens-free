<script setup lang="ts">
import { ref } from "vue";
import Loading from "vue-loading-overlay";
import Card from "../Card/Card.vue";
import { api } from "../../server/axios";
import { INotification } from "./Notification";

const notes = ref<INotification[]>([]);

const isLoading = ref<boolean>(false);
const fullPage = ref<boolean>(true);

function init() {
  isLoading.value = true;

  api.get("/notification").then((response) => {
    const { note } = response.data;
    notes.value = note;
    isLoading.value = !isLoading.value;
  });
}

init();
</script>

<template>
  <div class="w-11/12 mx-auto">
    <div>
      <h3 class="text-lg font-semibold">Notification</h3>
      <Card
        v-for="note in notes"
        key="note"
        imagem="./src/assets/icon/Nave.svg"
        :title="note.title"
        :subtitle="note.context"
      />
      <loading
        v-model:active="isLoading"
        color="#5ED5A8"
        loader="spinner"
        width="50"
        background-color="#000000"
        :is-full-page="fullPage"
      />
    </div>
  </div>
</template>
