<script setup lang="ts">
  import type {CategoryItem} from "@/types/home";

  // 定义 props 接收数据
  defineProps<{
    list: CategoryItem[];
  }>();
</script>

<template>
  <view class="category">
    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
      v-for="item in list"
      :key="item.id"
    >
      <image class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss" scoped>
  .category {
    display: flex;
    flex-wrap: wrap;
    margin: 20rpx 0rpx;
    height: 300rpx;

    .category-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 150rpx;

      .icon {
        width: 100rpx;
        height: 100rpx;
      }

      .text {
        color: #838885;
        font-size: 22rpx;
      }
    }
  }
</style>
