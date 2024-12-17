<template>
    
    <v-btn icon size="small">
        <v-icon left>mdi-account</v-icon>
    </v-btn>
    {{btn_text}}
</template>
<script lang="ts">
export default defineComponent({
    props:{
        btn_text:{
            type: String,
            default: "account"
        }
    }, 
    setup(){
        
    }
})
</script>
<style scoped>
.btn-style{
    align-items: flex;
    gap: 10px;
    width: 80px;
}
</style>