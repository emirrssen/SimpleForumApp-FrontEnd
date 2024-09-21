<template>
    <div>
        <div class="app-list-item px-3 py-2">
            {{ $props.title }}
        </div>
    </div>
</template>

<script setup lang="ts">

    const props = defineProps({
        title: {
            type: String,
            required: true
        }
    })

</script>

<style scoped>

    .app-list-item {
        display: flex;
        align-items: center;
        justify-content: start;
        border: 1px solid transparent;
        user-select: none;
        background-color: rgba(170, 215, 217, .7);
        border-radius: 6px;
    }

    .app-list-item:hover {
        cursor: pointer;
        background-color: rgba(170, 215, 217, 1);
    }

</style>