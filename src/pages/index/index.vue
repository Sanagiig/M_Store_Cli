<template>
  <view class="content">
    <CustomNaviBar />
    <scroll-view
      scroll-y
      enable-back-to-top
      class="scroll-view"
      :refresher-enabled="true"
      :refresher-triggered="isRefreshPulling"
      @refresherrefresh="handleRefresh"
      @scrolltolower="onScrolltolower"
    >
      <PageSkeleton v-if="isLoading || isRefreshPulling" />
      <template v-else>
        <SaSwiper :list="bannerList" />
        <CategoryPanel :list="categoryList" />
        <HotPanel :list="hotList" />
        <SaGuess ref="guessRef" />
      </template>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import {onLoad} from "@dcloudio/uni-app";
  import CustomNaviBar from "./components/CustomNaviBar.vue";
  import CategoryPanel from "./components/CategoryPanel.vue";
  import PageSkeleton from "./components/PageSkeleton.vue";
  import HotPanel from "./components/HotPanel.vue";
  import type {BannerItem, CategoryItem, HotItem} from "../../types/home";
  import {useGuessList} from "../../composables/guess/index";
  import {
    getHomeBannerAPI,
    getHomeCategoryAPI,
    getHomeHotAPI,
  } from "../../services/home";

  // 猜你喜欢组合式函数调用
  const {guessRef, onScrolltolower} = useGuessList();
  const isLoading = ref(false);
  const isRefreshPulling = ref(false);
  const bannerList = ref<BannerItem[]>([]);
  const categoryList = ref<CategoryItem[]>([]);
  const hotList = ref<HotItem[]>([]);

  onLoad(async () => {
    isLoading.value = true;
    await Promise.all([getBannerList(), getCategoryList(), getHotList()]);
    isLoading.value = false;
  });

  const getBannerList = async () => {
    bannerList.value = (await getHomeBannerAPI()).result;
  };

  const getCategoryList = async () => {
    categoryList.value = (await getHomeCategoryAPI()).result;
  };

  const getHotList = async () => {
    hotList.value = (await getHomeHotAPI()).result;
  };

  const handleRefresh = async () => {
    isRefreshPulling.value = true;
    guessRef.value?.resetData();
    await Promise.all([
      getBannerList(),
      getCategoryList(),
      getHotList(),
      guessRef.value?.getMore(),
    ]);
    isRefreshPulling.value = false;
    console.log("refresh");
  };
</script>

<style lang="scss">
  page {
    height: 100%;
    overflow: hidden;
  }
</style>
<style lang="scss" scoped>
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .scroll-view {
    flex: 1;
    overflow: hidden;
  }
</style>
