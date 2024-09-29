<template>
    <div>
        <div class="grid grid-cols-4 gap-4">
            <div class="col-span-1 flex flex-col gap-3">
                <AppListItem v-for="item in store.endPoints" :title="item.controllerName" @click="selectEndPointGroupOnClick(item)" />
            </div>
            <div class="col-span-3 flex flex-col align-center">
                <AppAlert v-if="!store.selectedControllerName" type="success" text="End pointleri listelemek için soldan controller seçiniz."/>
                <div class="mb-4" style="font-size: larger; font-weight: 500;" v-if="store.selectedControllerName">
                    {{ store.selectedControllerName }} İçin End Point Listesi
                </div>
                <AppTableData
                    v-if="store.selectedEndPointGroup && store.selectedEndPointGroup.length > 0"
                    :headers="headers"
                    :items="store.selectedEndPointGroup"
                    :selectable="true"
                    @on-selected="selectEndPointOnClick"
                />
            </div>
        </div>
        <DetailsDialog />
    </div>
</template>

<script lang="ts" setup>

    import { useAdminEndPointManagementStore } from '~/stores/admin/end-point-management';
    import { useLayoutStore } from '~/stores/layout';
    import { useAdminEndPointManagementDetailsDialogStore } from '~/stores/admin/end-point-management/detailsDialogStore';

    import type { AppDataTableHeader } from '~/services/app/types';

    import DetailsDialog from './detailsDialog.vue';

    const store = useAdminEndPointManagementStore();
    const layoutStore = useLayoutStore();
    const detailsStore = useAdminEndPointManagementDetailsDialogStore();

    onMounted(clearOnMounted)

    const headers: AppDataTableHeader[] = [
        { field: "actionTypeName", title: "Metot Tipi", width: "10%" },
        { field: "methodName", title: "Metot Adı", width: "50%" },
        { field: "isUse", title: "Kullanılıyor Mu?", width: "15%" },
        { field: "isActive", title: "Aktif Mi?", width: "10%" }
    ]

    function selectEndPointGroupOnClick(item: any) {
        store.selectedEndPointGroup = item.endPoints;
        store.selectedControllerName = item.controllerName;
    }

    function selectEndPointOnClick(event: any) {
        layoutStore.isLoadingVisible = true;

        detailsStore.getById(event.id).then((response => {
            if (response) {
                detailsStore.isDialogVisible = true;
            }
        })).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

    function clearOnMounted() {
        store.selectedControllerName = "";
        store.selectedEndPointGroup = [];
    }

</script>

<style scoped>

</style>