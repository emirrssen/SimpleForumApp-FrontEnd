<template>
    <div>
        <AppDialog v-model="store.isDialogVisible">
            <AppCard style="width: 700px;">
                <template #centerContent>
                    <AppCardHeader>Rol Detayları</AppCardHeader>
                    <AppCardBody class="my-2 flex flex-col">
                        <AppInputText 
                            placeholder="Giriniz..."
                            label="İsim"
                            v-model="store.currentRole.name"
                            type="text"
                            class="mb-3"
                        />
                        <AppInputText 
                            placeholder="Giriniz..."
                            label="Açıklama (opsiyonel)"
                            v-model="store.currentRole.description"
                            type="text"
                            class="mb-3"
                        />
                        <AppInputSelect 
                            :items="store.statuses" 
                            itemText="title" 
                            itemValue="id" 
                            minWidth="558px" 
                            label="Durumu" 
                            placeholder="Seçiniz..." 
                            v-model="store.currentRole.statusId" 
                        />
                    </AppCardBody>
                    <AppCardFooter class="flex justify-between align-center">
                        <AppButton @click="closeDialogOnClick" title="Kapat" type="text" />
                        <div class="flex" style="gap: 12px;">
                            <AppButton v-if="store.currentRole.id > 0" @click="openPermissionMatchingDialogOnClick" title="Yetkileri Görüntüle" type="success" />
                            <AppButton @click="saveOnClick" title="Kaydet" type="info" />
                        </div>
                    </AppCardFooter>
                </template>
            </AppCard>
        </AppDialog>
        <PermissionMatchingDialog />
    </div>
</template>

<script lang="ts" setup>

    import { useAdminRoleManagementDetailsDialogStore } from '~/stores/admin/role-management/detailsDialogStore';
    import { useLayoutStore } from '~/stores/layout';
    import { useAdminRoleManagementStore } from '~/stores/admin/role-management';
    import { usePermissionMatchingDialogStore } from '~/stores/admin/components/permissionMatchingDialogStore';

    import PermissionMatchingDialog from '../components/permissionMatchingDialog.vue';
    import { PermissionMatchType } from '~/services/admin/permission-matching-management/types';

    const permissionMatchingStore = usePermissionMatchingDialogStore();

    const store = useAdminRoleManagementDetailsDialogStore();
    const layoutStore = useLayoutStore();
    const roleManagemnetStore = useAdminRoleManagementStore();

    onMounted(loadOnMounted)

    function closeDialogOnClick() {
        store.isDialogVisible = false;
    }

    function saveOnClick() {
        if (store.currentRole.id > 0) {
            layoutStore.isLoadingVisible = true;

            store.update().then((response => {
                if (response) {
                    roleManagemnetStore.getRoles();
                }
            })).finally(() => {
                layoutStore.isLoadingVisible = false;
            })
        } else {
            layoutStore.isLoadingVisible = true;

            store.insert().then((response => {
                if (response) {
                    roleManagemnetStore.getRoles();
                }
            })).finally(() => {
                layoutStore.isLoadingVisible = false;
            })
        }
    }

    function loadOnMounted() {
        layoutStore.isLoadingVisible = true;

        store.getStatuses().finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

    function openPermissionMatchingDialogOnClick() {
        permissionMatchingStore.idToUse = store.currentRole.id;
        permissionMatchingStore.type = PermissionMatchType.Role;
        layoutStore.isLoadingVisible = true;

        Promise.all([
            permissionMatchingStore.getStatuses(),
            permissionMatchingStore.getUnmatchedPermissionsForRole(store.currentRole.id),
            permissionMatchingStore.getPermissionMatchingsForRoles(store.currentRole.id)
        ]).then(() => {
            permissionMatchingStore.isDialogVisible = true;
        }).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

</script>

<style scoped>
</style>