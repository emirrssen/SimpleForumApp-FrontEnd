import { PermissionToList } from "~/services/admin/permission-management/types";
import { GetStatusesAsync } from "~/services/admin/status-management";
import { SelectItem } from "~/services/app/types";

import {
    PermissionMatch
} from "~/services/admin/permission-matching-management/types";

import {
    GetUnmatchedPermissionForEndPointAsync,
    GetPermissionMatchingsForEndPointsByEndPointIdAsync,
    InsertEndPointMatchAsync,
    UpdateEndPointMatchesAsync,
    GetUnmatchedPermissionsForRoleAsync,
    GetPermissionMatchingsForRolesByRoleIdAsync,
    InsertRoleMatchAsync,
    UpdateRoleMatchesAsync
} from "~/services/admin/permission-matching-management/index";

import { useToast } from "vue-toastification";

export const usePermissionMatchingDialogStore = defineStore('permission-matching-dialog-store', () => {

    const toast = useToast();

    const isDialogVisible: Ref<boolean> = ref(false);
    const permissions: Ref<PermissionToList[]> = ref([]);
    const selectedPermission: Ref<number> = ref(0);
    const permissionMatchings: Ref<PermissionMatch[]> = ref([]);
    const statuses: Ref<SelectItem[]> = ref([]);
    const idToUse: Ref<number> = ref(0);
    const type: Ref<number> = ref(0);

    function getUnmatchedPermissionsForEndPoint(endPointId: number): Promise<void> {
        return GetUnmatchedPermissionForEndPointAsync(endPointId).then((response => {
            if (response.isSuccess && response.data) {
                permissions.value = response.data;
            } else {
                permissions.value = [];
            }
        }))
    }

    function getPermissionMatchingsForEndPoint(endPointId: number): Promise<void> {
        return GetPermissionMatchingsForEndPointsByEndPointIdAsync(endPointId).then((response => {
            if (response.isSuccess && response.data) {
                permissionMatchings.value = response.data;
            } else {
                permissionMatchings.value = []
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

    function insertEndPointMatch(): Promise<boolean> {
        return InsertEndPointMatchAsync(idToUse.value, selectedPermission.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message)
            }

            return response.isSuccess;
        }))
    }

    function updateEndPointMatches(): Promise<boolean> {
        return UpdateEndPointMatchesAsync(permissionMatchings.value, idToUse.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message)
            }

            return response.isSuccess;
        }))
    }

    function getUnmatchedPermissionsForRole(roleId: number): Promise<void> {
        return GetUnmatchedPermissionsForRoleAsync(roleId).then((response => {
            if (response.isSuccess && response.data) {
                permissions.value = response.data;
            } else {
                permissionMatchings.value = [];
            }
        }))
    }

    function getPermissionMatchingsForRoles(roleId: number): Promise<void> {
        return GetPermissionMatchingsForRolesByRoleIdAsync(roleId).then((response => {
            if (response.isSuccess && response.data) {
                permissionMatchings.value = response.data
            } else {
                permissionMatchings.value = [];
            }
        }))
    }

    function insertRoleMatch(): Promise<boolean> {
        return InsertRoleMatchAsync(idToUse.value, selectedPermission.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message)
            }

            return response.isSuccess;
        }));
    }

    function updateRoleMatches(): Promise<boolean> {
        return UpdateRoleMatchesAsync(permissionMatchings.value, idToUse.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message)
            }

            return response.isSuccess;
        }))
    }

    return {
        isDialogVisible,
        permissions,
        selectedPermission,
        permissionMatchings,
        statuses,
        idToUse,
        type,
        getUnmatchedPermissionsForEndPoint,
        getPermissionMatchingsForEndPoint,
        getStatuses,
        insertEndPointMatch,
        updateEndPointMatches,
        getUnmatchedPermissionsForRole,
        getPermissionMatchingsForRoles,
        insertRoleMatch,
        updateRoleMatches
    }
})