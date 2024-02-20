<script setup lang="ts">
import { ref } from "vue";
import { INotification } from "@/types/utilities";
import { api } from "@/server/axios";

import Card from "@/components/Card/Card.vue";

const codeId = defineProps<{ id: number }>();

const notes = ref<INotification>(null!);

function getNotification() {
  api.get("/notification").then((response) => {
    const { note } = response.data;
    notes.value = note[codeId.id];
    
  });
}

getNotification();
</script>

<template>
  <div>
    <div class="bg-white w-full min-h-screen py-4">
      <div class="w-11/12 mx-auto">
        <Card
          :image="notes.image"
          :title="notes.title"
          :subtitle="notes.context"
          :arrow="false"
        />
      </div>
    </div>
    <div class="vl-parent">
     
    </div>
  </div>
</template>
