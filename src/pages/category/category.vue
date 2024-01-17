<template>
  <view class="viewport" v-if="isFinish">
    <view class="search">
      <view class="icon-search"></view>
      <input class="input-search" placeholder="输入商品名称" />
    </view>

    <view class="tabs">
      <view class="tab-title">
        <scroll-view scroll-y>
          <view
            class="tab-title-item"
            v-for="(item, idx) in categoryList"
            :class="{active: activeIndex == idx}"
            :key="item.id"
            @click="activeIndex = idx"
          >
            <text>{{ item.name }}</text>
          </view>
        </scroll-view>
      </view>

      <view class="tab-content">
        <scroll-view
          scroll-y
          :refresher-enabled="true"
          :refresher-triggered="!isFinish"
          @refresherrefresh="refresh"
        >
          <SaSwiper class="swiper" :list="bannerList" />
          <view
            class="sub-category"
            v-for="item in subCategoryList"
            :key="item.id"
          >
            <view class="title">
              <text class="category-name">{{ item.name }}</text>
              <navigator class="more" hover-class="none">全部</navigator>
            </view>

            <view class="content">
              <SaGoods :list="item.goods" />
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
  <PageSkeleton v-else />
</template>

<script setup lang="ts">
  import {getCategoryTopAPI} from "@/services/category";
  import {getHomeBannerAPI} from "@/services/home";
  import type {CategoryTopItem} from "@/types/category";
  import type {BannerItem} from "@/types/home";
  import {onLoad} from "@dcloudio/uni-app";
  import {computed, ref} from "vue";
  import PageSkeleton from "./components/PageSkeleton.vue";
  import SaSwiper from "@/components/SaSwiper/SaSwiper.vue";

  // 获取轮播图数据
  const bannerList = ref<BannerItem[]>([]);
  const getBannerData = async () => {
    const res = await getHomeBannerAPI(2);
    bannerList.value = res.result;
  };

  // 获取分类列表数据
  const categoryList = ref<CategoryTopItem[]>([]);
  const activeIndex = ref(0);
  const getCategoryTopData = async () => {
    const res = await getCategoryTopAPI();
    categoryList.value = res.result;
  };

  // 是否数据加载完毕
  const isFinish = ref(false);
  // 页面加载
  onLoad(async () => {
    await refresh();
  });

  const refresh = async () => {
    isFinish.value = false;
    await Promise.all([getBannerData(), getCategoryTopData()]);
    isFinish.value = true;
  };

  // 提取当前二级分类数据
  const subCategoryList = computed(() => {
    return categoryList.value[activeIndex.value]?.children || [];
  });
</script>

<style lang="scss">
  .tabs {
    .tab-title-item {
      .carousel {
        height: 200rpx !important;
      }
    }

    .goods-content {
      padding: 0 !important;
    }

    .content .goods-item {
      width: 160rpx !important;
      padding: 0 !important;
      margin: 0 20rpx 20rpx 0 !important;

      .name {
        margin: 0 !important;
      }
      .image {
        width: 150rpx !important;
        height: 150rpx !important;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .viewport {
    background-color: white;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 20rpx 30rpx;
    background-color: #f0ecec;
    border-radius: 14rpx;
    height: 60rpx;
    .input-search {
      width: 90%;
      font-size: 30rpx;
    }
  }

  .tabs {
    display: flex;
    min-height:400rpx;
    .tab-title {
      position: relative;
      background-color: #f0ecec;
      min-width: 180rpx;
      font-size: 30rpx;
      .tab-title-item {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        position: relative;
        height: 80rpx;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          width: 60rpx;
          height: 1rpx;
          background-color: rgb(212, 207, 207);
        }

        &.active {
          background-color: white;
          border-bottom: none;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            height: 100%;
            width: 10rpx;
            background-color: $theme-color-primary;
          }

          &::after {
            content: "";
            display: none;
          }
        }

        &:last-child {
          &::after {
            content: "";
            display: none;
          }
        }
      }
    }

    .tab-content {
      width: 100%;
      padding: 0 20rpx;
      .swiper {
        height: 100rpx;
      }

      .sub-category{
        padding:20rpx 0;
      }

      .title {
        display: flex;
        justify-content: space-between;
        font-size: 30rpx;
        margin: 20rpx 0;
        .category-name {
        }
        .more {
          color: #999;
        }
      }
    }
  }
</style>
