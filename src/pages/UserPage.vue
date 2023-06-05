<template>
  <template v-if="user">
    <van-cell
      title="昵称"
      is-link
      to="/user/edit"
      :value="user.username"
      @click="toEdit('username', '昵称', user.username)"
    />
    <van-cell
      title="账号"
      :value="user.userAccount"
      is-link
      to="/user/logout"
      @click="toLogout(user.userAccount)"
    />
    <van-cell
      title="头像"
      is-link
      to="/user/edit"
      @click="toEdit('avatarUrl', '头像', user.avatarUrl)"
    >
      <img style="height: 48px" :src="user.avatarUrl" alt="" />
    </van-cell>
    <van-cell
      title="性别"
      is-link
      :value="user.gender === 1 ? '男' : '女'"
      @click="toEdit('gender', '性别', user.gender)"
    />
    <van-cell
      title="电话"
      is-link
      to="/user/edit"
      :value="user.phone"
      @click="toEdit('phone', '电话', user.phone)"
    />
    <van-cell
      title="邮箱"
      is-link
      to="/user/edit"
      :value="user.email"
      @click="toEdit('email', '邮箱', user.email)"
    />
    <van-cell title="星球编号" :value="user.planetCode" />
    <van-cell title="注册时间" :value="create_time" />
    <van-button
      style="margin: 16px 0 0 0"
      round
      block
      to="/chatgpt"
      type="success"
      native-type="submit"
    >
      ChatGPT
    </van-button>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getCurrentUser } from '../services/user';
const router = useRouter();
const user = ref();
const create_time = ref();
onMounted(async () => {
  user.value = await getCurrentUser();
  if (user.value && user.value.createTime) {
    const date = new Date(user.value.createTime);
    create_time.value = date.toLocaleDateString();
  }
});
const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      currentValue,
      editName,
    },
  });
};
const toLogout = (currentValue: string) => {
  router.push({
    path: '/user/logout',
    query: {
      currentValue,
    },
  });
};
</script>

<style lang="scss" scoped></style>
