<template>
  <view class="guess">
    <view class="caption">
      <text class="caption-text">猜你喜欢</text>
    </view>
    <SaGoods :list="guessList" />
    <view class="loading-text">
      {{ finish ? "没有更多数据~" : "正在加载..." }}
    </view>
  </view>
</template>

<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import type {PageParams} from "@/types/global";
  import type {GuessItem} from "@/types/home";
  import {getHomeGoodsGuessLikeAPI} from "@/services/home";

  // 分页参数
  const pageParams: Required<PageParams> = {
    page: 1,
    pageSize: 10,
  };

  // 猜你喜欢的列表
  const guessList = ref<GuessItem[]>([]);
  // 已结束标记
  const finish = ref(false);
  // 获取猜你喜欢数据
  const getHomeGoodsGuessLikeData = async () => {
    // 退出分页判断
    if (finish.value === true) {
      return uni.showToast({icon: "none", title: "没有更多数据~"});
    }
    const res = await getHomeGoodsGuessLikeAPI(pageParams);
    // guessList.value = res.result.items
    // 数组追加
    guessList.value.push(...res.result.items);
    // 分页条件
    if (pageParams.page <= res.result.pages) {
      // 页码累加
      pageParams.page++;
    } else {
      finish.value = true;
    }
  };

  // 重置数据
  const resetData = () => {
    pageParams.page = 1;
    guessList.value = [];
    finish.value = false;
  };

  // 组件挂载完毕
  onMounted(() => {
    getHomeGoodsGuessLikeData();
  });

  // 暴露方法
  defineExpose({
    resetData,
    getMore: getHomeGoodsGuessLikeData,
  });
</script>

<style lang="scss" scoped>
  .guess {
    .caption {
      margin: 30rpx 0;
      font-size: 32rpx;
      color: #262626;
      .caption-text {
        display: flex;
        justify-content: center;
        align-items: center;
        &::before,
        &::after {
          content: "";
          margin: 0 10rpx;
          width: 20rpx;
          height: 20rpx;
          background-image: url(@/static/images/bubble.png);
          background-size: contain;
        }
      }
    }

    .loading-text {
      height: 50rpx;
      text-align: center;
    }
  }
</style>
