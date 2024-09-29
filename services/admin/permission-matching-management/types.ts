export class PermissionMatchingForEndPoint {
    endPointId: number = 0;
    permissionId: number = 0;
    statusId: number = 0;
    permissionName: string = "";
    createdDate: string = "";

    constructor(fields?: {
        endPointId: number,
        permissionId: number,
        statusId: number,
        permissionName: string,
        createdDate: string
    }) {
        Object.assign(this, fields);
    }
}

export enum PermissionMatchType {
    EndPoint = 1,
    Role = 2
}