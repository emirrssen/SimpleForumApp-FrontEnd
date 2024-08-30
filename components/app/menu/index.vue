<template>
    <div class="app-menu flex py-1 items-center justify-center" :style="style">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>

    const props = defineProps({
        minWidth: {
            type: String,
            required: true
        }
    })

    const style = {
        minWidth: props.minWidth
    }

</script>

<style scoped>

    .app-menu {
        background-color: rgb(251, 249, 241);
        border-radius: 8px;
        z-index: 999;
        border: 1px solid #9E9C93;
    }

    

</style>