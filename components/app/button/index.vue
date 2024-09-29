<template>
    <div 
        class="app-button px-3 py-1 flex items-center justify-center text-sm"
        :class="[ 
            isTypeSuccess ? 'app-button-success' : '',
            isTypeInfo ? 'app-button-info' : '',
            isTypeWarning ? 'app-button-warning' : '',
            isTypeError ? 'app-button-error' : '',
            isTypeText ? 'app-button-text' : '',
            isTypePlain ? 'app-button-plain' : '',
            isTypeIcon ? 'app-button-icon' : ''
        ]"
        style="height: 30px;"
    >
        <span v-if="!isTypeIcon">{{ $props.title }}</span>
        <Icon v-if="isTypeIcon" :name="$props.icon || ''" />
    </div>
</template>

<script setup lang="ts">

    const props = defineProps({
        title: {
            type: String,
            required: false,
        },
        icon: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: true
        }
    })

    const isTypeSuccess = props.type === 'success' ? true : false;
    const isTypeInfo = props.type === 'info' ? true : false;
    const isTypeWarning = props.type === 'warning' ? true : false;
    const isTypeError = props.type === 'error' ? true : false;
    const isTypeText = props.type === 'text' ? true : false;
    const isTypePlain = props.type === 'plain' ? true : false;
    const isTypeIcon = props.type === 'icon' ? true : false;

</script>

<style scoped>

    .app-button {
        border: 1px solid transparent;
        border-radius: 5px;
        user-select: none;
    }

    .app-button:hover {
        cursor: pointer;
    }

    .app-button-success {
        background-color: rgb(158, 221, 165);
        border-color: rgb(135, 191, 142);
    }

    .app-button-success:hover {
        background-color: rgb(135, 191, 142);
    }

    .app-button-info {
        background-color: rgb(59, 129, 139);
        border-color: rgb(151, 189, 190);
        color: white;
    }

    .app-button-info:hover {
        background-color: rgb(55, 118, 128);
    }

    .app-button-warning {
        background-color: rgb(255, 162, 44);
        border-color: rgb(226, 145, 43);
    }

    .app-button-warning:hover {
        background-color: rgb(226, 145, 43);
    }

    .app-button-error {
        background-color: rgb(221, 18 ,0);
        color: white;
        border-color: rgb(192, 16, 0);
    }

    .app-button-error:hover {
        background-color: rgb(192, 16, 0);
    }

    .app-button-text {
        border-color: black;
    }

    .app-button-text:hover {
        background-color: rgba(0, 0, 0, .2);
    }

    .app-button-plain {
        border: none;
        font-size: medium;
        padding: 0;
        margin: 0;
    }

    .app-button-plain:hover {
        color: rgba(0, 0, 0, .6);
    }

    .app-button-icon {
        border: none;
    }

    .app-button-icon:hover {
        background-color: rgba(0, 0, 0, .3);
    }

</style>