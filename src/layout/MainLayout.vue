<script setup lang="ts">
import { ref } from 'vue'
import MainHeader from './components/MainHeader.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const drawer = ref(true)
</script>

<template>
  <v-app>
    <MainHeader @toggle-drawer="drawer = !drawer" v-if="!route.meta.hideLayout" />
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
  margin: 0 auto;
}
</style>
