export class UserToList {
    userName: string = "";
    firstName: string = "";
    lastName: string = "";
    genderName: string = "";
    countryName: string = "";
    dateOfBirth: string = "";
    statusName: string = "";

    constructor(fields?: {
        userName: string,
        firstName: string,
        lastName: string,
        genderName: string,
        countryName: string,
        dateOfBirth: string,
        statusName: string
    }) {
        Object.assign(this, fields);
    }
}

export class UserDetails {
    id: number = 0;
    statusId: number = 0;
    genderId: number = 0;
    countryId: number = 0;
    userName: string = "";
    firstName: string = "";
    lastName: string = "";
    dateOfBirth: string = "";
    profileImage: string = "";
    email: string = "";
    phoneNumber: string = "";

    constructor(fields?: {
        id: number,
        statusId: number,
        genderId: number,
        countryId: number,
        userName: string,
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        profileImage: string,
        email: string,
        phoneNumber: string
    }) {
        Object.assign(this, fields);
    }
}

export class UserToAdd {
    StatusId: number = 0;
    GenderId: number = 0;
    CountryId: number = 0;
    UserName: string = "";
    FirstName: string = "";
    LastName: string = "";
    EmailAddress: string = "";
    PhoneNumber: string = "";
    DateOfBirth: string = "";

    constructor(fields?: {
        StatusId: number,
        GenderId: number,
        CountryId: number,
        UserName: string,
        FirstName: string,
        LastName: string,
        EmailAddress: string,
        PhoneNumber: string,
        DateOfBirth: string
    }) {
        Object.assign(this, fields);
    }
}

export class RoleToSelect {
    id: number = 0;
    name: string = "";

    constructor(fields?: { id: number, name: string }) {
        Object.assign(this, fields);
    }
}

export class RoleMatch {
    roleId: number = 0;
    statusId: number = 0;
    roleName: string = "";
    createdDate: string = "";

    constructor(fields?: {
        roleId: number,
        statusId: number,
        roleName: string,
        createdDate: string
    }) {
        Object.assign(this, fields);
    }
}