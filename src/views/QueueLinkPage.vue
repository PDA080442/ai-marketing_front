<template>
  <v-main class="fill-height d-flex align-center justify-center">
    <QueueList />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QueueList from '@/components/Queue/QueueList.vue'

export default defineComponent({
  name: 'QueuePage',
  components: { QueueList },
})
</script>

<style scoped>
.v-main {
  padding: 0;
  margin: 0;
  background: #f5f7fa;
}
</style>
