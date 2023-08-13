<template>
    <div class="dialog" :style="{ display: display }">
        <RequireData buttonText="修改"></RequireData>
        <div @click="showModal" class="delete">删除</div>
        <a-modal v-model:visible="ifDelete" title="删除" @ok="handleOk" cancelText="取消" okText="确定">
            <p>确定删除吗</p>
        </a-modal>
    </div>
</template>
<script setup>
import RequireData from './requireData.vue'
import { ref } from 'vue'
const ifDelete = ref(false) 
//defineProps 来接收组件的传值
const props = defineProps({
    display: {
        type: String
    },
    x_offset: {
        type: String
    },
    y_offset: {
        type: String
    }
})
function showModal() {
    ifDelete.value = true
    console.log(' ifDelete.value', ifDelete.value)
}
function handleOk() {
    ifDelete.value = false;
}
</script>

<style scoped lang="less">
.dialog {
    width: 60px;
    border: 1px solid rgb(229, 228, 228);
    box-shadow: 1px 1px 6px #888;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    left: v-bind(x_offset);
    top: v-bind(y_offset);

    .delete {
        padding: 10px;
    }
}
</style>