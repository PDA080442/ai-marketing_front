<script setup lang="ts">
import { ref } from 'vue'
import MainHeader from './components/MainHeader.vue'

const drawer = ref(true)
</script>

<template>
  <v-app>
    <!-- Header -->
    <MainHeader @toggle-drawer="drawer = !drawer" />

    <!-- Sidebar (должен идти сразу после app-bar и перед v-main) -->

    <!-- Контент -->
    <v-main class="bg">
      <div class="page-wrap">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.bg {
  background: #f7f9fc;
}
.page-wrap {
  max-width: 1180px;
  margin: 24px auto;
  padding: 0 16px 32px;
}
</style>
