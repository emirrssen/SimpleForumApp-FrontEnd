import {
    AgendaItem,
    TitlePreview,
    WeeklyFavouriteTitle
} from "~/services/home/types"

import {
    GetAgendaAsync,
    GetTitlesAsync,
    AddActionToTitleAsync,
    GetWeeklyFavouriteTitlesAsync
} from "~/services/home/index"

export const useHomeStore = defineStore('home', () => {

    const agenda: Ref<AgendaItem[]> = ref([]);
    const titles: Ref<TitlePreview[]> = ref([]);
    const weeklyFavouriteTitles: Ref<WeeklyFavouriteTitle[]> = ref([]);

    function getAgenda(): Promise<void> {
        return GetAgendaAsync().then((response => {
            if (response.isSuccess && response.data) {
                agenda.value = response.data;
            } else {
                agenda.value = [];
            }
        }))
    }

    function getTitles(): Promise<void> {
        return GetTitlesAsync().then((response => {
            if (response.isSuccess && response.data) {
                titles.value = response.data;
            } else {
                titles.value = [];
            }
        }))
    }

    function addActionToTitle(titleId: number, actionId: number): Promise<boolean> {
        return AddActionToTitleAsync(actionId, titleId).then((response => {
            return response.isSuccess;
        }))
    }

    function getWeeklyFavouriteTitles(): Promise<void> {
        return GetWeeklyFavouriteTitlesAsync().then((response => {
            if (response.isSuccess && response.data) {
                weeklyFavouriteTitles.value = response.data
            } else {
                weeklyFavouriteTitles.value = [];
            }
        }))
    }

    return {
        agenda,
        titles,
        weeklyFavouriteTitles,
        getAgenda,
        getTitles,
        addActionToTitle,
        getWeeklyFavouriteTitles
    }
})