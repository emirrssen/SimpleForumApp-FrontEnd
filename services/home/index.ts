import { Response, GenericDataResponse } from "../core/responseCore";
import { Get, Post, Put } from "../core/serviceCore"

import {
    AgendaItem,
    TitlePreview
} from "./types"

export function GetAgendaAsync(): Promise<GenericDataResponse<AgendaItem[]>> {
    return Get<GenericDataResponse<AgendaItem[]>>('home/agenda');
}

export function GetTitlesAsync(): Promise<GenericDataResponse<TitlePreview[]>> {
    return Get<GenericDataResponse<TitlePreview[]>>('home/titles');
}