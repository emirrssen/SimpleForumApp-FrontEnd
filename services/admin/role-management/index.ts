import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    RoleToSelect
} from "./types"

export function GetAllDetailsByStatusAsync(statusId: number): Promise<GenericDataResponse<RoleToSelect[]>> {
    return Get<GenericDataResponse<RoleToSelect[]>>('admin/role-management', { StatusId: statusId });
}