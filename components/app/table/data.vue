<template>
    <div>
        <div class="app-table-data">
            <div class="header-row">
                <div :style="{ width: header.width ? header.width : calculateWidth() }" v-for="header in $props.headers">{{ header.title }}</div>
            </div>
            <div :class="{ selectable: $props.selectable }" v-for="item in $props.items" class="data-row" @click="selectOnClick(item)">
                <div
                class="data-row-item" 
                v-for="data in $props.headers"
                :style="{ width: data.width ? data.width : calculateWidth() }" 
                >
                    {{ Object.keys(item).some(x => x === data.field) ? item[data.field] : "" }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import type { AppDataTableHeader } from '~/services/app/types';

    const props = defineProps({
        headers: {
            type: Array<AppDataTableHeader>,
            required: true
        },
        items: {
            type: Array<any>,
            required: true
        },
        selectable: {
            type: Boolean,
            required: true
        }
    })

    const emit = defineEmits(['onSelected'])

    function calculateWidth(): string {
        return 100 / (Object.keys(props.headers).length) + "%";
    }

    function selectOnClick(item: any) {
        emit('onSelected', item);
    }

</script>

<style scoped> 

    .app-table-data {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        border-bottom: 2px solid rgb(158, 156, 147);
        width: 100%;
        padding: 0 12px 8px 12px;
    }

    .data-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgb(158, 156, 147);
        width: 100%;
        padding: 6px 12px 4px 12px;
    }

    .data-row:hover {
        background-color: rgba(0, 0, 0, .1);
    }

    .data-row-item {
        display: flex;
        align-items: center;
        justify-content: start
    }

    .selectable:hover {
        cursor: pointer;
    }

</style>