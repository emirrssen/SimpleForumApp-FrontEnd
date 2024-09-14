export class Response {
    isSuccess: boolean = false;
    message: string = "";
    code: number = 0;

    constructor(fields?:{ isSuccess: boolean, message: string, code: number }) {
        Object.assign(this, fields);
    }
}

export class GenericDataResponse<T> extends Response {
    data: T | null | undefined = null;

    constructor(fields?: { data: T, isSuccess: boolean, message: string, code: number }) {
        super(fields);
        this.data = fields?.data;
    }
}