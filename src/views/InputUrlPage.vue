<template>
  <v-main class="fill-height d-flex align-center justify-center">
    <InputField />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputField from '@/components/Input/InputField.vue'

export default defineComponent({
  name: 'InputPage',
  components: { InputField },
})
</script>

<style scoped>
.v-main {
  padding: 0;
  margin: 0;
  background: #f5f7fa;
}
</style>
