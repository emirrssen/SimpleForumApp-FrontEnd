import {
    UserToRegister
} from "~/services/auth/register/types"

import {
    SelectItem
} from "~/services/app/types"

import {
    GetCountriesAsync
} from "~/services/admin/country-management/index"

import {
    GetGendersAsync
} from "~/services/admin/gender-management"

import {
    RegisterAsync
} from "~/services/auth/register/index"

import { useToast } from "vue-toastification";

export const useRegisterStore = defineStore('register', () => {
    const toast = useToast();

    const userToRegister: Ref<UserToRegister> = ref({...new UserToRegister()});
    const countries: Ref<SelectItem[]> = ref([]);
    const genders: Ref<SelectItem[]> = ref([]);

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

    function getGenders(): Promise<void> {
        return GetGendersAsync().then((respones => {
            if (respones.data) {
                genders.value = respones.data.map(x => new SelectItem({
                    id: x.id,
                    title: x.title
                }))
            }
        }))
    }

    function register() {
        RegisterAsync(userToRegister.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message)
                navigateTo("")
            }
        }))
    }

    return {
        userToRegister,
        countries,
        genders,
        getCountries,
        getGenders,
        register
    }
})