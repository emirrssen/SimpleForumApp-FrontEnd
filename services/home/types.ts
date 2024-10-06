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
    actionId: number = 0;
    titleSubject: string = "";
    titleContent: string = "";
    likeNumber: string = "";
    createdAuthor: string = "";
    createdDate: string = "";

    constructor(fields?: {
        titleId: number,
        actionId: number,
        titleSubject: string,
        titleContent: string,
        likeNumber: string,
        createdAuthor: string,
        createdDate: string
    }) {
        Object.assign(this, fields);
    }
}

export class WeeklyFavouriteTitle {
    titleId: number = 0;
    titleSubject: string = "";

    constructor(fields?: { titleId: number, titleSubject: string }) {
        Object.assign(this, fields);
    }
}

export class WeeklyFavouriteGroup {
    groupId: number = 0;
    groupName: string = "";

    constructor(fields?: { groupId: number, groupName: string }) {
        Object.assign(this, fields);
    }
}

export class WeeklyFavouriteAuthor {
    authorId: number = 0;
    username: string = ""

    constructor(fields?: { authorId: number, username: string }) {
        Object.assign(this, fields);
    }
}