export class RoleToSelect {
    id: number = 0;
    statusName: string = "";
    name: string = "";
    description: string = "";

    constructor(fields?: { id: number, statusName: string, name: string, description: string }) {
        Object.assign(this, fields);
    }
}