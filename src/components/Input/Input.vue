<script setup lang="ts">
defineProps<{
  label?: string;
  id: string;
  placeholder: string;
  type: string;
  modelValue: string | number;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", id: string | number): void;
}>();

function updateInput(event: any) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white md:mb-4"
    >
      {{ label }}
    </label>

    <input
      data-testid="add-word-input"
      :id="id"
      :type="type"
      :value="modelValue"
      class="input-standard"
      :placeholder="placeholder"
      @input="updateInput"
      required
    />
  </div>
</template>
