<template>
    <div>
        <AppDialog v-model="store.isDialogVisible">
            <AppCard style="width: 600px;">
                <template #centerContent>
                    <AppCardHeader>Yetki Detayları</AppCardHeader>
                    <AppCardBody class="my-2 flex flex-col">
                        <AppInputText 
                            placeholder="Giriniz..."
                            label="İsim"
                            v-model="store.currentPermission.name"
                            type="text"
                            class="mb-3"
                        />
                        <AppInputText 
                            placeholder="Giriniz..."
                            label="Açıklama (opsiyonel)"
                            v-model="store.currentPermission.description"
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
                            v-model="store.currentPermission.statusId" 
                        />
                    </AppCardBody>
                    <AppCardFooter class="flex justify-between align-center">
                        <AppButton @click="closeDialogOnClick" title="Kapat" type="text" />
                        <AppButton @click="saveOnClick" title="Kaydet" type="info" />
                    </AppCardFooter>
                </template>
            </AppCard>
        </AppDialog>
    </div>
</template>

<script lang="ts" setup>

    import { useAdminPermissionManagementDetailsDialogStore } from '~/stores/admin/permission-management/detailsDialogStore';
    import { useLayoutStore } from '~/stores/layout';
    import { useAdminPermissionManagementStore } from '~/stores/admin/permission-management';

    const store = useAdminPermissionManagementDetailsDialogStore();
    const layoutStore = useLayoutStore();
    const permissionManagemnetStore = useAdminPermissionManagementStore();

    onMounted(loadOnMounted)

    function closeDialogOnClick() {
        store.isDialogVisible = false;
    }

    function loadOnMounted() {
        layoutStore.isLoadingVisible = true;

        store.getStatuses().finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

    function saveOnClick() {
        if (store.currentPermission.id > 0) {
            
        } else {
            layoutStore.isLoadingVisible = true;

            store.insert().then((response => {
                if (response) {
                    permissionManagemnetStore.getPermissions();
                }
            })).finally(() => {
                layoutStore.isLoadingVisible = false;
            })
        }
    }

</script>

<style scoped>

</style>