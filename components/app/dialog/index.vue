<template>
    <div>
        <div class="app-dialog" v-if="$props.modelValue">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

    const props = defineProps({
        modelValue: {
            type: Boolean,
            required: true
        }
    })

    const emit = defineEmits(['update:modelValue'])

    function updateValue(event: any) {
        emit('update:modelValue', event.target.value)
    }

</script>

<style scoped>

    .app-dialog {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, .3);
        top: 0px;
        left: 0px;
    }

</style>