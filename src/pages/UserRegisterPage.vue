<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="userAccount"
        name="userAccount"
        label="账号"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="userPassword"
        type="password"
        name="userPassword"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="checkPassword"
        type="password"
        name="checkPassword"
        label="重复密码"
        placeholder="请输入重复密码"
        :rules="[{ required: true, message: '请填写重复密码' }]"
      />
      <van-field
        v-model="planetCode"
        name="planetCode"
        label="星球编号"
        placeholder="请输入星球编号"
        :rules="[{ required: true, message: '请填写星球编号' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import myAxios from '../plugins/myAxios';
import { Toast } from 'vant';
const router = useRouter();
const checkPassword = ref('');
const planetCode = ref('');
const userAccount = ref('');
const userPassword = ref('');
const onSubmit = async () => {
  const res = await myAxios.post('/user/register', {
    checkPassword: checkPassword.value,
    planetCode: planetCode.value,
    userAccount: userAccount.value,
    userPassword: userPassword.value,
  });
  if (res.code === 0 && res.data) {
    Toast.success('注册成功');
    router.replace('/user/login');
  } else {
    Toast.fail('注册失败');
  }
};
</script>

<style lang="scss" scoped></style>
