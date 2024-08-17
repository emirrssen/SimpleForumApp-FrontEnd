export const useLayoutStore = defineStore('layout', () => {

    const isNavbarVisible: Ref<boolean> = ref(false);
    const isSelectFilterButtonVisible: Ref<boolean> = ref(false);
    const isSearchBarVisible: Ref<boolean> = ref(false);
    const isUsersButtonVisible: Ref<boolean> = ref(false);
    const isGroupsButtonVisible: Ref<boolean> = ref(false);
    const isAccountButtonVisible: Ref<boolean> = ref(false);
    const isCreateTitleButtonVisible: Ref<boolean> = ref(false);

    function setDefaultLayout() {
        isNavbarVisible.value = true;
        isSelectFilterButtonVisible.value = true;
        isSearchBarVisible.value = true;
        isUsersButtonVisible.value = true;
        isGroupsButtonVisible.value = true;
        isAccountButtonVisible.value = true;
    }

    return {
        isNavbarVisible,
        isSelectFilterButtonVisible,
        isSearchBarVisible,
        isUsersButtonVisible,
        isGroupsButtonVisible,
        isAccountButtonVisible,
        isCreateTitleButtonVisible,
        setDefaultLayout
    }
})