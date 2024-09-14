<template>
    <div>
        Admin works!
    </div>
</template>

<script setup lang="ts"> 

    import { useLayoutStore } from '~/stores/layout';

    const layoutStore = useLayoutStore();

    onMounted(setLayoutOnMounted)

    function setLayoutOnMounted() {
        layoutStore.isGroupsButtonVisible = false;
        layoutStore.isSelectFilterButtonVisible = false;
        layoutStore.isSearchBarVisible = false;
        layoutStore.isUsersButtonVisible = false;
        layoutStore.isAdminButtonVisible = false;
    }

</script>

<style scoped>

</style>