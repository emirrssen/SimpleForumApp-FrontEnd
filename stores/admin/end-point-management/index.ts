import {
    EndPoint,
    GroupedEndPoint
} from "~/services/admin/end-point-management/types"

import {
    GetDetailsByStatusAsync
} from "~/services/admin/end-point-management/index"

export const useAdminEndPointManagementStore = defineStore('admin-end-point-management', () => {
    const isPassiveShown: Ref<boolean> = ref(false);
    const endPoints: Ref<GroupedEndPoint[]> = ref([]);
    const selectedEndPointGroup: Ref<EndPoint[]> = ref([]);
    const selectedControllerName: Ref<string> = ref("");

    function getEndPointsByStatus(): Promise<void> {
        return GetDetailsByStatusAsync(!isPassiveShown.value).then((response => {
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
        isPassiveShown,
        endPoints,
        selectedEndPointGroup,
        selectedControllerName,
        getEndPointsByStatus
    }
})