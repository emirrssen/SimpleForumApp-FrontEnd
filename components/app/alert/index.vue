<template>
    <div>
        <div 
            :class="[
                isTypeSuccess ? 'app-alert-success' : '',
                isTypeInfo ? 'app-alert-info' : ''
            ]" 
            class="app-alert flex"
        >
            <div
                :class="[
                    isTypeSuccess ? 'icon-wrapper-success' : '',
                    isTypeInfo ? 'icon-wrapper-info' : ''
                ]"
                class="icon-wrapper flex items-center justify-center px-2"
            >
                <Icon size="24" name="bi:exclamation-lg" />
            </div>
            <div class="text-wrapper flex items-center px-2">{{ $props.text }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>

    const props = defineProps({
        type: {
            required: true,
            type: String
        },
        text: {
            required: true,
            type: String
        }
    })

    const isTypeSuccess = props.type === 'success' ? true : false;
    const isTypeInfo = props.type === 'info' ? true : false;

</script>

<style scoped>

    .app-alert {
        height: 45px;
        border: 1px solid rgba(0, 0, 0, .3);
        border-radius: 4px;
    }

    .icon-wrapper {
        border-right: 1px solid rgba(0, 0, 0, .3);
    }

    .app-alert-success {
        background-color: rgb(158, 221, 165);
        border-color: rgb(135, 191, 142);
    }

    .icon-wrapper-success {
        background-color: rgb(115, 211, 127);
        border-color: rgb(135, 191, 142);
    }

    .app-alert-info {
        background-color: rgba(59, 129, 139, .8);
        border-color: rgb(151, 189, 190);
        color: white;
    }

    .icon-wrapper-info {
        background-color: rgba(28, 116, 130, .7);
        border-color: rgb(151, 189, 190);
        color: white;
    }

</style>