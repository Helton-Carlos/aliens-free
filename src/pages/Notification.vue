<script setup lang="ts">
import { ref } from "vue";
import { INotification } from "@/types/utilities";
import { api } from "@/server/axios";
import Loading from "vue-loading-overlay";
import Card from "@/components/Card/Card.vue";

const codeId = defineProps<{ id: number }>();
const widthLoading = ref<number>(50);

const notes = ref<INotification>(null!);

const isLoading = ref<boolean>(false);
const fullPage = ref<boolean>(true);

function getNotification() {
  isLoading.value = true;
  api.get("/notification").then((response) => {
    const { note } = response.data;
    notes.value = note[codeId.id];
    isLoading.value = false;
  });
}

getNotification();
</script>

<template>
  <div>
    <div class="bg-white w-full min-h-screen py-4">
      <div class="w-11/12 mx-auto">
        <Card
          :imagem="notes.imagem"
          :title="notes.title"
          :subtitle="notes.context"
          :arrow="false"
        />
      </div>
    </div>
    <div class="vl-parent">
      <loading
        v-model:active="isLoading"
        color="#5ED5A8"
        loader="spinner"
        :width="widthLoading"
        background-color="#000000"
        :can-cancel="true"
        :is-full-page="fullPage"
      />
    </div>
  </div>
</template>
