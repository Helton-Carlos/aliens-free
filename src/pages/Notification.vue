<script setup lang="ts">
import { ref } from "vue";
import { INotification } from "../types/utilities";
import { api } from "../server/axios";
import { useRouter } from "vue-router";
import Loading from "vue-loading-overlay";
import Nav from "../components/Nav/Nav.vue";
import Card from "../components//Card/Card.vue";

const codeId = defineProps<{ id: number }>();

const notes = ref<INotification[]>([]);

const isLoading = ref<boolean>(false);
const fullPage = ref<boolean>(true);

const router = useRouter();

function getNotification() {
  isLoading.value = true;
  api.get("/notification").then((response) => {
    const { note } = response.data;
    notes.value = note[codeId.id];
    isLoading.value = false;
  });
}

function onIndex() {
  router.push({ name: 'home' })
}

function onNotification() {
  window.history.back()
}

getNotification()
</script>

<template>
  <div>
    <div class="w-11/12 mx-auto py-7">
      <Nav @onIndex="onIndex" @onNotification="onNotification" />
    </div>

    <div class="bg-white w-full min-h-screen py-4">
      <Card
        :imagem="notes.imagem"
        :title="notes.title"
        :subtitle="notes.context"
        :arrow="false"
      />
    </div>
    <div class="vl-parent">
      <loading
        v-model:active="isLoading"
        color="#5ED5A8"
        loader="spinner"
        width="50px"
        background-color="#000000"
        :can-cancel="true"
        :is-full-page="fullPage"
      />
    </div>
  </div>
</template>
