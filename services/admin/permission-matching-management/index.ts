import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    PermissionMatch
} from "./types"

import { PermissionToList } from "../permission-management/types";

export function GetUnmatchedPermissionForEndPointAsync(endPointId: number): Promise<GenericDataResponse<PermissionToList[]>> {
    return Get<GenericDataResponse<PermissionToList[]>>('admin/permission-matching-management/permissions-unmatched-for-endpoints', { EndPointId: endPointId });
}

export function GetPermissionMatchingsForEndPointsByEndPointIdAsync(endPointId: number): Promise<GenericDataResponse<PermissionMatch[]>> {
    return Get<GenericDataResponse<PermissionMatch[]>>('admin/permission-matching-management/for-end-points-by-endpoint', { EndPointId: endPointId });
}

export function InsertEndPointMatchAsync(endPointId: number, permissionId: number): Promise<Response> {
    return Post<Response>('admin/permission-matching-management/insert-end-point-match', {}, {
        EndPointId: endPointId,
        PermissionId: permissionId
    });
}

export function UpdateEndPointMatchesAsync(itemsToUpdate: PermissionMatch[], endPointId: number): Promise<Response> {
    return Put<Response>('admin/permission-matching-management/update-end-point-matches', {}, {
        ItemsToUpdate: itemsToUpdate.map(x => {
            return {
                EndPointId: endPointId,
                PermissionId: x.permissionId,
                StatusId: x.statusId
            }
        })
    })
}

export function GetUnmatchedPermissionsForRoleAsync(roleId: number): Promise<GenericDataResponse<PermissionToList[]>> {
    return Get<GenericDataResponse<PermissionToList[]>>('admin/permission-matching-management/permissions-unmatched-for-roles', { RoleId: roleId })
}

export function GetPermissionMatchingsForRolesByRoleIdAsync(roleId: number): Promise<GenericDataResponse<PermissionMatch[]>> {
    return Get<GenericDataResponse<PermissionMatch[]>>('admin/permission-matching-management/for-roles-by-role', { RoleId: roleId });
}

export function InsertRoleMatchAsync(roleId: number, permissionId: number): Promise<Response> {
    return Post<Response>('admin/permission-matching-management/insert-role-match', {}, {
        RoleId: roleId,
        PermissionId: permissionId
    });
}