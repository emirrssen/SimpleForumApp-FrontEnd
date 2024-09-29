import { GetStatusesAsync } from "~/services/admin/status-management";
import { SelectItem } from "~/services/app/types";

import { 
    RoleToSelect, 
    RoleMatch 
} from "~/services/admin/user-management/types";

import {
    GetRolesToSelectAsync,
    GetRoleMatchingsAsync,
    InsertRoleMatchAsync,
    UpdateRoleMatchingsAsync
} from "~/services/admin/user-management/index";

import { useToast } from "vue-toastification";

export const useUserRoleMatchingDialogStore = defineStore('user-role-matching-dialog', () => {

    const toast = useToast();

    const isDialogVisible: Ref<boolean> = ref(false);
    const currentUserId: Ref<number> = ref(0);

    const roles: Ref<RoleToSelect[]> = ref([]);
    const roleMatchings: Ref<RoleMatch[]> = ref([]);
    const statuses: Ref<SelectItem[]> = ref([]);

    const selectedRole: Ref<number> = ref(0);

    function getRoles(userId: number): Promise<void> {
        return GetRolesToSelectAsync(userId).then((response => {
            if (response.isSuccess && response.data) {
                roles.value = response.data;
            } else {
                roles.value = [];
            }
        }))
    }

    function getRoleMatchings(userId: number): Promise<void> {
        return GetRoleMatchingsAsync(userId).then((response => {
            if (response.isSuccess && response.data) {
                roleMatchings.value = response.data
            } else {
                roleMatchings.value = [];
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

    function insertRoleMatch(): Promise<boolean> {
        return InsertRoleMatchAsync(currentUserId.value, selectedRole.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message)
            }

            return response.isSuccess;
        }))
    }

    function updateRoleMatchings(): Promise<boolean> {
        return UpdateRoleMatchingsAsync(roleMatchings.value, currentUserId.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message)
            }

            return response.isSuccess;
        }))
    }

    return {
        currentUserId,
        isDialogVisible,
        roles,
        roleMatchings,
        statuses,
        selectedRole,
        getRoles,
        getRoleMatchings,
        getStatuses,
        insertRoleMatch,
        updateRoleMatchings
    }
})