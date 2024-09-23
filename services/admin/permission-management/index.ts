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

export function GetByIdAsync(id: number): Promise<GenericDataResponse<Permission>> {
    return Get<GenericDataResponse<Permission>>('admin/permission-management/by-id', { Id: id });
}

export function UpdateByIdAsync(permissionToUpdate: Permission): Promise<Response> {
    return Put<Response>('admin/permission-management', { }, {
        Id: permissionToUpdate.id,
        StatusId: permissionToUpdate.statusId,
        Name: permissionToUpdate.name,
        Description: permissionToUpdate.description
    });
}