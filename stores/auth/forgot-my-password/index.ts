import { useToast } from "vue-toastification";

import {
    SendMailForPasswordResetAsync
} from "~/services/auth/index"

export const useForgotMyPasswordStore = defineStore('forgot-my-password', () => {
    const toast = useToast();

    const email: Ref<string> = ref("");

    function SendMailForPasswordReset(): Promise<void> {
        return SendMailForPasswordResetAsync(email.value).then((response => {
            if (response.isSuccess) {
                toast.success("Şifre sıfırlama bağlantısı e-posta adresinize gönderilmiştir.")
            }
        }))
    }

    return {
        email,
        SendMailForPasswordReset
    }
})