<template>
    <div>
        <div class="app-list-item-data flex">
            <div class="value-wrapper flex items-center justify-center">
                <div class="value flex items-center justify-center">{{ $props.value }}</div>
            </div>
            <div class="title-wrapper flex p-2">{{ $props.title }}</div>
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

    .app-list-item-data {
        height: auto;
        align-items: stretch;
        border: 1px solid transparent;
        user-select: none;
        background-color: rgba(170, 215, 217, .7);
        border-radius: 6px;
    }

    .value-wrapper {
        width: 50px;
        flex-shrink: 0;
        min-height: 100%;
        border: 1px solid rgb(152, 212, 215);
        background-color: rgb(152, 212, 215);
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    .value {
        height: 20px;
        width: 35px;
        background-color: rgba(255, 255, 255, .7);
        border: 1px solid transparent;
        border-radius: 5px;
        font-size: 11px;

    }

    .title {
        word-break: keep-all;
        overflow: hidden;
        height: 100%;
    }

    .app-list-item-data:hover {
        cursor: pointer;
        background-color: rgba(170, 215, 217, 1);
    }

</style>