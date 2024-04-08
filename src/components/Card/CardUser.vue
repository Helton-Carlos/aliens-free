<script setup lang="ts">
import Button from "@/components/Button/Button.vue";
import { userLocalStorageStore } from "@/store/user";

const { 
  userStatus
} = userLocalStorageStore();

const { 
  name, profession, image 
} = userStatus();
</script>

<template>
  <div>
    <div
      class="w-full bg-white border border-gray-900 rounded-lg shadow-md mt-2"
    >
      <div class="flex flex-col items-center mt-4">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          :src="image"
          :alt="name"
        />

        <h5 class="text-xl font-medium text-blue">
          {{ name }}
        </h5>

        <span class="text-sm text-green-500">
          {{ profession }}
        </span>

        <div class="flex m-2 space-x-3">
          <Button class="py-2 my-2 w-full">
            Change
          </Button>
          
          <Button class="py-2 my-2 w-full">
            To edit
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
