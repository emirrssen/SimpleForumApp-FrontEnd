export class AgendaItem {
    titleId: number = 0;
    entryNumber: string = "";
    titleSubject: string = "";

    constructor(fields?: {
        titleId: number,
        entryNumber: string,
        titleSubject: string
    }) {
        Object.assign(this, fields);
    }
}

export class TitlePreview {
    titleId: number = 0;
    titleSubject: string = "";
    titleContent: string = "";
    likeNumber: string = "";
    createdAuthor: string = "";
    createdDate: string = "";

    constructor(fields?: {
        titleId: number,
        titleSubject: string,
        titleContent: string,
        likeNumber: string,
        createdAuthor: string,
        createdDate: string
    }) {
        Object.assign(this, fields);
    }
}