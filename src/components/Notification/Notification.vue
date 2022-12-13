<script setup lang="ts">
import { ref } from "vue";
import Loading from "vue-loading-overlay";
import { api } from "../../server/axios";
import Card from "../Card/Card.vue";
import { useRouter } from "vue-router";
import { INotification } from "../../types/utilities";

const notes = ref<INotification[]>([]);

const isLoading = ref<boolean>(false);
const fullPage = ref<boolean>(true);

const router = useRouter();

function init() {
  isLoading.value = true;

  api.get("/notification").then((response) => {
    const { note } = response.data;
    notes.value = note;
    isLoading.value = !isLoading.value;
  });
}

function onNotification(index: number){
  router.push({ name: 'notification', params: { id: index } })
}

init();
</script>

<template>
  <div class="w-11/12 mx-auto">
    <div>
      <h3 class="text-lg font-semibold">Notification</h3>
      <Card
        v-for="(note, index) in notes"
        key="note"
        @click="onNotification(index)"
        :title="note.title"
        :subtitle="note.context"
        :imagem="note.imagem"
        :arrow="true"
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
