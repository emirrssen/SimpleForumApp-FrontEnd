import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

export function SendMailForPasswordResetAsync(email: string): Promise<GenericDataResponse<string>> {
    return Get<GenericDataResponse<string>>('auth/forgot-my-password/send-mail-for-password-reset', { Email: email })
}