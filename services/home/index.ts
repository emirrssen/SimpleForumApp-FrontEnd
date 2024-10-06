import { Response, GenericDataResponse } from "../core/responseCore";
import { Get, Post, Put } from "../core/serviceCore"

import {
    AgendaItem,
    TitlePreview,
    WeeklyFavouriteTitle,
    WeeklyFavouriteGroup,
    WeeklyFavouriteAuthor
} from "./types"

export function GetAgendaAsync(): Promise<GenericDataResponse<AgendaItem[]>> {
    return Get<GenericDataResponse<AgendaItem[]>>('home/agenda');
}

export function GetTitlesAsync(): Promise<GenericDataResponse<TitlePreview[]>> {
    return Get<GenericDataResponse<TitlePreview[]>>('home/titles');
}

export function GetWeeklyFavouriteTitlesAsync(): Promise<GenericDataResponse<WeeklyFavouriteTitle[]>> {
    return Get<GenericDataResponse<WeeklyFavouriteTitle[]>>('home/weekly-favourite-titles');
}

export function GetWeeklyFavouriteGroupsAsync(): Promise<GenericDataResponse<WeeklyFavouriteGroup[]>> {
    return Get<GenericDataResponse<WeeklyFavouriteGroup[]>>('home/weekly-favourite-groups');
}

export function GetWeeklyFavouriteAuthorsAsync(): Promise<GenericDataResponse<WeeklyFavouriteAuthor[]>> {
    return Get<GenericDataResponse<WeeklyFavouriteAuthor[]>>('home/weekly-favourite-authors');
}

export function AddActionToTitleAsync(actionId: number, titleId: number): Promise<Response> {
    return Put<Response>('home/add-action-to-title', {}, {
        ActionId: actionId,
        TitleId: titleId
    })
}

export function AddEntryToTitleAsync(authorTypeId: number, entry: string, titleId: number): Promise<Response> {
    return Post<Response>('home/add-entry-to-title', {}, {
        TitleId: titleId,
        Entry: entry,
        AuthorTypeId: authorTypeId
    });
}

export function CanEnter(): Promise<Response> {
    return Get<Response>('home/can-enter');
}