export class RoleToSelect {
    id: number = 0;
    statusName: string = "";
    name: string = "";
    description: string = "";

    constructor(fields?: { id: number, statusName: string, name: string, description: string }) {
        Object.assign(this, fields);
    }
}

export class Role {
    id: number = 0;
    statusId: number = 0;
    name: string = "";
    description: string = "";

    constructor(fields?: { id: number, statusId: number, name: string, description: string }) {
        Object.assign(this, fields)
    }
}