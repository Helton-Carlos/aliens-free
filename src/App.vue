<script setup lang="ts">
import Nav from './components/Nav/Nav.vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const pageValue = ref<boolean>(false)

function onNotification() {
  router.push({ name: 'notificationView'});
}

function onIndex() {
  router.push({ name: 'home'});
}
</script>

<template>
<div>
  <div class="w-11/12 mx-auto py-7" v-if="route.meta.navBar">
    <Nav @onNotification="onNotification" @onIndex="onIndex" />
  </div>
  <router-view></router-view>
</div>
</template>