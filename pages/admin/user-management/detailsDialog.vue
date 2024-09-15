<template>
    <div>
        <AppDialog v-model="isDialogVisible">
            <AppCard style="width: 800px;">
                <template #centerContent>
                    <AppCardHeader>Kullanıcı Detayları</AppCardHeader>
                    <AppCardBody class="my-2 flex flex-col">
                        <div class="columns-2">
                            <AppInputText label="Kullanıcı Adı" placeholder="Giriniz..." v-model="currentUser.userName" type="text" />
                            <AppInputSelect minWidth="371px" label="Durumu" placeholder="Seçiniz..." v-model="currentUser.statusId" type="text" :items="statuses" />
                        </div>
                        <div class="columns-2 pt-3">
                            <AppInputSelect minWidth="371px" label="Cinsiyet" placeholder="Seçiniz..." v-model="currentUser.genderId" type="text" :items="genders" />
                            <AppInputSelect minWidth="371px" label="Ülke" placeholder="Seçiniz..." v-model="currentUser.countryId" type="text" :items="countries" />
                        </div>
                        <div class="columns-2 pt-3">
                            <AppInputText label="İsim" placeholder="Giriniz..." v-model="currentUser.firstName" type="text" />
                            <AppInputText label="Soyisim" placeholder="Giriniz..." v-model="currentUser.lastName" type="text" />
                        </div>
                        <div class="columns-3 pt-3">
                            <AppInputText label="E-Posta Adresi" placeholder="Giriniz..." v-model="currentUser.email" type="text" />
                            <AppInputText label="Telefon Numarası" placeholder="05xxxxxxxxx" v-model="currentUser.phoneNumber" type="text" />
                            <AppInputDatePicker label="Doğum Tarihi" placeholder="Giriniz..." v-model="currentUser.dateOfBirth" type="text" />
                        </div>
                    </AppCardBody>
                    <AppCardFooter class="flex justify-between align-center">
                        <AppButton @click="closeDialogOnClick" title="Kapat" type="text" />
                        <AppButton title="Kaydet" type="info" />
                    </AppCardFooter>
                </template>
            </AppCard>
        </AppDialog>
    </div>
</template>

<script lang="ts" setup>

    import { useAdminUserManagementDetailsDialogStore } from '~/stores/admin/user-management/detailsDialogStore';
    import { useLayoutStore } from '~/stores/layout';

    import {
        UserDetails
    } from "~/services/admin/user-management/types"

    const store = useAdminUserManagementDetailsDialogStore();
    const layoutStore = useLayoutStore();

    onMounted(() => {
        loadOnMounted();
    })

    const isDialogVisible = computed({
        get(): boolean {
            return store.isDialogVisible
        },
        set(value: boolean) {
            store.isDialogVisible = value;
        }
    })

    const currentUser = computed({
        get(): UserDetails {
            return store.currentUser
        },
        set(value: UserDetails) {
            store.currentUser = value;
        }
    })

    const genders = computed(() => store.genders);
    const countries = computed(() => store.countries);
    const statuses = computed(() => store.statuses);

    function closeDialogOnClick() {
        isDialogVisible.value = false;
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