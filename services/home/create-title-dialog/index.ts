import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"
import type { TitleToAddOrUpdate } from "./types";

export function CreateTitleAsync(title: TitleToAddOrUpdate, authorTypeId: number): Promise<Response> {
    return Post<Response>('layout/create-title', {}, {
        AuthorTypeId: authorTypeId,
        Subject: title.subject,
        Content: title.content
    })
}