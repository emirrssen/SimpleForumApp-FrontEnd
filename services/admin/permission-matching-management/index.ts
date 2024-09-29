import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    PermissionMatchingForEndPoint
} from "./types"

import { PermissionToList } from "../permission-management/types";

export function GetUnmatchedPermissionForEndPointAsync(endPointId: number): Promise<GenericDataResponse<PermissionToList[]>> {
    return Get<GenericDataResponse<PermissionToList[]>>('admin/permission-matching-management/permissions-unmatched-for-endpoints', { EndPointId: endPointId });
}

export function GetPermissionMatchingsForEndPointsByEndPointIdAsync(endPointId: number): Promise<GenericDataResponse<PermissionMatchingForEndPoint[]>> {
    return Get<GenericDataResponse<PermissionMatchingForEndPoint[]>>('admin/permission-matching-management/for-end-points-by-endpoint', { EndPointId: endPointId });
}

export function InsertEndPointMatchAsync(endPointId: number, permissionId: number): Promise<Response> {
    return Post<Response>('admin/permission-matching-management/insert-end-point-match', {}, {
        EndPointId: endPointId,
        PermissionId: permissionId
    });
}

export function UpdateEndPointMatchesAsync(itemsToUpdate: PermissionMatchingForEndPoint[]): Promise<Response> {
    return Put<Response>('admin/permission-matching-management/update-end-point-matches', {}, {
        ItemsToUpdate: itemsToUpdate.map(x => {
            return {
                EndPointId: x.endPointId,
                PermissionId: x.permissionId,
                StatusId: x.statusId
            }
        })
    })
}