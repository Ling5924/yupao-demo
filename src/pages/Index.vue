<template>
  <user-card-list :user-list="userList"/>
  <van-empty v-if="!userList||userList.length<1" description="数据为空" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import myAxios from '../plugins/myAxios.ts';
import { showSuccessToast, showFailToast } from 'vant';
import UserCardList from "../components/UserCardList.vue";
import {useRouter} from "vue-router";
const userList = ref([]);
const router = useRouter();
onMounted(async ()=>{
  const userListData=await myAxios.get('/user/recommend', {
    params: {
      pageSize: 10, // 每页显示的记录数
      pageNum: 1 // 当前页数
  }
    })
      .then(function (response ) {
        console.log('/user/recommend succeed',response);
        showSuccessToast('请求成功')
        if (response.code!==0){
          router.replace('/user/login')
        }
        return response?.data?.records;
      })
      .catch(function (error) {
        console.log('/user/recommend error',error);
        showFailToast('请求失败')
      });
    userList.value=userListData;
})
</script>

<style lang="scss" scoped></style>