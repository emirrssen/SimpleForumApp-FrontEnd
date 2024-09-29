export class SelectItem {
    id: number = 0;
    title: string = "";

    constructor(fields?: { id: number, title: string }) {
        Object.assign(this, fields);
    }
}

export class AppDataTableHeader {
    title: string = "";
    field: string = "";
    width?: string = "";

    constructor(fields?: { title: string, field: string, width?: string }) {
        Object.assign(this, fields);
    }
}