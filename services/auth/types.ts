export class Token {
    AccessToken: string = "";
    ExpirationDate: string = "";
    RefreshToken: string = "";

    constructor(fields?: {
        AccessToken: string,
        ExpirationDate: string,
        RefreshToken: string
    }) {
        Object.assign(this, fields)
    }
}

export class UserToRegister {
    CountryId: number = 0;
    GenderId: number = 0;
    FirstName: string = "";
    LastName: string = "";
    Username: string = "";
    EmailAddress: string = "";
    DateOfBirth: string = "";
    PhoneNumber: string = "";
    Password: string = "";
    PasswordRepeat: string = "";

    constructor(fields?: {
        CountryId: number,
        GenderId: number,
        FirstName: string,
        LastName: string,
        Username: string,
        EmailAddress: string,
        DateOfBirth: string,
        PhoneNumber: string,
        Password: string,
        PasswordRepeat: string
    }) {
        Object.assign(this, fields);
    }
}