export class Token {
    accessToken: string = "";
    expirationDate: string = "";
    refreshToken: string = "";

    constructor(fields?: {
        accessToken: string,
        expirationDate: string,
        refreshToken: string
    }) {
        Object.assign(this, fields)
    }
}