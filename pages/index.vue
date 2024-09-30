<template>
    <div>
        <div class="grid grid-cols-12 gap-12">
            <div class="col-span-3">
                <AppCard>
                    <template #centerContent>
                        <AppCardHeader class="flex justify-center text-xl">Gündem</AppCardHeader>
                        <AppCardBody>
                            <AppListItem type="data" value="16" class="w-full" title="Test" />
                        </AppCardBody>
                    </template>
                </AppCard>
            </div>
            <div class="col-span-6 flex justify-center">
                <AppCard style="height: 200px;">
                    <template #leftContent>
                        <div class="flex flex-col justify-around items-center gap-2">
                            <AppButton 
                                style="height: 38px; width: 38px; border: 1px solid rgba(0, 0, 0, .1); border-radius: 38px; background-color: rgba(0, 0, 0, .1);" 
                                type="icon" 
                                icon="material-symbols:thumb-up-rounded" 
                            />
                            <div>3892</div>
                            <AppButton 
                                style="height: 38px; width: 38px; border: 1px solid rgba(0, 0, 0, .1); border-radius: 38px; background-color: rgba(0, 0, 0, .1);" 
                                type="icon" 
                                icon="material-symbols:thumb-down-rounded" 
                            />
                        </div>
                    </template>
                    <template #centerContent>
                        <AppCardHeader class="flex justify-between">
                            <span class="text-lg">Test</span>
                            <span class="text-sm">12.03.2024</span>
                        </AppCardHeader>
                        <AppCardBody class="w-full">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, consequatur? Cumque, quisquam necessitatibus harum suscipit consequatur ut sunt commodi repellendus porro eum modi eveniet quia provident est reprehenderit dignissimos mollitia!
                        </AppCardBody>
                        <AppCardFooter class="flex justify-between mt-3">
                            <AppButton type="success" title="Entry Gir" />
                            <span>Kullanıcı 7</span>
                        </AppCardFooter>
                    </template>
                </AppCard>
            </div>
            <div class="col-span-3 flex flex-col gap-4">
                <AppCard>
                    <template #centerContent>
                        <AppCardHeader class="text-xl">Bu Hafta Öne Çıkan Başlıklar</AppCardHeader>
                        <AppCardBody>
                            <AppListItem type="numbered" value="1" title="Test" class="w-full" />
                        </AppCardBody>
                    </template>
                </AppCard>
                <AppCard>
                    <template #centerContent>
                        <AppCardHeader class="text-xl">Bu Hafta Öne Çıkan Topluluklar</AppCardHeader>
                        <AppCardBody>
                            <AppListItem type="numbered" value="1" title="Grup 1" class="w-full" />
                        </AppCardBody>
                    </template>
                </AppCard>
                <AppCard>
                    <template #centerContent>
                        <AppCardHeader class="text-xl">Bu Hafta Öne Çıkan Yazarlar</AppCardHeader>
                        <AppCardBody>
                            <AppListItem type="numbered" value="1" title="Yazar 1" class="w-full" />
                        </AppCardBody>
                    </template>
                </AppCard>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useLayoutStore } from '~/stores/layout';

    const layoutStore = useLayoutStore();

    onMounted(setStoreOnMounted);

    function setStoreOnMounted() {
        layoutStore.isAccountMenuVisible = false;
        layoutStore.isNavbarVisible = true;
        layoutStore.isCreateTitleButtonVisible = true;
        layoutStore.isSelectFilterButtonVisible = true;
        layoutStore.isSearchBarVisible = true;
        layoutStore.isGroupsButtonVisible = true;
        layoutStore.isUsersButtonVisible = true;
        layoutStore.isAccountButtonVisible = true;
        layoutStore.isAdminButtonVisible = true;
    }

</script>

<style scoped>

width: 38px;
        height: 38px;
        border: 1px solid rgba(0, 0, 0, .4);
        border-radius: 30px;

</style>