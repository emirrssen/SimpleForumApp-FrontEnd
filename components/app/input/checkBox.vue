<template>
    <div @click="check()" class="app-input-check-box py-1 flex items-center" style="gap: 4px;">
        <Icon id="app-input-check-box-icon" :name="checkBoxIcon" size="22" />
        <label style="user-select: none;" for="app-input-check-box-icon">{{ $props.label }}</label>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps({
        label: {
            type: String,
            requred: true
        },
        modelValue: {
            type: Boolean,
            requried: true
        }
    })

    let isChecked = ref(props.modelValue);

    const checkBoxIcon = computed(() => isChecked.value ? 'mdi:checkbox-marked-outline' : 'mdi:checkbox-blank-outline')

    const emit = defineEmits(['update:modelValue'])

    function updateValue(value: boolean) {
        emit('update:modelValue', value)
    } 

    function check() {
        updateValue(!isChecked.value);
        isChecked.value = !isChecked.value;
    }

</script>

<style scoped>

    #app-input-check-box-icon:hover {
        cursor: pointer;
    }

</style>