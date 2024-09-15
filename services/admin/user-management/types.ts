export class UserToList {
    userName: string = "";
    firstName: string = "";
    lastName: string = "";
    genderName: string = "";
    countryName: string = "";
    dateOfBirth: string = "";
    createdDate: string = "";

    constructor(fields?: {
        userName: string,
        firstName: string,
        lastName: string,
        genderName: string,
        countryName: string,
        dateOfBirth: string,
        createdDate: string
    }) {
        Object.assign(this, fields);
    }
}