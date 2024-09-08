<template>
    <div class="flex items-center justify-center" style="margin-top: 15vh">
        <AppCard style="width: 580px;">
            <template #centerContent>
                <AppCardHeader>Kayıt Ol</AppCardHeader>
                <AppCardBody class="mt-4 flex flex-col" style="gap: 12px;">
                    <div class="columns-2 py-1">
                        <AppInputText type="text" v-model="userToRegister.FirstName" placeholder="Giriniz..." label="İsim" />
                        <AppInputText v-model="userToRegister.LastName" type="text" placeholder="Giriniz..." label="Soyisim" />
                    </div>
                    <div class="columns-2 py-1">
                        <AppInputText type="text" placeholder="Giriniz..." label="Kullanıcı Adı" v-model="userToRegister.Username" />
                        <AppInputText type="text" placeholder="Giriniz..." label="E-Posta Adresi" v-model="userToRegister.EmailAddress" />
                    </div>
                    <div class="columns-2 py-1">
                        <AppInputDatePicker type="text" placeholder="Seçiniz..." label="Doğum Tarihi" v-model="userToRegister.DateOfBirth" />
                        <AppInputSelect label="Ülke" placeholder="Seçiniz..." :items="items" v-model="userToRegister.CountryId" />
                    </div>
                    <div class="columns-2 py-1">
                        <AppInputSelect label="Cinsiyet" placeholder="Seçiniz..." :items="items" v-model="userToRegister.GenderId" />
                        <AppInputText type="text" placeholder="05xx xxx xx xx" label="Telefon Numarası" v-model="userToRegister.PhoneNumber" />
                    </div>
                    <div class="columns-2 py-1">
                        <AppInputText type="password" placeholder="Seçiniz..." label="Şifre" v-model="userToRegister.Password" />
                        <AppInputText type="password" placeholder="Seçiniz..." label="Şifre Tekrar" v-model="userToRegister.PasswordRepeat" />
                    </div>
                </AppCardBody>
                <AppCardFooter class="mt-4 flex justify-end" style="gap: 12px;">
                    <AppButton type="text" title="Giriş Yap" />
                    <AppButton type="info" title="Kayıt Ol" />
                </AppCardFooter>
            </template>
        </AppCard>
    </div>
</template>

<script setup lang="ts">
    import { useRegisterStore } from '~/stores/auth/register';
    import { useLayoutStore } from '~/stores/layout';
    
    import { UserToRegister } from '~/services/auth/types';

    const store = useRegisterStore();
    const layoutStore = useLayoutStore();

    onMounted(() => {
        layoutStore.isNavbarVisible = false;
    })

    const items = [
        { Id: 1, Title: "Test 1" },
        { Id: 2, Title: "Test 2" },
        { Id: 3, Title: "Test 3" },
        { Id: 4, Title: "Test 4" },
        { Id: 5, Title: "Test 5" },
        { Id: 6, Title: "Test 6" },
        { Id: 7, Title: "Test 7" },
    ]

    const userToRegister = computed({
        get(): UserToRegister {
            return store.userToRegister
        },
        set(value: UserToRegister) {
            store.userToRegister = value;
        }
    })

    

</script>

<style scoped>

</style>