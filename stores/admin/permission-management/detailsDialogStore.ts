import {
    Permission
} from "~/services/admin/permission-management/types"

import {
    InsertAsync
} from "~/services/admin/permission-management/index"

import { SelectItem } from "~/services/app/types";
import { GetStatusesAsync } from "~/services/admin/status-management/index"

import { useToast } from "vue-toastification";

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

    function insert(): Promise<boolean> {
        return InsertAsync(currentPermission.value).then((response => {
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
        insert
    }
})