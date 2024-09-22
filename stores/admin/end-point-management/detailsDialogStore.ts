import { useToast } from "vue-toastification";

import {
    EndPointDetail,
    EndPointToUpdate
} from "~/services/admin/end-point-management/types"

import {
    GetDetailsByIdAsync,
    UpdateByIdAsync
} from "~/services/admin/end-point-management/index"

export const useAdminEndPointManagementDetailsDialogStore = defineStore('end-point-management-details-store', () => {
    const toast = useToast();

    const isDialogVisible: Ref<boolean> =  ref(false);
    const currentEndPoint: Ref<EndPointDetail> = ref({...new EndPointDetail()})
    const isUse: Ref<number> = ref(0);
    const isActive: Ref<number> = ref(0);

    function getById(id: number): Promise<boolean> {
        return GetDetailsByIdAsync(id).then((response => {
            if (response.isSuccess && response.data) {
                currentEndPoint.value = response.data
                isUse.value = response.data.isUse ? 1 : 2
                isActive.value = response.data.isActive ? 1 : 2
            }

            return response.isSuccess;
        }))
    }

    function updateById(): Promise<boolean> {
        return UpdateByIdAsync(new EndPointToUpdate({
            description: currentEndPoint.value.description,
            id: currentEndPoint.value.id,
            isActive: isActive.value == 1 ? true : isActive.value == 2 ? false : true,
            isUse: isUse.value == 1 ? true : isUse.value == 2 ? false : true
        })).then((response => {
            if (response.isSuccess) {
                toast.success(response.message)
                isDialogVisible.value = false;
            }

            return response.isSuccess;
        }))
    }

    return {
        isDialogVisible,
        currentEndPoint,
        isUse,
        isActive,
        getById,
        updateById
    }
})