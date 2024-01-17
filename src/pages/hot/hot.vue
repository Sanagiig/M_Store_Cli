<template>
  <view class="viewport">
    <view class="banner">
      <image :src="bannerPicture" mode="scaleToFill" />
    </view>

    <view class="tabs">
      <view
        class="tab-item"
        v-for="(item, index) in subTypes"
        :class="{active: activeIndex == index}"
        :key="item.id"
        @click="activeIndex = index"
      >
        <text class="tab-text">{{ item.title }}</text>
      </view>
    </view>

    <scroll-view
      scroll-y
      v-for="(item, index) in subTypes"
      v-show="index === activeIndex"
      :enable-back-to-top="false"
      :refresher-enabled="true"
      :key="item.id"
      @refresherrefresh="onScollviewRefresh"
      @scrolltolower="onScrollToLower"
    >
      <view class="goods-content">
        <SaGoods :list="item.goodsItems.items" />
      </view>

      <view class="loading-text">{{
        item.finish ? "没有更多数据了~" : "正在加载..."
      }}</view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
  import {getHotRecommendAPI} from "@/services/hot";
  import type {SubTypeItem} from "@/types/hot";
  import {onLoad} from "@dcloudio/uni-app";
  import {ref} from "vue";
  import type {Ref} from "vue";

  // uniapp 获取页面参数
  const props = defineProps<{
    type: string;
  }>();

  // 热门推荐页 标题和url
  const urlMap = [
    {type: "1", title: "特惠推荐", url: "/hot/preference"},
    {type: "2", title: "爆款推荐", url: "/hot/inVogue"},
    {type: "3", title: "一站买全", url: "/hot/oneStop"},
    {type: "4", title: "新鲜好物", url: "/hot/new"},
  ];

  const isLoading = ref(false);

  const currUrlMap = urlMap.find((v) => v.type === props.type);
  // 推荐封面图
  const bannerPicture = ref("");
  // 推荐选项
  const subTypes = ref<(SubTypeItem & {finish?: boolean})[]>([]);
  // 高亮的下标
  const activeIndex = ref(0);

  // 获取热门推荐数据
  const getHotRecommend = async () => {
    const res = await getHotRecommendAPI(currUrlMap!.url, {
      page: 1,
      pageSize: 10,
    });

    bannerPicture.value = res.result.bannerPicture;
    subTypes.value = res.result.subTypes;
  };

  const resetSearch = async () => {
    await getHotRecommend();
  };

  const loading = async (
    loadinngFlag: Ref<boolean>,
    ...fns: (() => Promise<void>)[]
  ) => {
    loadinngFlag.value = true;
    await Promise.all(fns.map((fn) => fn()));
    loadinngFlag.value = false;
  };

  const onScollviewRefresh = async () => {
    loading(isLoading, resetSearch);
  };

  const onScrollToLower = async () => {
    const curTypes = subTypes.value[activeIndex.value];

    if (curTypes.goodsItems.page <= curTypes.goodsItems.pages) {
      curTypes.goodsItems.page++;
    } else {
      curTypes.finish = true;
      return uni.showToast({icon: "none", title: "没有更多数据了~"});
    }

    const res = await getHotRecommendAPI(currUrlMap!.url, {
      subType: curTypes.id,
      page: curTypes.goodsItems.page,
      pageSize: curTypes.goodsItems.pageSize,
    });

    const newData = res.result.subTypes[activeIndex.value];
    curTypes.goodsItems.items.push(...newData.goodsItems.items);
  };

  onLoad(async () => {
    loading(isLoading, getHotRecommend);
  });
</script>
<style lang="scss" scoped>
  page{
    height:100%;
    overflow: hidden;
  }
  .viewport {
    height:100%;
    overflow: hidden;
    .banner {
      image {
        width: 100%;
        height: 300rpx;
      }
    }

    .tabs {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: -50rpx 20rpx 20rpx 20rpx;
      height: 100rpx;
      border-radius: 20rpx;
      position: relative;
      background-color: white;
      .tab-item {
        position:relative;
        height:60rpx;
        &.active {
          .tab-text::after{
            content:"";
            position:absolute;
            transform: translate(-50%);
            bottom:0%;
            left:50%;
            width:60rpx;
            height:6rpx;
            background-color: $theme-color-primary;
          }
        }
      }
    }

    .loading-text {
      text-align: center;
    }
  }
</style>
