<template>
    <div class="app-input flex flex-col relative">
        <label class="text-lg font-normal" for="app-input-comp">{{ $props.label }}</label>
        <div class="flex items-center justify-center" style="gap: 8px; border-bottom: 1px solid black;">
            <input style="padding-bottom: 2px;" @input="updateValue" type="date" id="app-input-comp" :placeholder="$props.placeholder" :value="$props.modelValue">
            <Icon @click="clearOnClick()" v-if="$props.modelValue && $props.modelValue?.length > 0" class="icon" name="ic:outline-close" />
        </div>
    </div>
</template>

<script setup lang="ts">

    import { ref } from 'vue';

    const props = defineProps({
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
            required: true,
        }
    })

    const emit = defineEmits(['update:modelValue'])

    function updateValue(event: any) {
        emit('update:modelValue', event.target.value)
    } 

    function clearOnClick() {
        emit('update:modelValue', '');
    }

</script>

<style scoped>

    .app-input {
        width: 100%;
        padding-bottom: 0px;
    }

    #app-input-comp {
        background-color: transparent;
        width: 100%;
    }

    #app-input-comp::placeholder {
        font-size: 14px;
        color: rgba(0, 0, 0, .5);
    }

    #app-input-comp:focus {
        outline: none;
    }

    .icon {
        color: rgba(0, 0, 0, .5);
    }

    .icon:hover {
        background-color: rgb(0, 0, 0);
        cursor: pointer;
    }

    .date-picker-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
    }

</style>