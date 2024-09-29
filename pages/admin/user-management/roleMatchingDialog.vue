<template>
    <AppDialog v-model="store.isDialogVisible">
        <AppCard style="width: 600px;">
            <template #centerContent>
                <AppCardHeader>Rol Eşleştirmeleri</AppCardHeader>
                <AppCardBody>
                    <div class="flex flex-col">
                        <div class="grid grid-cols-8 gap-7 mb-3" style="width: 100%;">
                            <div class="col-span-7">
                                <AppInputSelect
                                    placeholder="Seçiniz..."
                                    :items="store.roles"
                                    itemText="name"
                                    itemValue="id"
                                    v-model="store.selectedRole"
                                    minWidth="485px"
                                    label="Rol Ekle"
                                />
                            </div>
                            <div class="col-span-1 flex justify-center items-end">
                                <AppButton @click="addOnClick" title="Ekle" type="success" />
                            </div>
                        </div>
                        <div class="flex flex-col mt-3">
                            <span style="font-size: 20px;" class="mb-3">Mevcut Eşleştirmeler</span>
                            <AppAlert type="success" text="Henüz bir eşleştirme yapılmamış" v-if="store.roleMatchings.length === 0" />
                            <div 
                                class="flex p-2 mb-2" 
                                v-for="item in store.roleMatchings" :key="item.roleId"
                                style="border: 1px solid rgba(0, 0, 0, .3); border-radius: 4px; max-height: 600px; overflow-y: auto;"
                            >
                                <div class="grid grid-cols-4 gap-4">
                                    <div class="col-span-3 flex items-center">
                                        <AppInputText :readonly="true" label="Yetki İsmi" placeholder="Giriniz..." v-model="item.roleName" type="text" />
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
                <AppCardFooter class="flex justify-between items-center">
                    <AppButton @click="closeOnClick" type="text" title="Kapat" />
                    <AppButton type="info" title="Kaydet" />
                </AppCardFooter>
            </template>
        </AppCard>
    </AppDialog>
</template>

<script lang="ts" setup>

    import { useUserRoleMatchingDialogStore } from '~/stores/admin/user-management/roleMatchingDialogStore';
    import { useLayoutStore } from '~/stores/layout';

    const store = useUserRoleMatchingDialogStore();
    const layoutStore = useLayoutStore();

    function closeOnClick() {
        store.selectedRole = 0;
        store.isDialogVisible = false;
    }

    function addOnClick() {
        layoutStore.isLoadingVisible = true;

        store.insertRoleMatch().then((response => {
            if (response) {
                store.getRoles(store.currentUserId);
                store.getRoleMatchings(store.currentUserId);
            }
        })).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

</script>

<style scoped>
</style>