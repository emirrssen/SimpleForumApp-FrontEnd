import {
    AgendaItem,
    TitlePreview,
    WeeklyFavouriteTitle,
    WeeklyFavouriteGroup,
    WeeklyFavouriteAuthor
} from "~/services/home/types"

import {
    GetAgendaAsync,
    GetTitlesAsync,
    AddActionToTitleAsync,
    GetWeeklyFavouriteTitlesAsync,
    GetWeeklyFavouriteGroupsAsync,
    GetWeeklyFavouriteAuthorsAsync,
    CanEnter
} from "~/services/home/index"

export const useHomeStore = defineStore('home', () => {

    const agenda: Ref<AgendaItem[]> = ref([]);
    const titles: Ref<TitlePreview[]> = ref([]);
    const weeklyFavouriteTitles: Ref<WeeklyFavouriteTitle[]> = ref([]);
    const weeklyFavouriteGroups: Ref<WeeklyFavouriteGroup[]> = ref([]);
    const weeklyFavouriteAuthors: Ref<WeeklyFavouriteAuthor[]> = ref([]);

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

    function getWeeklyFavouriteGroups(): Promise<void> {
        return GetWeeklyFavouriteGroupsAsync().then((response => {
            if (response.isSuccess && response.data) {
                weeklyFavouriteGroups.value = response.data
            } else {
                weeklyFavouriteGroups.value = [];
            }
        }))
    }

    function getWeeklyFavouriteAuthors(): Promise<void> {
        return GetWeeklyFavouriteAuthorsAsync().then((response => {
            if (response.isSuccess && response.data) {
                weeklyFavouriteAuthors.value = response.data
            } else {
                weeklyFavouriteAuthors.value = [];
            }
        }))
    }

    function canEnter(): Promise<boolean> {
        return CanEnter().then((response => {
            return response.isSuccess;
        }))
    }

    return {
        agenda,
        titles,
        weeklyFavouriteTitles,
        weeklyFavouriteGroups,
        weeklyFavouriteAuthors,
        getAgenda,
        getTitles,
        addActionToTitle,
        getWeeklyFavouriteTitles,
        getWeeklyFavouriteGroups,
        getWeeklyFavouriteAuthors,
        canEnter
    }
})