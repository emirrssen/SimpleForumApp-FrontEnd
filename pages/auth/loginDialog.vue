<template>
    <AppDialog v-model="isLoginDialogVisible" style="z-index: 9999;">
        <AppCard style="width: 500px;">
            <template #centerContent>
                <AppCardHeader>Giriş Yap</AppCardHeader>
                <AppCardBody class="mt-4 flex flex-col" style="gap: 12px;">
                    <AppInputText :clearable="true" type="text" v-model="email" placeholder="Giriniz..." label="E-Posta Adresi"></AppInputText>
                    <AppInputText :clearable="true" v-model="password" type="password" placeholder="Giriniz..." label="Şifre"></AppInputText>
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
    </AppDialog>
</template>

<script lang="ts" setup> 

    import { isLoginDialogVisible } from '~/services/core/serviceCore';
    import { useLayoutStore } from '~/stores/layout';
    import { useLoginStore } from '~/stores/auth/login';

    const layoutStore = useLayoutStore();
    const loginStore = useLoginStore();

    let isChecked = ref(false);

    onMounted(() => {
        clearDataOnMounted();
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

        loginStore.Login().then(() => {
            layoutStore.isLoggedIn = true;
            isLoginDialogVisible.value = false;
        }).finally(() => {
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

<style scoped>
</style>