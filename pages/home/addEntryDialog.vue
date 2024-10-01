<template>
    <AppDialog v-model="store.isDialogVisible">
        <AppCard style="width: 600px;">
            <template #centerContent>
                <AppCardHeader>Entry Gir</AppCardHeader>
                <AppCardBody>
                    <AppInputTextArea label="Entry" placeholder="Giriniz..." :rows="6" v-model="store.entry" :clearable="true" />
                </AppCardBody>
                <AppCardFooter class="flex justify-between">
                    <AppButton @click="closeDialogOnClick" type="text" title="Kapat" />
                    <AppButton @click="saveOnClick" type="info" title="Kaydet" />
                </AppCardFooter>
            </template>
        </AppCard>
    </AppDialog>
</template>

<script lang="ts" setup>

    import { useAddEntryDialogStore } from '~/stores/home/addEntryDialogStore';
    import { useLayoutStore } from '~/stores/layout';
    import { useHomeStore } from '~/stores/home';

    const store = useAddEntryDialogStore();
    const layoutStore = useLayoutStore();
    const homeStore = useHomeStore();

    function closeDialogOnClick() {
        store.isDialogVisible = false;
    }

    function saveOnClick() {
        layoutStore.isLoadingVisible = true;

        store.addEntryToTitle().then((response => {
            if (response) {
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