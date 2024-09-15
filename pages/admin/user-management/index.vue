<template>
    <div>
        <div class="flex justify-end align-center mb-4 ">
            <AppButton title="Yeni Kayıt" type="success" />
        </div>
        <AppTableData class="mb-2" :headers="headers" :items="usersToList" />
    </div>
</template>

<script setup lang="ts">

    import { useAdminUserManagementStore } from '~/stores/admin/user-management';
    import { useLayoutStore } from '~/stores/layout';

    import type { AppDataTableHeader } from '~/services/app/types';

    const layoutStore = useLayoutStore();
    const store = useAdminUserManagementStore();

    const headers: AppDataTableHeader[] = [
        { title: "Kullanıcı Adı", field: "userName" },
        { title: "İsim", field: "firstName" },
        { title: "Soyisim", field: "lastName" },
        { title: "Cinsiyet", field: "genderName" },
        { title: "Ülke", field: "countryName" },
        { title: "Doğum Tarihi", field: "dateOfBirth" },
        { title: "Katılma Tarihi", field: "createdDate" }
    ]

    const usersToList = computed(() => store.userToList);

</script>

<style scoped>
</style>