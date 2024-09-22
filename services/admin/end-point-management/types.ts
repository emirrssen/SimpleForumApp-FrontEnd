export class GroupedEndPoint {
    controllerName: string = "";
    endPoints: EndPoint[] = []

    constructor(fields?: { controllerName: string, endPoints: EndPoint[] }) {
        Object.assign(this, fields);
    }
}

export class EndPoint {
    id: number = 0;
    actionTypeName: string = "";
    methodName: string = "";
    endPointRoute: string = "";
    isUse: string = "";
    isActive: string = "";

    constructor(fields?: {
        id: number,
        actionTypeName: string,
        methodName: string,
        endPointRoute: string,
        isUse: string,
        isActive: string
    }) {
        Object.assign(this, fields);
    }
}