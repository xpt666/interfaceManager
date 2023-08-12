<template>
    <div class="container">
        <div class="top">
            <div class="projectModule">
                <div class="projectText">项目一</div>
                <PlusOutlined />
            </div>
            <div class="mockModule">mock服务</div>
            <div class="importDocument">导入swagger文档</div>
        </div>
        <div class="body">
            <a-layout class="layout">
                <!-- <a-layout-header class="header">
                <div class="logo" />
                <a-menu theme="dark" mode="horizontal" v-model:selectedKeys="selectedKeys1" :style="{ lineHeight: '64px' }">
                    <a-menu-item key="1">nav 1</a-menu-item>
                    <a-menu-item key="2">nav 2</a-menu-item>
                    <a-menu-item key="3">nav 3</a-menu-item>
                </a-menu>
                </a-layout-header> -->
                <a-layout>
                    <a-layout-sider width="200" style="background: #fff">
                        <a-menu mode="inline" v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys"
                            :style="{ height: '100%', borderRight: 0 }">
                            <a-menu-item v-for="(item, idx) in interfaceList" :key="idx"
                                @contextmenu.prevent="openDialog($event,idx)">{{ item.name }}</a-menu-item>
                        </a-menu>
                    </a-layout-sider>
                    <a-layout style="padding: 0 24px 24px">
                        <a-breadcrumb style="margin: 16px 0">
                            <!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item>List</a-breadcrumb-item>
                        <a-breadcrumb-item>App</a-breadcrumb-item> -->
                        </a-breadcrumb>
                        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                            <div class="content_top">
                                <a-input-group compact>
                                    <a-select v-model:value="httpWaySelect" style="width: 10%">
                                        <a-select-option value="get">get</a-select-option>
                                        <a-select-option value="post">post</a-select-option>
                                    </a-select>
                                    <a-input style="width: 90%" v-model:value="value4" />
                                </a-input-group>
                                <a-button class="btn" type="primary">发送</a-button>
                            </div>
                            <div class="content_middle">
                                <a-tabs v-model:tabKey="tabKey">
                                    <a-tab-pane key="1" tab="params">
                                        <a-table :columns="columns" :data-source="data" :row-selection="rowSelection" />
                                    </a-tab-pane>
                                    <a-tab-pane key="2" tab="body" force-render>Content of Tab Pane 2</a-tab-pane>
                                </a-tabs>
                            </div>
                        </a-layout-content>
                    </a-layout>
                </a-layout>
            </a-layout>
            <a-modal v-model:visible="dialogVisible">
                <p>Some contents...</p>
            </a-modal>
            <Dialog  ></Dialog>
        </div>
    </div>
</template>
<script setup>
    import { reactive, ref } from 'vue'
    import { PlusOutlined, SketchOutlined } from '@ant-design/icons-vue';
    import Dialog from '../../components/dialog.vue'
    const selectKey = ref(['1']);
    const httpWaySelect = ref('get')
    const tabKey = ref('1')
    const dialogVisible = ref(false)
    const visable = ref('none')
    const interfaceList = reactive(
        [{
            name: '接口1',
            key: 'id',
            value: '123',
            description: 'id'
        },
        {
            name: '接口2',
            key: 'id',
            value: '123',
            description: 'id'
        }]
    )
    const columns = [
        {
            title: 'Key',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
    ];
    const data = [
        {
            key: 'id',
            value: '123',
            description: '用户id',
        },
        {
            key: 'name',
            value: 'xpt',
            description: '用户名字',
        },
    ]
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };
    function openDialog(event,idx) {
        console.log(event,idx)
        // dialogVisible.value = true
        visable.value = 'block'
    }
</script>
<style scoped lang="less">
.container {
    height: 98%;

    .top {
        display: flex;
        align-items: center;

        .projectModule {
            display: flex;
            align-items: center;
            margin-right: auto;
            padding: 10px 0 0 24px;
            border-bottom: 1px solid grey;

            .projectText {
                margin-right: 10px
            }
        }

        .mockModule {
            margin-right: 24px;
            border: 1px solid grey;
        }

        .importDocument {
            margin-right: 24px;
            border: 1px solid grey;
        }
    }

    .body {
        height: 98%;

        // padding-top: 24px;
        .layout {
            height: 50%;



            .content_top {
                display: flex;

                .btn {
                    margin-left: 20px
                }
            }

            .content_middle {
                height: 90%;
            }
        }


    }
}
</style>
