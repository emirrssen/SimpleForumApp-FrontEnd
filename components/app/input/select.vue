<template>
    <div class="relative" style="width: 100%;">
        <div class="app-input-select flex flex-col relative">
            <label class="text-lg font-normal">{{ $props.label }}</label>
            <div class="flex items-center justify-center" style="gap: 8px; border-bottom: 1px solid black; padding-bottom: 3px;">
                <input @input="searchOnInput()" @click="openMenuOnClick()" type="text" id="app-input-select-comp" :placeholder="$props.placeholder" v-model="searchText">
                <Icon @click="clearOnClick()" v-if="searchText.length > 0" class="icon" name="ic:outline-close" />
                <Icon name="ic:baseline-arrow-drop-down" />
            </div>
        </div>
        <AppMenu v-if="isMenuVisible" minWidth="261px" class="fixed flex flex-col mt-1 z-10" style="max-height: 200px; overflow-y: auto;">
            <AppMenuItem v-if="!items || (items && items.length === 0)" title="Veri Bulunamadı" style="width: 100%;" />
            <AppMenuItem @click="selectOnClick(item.Id)" v-else v-for="item in items" :key="item.Id" :title="item.Title" style="width: 100%;" />
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
            type: Array,
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
    })

    const searchText = ref("")
    const isMenuVisible = ref(false)

    function clearOnClick() {
        searchText.value = "";
        items.value = _.cloneDeep(props.items);
        emit('update:modelValue', 0);
    }

    function openMenuOnClick() {
        isMenuVisible.value = !isMenuVisible.value;
    }

    function searchOnInput() {
        if (searchText.value === "") {
            items.value = _.cloneDeep(props.items);
        }

        items.value = _.cloneDeep(props.items.filter(x => x.Title.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())))
    }

    function selectOnClick(id: any) {
        console.log(id);

        const selectedValue = props.items.find(x => x.Id === id);
        searchText.value = selectedValue?.Title
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
