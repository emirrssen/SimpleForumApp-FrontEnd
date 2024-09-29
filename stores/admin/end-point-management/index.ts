import {
    EndPoint,
    GroupedEndPoint
} from "~/services/admin/end-point-management/types"

import {
    GetAllDetailsAsync
} from "~/services/admin/end-point-management/index"

export const useAdminEndPointManagementStore = defineStore('admin-end-point-management', () => {
    const endPoints: Ref<GroupedEndPoint[]> = ref([]);
    const selectedEndPointGroup: Ref<EndPoint[]> = ref([]);
    const selectedControllerName: Ref<string> = ref("");

    function getEndPointsByStatus(): Promise<void> {
        return GetAllDetailsAsync().then((response => {
            if (response.isSuccess && response.data) {
                endPoints.value = response.data
            } else {
                endPoints.value = [];
                selectedEndPointGroup.value = [];
                selectedControllerName.value = "";
            }
        }))
    }

    return {
        endPoints,
        selectedEndPointGroup,
        selectedControllerName,
        getEndPointsByStatus
    }
})