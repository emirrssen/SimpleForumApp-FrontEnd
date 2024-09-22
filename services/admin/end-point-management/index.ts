import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    EndPoint,
    GroupedEndPoint
} from "./types"

export function GetDetailsByStatusAsync(isActive: boolean): Promise<GenericDataResponse<GroupedEndPoint[]>> {
    return Get<GenericDataResponse<GroupedEndPoint[]>>('admin/end-point-management', { IsActive: isActive })
}