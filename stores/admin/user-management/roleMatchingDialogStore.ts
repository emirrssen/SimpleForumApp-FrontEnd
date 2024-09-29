import { GetStatusesAsync } from "~/services/admin/status-management";
import { SelectItem } from "~/services/app/types";

import { 
    RoleToSelect, 
    RoleMatch 
} from "~/services/admin/user-management/types";

import {
    GetRolesToSelectAsync,
    GetRoleMatchingsAsync
} from "~/services/admin/user-management/index";

export const useUserRoleMatchingDialogStore = defineStore('user-role-matching-dialog', () => {

    const isDialogVisible: Ref<boolean> = ref(false);

    const roles: Ref<RoleToSelect[]> = ref([]);
    const roleMatchings: Ref<RoleMatch[]> = ref([]);
    const statuses: Ref<SelectItem[]> = ref([]);

    const selectedRole: Ref<number> = ref(0);

    function getRoles(userId: number): Promise<void> {
        return GetRolesToSelectAsync(userId).then((response => {
            if (response.isSuccess && response.data) {
                roles.value = response.data;
            }
        }))
    }

    function getRoleMatchings(userId: number): Promise<void> {
        return GetRoleMatchingsAsync(userId).then((response => {
            if (response.isSuccess && response.data) {
                roleMatchings.value = response.data
            }
        }))
    }

    function getStatuses(): Promise<void> {
        return GetStatusesAsync().then((response => {
            if (response.isSuccess && response.data) {
                statuses.value = response.data;
            }
        }))
    }

    return {
        isDialogVisible,
        roles,
        roleMatchings,
        statuses,
        selectedRole,
        getRoles,
        getRoleMatchings,
        getStatuses
    }
})