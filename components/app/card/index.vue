<template>
    <div class="app-card p-4 flex items-center justify-start" style="gap: 24px;">
        <div v-if="$slots.leftContent" class="flex p-1 items-center justify-start">
            <slot name="leftContent"></slot>
        </div>
        <div style="width: 100%;" v-if="$slots.centerContent" class="flex flex-col p-1 justify-center">
            <slot name="centerContent"></slot>
        </div>
        <div v-if="$slots.rightContent" class="flex p-1 items-center justify-end">
            <slot name="rightContent"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

    .app-card {
        background-color: rgb(251, 249, 241);
        border-radius: 10px;
        border: 1px solid rgb(158, 156, 147);
    }

</style>