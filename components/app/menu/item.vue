<template>
    <div class="app-menu-item p-3 flex items-center justify-start">
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
        width: 100%;
        background-color: rgb(251, 249, 241);
        gap: 8px;
    }

    .app-menu-item:hover {
        background-color: rgb(232, 230, 223);
    }

</style>