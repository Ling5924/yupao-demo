<template>
  <van-field v-model="chatMsg" readonly label="ChatGPT:" />
  <van-barrage v-model="list">
    <div class="video" style="width: 100%; height: 150px"></div>
  </van-barrage>
  <van-space style="margin-top: 10px">
    <van-button @click="add" type="primary" size="small"> 弹幕 </van-button>
  </van-space>

  <van-cell-group inset>
    <van-field v-model="question" clearable placeholder="请输入问题">
      <template #button>
        <van-button size="small" type="primary" @click="onSubmit()"
          >发送</van-button
        >
      </template>
    </van-field>
  </van-cell-group>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import myAxios from '../plugins/myAxios';
import chatAxios from '../plugins/chatAxios';
import { getCurrentUser } from '../services/user';
import { showSuccessToast, showFailToast } from 'vant';
const route = useRoute();
const router = useRouter();
const chatMsg = ref('你好，我是chatGPT！');
const question = ref('');
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const onSubmit = async () => {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  if (!currentUser) {
    router.replace('/user/login');
    showFailToast('用户未登录！');
    return;
  }
  if (question.value === '') {
    showFailToast('问题不能为空！');
    return;
  }
  const requestId = await chatAxios.post('/chat', {
    session_id: currentUser.userAccount,
    username: currentUser.username,
    message: question.value,
  });
  const res = await chatAxios.get(`/chat/response?request_id=${requestId}`);
  if (String(res.message) === '') {
    while (true) {
      await sleep(1000);
      const res = await chatAxios.get(`/chat/response?request_id=${requestId}`);
      if (String(res.message) !== '') {
        chatMsg.value = String(res.message);
        break;
      }
    }
  } else {
    chatMsg.value = String(res.message);
  }

  if (res.result === 'SUCCESS') {
    showSuccessToast('请求成功');
    add();
  } else {
    showFailToast('请求失败');
  }
};

const defaultList = [
  { id: 100, text: '轻量' },
  { id: 101, text: '可定制的' },
  { id: 102, text: '移动端' },
  { id: 103, text: 'Vue' },
  { id: 104, text: '组件库' },
  { id: 105, text: 'VantUI' },
  { id: 106, text: '666' },
];

const list = ref([...defaultList]);
const add = () => {
  list.value.push({
    id: Math.floor(Math.random() * 100),
    text: chatMsg.value,
  });
  console.log(list.value);
};
</script>

<style lang="scss" scoped></style>
