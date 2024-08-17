<template>
    <div class="app-menu-item px-2 py-1 flex items-center justify-start">
        <Icon :name="$props.icon" />
        <span>{{ $props.title }}</span>
    </div>
</template>

<script lang="ts" setup>

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    })

</script>

<style scoped>

    .app-menu-item {
        min-width: 120px;
        background-color: transparent;
        gap: 8px;
        user-select: none;
    }

    .app-menu-item:hover {
        background-color: rgb(232, 230, 223);
        cursor: pointer;
    }

</style>