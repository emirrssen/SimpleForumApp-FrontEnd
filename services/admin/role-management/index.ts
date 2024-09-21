import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    Role,
    RoleToSelect
} from "./types"

export function GetAllDetailsByStatusAsync(statusId: number): Promise<GenericDataResponse<RoleToSelect[]>> {
    return Get<GenericDataResponse<RoleToSelect[]>>('admin/role-management', { StatusId: statusId });
}

export function InsertAsync(role: Role): Promise<Response> {
    return Post<Response>('admin/role-management', {}, {
        StatusId: role.statusId,
        Name: role.name,
        Description: role.description
    });
}