<template>
  <AppLoading v-if="isLoadingVisible" />
  <div>
    <NuxtLayout />
    <div class="container mx-auto relative h-full">
        <NuxtPage />
    </div>
    <LoginDialog />
    <CreateTitleDialog />
  </div>
</template>

<script setup lang="ts">

  import { useLayoutStore } from './stores/layout';

  import LoginDialog from '~/pages/auth/loginDialog.vue';
  import CreateTitleDialog from './pages/home/createTitleDialog.vue';

  const layoutStore = useLayoutStore();

  const isLoadingVisible = computed(() => layoutStore.isLoadingVisible)

</script>

<style>

  html, body {
    background-color: #E5E1DA;
    height: 100vh;
  }

  ::-webkit-scrollbar {
      width: 6px;
      height: 12px;
  }

  ::-webkit-scrollbar-track {
      background: #f0f0f0;
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px; 
  }

  
  ::-webkit-scrollbar-thumb:hover {
      background: #555;
  }

</style>