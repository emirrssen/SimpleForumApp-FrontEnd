import {
    Permission
} from "~/services/admin/permission-management/types"

import {
    InsertAsync,
    GetByIdAsync,
    UpdateByIdAsync
} from "~/services/admin/permission-management/index"

import { SelectItem } from "~/services/app/types";
import { GetStatusesAsync } from "~/services/admin/status-management/index"

import { useToast } from "vue-toastification";
import { update } from "lodash";

export const useAdminPermissionManagementDetailsDialogStore = defineStore('permission-management-details-dialog', () => {

    const toast = useToast();

    const isDialogVisible: Ref<boolean> = ref(false);

    const currentPermission: Ref<Permission> = ref({...new Permission()});
    const statuses: Ref<SelectItem[]> = ref([]);

    function getStatuses(): Promise<void> {
        return GetStatusesAsync().then((response => {
            if (response.isSuccess && response.data) {
                statuses.value = response.data;
            }
        }))
    }

    function getById(id: number): Promise<boolean> {
        return GetByIdAsync(id).then((response => {
            if (response.isSuccess && response.data) {
                console.log(response.data);
                currentPermission.value = response.data
            }

            return response.isSuccess;
        }))
    }

    function insert(): Promise<boolean> {
        return InsertAsync(currentPermission.value).then((response => {
            if (response.isSuccess) {
                isDialogVisible.value = false;
                toast.success(response.message);
            }

            return response.isSuccess;
        }))
    }

    function updateById(): Promise<boolean> {
        return UpdateByIdAsync(currentPermission.value).then((response => {
            if (response.isSuccess) {
                isDialogVisible.value = false;
                toast.success(response.message);
            }

            return response.isSuccess;
        }))
    }

    return {
        isDialogVisible,
        currentPermission,
        statuses,
        getStatuses,
        insert,
        getById,
        updateById
    }
})