<template>
    <div class="flex items-center justify-center" style="margin-top: 200px">
        <AppCard style="width: 500px;">
            <template #centerContent>
                <AppCardHeader>Şifremi Unuttum</AppCardHeader>
                <AppCardBody class="mt-4">
                    <AppInputText type="text" placeholder="Giriniz..." label="E-Posta Adresi" v-model="email" />
                </AppCardBody>
                <AppCardFooter class="mt-4 flex justify-between">
                    <AppButton @click="navigateToLogin()" type="text" title="Geri Dön" />
                    <AppButton @click="sendOnClick()" type="info" title="Gönder"/>
                </AppCardFooter>
            </template>
        </AppCard>
    </div>
</template>

<script lang="ts" setup>
    import { useForgotMyPasswordStore } from '~/stores/auth/forgot-my-password';
    import { useLayoutStore } from '~/stores/layout';

    const store = useForgotMyPasswordStore();
    const layoutStore = useLayoutStore();

    onMounted(() => {
        clearDataOnMounted();
        layoutStore.isNavbarVisible = false;
    })

    const email = computed({
        get(): string {
            return store.email;
        },
        set(value: string) {
            store.email = value;
        }
    })

    function sendOnClick() {
        layoutStore.isLoadingVisible = true;

        store.SendMailForPasswordReset().finally(() => {
            layoutStore.isLoadingVisible = false;
        });
    }

    function navigateToLogin() {
        navigateTo("login")
    }

    function clearDataOnMounted() {
        email.value = "";
    }

</script>

<script scoped>
</script>