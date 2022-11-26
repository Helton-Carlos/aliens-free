<script setup lang="ts">
defineProps<{
  label: string;
  id: string;
  placeholder: string;
  type: string;
  modelValue: string | number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', id: string | number): void
}>()

function updateInput(event: any) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="block mb-2 capitalize text-sm font-medium text-gray-900 dark:text-white"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      class="block mb-8 bg-dark w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:border-green focus:ring-green focus:outline-none focus:ring focus:ring-opacity-40"
      :placeholder="placeholder"
      @input="updateInput"
      required
    />
  </div>
</template>
