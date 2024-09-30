export class Token {
    accessToken: string = "";
    expirationDate: string = "";
    refreshToken: string = "";
    refreshTokenExpirationDate: string = "";

    constructor(fields?: {
        accessToken: string,
        expirationDate: string,
        refreshToken: string,
        refreshTokenExpirationDate: string
    }) {
        Object.assign(this, fields)
    }
}