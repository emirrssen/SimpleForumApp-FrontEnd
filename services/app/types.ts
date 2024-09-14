export class SelectItem {
    id: number = 0;
    title: string = "";

    constructor(fields?: { id: number, title: string }) {
        Object.assign(this, fields);
    }
}