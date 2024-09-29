<template>
    <div>
        <AppDialog v-model="store.isDialogVisible">
            <AppCard style="width: 800px;">
                <template #centerContent>
                    <AppCardHeader>End Point Detayları</AppCardHeader>
                    <AppCardBody class="my-2 flex flex-col">
                        <div class="columns-2 mb-3">
                            <AppInputText 
                                placeholder="Giriniz..."
                                label="Controller İsmi"
                                v-model="store.currentEndPoint.controllerName"
                                type="text"
                                :readonly="true"
                            />
                            <AppInputText 
                                placeholder="Giriniz..."
                                label="Metot İsmi"
                                v-model="store.currentEndPoint.methodName"
                                type="text"
                                :readonly="true"
                            />
                        </div>
                        <div class="grid grid-cols-4 gap-4 mb-3">
                            <div class="col-span-1">
                                <AppInputText 
                                    placeholder="Giriniz..."
                                    label="Metot Tipi"
                                    v-model="store.currentEndPoint.actionTypeName"
                                    type="text"
                                    :readonly="true"
                                />
                            </div>
                            <div class="col-span-3">
                                <AppInputText 
                                    placeholder="Giriniz..."
                                    label="Yolu"
                                    v-model="store.currentEndPoint.route"
                                    type="text"
                                    :readonly="true"
                                />
                            </div>
                        </div>
                        <div class="columns-2 mb-3">
                            <AppInputSelect 
                                :items="selectData"
                                itemText="text"
                                itemValue="id"
                                v-model="store.isUse"
                                label="Kullanılıyor Mu?"
                                placeholder="Seçiniz..."
                                minWidth="371px"
                            />
                            <AppInputSelect 
                                :items="selectData"
                                itemText="text"
                                itemValue="id"
                                v-model="store.isActive"
                                label="Aktif Mi?"
                                placeholder="Seçiniz..."
                                minWidth="371px"
                            />
                        </div>
                        <AppInputText 
                            placeholder="Giriniz..."
                            label="Açıklama"
                            v-model="store.currentEndPoint.description"
                            type="text"
                        />
                    </AppCardBody>
                    <AppCardFooter class="flex justify-between items-center">
                        <AppButton @click="closeDialogOnClick" title="Kapat" type="text" />
                        <div class="flex" style="gap: 12px;">
                            <AppButton v-if="store.currentEndPoint.id > 0" @click="openPermissionMatchingDialogOnClick" title="Yetkileri Görüntüle" type="success" />
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

    import { useAdminEndPointManagementDetailsDialogStore } from '~/stores/admin/end-point-management/detailsDialogStore';
    import { useLayoutStore } from '~/stores/layout';
    import { useAdminEndPointManagementStore } from '~/stores/admin/end-point-management';
    import { usePermissionMatchingDialogStore } from '~/stores/admin/components/permissionMatchingDialogStore';

    import PermissionMatchingDialog from '../components/permissionMatchingDialog.vue';
    import { PermissionMatchType } from '~/services/admin/permission-matching-management/types';

    const store = useAdminEndPointManagementDetailsDialogStore();
    const layoutStore = useLayoutStore();
    const endPointManagementStore = useAdminEndPointManagementStore();
    const permissionMatchingStore = usePermissionMatchingDialogStore();

    const selectData = [
        { value: true, text: "Evet", id: 1 },
        { value: false, text: "Hayır", id: 2 }
    ]

    function closeDialogOnClick() {
        store.isDialogVisible = false;
    }

    function saveOnClick() {
        layoutStore.isLoadingVisible = true;

        store.updateById().then((response => {
            if (response) {
                endPointManagementStore.getEndPointsByStatus().then(() => {
                    const oldSelected = endPointManagementStore.endPoints.find(x => x.controllerName === endPointManagementStore.selectedControllerName);
                    endPointManagementStore.selectedEndPointGroup = oldSelected?.endPoints || [];
                })
            }
        })).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

    function openPermissionMatchingDialogOnClick() {
        permissionMatchingStore.idToUse = store.currentEndPoint.id;
        permissionMatchingStore.type = PermissionMatchType.EndPoint;
        layoutStore.isLoadingVisible = true;

        Promise.all([
            permissionMatchingStore.getPermissionMatchingsForEndPoint(store.currentEndPoint.id),
            permissionMatchingStore.getStatuses(),
            permissionMatchingStore.getUnmatchedPermissionsForEndPoint(store.currentEndPoint.id)
        ]).then(() => {
            permissionMatchingStore.isDialogVisible = true;
        }).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

</script>

<style scoped>
</style>