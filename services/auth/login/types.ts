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