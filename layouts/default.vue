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
                    <AppNavSearchBar v-if="isSearchBarVisible" />
                </div>
                <div class="flex justify-between items-center" style="gap: 12px;" v-if="isNavbarVisible">
                    <AppNavButton v-if="isUsersButtonVisible" title="Kullanıcılar" icon="ic:baseline-supervisor-account" />
                    <AppNavButton v-if="isGroupsButtonVisible" title="Topluluklar" icon="ic:baseline-groups" />
                    <AppNavButton v-if="isCreateTitleButtonVisible" title="Başlık Oluştur" icon="bi:plus-circle" />
                    <AppNavButton @click="navigateToAdminPanel" title="Admin Paneli" icon="bi:plus-circle" v-if="isAdminButtonVisible" />
                    <div class="relative">
                        <AppNavButton tabindex="0" @focus="btnShowMenuOnClick()" @blur="btnHideMenuOnClick" v-if="isAccountButtonVisible" title="Hesap" icon="mdi:account" />
                        <AppMenu 
                            tabindex="0"
                            v-if="isAccountMenuVisible" 
                            class="absolute mt-2 right-0"
                            minWidth="120px"
                        >
                            <div class="flex flex-col p-1" v-if="!isLoggedIn">
                                <AppMenuItem @click="navigateToLoginOnClick()" title="Giriş Yap" icon="bi:box-arrow-in-right" />
                                <AppMenuItem @click="navigateToRegisterOnClick()" title="Kayıt Ol" icon="bi:person-plus-fill" />
                            </div>
                            <div class="flex flex-col p-1" v-else>
                                <AppMenuItem @click="" title="Bildirimlerim" icon="material-symbols:notifications" />
                                <AppMenuItem @click="" title="Başlıklarım" icon="material-symbols:format-align-left" />
                                <AppMenuItem @click="" title="Hesabım" icon="material-symbols:person" />
                                <AppMenuItem @click="" title="Ayarlar" icon="ic:baseline-settings" />
                                <AppMenuItem @click="logOutOnClick" title="Çıkış Yap" icon="material-symbols:logout" />
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
    import { GetToken } from '~/services/core/localStoreageCore';

    const store = useLayoutStore();

    onMounted(() => {
        GetToken().then((response => {
            if (response) {
                isLoggedIn.value = true;
            }
        }))
    })

    const isNavbarVisible = computed(() => store.isNavbarVisible);
    const isSelectFilterButtonVisible = computed(() => store.isSelectFilterButtonVisible);
    const isSearchBarVisible = computed(() => store.isSearchBarVisible);
    const isUsersButtonVisible = computed(() => store.isUsersButtonVisible);
    const isGroupsButtonVisible = computed(() => store.isGroupsButtonVisible);
    const isAccountButtonVisible = computed(() => store.isAccountButtonVisible);
    const isCreateTitleButtonVisible = computed(() => store.isCreateTitleButtonVisible);
    const isAdminButtonVisible = computed(() => store.isAdminButtonVisible);

    let isAccountMenuVisible = computed({
        get() {
            return store.isAccountMenuVisible;
        },
        set(value) {
            store.isAccountMenuVisible = value;
        }
    });

    const isLoggedIn = computed({
        get(): boolean {
            return store.isLoggedIn
        },
        set(value: boolean) {
            store.isLoggedIn = value;
        }
    })

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

    function navigateToAdminPanel() {
        navigateTo("admin")
    }

    function logOutOnClick() {
        store.logOut();
    }

</script>

<style scoped>


</style>

