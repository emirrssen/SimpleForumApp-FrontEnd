<template>
    <div class="app-loading flex flex-col justify-center items-center">
        Yükleniyor...
        <div class="loading-container">
            <div class="loading-line"></div>
        </div>
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

    .loading-container {
        width: 100px;
        height: 2px;
        background-color: #ddd;
        overflow: hidden;
        position: relative;
    }

    .loading-line {
        width: 50px;
        height: 100%;
        background-color: white;
        position: absolute;
        left: -50px;
        animation: loading 0.7s linear infinite;
    }

    @keyframes loading {
        0% {
            left: -50px;
        }
        100% {
            left: 100%;
        }
    }

</style>