<template>
  <view class="hot">
    <view class="hot-item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator :url="`/pages/hot/hot?type=${item.type}`" class="cards">
        <image
          v-for="src in item.pictures"
          :key="src"
          class="image"
          mode="aspectFit"
          :src="src"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
  import type {HotItem} from "@/types/home";

  // 定义 props 接收数据
  defineProps<{
    list: HotItem[];
  }>();
</script>

<style lang="scss" scoped>
  .hot {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20rpx;
    background-color: white;
    border-radius: 12rpx;
    .hot-item {
      &:nth-child(2n) {
        border-left: 1rpx solid rgb(243, 241, 241);
      }

      &:nth-child(n + 3) {
        border-top: 1rpx solid rgb(243, 241, 241);
      }
      .title {
        padding: 16rpx;

        .title-text {
          font-size: 28rpx;
        }

        .title-desc {
          margin-left: 20rpx;
          font-size: 20rpx;
          color: #8a8787;
        }
      }
      .cards {
        .image {
          margin: 8rpx;
          width: 160rpx;
          height: 160rpx;
        }
      }
    }
  }
</style>
