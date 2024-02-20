<script setup lang="ts">
import { ref } from "vue";
import { api } from "@/server/axios";
import { useRouter } from "vue-router";
import { INotification } from "@/types/utilities";

import Card from "@/components/Card/Card.vue";

const notes = ref<INotification[]>([]);

const router = useRouter();

function init() {
  api.get("/notification").then((response) => {
    const { note } = response.data;
    notes.value = note;
  });
}

function onNotification(index: number) {
  router.push({ name: "notification", params: { id: index } });
}

init();
</script>

<template>
  <div class="bg-gray-light w-full min-h-screen py-4">
    <div class="w-11/12 mx-auto">
      <div>
        <h3 class="text-lg font-semibold">Notification</h3>
        <Card
          v-for="(note, index) in notes"
          :key="index"
          @click="onNotification(index)"
          :title="note.title"
          :subtitle="note.context"
          :image="note.image"
          :arrow="true"
        />
      </div>
    </div>
  </div>
</template>
