export class PermissionToList {
    id: number = 0;
    name: string = "";
    statusName: string = "";
    createdDate: string = "";

    constructor(fields?: {
        id: number,
        name: string,
        statusName: string,
        createdDate: string
    }) {
        Object.assign(this, fields)
    }
}