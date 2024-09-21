import { useToast } from "vue-toastification";

import { SelectItem } from "~/services/app/types";
import { GetStatusesAsync } from "~/services/admin/status-management/index"

import {
    Role
} from "~/services/admin/role-management/types"

import {
    InsertAsync
} from "~/services/admin/role-management/index"

export const useAdminRoleManagementDetailsDialogStore = defineStore('role-management-details-dialog', () => {
    const toast = useToast();

    const isDialogVisible: Ref<boolean> = ref(false);
    const statuses: Ref<SelectItem[]> = ref([]);
    const currentRole: Ref<Role> = ref({...new Role()})

    function getStatuses(): Promise<void> {
        return GetStatusesAsync().then((response => {
            if (response.isSuccess && response.data) {
                statuses.value = response.data;
            }
        }))
    }

    function insert(): Promise<boolean> {
        return InsertAsync(currentRole.value).then((response => {
            if (response.isSuccess) {
                isDialogVisible.value = false;
                toast.success(response.message)
            }

            return response.isSuccess;
        }))
    }

    return {
        isDialogVisible,
        statuses,
        currentRole,
        getStatuses,
        insert
    }
})