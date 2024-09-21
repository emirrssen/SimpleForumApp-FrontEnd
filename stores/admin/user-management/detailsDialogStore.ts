import {
    UserDetails,
    UserToAdd
} from "~/services/admin/user-management/types"

import { SelectItem } from "~/services/app/types";
import { useToast } from "vue-toastification";

import {
    GetUserDetailByUserNameAsync,
    UpdateByIdAsync,
    InsertAsync
} from "~/services/admin/user-management/index"

import { GetStatusesAsync } from "~/services/admin/status-management/index"
import { GetCountriesAsync } from "~/services/admin/country-management/index"
import { GetGendersAsync } from "~/services/admin/gender-management";
import { RegisterAsync } from "~/services/auth/register";

export const useAdminUserManagementDetailsDialogStore = defineStore("user-management-details-dialog", () => {

    const toast = useToast();

    const isDialogVisible: Ref<boolean> = ref(false);
    const currentUser: Ref<UserDetails> = ref({...new UserDetails()});
    const countries: Ref<SelectItem[]> = ref([]);
    const genders: Ref<SelectItem[]> = ref([]);
    const statuses: Ref<SelectItem[]> = ref([]);

    function getUserDetailByUserName(userName: string): Promise<boolean> {
        return GetUserDetailByUserNameAsync(userName).then((response => {
            if (response.isSuccess && response.data) {
                currentUser.value = response.data;
            }

            return response.isSuccess;
        }))
    }

    function getStatuses(): Promise<void> {
        return GetStatusesAsync().then((response => {
            if (response.isSuccess && response.data) {
                statuses.value = response.data;
            }
        }))
    }

    function getGenders(): Promise<void> {
        return GetGendersAsync().then((response => {
            if (response.isSuccess && response.data) {
                genders.value = response.data
            }
        }))
    }

    function getCountries(): Promise<void> {
        return GetCountriesAsync().then((response => {
            if (response.isSuccess && response.data) {
                countries.value = response.data;
            }
        }))
    }

    function updateById(): Promise<boolean> {
        return UpdateByIdAsync(currentUser.value).then((response => {
            if (response.isSuccess) {
                isDialogVisible.value = false;
                toast.success(response.message)
            }

            return response.isSuccess;
        }))
    }

    function insert(): Promise<boolean> {
        return InsertAsync(currentUser.value).then((response => {
            if (response.isSuccess) {
                isDialogVisible.value = false;
                toast.success(response.message);
            }

            return response.isSuccess;
        }))
    }

    return {
        isDialogVisible,
        currentUser,
        statuses,
        genders,
        countries,
        getUserDetailByUserName,
        getCountries,
        getGenders,
        getStatuses,
        updateById,
        insert
    }
})