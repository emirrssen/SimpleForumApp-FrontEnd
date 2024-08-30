import { useToast } from "vue-toastification";

import {
    LoginAsync
} from "~/services/auth/index"

export const useLoginStore = defineStore('login', () => {
    const toast = useToast();

    const email: Ref<string> = ref("");
    const password: Ref<string> = ref("");

    function Login(): Promise<void> {
        return LoginAsync(email.value, password.value).then((response => {
            if (response.isSuccess) {
                toast.success("Giriş Başarılı");
                navigateTo("")
            }
        }))
    }

    return {
        email,
        password,
        Login
    }
})