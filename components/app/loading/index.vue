<template>
    <div class="app-loading flex justify-center items-center">
        Yükleniyor...
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

    .app-loading {
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, .4);
        position: absolute;
        z-index: 1000;
        user-select: none;
        color: white;
        font-weight: 400;
        font-size: 16px;
    }

</style>