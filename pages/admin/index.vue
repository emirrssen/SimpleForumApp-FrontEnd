<template>
    <div>
        <div class="grid grid-cols-4 gap-4">
            <div class="col-span-1">
                <AppCard>
                    <template #centerContent>
                        <AppCardBody class="flex flex-col gap-3">
                            <AppListItem title="Kullanıcı Yönetimi" @click="setSelectedPageToUserManagement" />
                            <AppListItem title="Rol Yönetimi" @click="setSelectedPageToRoleManagement" />
                        </AppCardBody>
                    </template>
                </AppCard>
            </div>
            <div class="col-span-3">
                <AppCard class="mb-3">
                    <template #centerContent>
                        <AppCardHeader style="font-size: 22px;">{{ getHeaderName() }}</AppCardHeader>
                    </template>
                </AppCard>
                <AppCard v-if="selectedPage > 0">
                    <template #centerContent>
                        <UserManagement v-if="selectedPage === SelectedAdminPage.UserManagement" />
                        <RoleManagement v-if="selectedPage === SelectedAdminPage.RoleManagement" />
                    </template>
                </AppCard>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"> 

    import { useLayoutStore } from '~/stores/layout';
    import { useAdminStore } from '~/stores/admin';
    import { useAdminUserManagementStore } from '~/stores/admin/user-management';

    import UserManagement from './user-management/index.vue';
    import RoleManagement from "./role-management/index.vue";

    import {
        SelectedAdminPage
    } from "~/services/admin/types"

    const layoutStore = useLayoutStore();
    const adminStore = useAdminStore();
    const userManagementStore = useAdminUserManagementStore();

    onMounted(() => {
        setLayoutOnMounted()
        clearOnMounted();
    })

    const selectedPage = computed({
        get(): number {
            return adminStore.selectedPage;
        },
        set(value: number) {
            adminStore.selectedPage = value;
        }
    })

    function setSelectedPageToUserManagement() {
        layoutStore.isLoadingVisible = true;

        userManagementStore.getUsersToList().then(() => {
            selectedPage.value = SelectedAdminPage.UserManagement;
        }).finally(() => {
            layoutStore.isLoadingVisible = false;
        })
    }

    function setSelectedPageToRoleManagement() {
        selectedPage.value = SelectedAdminPage.RoleManagement;
    }

    function setLayoutOnMounted() {
        layoutStore.isGroupsButtonVisible = false;
        layoutStore.isSelectFilterButtonVisible = false;
        layoutStore.isSearchBarVisible = false;
        layoutStore.isUsersButtonVisible = false;
        layoutStore.isAdminButtonVisible = false;
        layoutStore.isCreateTitleButtonVisible = false;
    }

    function clearOnMounted() {
        selectedPage.value = 0;
    }

    function getHeaderName(): string {
        if (selectedPage.value === SelectedAdminPage.UserManagement) {
            return "Kullanıcı Yönetimi";
        }

        if (selectedPage.value === SelectedAdminPage.RoleManagement) {
            return "Rol Yönetimi";
        }

        return "Admin Paneli";
    }

</script>

<style scoped>

</style>