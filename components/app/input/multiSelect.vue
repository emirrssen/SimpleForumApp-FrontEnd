<template>
    <div class="relative" style="width: 100%;">
        <div class="app-input-multi-select flex flex-col relative">
            <label class="text-lg font-normal">{{ $props.label }}</label>
            <div class="flex items-center justify-center" style="gap: 8px; border-bottom: 1px solid black; padding-bottom: 3px;">
                <input style="padding-bottom: 2px" autocomplete="off" @focus="openMenuOnClick()" @blur="closeMenuOnClick" type="text" id="app-input-select-comp" :placeholder="$props.placeholder" v-model="searchText">
                <Icon @click="clearOnClick()" v-if="searchText.length > 0 && $props.clearable" class="icon" name="ic:outline-close" />
                <Icon name="ic:baseline-arrow-drop-down" />
            </div>
        </div>
        <AppMenu tabindex="0" v-if="isMenuVisible" :minWidth="props.minWidth" class="fixed flex flex-col mt-1 z-10" style="max-height: 200px; overflow-y: auto;">
            <AppMenuItem v-if="!items || (items && items.length === 0)" title="Veri Bulunamadı" style="width: 100%;" />
            <AppMenuItem 
                v-else 
                v-for="item in items" :key="item[$props.itemValue]" 
                :title="item[$props.itemText]" 
                style="width: 100%;" 
                :icon="isSelected(item[$props.itemValue]) ? 'mdi:checkbox-marked-outline' : 'mdi:checkbox-blank-outline'" 
                :class="{ 'item-selected': isSelected(item[$props.itemValue]) }" 
                @click="selectOnClick(item[$props.itemValue])" 
            />
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
        viewType: {
            type: String,
            required: true
        },
        clearable: {
            type: Boolean,
            required: false,
            default: false
        },
        modelValue: {
            type: Array<any>,
            required: true
        }
    })

    const emit = defineEmits(['update:modelValue'])

    let items: Ref<any[]> = ref([]);
    let selectedItems: Ref<any[]> = ref([]);
    let selectedItemTexts: Ref<any[]> = ref([]);

    onMounted(() => {
        items.value = _.cloneDeep(props.items);
        selectedItems.value = _.cloneDeep(props.modelValue);

        if (props.modelValue && props.modelValue.length > 0) {
            searchText.value = props.modelValue.length + " adet eleman seçili."
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
        console.log("Inside");
        

        if (event.relatedTarget && event.relatedTarget.classList[0] === 'app-menu') {
            setTimeout(() => {
                event.target.focus();
            }, 0)
            return;
        }

        isMenuVisible.value = false;
    }

    function selectOnClick(id: any) {
        let isExists = selectedItems.value.find(x => x === id);
        let currentItem = items.value.find(x => x[props.itemValue] === id);

        if (isExists !== undefined) {
            selectedItems.value = selectedItems.value.filter(x => x !== id)
            selectedItemTexts.value = selectedItemTexts.value.filter(x => x[props.itemValue] !== currentItem[props.itemValue])

            if (props.viewType === 'items') {
                searchText.value = selectedItemTexts.value.map(x => x[props.itemText]).join(', ')
            }

            if (props.viewType === 'quantity') {
                searchText.value = selectedItems.value.length + " adet eleman seçili."
            }

            items.value = _.cloneDeep(props.items);

            emit("update:modelValue", selectedItems.value);
        }
        else {
            selectedItems.value.push(id);
            selectedItemTexts.value.push(currentItem)

            if (props.viewType === 'items') {
                searchText.value = selectedItemTexts.value.map(x => x[props.itemText]).join(', ')
            }

            if (props.viewType === 'quantity') {
                searchText.value = selectedItems.value.length + " adet eleman seçili."
            }

            items.value = _.cloneDeep(props.items);

            emit("update:modelValue", selectedItems.value);
        }
    }

    function isSelected(id: any) {
        return selectedItems.value.some(x => x == id);
    }

</script>

<style scoped>

    .app-input-multi-select {
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

    .item-selected {
        background-color: rgba(0, 0, 0, .3);
    }

</style>
