import {
    PermissionToList
} from "~/services/admin/permission-management/types"

import {
    GetPermissionsByStatusAsync
} from "~/services/admin/permission-management/index"

export const useAdminPermissionManagementStore = defineStore('admin-permission-management', () => {
    
    const permissions: Ref<PermissionToList[]> = ref([]);

    const isPassiveShown: Ref<boolean> = ref(false);

    function getPermissions(): Promise<void> {
        return GetPermissionsByStatusAsync(isPassiveShown.value).then((response => {
            if (response.isSuccess && response.data) {
                permissions.value = response.data;
            } else {
                permissions.value = [];
            }
        }))
    }

    return {
        permissions,
        isPassiveShown,
        getPermissions
    }
})