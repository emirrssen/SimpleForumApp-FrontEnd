<template>
    <AppDialog v-model="store.isDialogVisible">
        <AppCard style="width: 600px;">
            <template #centerContent>
                <AppCardHeader>Yetki Eşleştirmeleri</AppCardHeader>
                <AppCardBody>
                    <div class="flex flex-col">
                        <div class="grid grid-cols-8 gap-7 mb-3" style="width: 100%;">
                            <div class="col-span-7">
                                <AppInputSelect
                                    placeholder="Seçiniz..."
                                    :items="store.permissions"
                                    itemText="name"
                                    itemValue="id"
                                    v-model="store.selectedPermission"
                                    minWidth="485px"
                                    label="Yetki Ekle"
                                />
                            </div>
                            <div class="col-span-1 flex justify-center items-end">
                                <AppButton @click="addOnClick" title="Ekle" type="success" />
                            </div>
                        </div>
                        <div class="flex flex-col mt-3">
                            <span style="font-size: 20px;" class="mb-3">Mevcut Eşleştirmeler</span>
                            <AppAlert type="success" text="Henüz bir eşleştirme yapılmamış." v-if="store.permissionMatchings.length === 0"/>
                            <div 
                                class="flex p-2 mb-2" 
                                v-for="item in store.permissionMatchings" :key="item.permissionId"
                                style="border: 1px solid rgba(0, 0, 0, .3); border-radius: 4px; max-height: 600px; overflow-y: auto;"
                            >
                                <div class="grid grid-cols-4 gap-4">
                                    <div class="col-span-3 flex items-center">
                                        <AppInputText :readonly="true" label="Yetki İsmi" placeholder="Giriniz..." v-model="item.permissionName" type="text" />
                                    </div>
                                    <div class="col-span-1">
                                        <AppInputSelect 
                                            :items="store.statuses" 
                                            v-model="item.statusId" 
                                            label="Durum" 
                                            placeholder="Seçiniz..." 
                                            min-width="123px" 
                                            item-text="title"
                                            item-value="id"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppCardBody>
                <AppCardFooter class="flex justify-between align-center">
                    <AppButton @click="closeDialogOnClick" title="Kapat" type="text" />
                    <AppButton @click="saveOnClick" title="Kaydet" type="info" />
                </AppCardFooter>
            </template>
        </AppCard>
    </AppDialog>
</template>

<script lang="ts" setup>

    import { PermissionMatchType } from '~/services/admin/permission-matching-management/types';
    import { usePermissionMatchingDialogStore } from '~/stores/admin/components/permissionMatchingDialogStore';
    import { useLayoutStore } from '~/stores/layout';

    const store = usePermissionMatchingDialogStore();
    const layoutStore = useLayoutStore();

    function closeDialogOnClick() {
        store.isDialogVisible = false;
        clear();
    }

    function addOnClick() {
        if (store.type === PermissionMatchType.EndPoint) {
            layoutStore.isLoadingVisible = true;

            store.insertEndPointMatch().then((response => {
                if (response) {
                    store.getUnmatchedPermissionsForEndPoint(store.idToUse);
                    store.getPermissionMatchingsForEndPoint(store.idToUse);
                }
            })).finally(() => {
                layoutStore.isLoadingVisible = false;
            })
        }
    }

    function saveOnClick() {
        if (store.type === PermissionMatchType.EndPoint) {
            layoutStore.isLoadingVisible = true;

            store.updateEndPointMatches().then((response => {
                if (response) {
                    store.getUnmatchedPermissionsForEndPoint(store.idToUse);
                    store.getPermissionMatchingsForEndPoint(store.idToUse);
                }
            })).finally(() => {
                layoutStore.isLoadingVisible = false;
            })
        }
    }

    function clear() {
        store.selectedPermission = 0;
    }

</script>

<style scoped>
</style>