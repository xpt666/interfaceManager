<template>
  <div class="mypage">
    <a-image :src="img"
      fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==" />

    <img src="/public/mypage_img/left_logo.png" @click="backHome" class="black_box" />

    <div class="headlogo_box">
      <img :src="img" class="headlogo" />
      <div style="color: white; margin-left: 20px">
        <span>账号：{{ form.number }}</span>
        <div>
          <p  style="font-size: 20px" @click="showModal">编辑</p>
          <a-modal v-model:visible="visible" title="编辑" @ok="handleOk">
            <template #footer>
              <a-button key="back" @click="handleCancel">Return</a-button>
              <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
            </template>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </a-modal>
        </div>
      </div>
    </div>

    <div class="massage">
      <div class="msg_left">
        <p>昵称：{{ form.nickname }}</p>
        <div style="color: white; margin-left: 5px">
          性别：
          <span v-if="form.gender === '1'">男</span>
          <span v-if="form.gender === '0'">女</span>
        </div>
        <p>年龄：{{ form.age }}</p>
        <p>手机号：{{ form.mobile }}</p>
        <p>邮箱：{{ form.mailbox }}</p>
      </div>
      <div class="msg_right">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="我的项目">
            Content of Tab Pane 1
            <p>11</p>
            <p>11</p>
            <p>11</p>
          </a-tab-pane>
          <a-tab-pane key="2" tab="项目成员" force-render>Content of Tab Pane 2</a-tab-pane>
          <a-tab-pane key="3" tab="项目接口">Content of Tab Pane 3</a-tab-pane>
          <a-tab-pane key="4" tab="历史版本">Content of Tab Pane 4</a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div class="button_box">
        <a-button @click="logOut">退出登录</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    function backHome() {
      router.push({
        path: "/login",
      });
    }
    function logOut() {
      router.push({
        path: "/login",
      });
    }

    const loading = ref<boolean>(false);
    const visible = ref<boolean>(false);
    
    const showModal = () => {
      visible.value = true;
    };
  const  changePassword=()=>{
    visible.value = true;
  }
    const handleOk = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        visible.value = false;
      }, 2000);
    };
    const handleCancel = () => {
      visible.value = false;
    };
    return {
      img: "/public/mypage_img/beijing.jpg",
      loading,
      visible,
      backHome,
      logOut,
      showModal,
      handleOk,
      handleCancel,
      changePassword,
      activeKey: ref("1"),
      form: {
        nickname: "沸羊羊", //昵称
        number: 17563516940, //账号
        gender: "1", //性别
        mailbox: "3127535719@qq.com", // 身份证号
        mobile: "17563516940", // 手机号
        age: 16,
      },
      passwordForm:{
        oldPassword:'',
        newPassword:'',
        confirmPassword:''
      }
    };
  },
});
</script>

<style lang="scss">
body,
p {
  margin: 0;
  padding: 0;
  display: block;
}

#app {
  max-width: unset !important;
  padding: 0;
  display: block;
  margin: 0;
}

.black_box {
  display: block;
  position: absolute;
  top: 0px;
  width: 80px;
}

.mypage {
  width: 100vw;
  height: 100vh;
  background-color: #151716;
}

:where(.css-dev-only-do-not-override-eq3tly).ant-image {
  display: block;
}

:where(.css-dev-only-do-not-override-eq3tly).ant-image .ant-image-img {
  display: block;
  width: 100vw !important;
  height: 400px;
}

.headlogo_box {
  display: flex;
  align-items: center;
  position: absolute;
  top: 300px;
  left: 400px;
}

.headlogo {
  border-radius: 50%;
  width: 125px;
  /* 调整头像的宽度 */
  height: 125px;
  /* 调整头像的高度 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.massage {
  display: flex;
}

.msg_left {
  width: 210px;
  height: 170px;
  background: linear-gradient(to bottom, #212322, #151716);
  /* 添加渐变背景色 */
  margin-left: 380px;
  padding-top: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* 添加阴影效果 */
  border-radius: 10px;
  /* 添加圆角 */
  border: 1px solid rgba(255, 255, 255, 0.2);

  /* 添加淡白边框 */
  p {
    color: white;
    padding-left: 5px;
    padding-right: 5px;
  }
}

:where(.css-dev-only-do-not-override-eq3tly).ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: #1bb380;
}

:where(.css-dev-only-do-not-override-eq3tly).ant-tabs {
  color: white;
}

:where(.css-dev-only-do-not-override-eq3tly).ant-tabs .ant-tabs-ink-bar {
  background-color: #1bb380;
}

.msg_right {
  margin-left: 200px;

  :where(.css-dev-only-do-not-override-eq3tly).ant-tabs .ant-tabs-content-holder {
    width: 700px;
    background-color: wheat;
    height: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    /* 添加阴影效果 */
    border-radius: 10px;
    background-color: #212322;
  }
}
.button_box{
  float: right;
}
</style>