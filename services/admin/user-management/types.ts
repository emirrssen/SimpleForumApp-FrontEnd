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