<template>
  <div>
    
    <div class="icons-list">
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined :rotate="180" />
    <LoadingOutlined />
  </div>
  
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  },
});

</script>

<style lang="scss">

</style>