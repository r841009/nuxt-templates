<template>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon v-if="icon_display" @click="btn_toggle"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title >{{bar_text_title}}</v-app-bar-title>
        <btn_account :btn_text="user_id"></btn_account>
    </v-app-bar>
</template>

<script lang="ts" setup>
import Btn_account from '../buttom/btn_account.vue';

const emit = defineEmits(['toggle']);
const btn_toggle = () => {
    emit('toggle');
}
defineProps({
    icon_display:{
        type: Boolean,
        default: true
    },
    bar_text_title: {
        type: String,
        default: "header title"
    },
    user_id:{
        type: String,
        default: ""
    }
});

</script>

<style scoped>
</style>