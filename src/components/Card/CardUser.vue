<script setup lang="ts">
import Button from "@/components/Button/Button.vue";
import { useUserStore } from "@/store/index";

const useUser = useUserStore();
</script>

<template>
  <div>
    <div
      class="w-full bg-white border border-gray-900 rounded-lg shadow-md mt-2"
    >
      <div class="flex flex-col items-center mt-4">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          :src="useUser.users?.image"
          :alt="useUser.users?.user"
        />
        <h5 class="text-xl font-medium text-blue">
          {{ useUser.users?.user }}
        </h5>
        <span class="text-sm text-green-500">{{
          useUser.users?.profession
        }}</span>
        <div class="flex m-2 space-x-3">
          <Button title="Change" class="py-2 my-2 w-full" />
          <Button title="To edit" class="py-2 my-2 w-full" />
        </div>
      </div>
    </div>
  </div>
</template>
