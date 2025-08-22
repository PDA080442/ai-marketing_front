<template>
  <v-app-bar flat height="68" class="appbar">
    <div class="brand d-flex align-center">
      <div class="dot mr-2"></div>
      <span class="title">AI Analysis</span>
    </div>

    <v-spacer />

    <v-btn variant="tonal" color="primary" class="mr-5" @click="scan">New Scan</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import router from '@/router'
const scan = () => {
  router.push({ path: '/' })
}
</script>

<style scoped>
.v-app-bar.v-toolbar {
  background: #f7f9fc !important;
}
.appbar {
  border-bottom: 1px solid rgba(10, 32, 66, 0.06);
}
.brand .dot {
  margin-left: 15px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #0a7cff;
  box-shadow: 0 0 0 4px rgba(10, 124, 255, 0.12);
}
.brand .title {
  font-weight: 800;
  letter-spacing: -0.02em;
}
</style>
