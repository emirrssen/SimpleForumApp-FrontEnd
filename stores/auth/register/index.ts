import {
    UserToRegister
} from "~/services/auth/types"

export const useRegisterStore = defineStore('register', () => {
    const userToRegister: Ref<UserToRegister> = ref({...new UserToRegister()});

    return {
        userToRegister
    }
})