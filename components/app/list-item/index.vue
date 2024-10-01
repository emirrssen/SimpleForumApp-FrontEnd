<template>
    <div>
        <div class="app-list-item">
            <div class="px-3 py-2 title">
                {{ $props.title }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: false
        }
    })

</script>

<style scoped>

    .app-list-item {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        border: 1px solid transparent;
        user-select: none;
        background-color: rgba(170, 215, 217, .7);
        border-radius: 6px;
    }

    .title {
        word-break: keep-all;
        overflow: hidden;
        height: 100%;
    }

    .app-list-item:hover {
        cursor: pointer;
        background-color: rgba(170, 215, 217, 1);
    }

</style>