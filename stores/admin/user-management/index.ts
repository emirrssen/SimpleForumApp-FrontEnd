import {
    GetUsersToListAsync
} from "~/services/admin/user-management/index"

import {
    UserToList
} from "~/services/admin/user-management/types"

export const useAdminUserManagementStore = defineStore('admin-user-management', () => {
    const userToList: Ref<UserToList[]> = ref([]);

    function getUsersToList(): Promise<void> {
        return GetUsersToListAsync().then((response => {
            if (response.isSuccess && response.data) {
                userToList.value = response.data;
            }
        }))
    }

    return {
        userToList,
        getUsersToList
    }
})