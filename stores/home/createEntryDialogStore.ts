import {
    TitleToAddOrUpdate
} from "~/services/home/create-title-dialog/types"

import {
    CreateTitleAsync
} from "~/services/home/create-title-dialog/index"

import { useToast } from "vue-toastification";

export const useCreateTitleDialogStore = defineStore('create-title-dialog', () => {
    
    const toast = useToast();
    
    const isDialogVisible: Ref<boolean> = ref(false);
    const currentTitle: Ref<TitleToAddOrUpdate> = ref({...new TitleToAddOrUpdate()});
    const authorTypeId: Ref<number> = ref(0);

    function createTitle(): Promise<boolean> {
        return CreateTitleAsync(currentTitle.value, authorTypeId.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message)
            }

            return response.isSuccess;
        }))
    }

    return {
        isDialogVisible,
        currentTitle,
        authorTypeId,
        createTitle
    }
})