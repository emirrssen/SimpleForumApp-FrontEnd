import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    Token
} from "./types"

export function LoginAsync(email: string, password: string): Promise<GenericDataResponse<Token>> {
    return Get<GenericDataResponse<Token>>('auth/login', { Email: email, Password: password });
}