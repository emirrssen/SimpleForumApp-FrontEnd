<template>
    <div>
        <div class="grid grid-cols-12 gap-12">
            <div class="col-span-3">
                <AppCard>
                    <template #centerContent>
                        <AppCardHeader class="flex justify-center text-xl">Gündem</AppCardHeader>
                        <AppCardBody class="flex flex-col gap-4 items-center">
                            <AppListItemData v-for="item in store.agenda" :key="item.titleId" :value="item.entryNumber" class="w-full" :title="item.titleSubject" />
                        </AppCardBody>
                    </template>
                </AppCard>
            </div>
            <div class="col-span-6 flex flex-col items-center pr-4" style="max-height: calc(100vh - 72px); overflow-y: auto;">
                <AppCard style="width: 100%;" v-for="item in store.titles" :key="item.titleId" class="mb-3">
                    <template #leftContent>
                        <div class="flex flex-col justify-around items-center gap-2">
                            <AppButton 
                                style="height: 38px; width: 38px; border: 1px solid rgba(0, 0, 0, .1); border-radius: 38px;"
                                :class="{ 'liked': item.actionId === 1 }"
                                type="icon" 
                                icon="material-symbols:thumb-up-rounded"
                                @click="likeOnClick(item.titleId)"
                            />
                            <div>{{ item.likeNumber }}</div>
                            <AppButton 
                                style="height: 38px; width: 38px; border: 1px solid rgba(0, 0, 0, .1); border-radius: 38px;"
                                :class="{ 'disliked': item.actionId === 2 }"
                                type="icon"
                                icon="material-symbols:thumb-down-rounded"
                                @click="dislikeOnClick(item.titleId)"
                            />
                        </div>
                    </template>
                    <template #centerContent>
                        <AppCardHeader class="flex justify-between">
                            <span class="text-lg">{{ item.titleSubject }}</span>
                            <span class="text-sm">{{ item.createdDate }}</span>
                        </AppCardHeader>
                        <AppCardBody class="w-full">
                            {{ item.titleContent }}
                        </AppCardBody>
                        <AppCardFooter class="flex justify-between mt-3">
                            <AppButton type="success" title="Entry Gir" />
                            <span>{{ item.createdAuthor }}</span>
                        </AppCardFooter>
                    </template>
                </AppCard>
            </div>
            <div class="col-span-3 flex flex-col gap-4">
                <AppCard>
                    <template #centerContent>
                        <AppCardHeader class="text-xl">Bu Hafta Öne Çıkan Başlıklar</AppCardHeader>
                        <AppCardBody class="flex flex-col gap-4">
                            <AppListItemNumbered v-for="(item, index) in store.weeklyFavouriteTitles" :key="item.titleId" :value="index + 1 + ''" :title="item.titleSubject" class="w-full" />
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
    import { useHomeStore } from '~/stores/home';

    const layoutStore = useLayoutStore();
    const store = useHomeStore();

    onMounted(() => {
        setStoreOnMounted();
        loadOnMounted();
    });

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

    function loadOnMounted() {
        layoutStore.isLoadingVisible = true;

        Promise.all([
            store.getAgenda(),
            store.getTitles(),
            store.getWeeklyFavouriteTitles()
        ]).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

    function likeOnClick(titleId: number) {
        store.addActionToTitle(titleId, 1).then((response => {
            if (response) {
                store.getTitles();
            }
        }))
    }

    function dislikeOnClick(titleId: number) {
        store.addActionToTitle(titleId, 2).then((response => {
            if (response) {
                store.getTitles();
            }
        }))
    }

</script>

<style scoped>

    .liked {
        background-color: rgba(26, 203, 91, 0.4);
    }

    .disliked {
        background-color: rgba(229, 18, 18, 0.4);
    }


</style>