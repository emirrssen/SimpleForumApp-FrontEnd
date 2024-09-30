import { SetToken } from "~/services/core/localStoreageCore";
import { useToast } from "vue-toastification";

export const useLayoutStore = defineStore('layout', () => {

    const toast = useToast();

    const isNavbarVisible: Ref<boolean> = ref(true);
    const isSelectFilterButtonVisible: Ref<boolean> = ref(true);
    const isSearchBarVisible: Ref<boolean> = ref(true);
    const isUsersButtonVisible: Ref<boolean> = ref(true);
    const isGroupsButtonVisible: Ref<boolean> = ref(true);
    const isAccountButtonVisible: Ref<boolean> = ref(true);
    const isCreateTitleButtonVisible: Ref<boolean> = ref(true);
    const isLoadingVisible: Ref<boolean> = ref(false);
    const isAdminButtonVisible: Ref<boolean> = ref(true);
    const isAccountMenuVisible: Ref<boolean> = ref(false);

    const isLoggedIn: Ref<boolean> = ref(false);

    function logOut() {
        SetToken("").then(() => {
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("expirationDate");
            localStorage.removeItem("refreshTokenExpirationDate");
            isLoggedIn.value = false;
            isAccountMenuVisible.value = false;
            navigateTo("");
            toast.success("Çıkış Başarılı");
        })
    }


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
        isAdminButtonVisible,
        isLoggedIn,
        logOut
    }
})