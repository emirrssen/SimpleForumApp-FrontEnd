import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    GroupedEndPoint,
    EndPointDetail,
    EndPointToUpdate
} from "./types"

export function GetAllDetailsAsync(): Promise<GenericDataResponse<GroupedEndPoint[]>> {
    return Get<GenericDataResponse<GroupedEndPoint[]>>('admin/end-point-management')
}

export function GetDetailsByIdAsync(id: number): Promise<GenericDataResponse<EndPointDetail>> {
    return Get<GenericDataResponse<EndPointDetail>>('admin/end-point-management/by-id', { Id: id });
}

export function UpdateByIdAsync(endPointToUpdate: EndPointToUpdate): Promise<Response> {
    return Put<Response>('admin/end-point-management', { }, {
        Id: endPointToUpdate.id,
        IsUse: endPointToUpdate.isUse,
        IsActive: endPointToUpdate.isActive,
        Description: endPointToUpdate.description
    });
}

export function CanEnter(): Promise<Response> {
    return Get<Response>('admin/end-point-management/can-enter');
}