<template>
  <div class="info">
    <div class="agreementImage">
      <a-image
        :width="20"
        src="https://aliyuncdn.antdv.com/logo.png"
        :preview="false"
      />
    </div>
    
    <div>
      <a-button class="filebtn" type="text">filename /</a-button>
    </div>

    <div>
      <a-input class="websiteInput"  :bordered="false" placeholder="http://www.baidu.com" />
    </div>
    
    <div class="savebtn">
      <a-dropdown-button class="dropdownbtn" style="{ text-align: left}" @click="handleButtonClick" >
        <save-outlined class="saveicon" :style="{ 'font-size':'16px'}"/>
        <div class="savetext">Save</div>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="1">
              Save as ...
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown-button>
      
    </div>
    
    <div class="divider">
      <a-divider type="vertical" :style="{ 'font-size':'38px' }" />
    </div>
    
    <div class="draftswith">
      <div class="editing">
        <edit-filled :style="{ 'font-size':'18px'}" />
      </div>

      <div class="writed">
        <message-outlined :style="{ 'font-size':'18px'}"/>
      </div>
    </div>
  </div>
  <div>
      <a-input-group compact>
        <a-select class="downselect" v-model:value="value5">
          <a-select-option  value="get">GET</a-select-option>
          <a-select-option value="post">POST</a-select-option>
          <a-select-option value="put">PUT</a-select-option>
          <a-select-option value="patch">PATCH</a-select-option>
          <a-select-option value="delete">DELETE</a-select-option>
          <a-select-option value="head">HEAD</a-select-option>
          <a-select-option value="options">OPTIONS</a-select-option>
        </a-select>
        <a-input v-model:value="value6" style="width: 50%" />
      </a-input-group>
    </div>
</template>

<script setup>
    import { MessageOutlined, EditFilled, SaveOutlined, UserOutlined, DownOutlined} from "@ant-design/icons-vue"
</script>

<style scoped>
  .info {
    position: relative;
    display: flex;
    padding: 5px 10px;
  }
  .agreementImage {
    padding: 5px 5px;
  }
  .filebtn {
    display: inline-block;
    padding: 0px 4px;
  }
  .websiteInput {
    box-sizing: border-box;
    padding: 0px 4px;
    margin-top: 6px;
  }
  .savebtn {
    display: inline-block;
    position: relative;
    margin-left: 50%;
  }
  .saveicon {
    position: absolute;
    top: 8px;
    margin-right: 10px;
    left: 8px;
  }
  .savetext {
    position: relative;
    margin-left: 14px;
  }
  .divider {
    position: relative;
    margin-top: 2px;
  }
  .draftswith {
    width: auto;
    height: auto;
    background-color: #dcdcdc;
    display: flex;
    padding: 1px;
    margin-bottom: 4px;
  }
  .editing {
    border-radius: 5px;
    background-color: #fff;
    padding: 5px 5px;  
  }
  .writed {
    border-radius: 5px;
    background-color: #fff;
    margin-left: 2px;
    padding: 5px 5px;  
  }
  .downselect {
    width: 100px;
  }
</style>
