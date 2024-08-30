<template>
    <div class="flex items-center justify-center" style="margin-top: 15vh">
        <AppCard style="width: 500px;">
            <template #centerContent>
                <AppCardHeader>Giriş Yap</AppCardHeader>
                <AppCardBody class="mt-4 flex flex-col" style="gap: 12px;">
                    <AppInputText type="text" v-model="email" placeholder="Giriniz..." label="E-Posta Adresi"></AppInputText>
                    <AppInputText v-model="password" type="password" placeholder="Giriniz..." label="Şifre"></AppInputText>
                    <AppInputCheckBox label="Beni Hatırla" v-model="isChecked" />
                </AppCardBody>
                <AppCardFooter class="mt-4 flex justify-between">
                    <div><AppButton @click="navigateToForgotMyPassword()" type="plain" title="Şifremi Unuttum" /></div>
                    <div class="flex items-center justify-between" style="gap: 12px;">
                        <AppButton @click="navigateToRegister()" type="text" title="Kayıt Ol" />
                        <AppButton @click="loginOnClick()" type="info" title="Giriş Yap" />
                    </div>
                </AppCardFooter>
            </template>
        </AppCard>
    </div>
</template>

<script lang="ts" setup>
    import { useLayoutStore } from '~/stores/layout';
    import { useLoginStore } from '~/stores/auth/login';
    import { ref } from 'vue';

    const layoutStore = useLayoutStore();
    const loginStore = useLoginStore();

    let isChecked = ref(false);

    onMounted(() => {
        clearDataOnMounted();
        layoutStore.isNavbarVisible = false;
    })

    const email = computed({
        get() {
            return loginStore.email;
        },
        set(value: string) {
            loginStore.email = value
        }
    })

    const password = computed({
        get() {
            return loginStore.password;
        },
        set(value: string) {
            loginStore.password = value
        }
    })

    function loginOnClick() {
        layoutStore.isLoadingVisible = true;

        loginStore.Login().finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }
    
    function navigateToForgotMyPassword() {
        navigateTo("forgotMyPassword")
    }

    function navigateToRegister() {
        navigateTo("register")
    }

    function clearDataOnMounted() {
        email.value = "";
        password.value = "";
    }

</script>