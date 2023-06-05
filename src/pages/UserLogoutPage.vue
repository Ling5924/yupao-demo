<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="editUser.currentValue"
      label="账号"
      readonly
    />
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        退出
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import myAxios from '../plugins/myAxios';
import { showSuccessToast, showFailToast } from 'vant';
import { getCurrentUser } from '../services/user';
const route = useRoute();
const router = useRouter();
const editUser = ref({
  currentValue: route.query.currentValue,
});

const onSubmit = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    Toast.fail('用户未登录');
    return;
  }
  const res = await myAxios.post('/user/logout');
  if (res.code === 0 && res.data > 0) {
    showSuccessToast('退出成功');
    router.back();
  } else {
    showFailToast('退出失败');
  }
};
</script>

<style lang="scss" scoped></style>
