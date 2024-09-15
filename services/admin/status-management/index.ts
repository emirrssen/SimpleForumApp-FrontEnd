import { Response, GenericDataResponse } from "../../core/responseCore";
import { Get, Post, Put } from "../../core/serviceCore"

import type { SelectItem } from "~/services/app/types";

export function GetStatusesAsync(): Promise<GenericDataResponse<SelectItem[]>> {
    return Get<GenericDataResponse<SelectItem[]>>("admin/user-management/statuses");
}