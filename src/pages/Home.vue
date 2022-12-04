<script setup lang="ts">
import { ref } from "vue";
import Info from "../components/Info/Info.vue";
import Notification from "../components/Notification/Notification.vue";
import Nav from "../components/Nav/Nav.vue";

const pageValue = ref<boolean>(false)
 
function onNotification() {
  pageValue.value = true
}

function onMenu() {
  pageValue.value = false
}
</script>

<template>
  <div>
    <div class="w-11/12 mx-auto py-6">
      <Nav @onNotification="onNotification" @onMenu="onMenu" />
    </div>

    <div class="bg-white w-full min-h-screen py-4">
      <Info v-if="!pageValue"/>
      <Notification v-if="pageValue"/>
    </div>
  </div>
</template>
