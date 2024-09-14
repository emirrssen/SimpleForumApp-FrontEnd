import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import { 
    UserToRegister 
} from "./types";

export function RegisterAsync(userToRegister: UserToRegister): Promise<Response> {
    return Post<Response>('auth/register', {}, userToRegister)
}