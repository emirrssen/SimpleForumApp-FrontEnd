import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    UserToList
} from "./types"

export function GetUsersToListAsync(): Promise<GenericDataResponse<UserToList[]>> {
    return Get<GenericDataResponse<UserToList[]>>('admin/user-management/users-to-list');
}