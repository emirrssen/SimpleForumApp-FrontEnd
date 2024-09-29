<template>
    <div class="app-input flex flex-col">
        <label class="text-lg font-normal" for="app-input-comp">{{ $props.label }}</label>
        <div class="flex items-center justify-center" style="gap: 8px; border-bottom: 1px solid black; padding-bottom: 3px;">
            <input :readonly="$props.readonly" style="padding-bottom: 2px;" @input="updateValue" :type="inputType" id="app-input-comp" :placeholder="$props.placeholder" :value="$props.modelValue">
            <Icon @click="clearOnClick()" v-if="clearButtonDisabled" class="icon" name="ic:outline-close" />
            <Icon @click="changeVisibilityOfPasswordOnClick()" class="icon" v-if="$props.type === 'password'" :name="passwordVisibilityIcon" />
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
        readonly: {
            type: Boolean
        },
        clearable: {
            type: Boolean,
            required: false,
            default: false
        },
        modelValue: {
            type: String,
            required: true,
        }
    })
    
    let isPasswordVisible = ref(false);

    const passwordVisibilityIcon = computed(() => isPasswordVisible.value ? 'mdi:eye-outline' : 'mdi:eye-off-outline')

    const inputType = computed(() => {
        return props.type == 'password'
            ? isPasswordVisible.value
                ? 'text'
                : 'password'
            : props.type
    })

    const clearButtonDisabled = computed(() => {
        const r1 = props.modelValue && props.modelValue.length > 0;
        const r2 = !props.readonly;
        const r3 = props.clearable

        return r1 && r2 && r3;
    })

    const emit = defineEmits(['update:modelValue'])

    function updateValue(event: any) {
        emit('update:modelValue', event.target.value)
    } 

    function clearOnClick() {
        emit('update:modelValue', '');
    }

    function changeVisibilityOfPasswordOnClick() {
        isPasswordVisible.value = !isPasswordVisible.value;
    }

</script>

<style scoped>

    .app-input {
        width: 100%;
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


</style>