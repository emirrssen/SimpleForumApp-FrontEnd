import { useToast } from "vue-toastification";

import {
    LoginAsync
} from "~/services/auth/login/index"

import {
    SetToken
} from "~/services/core/localStoreageCore"

export const useLoginStore = defineStore('login', () => {
    const toast = useToast();

    const email: Ref<string> = ref("");
    const password: Ref<string> = ref("");

    function Login(): Promise<number> {
        return LoginAsync(email.value, password.value).then((response => {
            if (response.isSuccess && response.data && response.code === 1) {
                SetToken(response.data.accessToken);
                localStorage.setItem("expirationDate", response.data.expirationDate);
                localStorage.setItem("refreshToken", response.data.refreshToken);
                localStorage.setItem("refreshTokenExpirationDate", response.data.refreshTokenExpirationDate);
                toast.success("Giriş Başarılı");
            }

            return response.code;
        }))
    }

    return {
        email,
        password,
        Login
    }
})