<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <MainHeader />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import MainHeader from './components/layouts/components/MainHeader.vue'
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 0;
  height: 0;
}
nav a {
  margin-left: 16px;
  text-decoration: none;
  color: inherit;
}
body {
  padding: 0;
  margin: 0;
}
</style>
