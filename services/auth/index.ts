import { Response, GenericDataResponse } from "../core/responseCore";
import { Get, Post, Put } from "../core/serviceCore"

import {
    Token
} from "./types"

export function LoginAsync(email: string, password: string): Promise<GenericDataResponse<Token>> {
    return Get<GenericDataResponse<Token>>('auth/login', { Email: email, Password: password });
}

export function SendMailForPasswordResetAsync(email: string): Promise<GenericDataResponse<string>> {
    return Get<GenericDataResponse<string>>('auth/send-mail-for-password-reset', { Email: email })
}