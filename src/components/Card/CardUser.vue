<script setup lang="ts">
import Button from "../../components/Button/Button.vue";
</script>

<template>
  <div>
    <div
      class="w-full max-w-sm bg-white border border-gray-900 rounded-lg shadow-md "
    >
     
      <div class="flex flex-col items-center mt-4">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-blue ">
          Bonnie Green
        </h5>
        <span class="text-sm text-green-500"
          >Visual Designer</span
        >
        <div class="flex m-4 space-x-3">
          <Button title="Change" class="py-2 my-2 w-full" />
          <Button title="To edit" class="py-2 my-2 w-full" />
        </div>
      </div>
    </div>
  </div>
</template>
