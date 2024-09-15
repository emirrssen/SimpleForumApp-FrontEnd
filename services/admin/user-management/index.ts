import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    UserToList,
    UserDetails
} from "./types"

export function GetUsersToListAsync(): Promise<GenericDataResponse<UserToList[]>> {
    return Get<GenericDataResponse<UserToList[]>>('admin/user-management/users-to-list');
}

export function GetUserDetailByUserNameAsync(userName: string): Promise<GenericDataResponse<UserDetails>> {
    return Get<GenericDataResponse<UserDetails>>('admin/user-management/details-by-username', { UserName: userName });
}