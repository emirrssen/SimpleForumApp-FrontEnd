<template>
    <div>
        <AppDialog v-model="store.isDialogVisible">
            <AppCard style="width: 800px;">
                <template #centerContent>
                    <AppCardHeader>Kullanıcı Detayları</AppCardHeader>
                    <AppCardBody class="my-2 flex flex-col">
                        <div class="columns-2">
                            <AppInputText :readonly="store.currentUser.id > 0" label="Kullanıcı Adı" placeholder="Giriniz..." v-model="store.currentUser.userName" type="text" />
                            <AppInputSelect itemText="title" itemValue="id" minWidth="371px" label="Durumu" placeholder="Seçiniz..." v-model="store.currentUser.statusId" type="text" :items="statuses" />
                        </div>
                        <div class="columns-2 pt-3">
                            <AppInputSelect itemText="title" itemValue="id" minWidth="371px" label="Cinsiyet" placeholder="Seçiniz..." v-model="store.currentUser.genderId" type="text" :items="genders" />
                            <AppInputSelect itemText="title" itemValue="id" minWidth="371px" label="Ülke" placeholder="Seçiniz..." v-model="store.currentUser.countryId" type="text" :items="countries" />
                        </div>
                        <div class="columns-2 pt-3">
                            <AppInputText label="İsim" placeholder="Giriniz..." v-model="store.currentUser.firstName" type="text" />
                            <AppInputText label="Soyisim" placeholder="Giriniz..." v-model="store.currentUser.lastName" type="text" />
                        </div>
                        <div class="columns-3 pt-3">
                            <AppInputText :readonly="store.currentUser.id > 0" label="E-Posta Adresi" placeholder="Giriniz..." v-model="store.currentUser.email" type="text" />
                            <AppInputText :readonly="store.currentUser.id > 0" label="Telefon Numarası" placeholder="05xxxxxxxxx" v-model="store.currentUser.phoneNumber" type="text" />
                            <AppInputDatePicker label="Doğum Tarihi" placeholder="Giriniz..." v-model="store.currentUser.dateOfBirth" type="text" />
                        </div>
                    </AppCardBody>
                    <AppCardFooter class="flex justify-between align-center">
                        <AppButton @click="closeDialogOnClick" title="Kapat" type="text" />
                        <AppButton @click="saveOnClick" title="Kaydet" type="info" />
                    </AppCardFooter>
                </template>
            </AppCard>
        </AppDialog>
    </div>
</template>

<script lang="ts" setup>

    import { useAdminUserManagementDetailsDialogStore } from '~/stores/admin/user-management/detailsDialogStore';
    import { useLayoutStore } from '~/stores/layout';
    import { useAdminUserManagementStore } from '~/stores/admin/user-management';

    import {
        UserDetails
    } from "~/services/admin/user-management/types"

    const store = useAdminUserManagementDetailsDialogStore();
    const userManagementStore = useAdminUserManagementStore();
    const layoutStore = useLayoutStore();

    onMounted(() => {
        loadOnMounted();
    })

    const genders = computed(() => store.genders);
    const countries = computed(() => store.countries);
    const statuses = computed(() => store.statuses);

    function closeDialogOnClick() {
        store.isDialogVisible = false;
    }

    function saveOnClick() {
        layoutStore.isLoadingVisible = true;

        if (store.currentUser.id > 0) {
            store.updateById().then((response) => {
                if (response) {
                    userManagementStore.getUsersToList();
                }
            }).finally(() => {
                layoutStore.isLoadingVisible = false;
            })
        } else {
            store.insert().then((response => {
                if (response) {
                    userManagementStore.getUsersToList();
                }
            })).finally(() => {
                layoutStore.isLoadingVisible = false;
            })
        }
    }

    function loadOnMounted() {
        layoutStore.isLoadingVisible = true;

        Promise.all([
            store.getCountries(),
            store.getGenders(),
            store.getStatuses()
        ]).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

</script>

<style scoped>

</style>