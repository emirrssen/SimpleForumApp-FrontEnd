import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    Role,
    RoleToSelect
} from "./types"

export function GetAllDetailsByStatusAsync(statusId: number): Promise<GenericDataResponse<RoleToSelect[]>> {
    return Get<GenericDataResponse<RoleToSelect[]>>('admin/role-management', { StatusId: statusId });
}

export function GetByIdAsync(id: number): Promise<GenericDataResponse<Role>> {
    return Get<GenericDataResponse<Role>>('admin/role-management/by-id', { Id: id });
}

export function InsertAsync(role: Role): Promise<Response> {
    return Post<Response>('admin/role-management', {}, {
        StatusId: role.statusId,
        Name: role.name,
        Description: role.description
    });
}

export function UpdateByIdAsync(role: Role): Promise<Response> {
    return Put<Response>('admin/role-management', { }, {
        Id: role.id,
        StatusId: role.statusId,
        Name: role.name,
        Description: role.description
    });
}