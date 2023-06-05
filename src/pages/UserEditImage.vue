<template>
  <van-uploader :before-read="beforeRead" />
</template>

<script setup lang="ts">
import {Toast} from "vant";

const beforeRead = (file) => {
  if (file.type !== 'image/jpeg') {
    Toast('请上传 jpg 格式图片');
    return false;
  }
  return true;
};

// 返回 Promise
const asyncBeforeRead = (file) =>
    new Promise((resolve, reject) => {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        reject();
      } else {
        const img = new File(['foo'], 'bar.jpg', {
          type: 'image/jpeg',
        });
        resolve(img);
      }
    });
console.log(asyncBeforeRead)
</script >

<style lang="scss" scoped></style>