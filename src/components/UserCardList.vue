<template>
  <van-card v-for="user in props.userList" :desc="user.profile" :title="`${user.username}(${user.planetCode})`"
            :thumb="user.avatarUrl">
    <template #tags >
      <van-tag plain type="danger" v-for="msg in user.pagesize" style="margin:6px 8px 0 0;">{{msg}}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>

</template>

<script setup lang="ts">
import {UserType} from "../models/user";

interface UserCardListProps{
  userList:UserType[];
}
const props=withDefaults(defineProps<UserCardListProps>(),{
  userList:[]
});
</script>

<style lang="scss" scoped></style>