<template>
    <div>
        <div class="app-list-item">
            <div class="left-content-data-wrapper" v-if="isTypeData">
                <div class="content-data">{{ value }}</div>
            </div>
            <div class="left-content-numbered-wrapper" v-if="isTypeNumbered">
                <div class="content-numbered">{{ value }}</div>
            </div>
            <div class="px-3 py-2">
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
        type: {
            type: String,
            required: false,
            default: "plain"
        },
        value: {
            type: String,
            required: false
        }
    })

    const isTypeData: boolean = props.type === 'data';
    const isTypeNumbered: boolean = props.type === 'numbered';
    const isTypePlain: boolean = props.type === 'plain';

</script>

<style scoped>

    .app-list-item {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: start;
        border: 1px solid transparent;
        user-select: none;
        background-color: rgba(170, 215, 217, .7);
        border-radius: 6px;
        overflow: hidden;
    }

    .app-list-item:hover {
        cursor: pointer;
        background-color: rgba(170, 215, 217, 1);
    }

    .left-content-data-wrapper {
        width: 50px;
        height: 100%;
        background-color: rgb(152, 212, 215);
        padding: 0;
        margin: 0;
        border: 1px solid rgb(152, 212, 215);
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content-data {
        height: 20px;
        width: 35px;
        background-color: rgba(255, 255, 255, .7);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        border-radius: 6px;
        font-size: 12px;
    }

    .left-content-numbered-wrapper {
        width: 30px;
        height: 100%;
        background-color: rgb(152, 212, 215);
        padding: 0;
        margin: 0;
        border: 1px solid rgb(152, 212, 215);
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content-numbered {
        height: 20px;
        width: 20px;
        background-color: rgba(255, 255, 255, .7);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        border-radius: 20px;
        font-size: 11px;
    }

</style>