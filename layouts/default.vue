<template>
    <div tabindex="0">
        <div class="container mx-auto py-4 relative">
            <div class="columns-2 flex justify-between">
                <div 
                    @click="navigateToHomeOnClick()"
                    style="
                        color: #3B818B; 
                        gap: 8px;
                        user-select: none;
                        cursor: pointer;
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
                    <AppNavButton v-if="isCreateTitleButtonVisible" title="Başlık Oluştur" icon="bi:plus-circle" />
                    <div class="relative">
                        <AppNavButton tabindex="0" @focus="btnShowMenuOnClick()" @blur="btnHideMenuOnClick" v-if="isGroupsButtonVisible" title="Hesap" icon="mdi:account" />
                        <AppMenu 
                            tabindex="0"
                            v-if="isAccountMenuVisible" 
                            class="absolute mt-2 right-0"
                            minWidth="120px"
                        >
                            <div class="flex flex-col p-1">
                                <AppMenuItem @click="navigateToLoginOnClick()" title="Giriş Yap" icon="bi:box-arrow-in-right" />
                                <AppMenuItem @click="navigateToRegisterOnClick()" title="Kayıt Ol" icon="bi:person-plus-fill" />
                            </div>
                        </AppMenu>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useLayoutStore } from '~/stores/layout';

    const store = useLayoutStore();

    const isNavbarVisible = computed(() => store.isNavbarVisible);
    const isSelectFilterButtonVisible = computed(() => store.isSelectFilterButtonVisible);
    const isSearchBarVisible = computed(() => store.isSearchBarVisible);
    const isUsersButtonVisible = computed(() => store.isUsersButtonVisible);
    const isGroupsButtonVisible = computed(() => store.isGroupsButtonVisible);
    const isAccountButtonVisible = computed(() => store.isAccountButtonVisible);
    const isCreateTitleButtonVisible = computed(() => store.isCreateTitleButtonVisible);

    let isAccountMenuVisible = computed({
        get() {
            return store.isAccountMenuVisible;
        },
        set(value) {
            store.isAccountMenuVisible = value;
        }
    });

    function btnShowMenuOnClick() {
        isAccountMenuVisible.value = true;
    }

    function btnHideMenuOnClick(event: any) {
        if (event.relatedTarget && event.relatedTarget.classList[0] === 'app-menu') {
            return;
        }

        isAccountMenuVisible.value = false;
    }

    function navigateToHomeOnClick() {
        navigateTo("");
    }

    function navigateToLoginOnClick() {
        navigateTo("auth/login");
    }

    function navigateToRegisterOnClick() {
        navigateTo("auth/register")
    }

</script>

<style scoped>


</style>

