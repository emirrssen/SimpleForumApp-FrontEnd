import {
    AddEntryToTitleAsync
} from "~/services/home/index"

import { useToast } from "vue-toastification";

export const useAddEntryDialogStore = defineStore('add-entry-dialog', () => {

    const toast = useToast();

    const isDialogVisible: Ref<boolean> = ref(false);
    const currentTitle: Ref<number> = ref(0);
    const currentAuthorType: Ref<number> = ref(0);

    const entry: Ref<string> = ref("");

    function addEntryToTitle(): Promise<boolean> {
        return AddEntryToTitleAsync(currentAuthorType.value, entry.value, currentTitle.value).then((response => {
            if (response.isSuccess) {
                toast.success(response.message)
                isDialogVisible.value = false;
            }

            return response.isSuccess;
        }))
    }

    return {
        isDialogVisible,
        currentTitle,
        currentAuthorType,
        entry,
        addEntryToTitle
    }
})