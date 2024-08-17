<template>
    <div class="app-menu flex py-1 items-center justify-center">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

    .app-menu {
        background-color: rgb(251, 249, 241);
        min-width: 120px;
        border-radius: 8px;
    }

    

</style>