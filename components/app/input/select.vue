<template>
    <div class="relative" style="width: 100%;">
        <div class="app-input-select flex flex-col relative">
            <label class="text-lg font-normal">{{ $props.label }}</label>
            <div class="flex items-center justify-center" style="gap: 8px; border-bottom: 1px solid black; padding-bottom: 3px;">
                <input style="padding-bottom: 2px" autocomplete="off" @input="searchOnInput()" @focus="openMenuOnClick()" @blur="closeMenuOnClick" type="text" id="app-input-select-comp" :placeholder="$props.placeholder" v-model="searchText">
                <Icon @click="clearOnClick()" v-if="searchText.length > 0" class="icon" name="ic:outline-close" />
                <Icon name="ic:baseline-arrow-drop-down" />
            </div>
        </div>
        <AppMenu tabindex="0" v-if="isMenuVisible" :minWidth="props.minWidth" class="fixed flex flex-col mt-1 z-10" style="max-height: 200px; overflow-y: auto;">
            <AppMenuItem v-if="!items || (items && items.length === 0)" title="Veri Bulunamadı" style="width: 100%;" />
            <AppMenuItem @click="selectOnClick(item[$props.itemValue])" v-else v-for="item in items" :key="item[$props.itemValue]" :title="item[$props.itemText]" style="width: 100%;" />
        </AppMenu>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import _ from "lodash";

    const props = defineProps({
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        items: {
            type: Array<any>,
            required: true
        },
        minWidth: {
            type: String,
            required: true
        },
        itemText: {
            type: String,
            required: true
        },
        itemValue: {
            type: String,
            required: true
        },
        modelValue: {
            type: Number,
            required: true
        }
    })

    const emit = defineEmits(['update:modelValue'])

    let items: Ref<any[]> = ref([]);

    onMounted(() => {
        items.value = _.cloneDeep(props.items);

        if (props.modelValue > 0) {
            searchText.value = props.items.find(x => x[props.itemValue] == props.modelValue)[props.itemText] || ""
        }
    })

    const searchText = ref("")
    const isMenuVisible = ref(false)

    function clearOnClick() {
        searchText.value = "";
        items.value = _.cloneDeep(props.items);
        emit('update:modelValue', 0);
    }

    function openMenuOnClick() {
        if (items.value.length === 0) {
            items.value = _.cloneDeep(props.items);
        }

        isMenuVisible.value = true;
    }

    function closeMenuOnClick(event: any) {
        if (event.relatedTarget && event.relatedTarget.classList[0] === 'app-menu') {
            return;
        }

        isMenuVisible.value = false;
    }

    function searchOnInput() {
        if (searchText.value === "") {
            items.value = _.cloneDeep(props.items);
        }

        items.value = _.cloneDeep(props.items.filter(x => x.title.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())))
    }

    function selectOnClick(id: any) {
        const selectedValue = props.items.find(x => x[props.itemValue] === id);
        searchText.value = selectedValue[props.itemText] || ""
        isMenuVisible.value = false;

        emit('update:modelValue', id);
    }

</script>

<style scoped>

    .app-input-select {
        width: 100%;
    }

    #app-input-select-comp {
        background-color: transparent;
        width: 100%;
    }

    #app-input-select-comp::placeholder {
        font-size: 14px;
        color: rgba(0, 0, 0, .5);
    }

    #app-input-select-comp:focus {
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
