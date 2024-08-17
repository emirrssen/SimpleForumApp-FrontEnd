<template>
    <div class="app-nav-button p-3 flex items-center">
        <div class="icon-wrapper flex items-center justify-center">
            <Icon :name="$props.icon" size="24px" />
        </div>
        {{ $props.title }}
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

    .app-nav-button {
        height: 40px;
        border-radius: 50px;
        background-color: rgba(251, 249, 241, .5);
        user-select: none;
    }

    .app-nav-button:hover {
        background-color: rgba(251, 249, 241, .63);
        cursor: pointer;
    }

    .icon-wrapper {
        height: 34px;
        width: 34px;
        border-radius: 34px;
        background-color: rgb(251, 249, 241);
        position: relative;
        left: -8px;
    }

</style>