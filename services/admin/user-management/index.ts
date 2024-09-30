import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    UserToList,
    UserDetails,
    UserToAdd,
    RoleToSelect,
    RoleMatch
} from "./types"

export function GetUsersToListAsync(isPassiveShown: boolean): Promise<GenericDataResponse<UserToList[]>> {
    return Get<GenericDataResponse<UserToList[]>>('admin/user-management/users-to-list', { IsPassiveShown: isPassiveShown });
}

export function GetUserDetailByUserNameAsync(userName: string): Promise<GenericDataResponse<UserDetails>> {
    return Get<GenericDataResponse<UserDetails>>('admin/user-management/details-by-username', { UserName: userName });
}

export function UpdateByIdAsync(userToUpdate: UserDetails): Promise<Response> {
    return Put<Response>("admin/user-management", { }, {
        Id: userToUpdate.id,
        StatusId: userToUpdate.statusId,
        GenderId: userToUpdate.genderId,
        CountryId: userToUpdate.countryId,
        FirstName: userToUpdate.firstName,
        LastName: userToUpdate.lastName,
        DateOfBirth: userToUpdate.dateOfBirth
    })
}

export function InsertAsync(userToAdd: UserDetails): Promise<Response> {
    return Post<Response>("admin/user-management", { }, {
        CountryId: userToAdd.countryId,
        StatusId: userToAdd.statusId,
        GenderId: userToAdd.genderId,
        UserName: userToAdd.userName,
        FirstName: userToAdd.firstName,
        LastName: userToAdd.lastName,
        EmailAddress: userToAdd.email,
        PhoneNumber: userToAdd.phoneNumber,
        DateOfBirth: userToAdd.dateOfBirth
    });
}

export function GetRolesToSelectAsync(userId: number): Promise<GenericDataResponse<RoleToSelect[]>> {
    return Get<GenericDataResponse<RoleToSelect[]>>('admin/user-management/roles-to-select', { UserId: userId });
}

export function GetRoleMatchingsAsync(userId: number): Promise<GenericDataResponse<RoleMatch[]>> {
    return Get<GenericDataResponse<RoleMatch[]>>('admin/user-management/role-matchings', { UserId: userId });
}

export function InsertRoleMatchAsync(userId: number, roleId: number): Promise<Response> {
    return Post<Response>('admin/user-management/role-match', {}, {
        UserId: userId,
        RoleId: roleId
    })
}

export function UpdateRoleMatchingsAsync(itemsToUpdate: RoleMatch[], userId: number): Promise<Response> {
    return Put<Response>('admin/user-management/update-role-matchings', {}, {
        ItemsToUpdate: itemsToUpdate.map(x => {
            return {
                UserId: userId,
                RoleId: x.roleId,
                StatusId: x.statusId
            }
        })
    })
}

export function CanEnter(): Promise<Response> {
    return Get<Response>('admin/user-management/can-enter');
}