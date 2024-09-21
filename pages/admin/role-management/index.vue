<template>
    <div>
        <div class="flex justify-between align-center mb-4 ">
            <AppInputCheckBox v-model="store.isPassiveShown" label="Pasif Kayıtları Göster" />
            <AppButton @click="" title="Yeni Kayıt" type="success" />
        </div>
        <AppTableData class="mb-2" :headers="headers" :items="store.roles" :selectable="false" />
    </div>
</template>

<script setup lang="ts">

    import { useAdminRoleManagementStore } from '~/stores/admin/role-management';
    import { useLayoutStore } from '~/stores/layout';

    import type { AppDataTableHeader } from '~/services/app/types';

    onMounted(loadOnMounted)

    const store = useAdminRoleManagementStore();
    const layoutStore = useLayoutStore();

    const headers: AppDataTableHeader[] = [
        { title: "İsim", field: "name" },
        { title: "Açıklama", field: "description" },
        { title: "Durum", field: "statusName" }
    ]
    
    function loadOnMounted() {
        layoutStore.isLoadingVisible = true;

        Promise.all([
            store.getRoles()
        ]).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

</script>

<style scoped>
</style>