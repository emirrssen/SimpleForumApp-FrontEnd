<template>
    <div>
        <div class="flex justify-between align-center mb-4 ">
            <AppInputCheckBox v-model="isPassiveShown" label="Pasif Kayıtları Göster" />
            <AppButton @click="openDialogOnClick" title="Yeni Kayıt" type="success" />
        </div>
        <AppTableData class="mb-2" :headers="headers" :items="store.permissions" @on-selected="" :selectable="false" />
        <DetailsDialog />
    </div>
</template>

<script lang="ts" setup>

    import type { AppDataTableHeader } from '~/services/app/types';
    import { Permission } from '~/services/admin/permission-management/types';
    
    import { useLayoutStore } from '~/stores/layout';
    import { useAdminPermissionManagementStore } from '~/stores/admin/permission-management';
    import { useAdminPermissionManagementDetailsDialogStore } from '~/stores/admin/permission-management/detailsDialogStore';

    import DetailsDialog from './detailsDialog.vue';

    const store = useAdminPermissionManagementStore();
    const layoutStore = useLayoutStore();
    const detailsStore = useAdminPermissionManagementDetailsDialogStore();

    const headers: AppDataTableHeader[] = [
        { field: "name", title: "İsim" },
        { field: "statusName", title: "Durum" },
        { field: "createdDate", title: "Oluşturulma Tarihi" }
    ]

    const isPassiveShown = computed({
        get(): boolean {
            return store.isPassiveShown
        },
        set(value: boolean) {
            store.isPassiveShown = value;

            layoutStore.isLoadingVisible = true;

            store.getPermissions().finally(() => {
                layoutStore.isLoadingVisible = false;
            })
        }
    })

    function openDialogOnClick() {
        detailsStore.currentPermission = new Permission();
        detailsStore.isDialogVisible = true;
    }
    

</script>

<style scoped>
</style>