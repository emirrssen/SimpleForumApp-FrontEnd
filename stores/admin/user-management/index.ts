import {
    GetUsersToListAsync
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

    return {
        userToList,
        isPassiveShown,
        getUsersToList
    }
})