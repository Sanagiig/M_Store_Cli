<template>
  <view class="goods-content">
    <navigator
      open-type="navigate"
      hover-class="navigator-hover"
      class="goods-item"
      v-for="(item, index) in list"
      :url="`/pages/goods/goods?id=${item.id}`"
      :key="item.id"
    >
      <image class="image" :src="item.picture" mode="aspectFill" />
      <view class="name">{{ item.name }}</view>
      <text class="price">{{ item.price }}</text>
    </navigator>
  </view>
</template>
<script setup lang="ts">
  import type {GoodsItem} from "@/types/global";
  defineProps<{list: GoodsItem[]}>();
</script>

<style lang="scss" scoped>
  .goods-content {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20rpx;
    .goods-item {
      box-sizing: border-box;
      margin-right:10rpx;
      width: 345rpx;
      padding: 24rpx 20rpx 20rpx;
      margin-bottom: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
      background-color: #fff;
      .image {
        width: 304rpx;
        height: 304rpx;
      }

      .name {
        height: 75rpx;
        margin: 10rpx 0;
        font-size: 26rpx;
        color: #262626;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        &::before {
          content: "￥";
        }
        line-height: 1;
        padding-top: 4rpx;
        color: #cf4444;
        font-size: 26rpx;
      }
    }
  }
</style>
