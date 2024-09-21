<template>
    <div>
        <AppDialog v-model="store.isDialogVisible">
            <AppCard style="width: 600px;">
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
                        <AppButton @click="saveOnClick" title="Kaydet" type="info" />
                    </AppCardFooter>
                </template>
            </AppCard>
        </AppDialog>
    </div>
</template>

<script lang="ts" setup>

    import { useAdminRoleManagementDetailsDialogStore } from '~/stores/admin/role-management/detailsDialogStore';
    import { useLayoutStore } from '~/stores/layout';
    import { useAdminRoleManagementStore } from '~/stores/admin/role-management';

    const store = useAdminRoleManagementDetailsDialogStore();
    const layoutStore = useLayoutStore();
    const roleManagemnetStore = useAdminRoleManagementStore();

    function closeDialogOnClick() {
        store.isDialogVisible = false;
    }

    function saveOnClick() {
        if (store.currentRole.id > 0) {
            
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

</script>

<style scoped>
</style>