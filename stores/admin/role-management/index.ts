import {
    RoleToSelect
} from "~/services/admin/role-management/types";

import {
    GetAllDetailsByStatusAsync,
    CanEnter
} from "~/services/admin/role-management/index";

export const useAdminRoleManagementStore = defineStore('admin-role-management', () => {
    const isPassiveShown: Ref<boolean> = ref(false);
    const roles: Ref<RoleToSelect[]> = ref([]);

    function getRoles(): Promise<void> {
        return GetAllDetailsByStatusAsync(isPassiveShown.value ? 2 : 1).then((response => {
            if (response.isSuccess && response.data) {
                roles.value = response.data;
            } else {
                roles.value = [];
            }
        }))
    }

    function canEnter(): Promise<boolean> {
        return CanEnter().then((response => {
            return response.isSuccess
        }))
    }

    return {
        isPassiveShown,
        roles,
        getRoles,
        canEnter
    }
})