<template>
    <div class="app-nav-search-bar p-3 flex items-center">
        <div class="icon-wrapper flex items-center justify-center">
            <Icon name="ic:baseline-search" size="24px" />
        </div>
        <input class="search" placeholder="Giriniz..." type="text">
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

    .app-nav-search-bar {
        width: 400px;
        height: 40px;
        border-radius: 50px;
        background-color: rgba(251, 249, 241, .5);
    }

    .app-nav-search-bar:focus {
        outline:rgb(251, 249, 241);
    }

    .icon-wrapper {
        height: 34px;
        width: 34px;
        border-radius: 34px;
        background-color: rgb(251, 249, 241);
        position: relative;
        left: -8px;
    }

    .search {
        background-color: transparent;
        border: none;
        width: 90%;
    }

    .search:focus {
        outline: none;
    }

</style>