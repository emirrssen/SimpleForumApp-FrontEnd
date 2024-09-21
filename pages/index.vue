<template>
    <div>
        Hello World
    </div>
</template>

<script lang="ts" setup>
    import { useLayoutStore } from '~/stores/layout';

    const layoutStore = useLayoutStore();

    onMounted(setStoreOnMounted);

    function setStoreOnMounted() {
        layoutStore.isAccountMenuVisible = false;
        layoutStore.isNavbarVisible = true;
        layoutStore.isCreateTitleButtonVisible = false;
        layoutStore.isSelectFilterButtonVisible = true;
        layoutStore.isSearchBarVisible = true;
        layoutStore.isGroupsButtonVisible = true;
        layoutStore.isUsersButtonVisible = true;
        layoutStore.isAccountButtonVisible = true;
        layoutStore.isAdminButtonVisible = true;
    }

</script>