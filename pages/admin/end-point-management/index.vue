<template>
    <div>
        <div class="flex-align-center mb-4">
            <AppInputCheckBox v-model="isPassiveShown" label="Pasif Kayıtları Göster" />
        </div>
        <div class="grid grid-cols-4 gap-4">
            <div class="col-span-1 flex flex-col gap-3">
                <AppListItem v-for="item in store.endPoints" :title="item.controllerName" @click="selectEndPointGroupOnClick(item)" />
            </div>
            <div class="col-span-3 flex flex-col align-center">
                <div class="mb-4" style="font-size: larger; font-weight: 500;" v-if="store.selectedControllerName">
                    {{ store.selectedControllerName }} İçin End Point Listesi
                </div>
                <AppTableData
                    v-if="store.selectedEndPointGroup && store.selectedEndPointGroup.length > 0"
                    :headers="headers"
                    :items="store.selectedEndPointGroup"
                    :selectable="false"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

    import { useAdminEndPointManagementStore } from '~/stores/admin/end-point-management';
    import { useLayoutStore } from '~/stores/layout';

    import type { AppDataTableHeader } from '~/services/app/types';

    const store = useAdminEndPointManagementStore();
    const layoutStore = useLayoutStore();

    const isPassiveShown = computed({
        get(): boolean {
            return store.isPassiveShown;
        },
        set(value: boolean) {
            store.isPassiveShown = value;

            layoutStore.isLoadingVisible = true;
            store.getEndPointsByStatus().finally(() => {
                layoutStore.isLoadingVisible = false;
            })
        }
    })

    const headers: AppDataTableHeader[] = [
        { field: "actionTypeName", title: "Metot Tipi", width: "10%" },
        { field: "methodName", title: "Metot Adı", width: "50%" },
        { field: "isUse", title: "Kullanılıyor Mu", width: "15%" },
        { field: "isActive", title: "Aktif Mi", width: "10%" }
    ]

    function selectEndPointGroupOnClick(item: any) {
        store.selectedEndPointGroup = item.endPoints;
        store.selectedControllerName = item.controllerName;
    }

</script>

<style scoped>

</style>