<template>
    <v-navigation-drawer class="drawer-style" location="left" v-if="isOpen">
    </v-navigation-drawer>
</template>

<script lang="ts">
export default {
    props:{
        isOpen:{
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped>
.drawer-style{
    background-color: gray;
}
</style>