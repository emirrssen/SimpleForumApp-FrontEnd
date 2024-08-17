<template>
    <div>
        <div class="container mx-auto py-4">
            <div class="columns-2 flex justify-between">
                <div 
                    style="
                        color: #3B818B; 
                        gap: 8px;
                        user-select: none;
                    " 
                    class="text-xl font-semibold flex items-center">
                        <Icon name="ic:outline-chat" size="24px" style="color: #3B818B;" />
                        Simple Forum App
                    </div>
                <div class="flex items-center" style="gap: 12px;" v-if="isNavbarVisible">
                    <AppNavButton v-if="isSelectFilterButtonVisible" title="Filtre Seç" icon="ic:outline-filter-alt" />
                    <AppNavSearchBar />
                </div>
                <div class="flex justify-between items-center" style="gap: 12px;" v-if="isNavbarVisible">
                    <AppNavButton v-if="isUsersButtonVisible" title="Kullanıcılar" icon="ic:baseline-supervisor-account" />
                    <AppNavButton v-if="isGroupsButtonVisible" title="Topluluklar" icon="ic:baseline-groups" />
                    <div class="relative">
                        <AppNavButton v-if="isGroupsButtonVisible" title="Hesap" icon="mdi:account" />
                        <span class="absolute">Hello world</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

    import { useLayoutStore } from '~/stores/layout';

    const store = useLayoutStore();

    onMounted(() => {
        store.setDefaultLayout();
    })

    const isNavbarVisible = computed(() => store.isNavbarVisible);
    const isSelectFilterButtonVisible = computed(() => store.isSelectFilterButtonVisible);
    const isSearchBarVisible = computed(() => store.isSearchBarVisible);
    const isUsersButtonVisible = computed(() => store.isUsersButtonVisible);
    const isGroupsButtonVisible = computed(() => store.isGroupsButtonVisible);
    const isAccountButtonVisible = computed(() => store.isAccountButtonVisible);
    const isCreateTitleButtonVisible = computed(() => store.isCreateTitleButtonVisible);

</script>

<style scoped>


</style>

