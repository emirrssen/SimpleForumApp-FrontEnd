export class TitleToAddOrUpdate {
    id: number = 0;
    statusId: number = 0;
    subject: string = "";
    content: string = "";

    constructor(fields?: {
        id: number,
        statusId: number,
        subject: string,
        content: string
    }) {
        Object.assign(this, fields);
    }
}

export enum AuthorTypes {
    User = 1,
    Group = 2
}