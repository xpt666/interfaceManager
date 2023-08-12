<template>
  <div id="bb">
    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items2" style="width: 100%; display:inline-block" />
    <div class="tabcontainer">
      <div style="width: 500px float:left">
        <a-tabs v-model:activeKey="activeKey" :tab-position="tabPosition">
          <a-tab-pane key="1" tab="collections"><div>
            <a-tree
            :tree-data="treeData"
            v-model:expandedKeys="expandedKeys"
          >
            <template #title0000><a-tag color="blue">POST</a-tag><router-link to="/" tag='a'>网址1</router-link></template><!-- 需修改网址路由 -->
            <template #title0001><a-tag color="blue">POST</a-tag><router-link to="/" tag='a'>网址2</router-link></template><!-- 需修改网址路由 -->
            <template #title0010><a-tag color="green">GET</a-tag><router-link to="/" tag='a'>网址3</router-link></template><!-- 需修改网址路由 -->
            <template #title0011><a-tag color="green">GET</a-tag><router-link to="/" tag='a'>网址4</router-link></template><!-- 需修改网址路由 -->
            <template #title="{ key: treeKey, title }">
              <a-dropdown :trigger="['contextmenu']">
                <span>{{ title }}</span>
                <template #overlay>
                  <a-menu @click="({ key: menuKey }) => onContextMenuClick(treeKey, menuKey)">
                    <a-menu-item key="1"><a href="/">新建内容</a></a-menu-item><!-- 需修改网址路由，另有需要可以曾添几行 -->
                  </a-menu>
                </template>  
              </a-dropdown>
            </template> 
          </a-tree>
          </div></a-tab-pane>
          <a-tab-pane key="2" tab="history">
            <div class="history-web"><a-tag color="blue">POST</a-tag><a href="/">网址1</a></div><!-- 需修改网址路由 -->
            <div class="history-web"><a-tag color="green">GET</a-tag><a href="/">网址3</a></div><!-- 需修改网址路由 -->
          </a-tab-pane>
        </a-tabs>
      </div>
   
  </div>
  <div style="float:left">主页内容放此处</div>
  </div>
</template>
<script lang="ts" setup>
import { h, ref ,defineComponent, watch} from 'vue';
import {UserOutlined} from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import { TreeDataItem } from 'ant-design-vue/es/tree/Tree';
const tabPosition = ref('left'); 
const activeKey = ref('1'); 


//顶部导航栏
const current = ref<string[]>(['mail']);
const items2 = ref<MenuProps['items']>([
  {
    key: 'sub1',
    label: h('a', { href: '/main' },'<首页'),
    title: '<首页',
  },
  
  {
    key: 'sub1',
    icon: () => h(UserOutlined),
    label:  h('a', { href: '/', target: '_blank' }, '个人主页'),//这里面的网址需要替换
    title: 'profile',
    
  },
]);
//树形控件
const treeData: TreeDataItem[] = [
  {
    title: '项目 1',
    key: '0-0',
    children: [
     
          { key: '0-0-0-0', slots: { title: 'title0000' } },
          { key: '0-0-0-1', slots: { title: 'title0001' } },
          { key: '0-0-1-0', slots: { title: 'title0010' } },
          { key: '0-0-1-1', slots: { title: 'title0011' } },
      
    ],
  },
];
const onContextMenuClick = (treeKey: string, menuKey: string) => {
      console.log(`treeKey: ${treeKey}, menuKey: ${menuKey}`);
    };
const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);

    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });

</script >

<style lang="scss">
html{
  height: 100%;
}
@media (min-width: 1024px)
{
  body{
    padding: 0;
    margin: 0;
    display: block;
}
  #app{
    padding: 0px;
    max-width: 100%;
    display: block;
  }
}
#bb ul:nth-child(1) li:nth-child(3),#bb ul li:nth-child(2){
  float: right;
}
#bb ul li{
  font-size: 16px;
  padding: 5px 10px;
}
#app{padding: 0px;}
#bb ul:nth-child(2) li{
  margin: 0 auto;
  width: 200px;
}
#bb ul:nth-child(2){
 border: 0px;
}
li{
	list-style: none;
}
.tabcontainer>div>div{
	width:350px;
	max-width: 100vw;
	height:560px;
	background-color: #fcfcfc;
  border-right:0.3px solid #ddd ;
	overflow:hidden;
  float: left;
  margin-bottom: 0pxs;
}
#rc-tabs-1-panel-2{
  padding-left: 15px;
}

.history-web{
  padding: 8px 3px;
}
.history-web:hover{
  background-color: #f2f2f2;

}
a{
  color: #888;
}
.ant-tree-list-holder-inner{
  background-color: #fcfcfc;
}
</style>