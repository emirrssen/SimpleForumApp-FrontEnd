<template>
  <AppLoading v-if="isLoadingVisible" />
  <div>
    <NuxtLayout />
    <div class="container mx-auto relative h-full">
        <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useLayoutStore } from './stores/layout';

  const layoutStore = useLayoutStore();

  const isLoadingVisible = computed(() => layoutStore.isLoadingVisible)

</script>

<style>

  html, body {
    background-color: #E5E1DA;
    height: 100vh;
  }

</style>