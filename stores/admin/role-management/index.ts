import {
    RoleToSelect
} from "~/services/admin/role-management/types";

import {
    GetAllDetailsByStatusAsync
} from "~/services/admin/role-management/index";

export const useAdminRoleManagementStore = defineStore('admin-role-management', () => {
    const isPassiveShown: Ref<boolean> = ref(false);
    const roles: Ref<RoleToSelect[]> = ref([]);

    function getRoles(): Promise<void> {
        return GetAllDetailsByStatusAsync(isPassiveShown ? 2 : 1).then((response => {
            if (response.isSuccess) {
                roles.value = response.data || []
            }
        }))
    }

    return {
        isPassiveShown,
        roles,
        getRoles
    }
})