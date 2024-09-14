export const useLayoutStore = defineStore('layout', () => {

    const isNavbarVisible: Ref<boolean> = ref(true);
    const isSelectFilterButtonVisible: Ref<boolean> = ref(true);
    const isSearchBarVisible: Ref<boolean> = ref(true);
    const isUsersButtonVisible: Ref<boolean> = ref(true);
    const isGroupsButtonVisible: Ref<boolean> = ref(true);
    const isAccountButtonVisible: Ref<boolean> = ref(true);
    const isCreateTitleButtonVisible: Ref<boolean> = ref(true);
    const isLoadingVisible: Ref<boolean> = ref(false);
    const isLoggedIn: Ref<boolean> = ref(false);

    const isAccountMenuVisible: Ref<boolean> = ref(false);

    return {
        isNavbarVisible,
        isSelectFilterButtonVisible,
        isSearchBarVisible,
        isUsersButtonVisible,
        isGroupsButtonVisible,
        isAccountButtonVisible,
        isCreateTitleButtonVisible,
        isAccountMenuVisible,
        isLoadingVisible,
        isLoggedIn
    }
})