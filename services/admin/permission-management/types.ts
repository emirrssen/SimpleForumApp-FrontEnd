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

export class Permission {
    id: number = 0;
    statusId: number = 0;
    name: string = "";
    description: string = "";
    
    constructor(fields?: {
        id: number,
        statusId: number,
        name: string,
        description: string
    }) {
        Object.assign(this, fields)
    }
}