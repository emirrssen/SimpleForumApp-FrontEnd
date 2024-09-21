export const useAdminStore = defineStore("admin", () => {
    const selectedPage: Ref<number> = ref(0);

    return {
        selectedPage
    }
})