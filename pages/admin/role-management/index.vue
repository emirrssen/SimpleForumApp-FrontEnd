<template>
    <div>
        <div class="flex justify-between align-center mb-4 ">
            <AppInputCheckBox v-model="isPassiveShown" label="Pasif Kayıtları Göster" />
            <AppButton @click="openDialogOnClick" title="Yeni Kayıt" type="success" />
        </div>
        <AppTableData class="mb-2" :headers="headers" :items="store.roles" @on-selected="selectRowOnClick" :selectable="true" />
        <DetailsDialog />
    </div>
</template>

<script setup lang="ts">

    import { useAdminRoleManagementStore } from '~/stores/admin/role-management';
    import { useLayoutStore } from '~/stores/layout';
    import { useAdminRoleManagementDetailsDialogStore } from '~/stores/admin/role-management/detailsDialogStore';

    import type { AppDataTableHeader } from '~/services/app/types';

    import DetailsDialog from './detailsDialog.vue';
    import { Role } from '~/services/admin/role-management/types';

    const store = useAdminRoleManagementStore();
    const layoutStore = useLayoutStore();
    const detailsStore = useAdminRoleManagementDetailsDialogStore();

    const headers: AppDataTableHeader[] = [
        { title: "İsim", field: "name" },
        { title: "Durum", field: "statusName" },
        { title: "Açıklama", field: "description" }
    ]

    const isPassiveShown = computed({
        get(): boolean {
            return store.isPassiveShown
        },
        set(value: boolean) {
            store.isPassiveShown = value;

            layoutStore.isLoadingVisible = true;

            store.getRoles().finally(() => {
                layoutStore.isLoadingVisible = false;
            })
        }
    })

    function openDialogOnClick() {
        detailsStore.currentRole = new Role();
        layoutStore.isLoadingVisible = true;
    }

    function selectRowOnClick(event: any) {
        layoutStore.isLoadingVisible = true;

        detailsStore.getById(event.id).then((response => {
            if (response) {
                detailsStore.isDialogVisible = true;
            }
        })).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

</script>

<style scoped>
</style>