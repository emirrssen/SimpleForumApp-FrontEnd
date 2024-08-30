export class Response {
    isSuccess: boolean = false;
    message: string = "";

    constructor(fields?:{ isSuccess: boolean, message: string }) {
        Object.assign(this, fields);
    }
}

export class GenericDataResponse<T> extends Response {
    data: T | null | undefined = null;

    constructor(fields?: { data: T, isSuccess: boolean, message: string }) {
        super(fields);
        this.data = fields?.data;
    }
}