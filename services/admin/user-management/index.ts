import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    UserToList,
    UserDetails,
    UserToAdd
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