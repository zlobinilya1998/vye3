<template>
    <main-layout>
        <template #title>Title From Home</template>
        <div>Home</div>
    </main-layout>
</template>

<script>
    import MainLayout from '@/layouts/MainLayout';
    export default {
        name:"Home",
        components:{
            MainLayout,
        }
    }
</script>

<style scoped>

</style>