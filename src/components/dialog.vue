<template>
    <div class="dialog" :style="{display:display}">
        <RequireData buttonText="修改"></RequireData>
    </div>
</template>
<script setup>
    import RequireData from './requireData.vue'
    //defineProps 来接收组件的传值
    const props = defineProps({
        display: {
            type:String
        },
    })
</script>

<style scoped>
    .dialog{
        /* display: v-bind('props.ftext'), */
        height: 100px;
        width: 80px;
    }
</style>