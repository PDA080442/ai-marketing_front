<template>
  <v-snackbar
    v-model="internalVisible"
    :color="color"
    location="top"
    elevation="0"
    transition="slide-y-transition"
    class="snackbar"
  >
    <div class="snackbar-content">
      <span>{{ text }}</span>
    </div>
  </v-snackbar>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  color: 'success' | 'error'
  text: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const internalVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>
