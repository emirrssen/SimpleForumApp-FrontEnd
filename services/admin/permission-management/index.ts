import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    PermissionToList
} from "./types"

export function GetPermissionsByStatusAsync(isPassiveShown: boolean): Promise<GenericDataResponse<PermissionToList[]>> {
    return Get<GenericDataResponse<PermissionToList[]>>('admin/permission-management', { IsPassiveShown: isPassiveShown });
}