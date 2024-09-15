<template>
    <div>
        <div class="app-table-data">
            <div class="header-row">
                <div :style="{ width: calculateWidth() }" v-for="header in $props.headers">{{ header.title }}</div>
            </div>
            <div v-for="item in $props.items" class="data-row">
                <div 
                    :style="{ width: calculateWidth() }" 
                    class="data-row-item" 
                    v-for="data in Object.keys(item)">
                    {{ item[data] }}
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
        }
    })

    function calculateWidth(): string {
        const result = 100 / (Object.keys(props.headers).length) + "%";
        console.log(result);
        

        return result;
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
        border-bottom: 1px solid rgb(158, 156, 147);
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

</style>