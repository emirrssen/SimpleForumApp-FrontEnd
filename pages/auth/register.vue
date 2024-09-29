<template>
    <div class="flex items-center justify-center" style="margin-top: 15vh">
        <AppCard style="width: 580px;">
            <template #centerContent>
                <AppCardHeader>Kayıt Ol</AppCardHeader>
                <AppCardBody class="mt-4 flex flex-col" style="gap: 12px;">
                    <div class="columns-2 py-1">
                        <AppInputText :clearable="true" type="text" v-model="userToRegister.FirstName" placeholder="Giriniz..." label="İsim" />
                        <AppInputText :clearable="true" v-model="userToRegister.LastName" type="text" placeholder="Giriniz..." label="Soyisim" />
                    </div>
                    <div class="columns-2 py-1">
                        <AppInputText :clearable="true" type="text" placeholder="Giriniz..." label="Kullanıcı Adı" v-model="userToRegister.Username" />
                        <AppInputText :clearable="true" type="text" placeholder="Giriniz..." label="E-Posta Adresi" v-model="userToRegister.EmailAddress" />
                    </div>
                    <div class="columns-2 py-1">
                        <AppInputDatePicker :clearable="true" type="text" placeholder="Seçiniz..." label="Doğum Tarihi" v-model="userToRegister.DateOfBirth" />
                        <AppInputSelect :clearable="true" itemText="title" itemValue="id"  minWidth="261px" label="Ülke" placeholder="Seçiniz..." :items="countries" v-model="userToRegister.CountryId" />
                    </div>
                    <div class="columns-2 py-1">
                        <AppInputSelect itemText="title" itemValue="id" :clearable="true" minWidth="261px" label="Cinsiyet" placeholder="Seçiniz..." :items="genders" v-model="userToRegister.GenderId" />
                        <AppInputText :clearable="true" type="text" placeholder="05xxxxxxxxx" label="Telefon Numarası" v-model="userToRegister.PhoneNumber" />
                    </div>
                    <div class="columns-2 py-1">
                        <AppInputText :clearable="true" type="password" placeholder="Seçiniz..." label="Şifre" v-model="userToRegister.Password" />
                        <AppInputText :clearable="true" type="password" placeholder="Seçiniz..." label="Şifre Tekrar" v-model="userToRegister.PasswordRepeat" />
                    </div>
                </AppCardBody>
                <AppCardFooter class="mt-4 flex justify-end" style="gap: 12px;">
                    <AppButton type="text" title="Giriş Yap" @click="navigateToLogin()" />
                    <AppButton type="info" title="Kayıt Ol" @click="loginOnClick()" />
                </AppCardFooter>
            </template>
        </AppCard>
    </div>
</template>

<script setup lang="ts">
    import { useRegisterStore } from '~/stores/auth/register';
    import { useLayoutStore } from '~/stores/layout';
    
    import { UserToRegister } from '~/services/auth/register/types';
    import { SelectItem } from '~/services/app/types';

    const store = useRegisterStore();
    const layoutStore = useLayoutStore();

    onMounted(() => {
        layoutStore.isNavbarVisible = false;
        loadOnMounted();
    })

    const userToRegister = computed({
        get(): UserToRegister {
            return store.userToRegister
        },
        set(value: UserToRegister) {
            store.userToRegister = value;
        }
    })

    const countries = computed({
        get(): SelectItem[] {
            return store.countries
        },
        set(value: SelectItem[]) {
            store.countries = value;
        }
    });

    const genders = computed({
        get(): SelectItem[] {
            return store.genders;
        },
        set(value: SelectItem[]) {
            store.genders = value;
        }
    })

    function navigateToLogin() {
        navigateTo('login')
    }

    function loadOnMounted() {
        layoutStore.isLoadingVisible = true;

        Promise.all([
            store.getCountries(),
            store.getGenders()
        ]).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

    function loginOnClick() {
        store.register();
    }

</script>

<style scoped>

</style>