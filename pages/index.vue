<template>
    <div>
        Hello World
    </div>
</template>

<script lang="ts" setup>
    import { useLayoutStore } from '~/stores/layout';

    const store = useLayoutStore();

    onMounted(() => {
        store.isAccountMenuVisible = false;
        store.isNavbarVisible = true;
        store.isCreateTitleButtonVisible = false;
    })

</script>