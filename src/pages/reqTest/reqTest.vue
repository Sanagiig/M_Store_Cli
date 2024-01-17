<template>
  <view class="test">
    <button @tap="handleReq">请求</button>
  </view>
</template>

<script setup lang="ts">
  import {request} from "../../utils/request/index";
  const handleReq = () => {
    console.log("click");
    request({
      method: "GET",
      url: "/category/top",
    }).then((res) => {
      console.log("res", res);
    });
  };
</script>

<style scoped></style>
