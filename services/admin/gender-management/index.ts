import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import {
    SelectItem 
} from "../../app/types";

export function GetGendersAsync(): Promise<GenericDataResponse<SelectItem[]>> {
    return Get<GenericDataResponse<SelectItem[]>>('admin/gender-management', { });
}