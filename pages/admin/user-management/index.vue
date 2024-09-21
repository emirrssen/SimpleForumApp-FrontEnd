<template>
    <div>
        <div class="flex justify-between align-center mb-4 ">
            <AppInputCheckBox v-model="isPassiveShown" label="Pasif Kayıtları Göster" />
            <AppButton @click="openDialogOnClick" title="Yeni Kayıt" type="success" />
        </div>
        <AppTableData class="mb-2" :headers="headers" :items="usersToList" @on-selected="selectRowOnClick" :selectable="true" />
        <DetailsDialog />
    </div>
</template>

<script setup lang="ts">

    import { useAdminUserManagementStore } from '~/stores/admin/user-management';
    import { useLayoutStore } from '~/stores/layout';
    import { useAdminUserManagementDetailsDialogStore } from '~/stores/admin/user-management/detailsDialogStore';

    import type { AppDataTableHeader } from '~/services/app/types';

    import DetailsDialog from './detailsDialog.vue';
    import { UserDetails } from '~/services/admin/user-management/types';

    const layoutStore = useLayoutStore();
    const store = useAdminUserManagementStore();
    const detailsDialogStore = useAdminUserManagementDetailsDialogStore();

    const headers: AppDataTableHeader[] = [
        { title: "Kullanıcı Adı", field: "userName" },
        { title: "İsim", field: "firstName" },
        { title: "Soyisim", field: "lastName" },
        { title: "Cinsiyet", field: "genderName" },
        { title: "Ülke", field: "countryName" },
        { title: "Doğum Tarihi", field: "dateOfBirth" },
        { title: "Durum", field: "statusName" }
    ]

    const usersToList = computed(() => store.userToList);

    const isPassiveShown = computed({
        get(): boolean {
            return store.isPassiveShown
        },
        set(value: boolean) {
            store.isPassiveShown = value;
            store.getUsersToList()
        }
    })

    function openDialogOnClick() {
        detailsDialogStore.currentUser = new UserDetails();
        detailsDialogStore.isDialogVisible = true;
    }

    function selectRowOnClick(event: any) {
        layoutStore.isLoadingVisible = true;

        detailsDialogStore.getUserDetailByUserName(event.userName).then((response => {
            if (response) {
                detailsDialogStore.isDialogVisible = true;
            }
        })).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

</script>

<style scoped>
</style>