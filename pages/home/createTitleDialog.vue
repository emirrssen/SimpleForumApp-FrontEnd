<template>
    <AppDialog v-model="store.isDialogVisible">
        <AppCard style="width: 600px;">
            <template #centerContent>
                <AppCardHeader>Başlık Oluştur</AppCardHeader>
                <AppCardBody style="width: 100%;">
                    <div class="flex flex-col gap-4"  style="width: 100%;">
                        <AppInputText style="width: 100%;" label="Konu" placeholder="Giriniz..." v-model="store.currentTitle.subject" type="text" clearable />
                        <AppInputTextArea :rows="5" style="width: 100%;" label="İçerik" placeholder="Giriniz..." v-model="store.currentTitle.content" clearable />
                    </div>
                </AppCardBody>
                <AppCardFooter class="flex justify-between items-center">
                    <AppButton @click="closeDialogOnClick" type="text" title="Kapat" />
                    <AppButton @click="saveOnClick" type="info" title="Kaydet" />
                </AppCardFooter>
            </template>
        </AppCard>
    </AppDialog>
</template>

<script lang="ts" setup>

    import { TitleToAddOrUpdate } from '~/services/home/create-title-dialog/types';

    import { useCreateTitleDialogStore } from '~/stores/home/createEntryDialogStore';
    import { useLayoutStore } from '~/stores/layout';
    import { useHomeStore } from '~/stores/home';

    const store = useCreateTitleDialogStore();
    const layoutStore = useLayoutStore();
    const homeStore = useHomeStore();

    function closeDialogOnClick() {
        store.isDialogVisible = false;
        store.currentTitle = new TitleToAddOrUpdate();
    }

    function saveOnClick() {
        layoutStore.isLoadingVisible = true;

        store.createTitle().then((response => {
            if (response) {
                store.isDialogVisible = false;
                store.currentTitle = new TitleToAddOrUpdate();
                homeStore.getAgenda();
                homeStore.getTitles();
            }
        })).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

</script>

<style scoped>
</style>