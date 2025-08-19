<template>
  <v-main class="fill-height d-flex justify-center">
    <ResultTabs />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResultTabs from '@/components/TabMenuResult/ResultTabs.vue'

export default defineComponent({
  name: 'ResultPage',
  components: { ResultTabs },
})
</script>

<style scoped>
.v-main {
  padding: 0;
  background: #f5f7fa;
}
</style>
