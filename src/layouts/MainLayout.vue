<template>
    <div class="min-h-screen bg-background flex flex-col">
        <div class="h-16 bg-background"></div>
        <div class="flex flex-1">
            <div class="w-1/6 bg-background flex flex-col">
                <router-link to="/" class="p-2 text-primary hover:text-primary-dark transition" :class="{'bg-background-light':$route.path === '/'}">Home</router-link>
                <router-link to="/shop" class="p-2 text-primary hover:text-primary-dark transition" :class="{'bg-background-light':$route.path === '/shop'}">Shop</router-link>
                <router-link to="/chat" class="p-2 text-primary hover:text-primary-dark transition" :class="{'bg-background-light':$route.path === '/chat'}">Chat</router-link>
            </div>
            <div class="w-5/6 bg-background-light p-5">
                <h3 class="pb-2 text-primary border-b-2 border-primary">
                    <slot name="title">Default title</slot>
                </h3>
                <div class="mt-5">
                    <slot name="content">Content</slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>

</style>