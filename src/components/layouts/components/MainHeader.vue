<template>
  <header class="main-header">
    <!-- Лого + название -->
    <div class="left">
      <v-icon icon="mdi-robot-outline" size="26" class="logo" />
      <h1 class="title">AI Marketing Crawler</h1>
    </div>

    <!-- Навигация -->
    <nav class="right">
      <RouterLink to="/input-url" class="nav-link">
        <v-icon icon="mdi-link-variant" size="18" class="mr-1" />
        Input Urls
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 28px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

/* Левая часть */
.left {
  display: flex;
  align-items: center;
}
.logo {
  color: #0a7cff; /* основной акцент */
  margin-right: 10px;
}
.title {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: #0a7cff; /* основной акцент */
  letter-spacing: 0.2px;
}

/* Правая часть */
.right {
  display: flex;
  align-items: center;
}
.nav-link {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  text-decoration: none;
  color: #1e293b;
  padding: 6px 14px;
  border-radius: 8px;
  transition:
    background 0.2s,
    color 0.2s;
}
.nav-link:hover {
  background: #e8f3ff; /* мягкий голубой фон */
  color: #0a7cff; /* акцентный синий */
}
</style>
