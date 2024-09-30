import {
    GetUsersToListAsync,
    CanEnter
} from "~/services/admin/user-management/index"

import {
    UserToList
} from "~/services/admin/user-management/types"

export const useAdminUserManagementStore = defineStore('admin-user-management', () => {
    const userToList: Ref<UserToList[]> = ref([]);
    const isPassiveShown: Ref<boolean> = ref(false);

    function getUsersToList(): Promise<void> {
        return GetUsersToListAsync(isPassiveShown.value).then((response => {
            if (response.isSuccess && response.data) {
                userToList.value = response.data;
            } else {
                userToList.value = [];
            }
        }))
    }

    function canEnter(): Promise<boolean> {
        return CanEnter().then((response => {
            return response.isSuccess;
        }))
    }

    return {
        userToList,
        isPassiveShown,
        getUsersToList,
        canEnter
    }
})