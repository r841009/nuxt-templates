<template>
    <v-layout class="screen-all">
        <!-- 監聽icon_click事件 -->
        <my_drawer :is-open="drawer_opened"></my_drawer>
        <v-main>
            <my_header :bar_text_title="header_title" :user_id="user_id" @toggle="icon_click"></my_header>
            <v-container class="main-style">
            </v-container>
        </v-main>
    </v-layout>
    
    <my_footer></my_footer>
</template>

<script setup lang="ts">
import my_header from '~/components/header/my_header.vue';
import my_footer from '~/components/footer/my_footer.vue';
import my_drawer from '~/components/drawer/my_drawer.vue';

const header_title = "IOT 監控系統"
const user_id = "2109040"
const drawer_opened = ref(false)
const icon_click = () => { 
    drawer_opened.value = !drawer_opened.value
};
</script>

<style scoped>
.screen-all{
    height: 100%;
}
.main-style{
    background-color:#f0f0f0;
    min-height: 100%;
}
</style>