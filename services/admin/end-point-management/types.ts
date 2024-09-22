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
    isUse: string = "";
    isActive: string = "";

    constructor(fields?: {
        id: number,
        actionTypeName: string,
        methodName: string,
        isUse: string,
        isActive: string
    }) {
        Object.assign(this, fields);
    }
}

export class EndPointDetail {
    id: number = 0;
    actionTypeName: string = "";
    controllerName: string = "";
    methodName: string = "";
    route: string = "";
    isUse: boolean = false;
    isActive: boolean = false;
    description: string = "";

    constructor(fields?: {
        id: number,
        actionTypeName: string,
        controllerName: string,
        methodName: string,
        route: string,
        isUse: boolean,
        isActive: boolean,
        description: string
    }) {
        Object.assign(this, fields);
    }
}

export class EndPointToUpdate {
    id: number = 0;
    isUse: boolean = false;
    isActive: boolean = false;
    description: string = "";

    constructor(fields?: { id: number, isUse: boolean, isActive: boolean, description: string }) {
        Object.assign(this, fields);
    }
}