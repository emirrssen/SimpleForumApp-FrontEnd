import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    PermissionToList,
    Permission
} from "./types"

export function GetPermissionsByStatusAsync(isPassiveShown: boolean): Promise<GenericDataResponse<PermissionToList[]>> {
    return Get<GenericDataResponse<PermissionToList[]>>('admin/permission-management', { IsPassiveShown: isPassiveShown });
}

export function InsertAsync(permissionToAdd: Permission): Promise<Response> {
    return Post<Response>('admin/permission-management', { }, {
        StatusId: permissionToAdd.statusId,
        Name: permissionToAdd.name,
        Description: permissionToAdd.description
    });
}