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

    constructor(fields?: { title: string, field: string }) {
        Object.assign(this, fields);
    }
}