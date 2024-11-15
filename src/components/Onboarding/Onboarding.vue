<script setup lang="ts">
import boarding from './onBoarding';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../Button/Button.vue';
import Ellipse from '../Icon/Ellipse.vue';

const count = ref<number>(0);
const router = useRouter();

function allCount(index: number) {
  count.value = index;
}

function bntNext() {
  count.value < 2 ? count.value++ : router.push({ name: 'login' });
}
</script>

<template>
  <div class="text-center w-5/6">
    <img
      class="m-auto h-[250px] mt-8"
      :src="boarding[count].image"
      :alt="boarding[count].title"
    />

    <h3
      class="text-white pt-4 font-medium animate__backInRight"
      d
      data-testid="title-id"
    >
      {{ boarding[count].title }}
    </h3>

    <p class="text-gray-medio pt-2 text-sm" data-testid="subtitle-id">
      {{ boarding[count].subtitle }}
    </p>

    <div class="flex justify-center gap-2 py-2">
      <Ellipse :value="count === 0" @onClick="allCount(0)" />
      <Ellipse :value="count === 1" @onClick="allCount(1)" />
      <Ellipse :value="count === 2" @onClick="allCount(2)" />
    </div>

    <Button class="m-2" @onClick="bntNext()" data-testid="btn-id">
      Next
    </Button>
  </div>
</template>
