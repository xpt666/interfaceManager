<template>
    <div class="dialog" :style="{display:display}">
        <div>修改</div>
        <div>删除</div>
    </div>
</template>
<script setup>
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