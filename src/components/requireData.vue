<template>
  <div>
    <button @click="showModal">{{ buttonText }}</button>

    <div v-if="isModalVisible" class="modal">
      <div class="modal-content">
        <h2>输入接口信息</h2>
        <form @submit.prevent="submitForm">
          <div class="input-row">
            <label for="name">接口名字：</label>
            <input type="text" id="name" v-model="requestData.name" required>
          </div>

          <div class="input-row">
            <label for="url">接口地址URL：</label>
            <input type="text" id="url" v-model="requestData.url" required>
          </div>

          <div class="input-row">
            <label for="method">请求方式：</label>
            <select id="method" v-model="requestData.method">
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>

          <div class="input-row">
            <label for="requestParams">请求参数：</label>
            <textarea id="requestParams" rows="4" v-model="requestData.requestParams"></textarea>
          </div>

          <div class="input-row">
            <label for="responseParams">返回参数：</label>
            <textarea id="responseParams" rows="4" v-model="requestData.responseParams"></textarea>
          </div>

          <div class="button-row">
            <button type="submit">保存</button>
            <button @click="closeModal">取消</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

// 接收来自父组件的 buttonText 值
const props = defineProps({
  buttonText: {
    type: String,
    default: '打开输入窗口' // 默认值为 "打开输入窗口"
  }
});

const isModalVisible = ref(false);
const requestData = ref({
  name: '',
  url: '',
  method: 'GET',
  requestParams: '',
  responseParams: ''
});

const showModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  resetForm();
};

const submitForm = () => {
  // 在这里处理接口信息的提交逻辑
  console.log(requestData.value);

  closeModal();
};

const resetForm = () => {
  requestData.value = {
    name: '',
    url: '',
    method: 'GET',
    requestParams: '',
    responseParams: ''
  };
};
</script>

<style>
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    background-color: white;
    padding: 20px;
    opacity: 0.9; /* 设置透明度 */
  }

  .input-row {
    margin-bottom: 10px;
  }

  .input-row label {
    display: inline-block;
    width: 150px;
  }

  .input-row input,
  .input-row textarea,
  .input-row select {
    width: 250px; /* 设置输入框的长度 */
  }

  .button-row {
    margin-top: 20px;
    text-align: center;
  }

  .button-row button {
    margin-right: 10px;
  }
</style>
