import {
    UserToRegister
} from "~/services/auth/register/types"

import {
    SelectItem
} from "~/services/app/types"

import {
    GetCountriesAsync
} from "~/services/admin/country-management/index"

export const useRegisterStore = defineStore('register', () => {
    const userToRegister: Ref<UserToRegister> = ref({...new UserToRegister()});
    const countries: Ref<SelectItem[]> = ref([]);

    function getCountries(): Promise<void> {
        return GetCountriesAsync().then((response => {
            if (response.data) {
                countries.value = response.data.map(x => new SelectItem({
                    id: x.id,
                    title: x.title
                }))
            }
        }))
    }

    return {
        userToRegister,
        countries,
        getCountries
    }
})