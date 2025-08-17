<template>
  <v-container fluid class="pc-wrapper">
    <ScrinShots :items="mockScreenshots" />
  </v-container>
</template>

<script setup lang="ts">
import ScrinShots from './ScrinShots.vue'
import { mockScreenshots } from '@/mocks/screenshot.mocks'
</script>

<style scoped>
.pc-wrapper {
  background: transparent;
  min-height: 100%;
}
</style>
