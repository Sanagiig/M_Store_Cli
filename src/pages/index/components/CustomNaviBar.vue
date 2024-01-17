<template>
  <view class="navbar" :style="{paddingTop: paddingTop}">
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png"></image>
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <view class="search">
      <text class="icon-search"></text>
      <input
        class="search-input"
        placeholder-class="search-placeholder"
        placeholder-style="color:#e0e0e0;"
        placeholder="搜索物品"
        value=""
      />
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<script setup lang="ts">
  const sysInfo = uni.getSystemInfoSync();
  const paddingTop = `${sysInfo.safeArea?.top || 0}px`;
</script>

<style lang="scss" scoped>
  .navbar {
    padding: 50rpx 20rpx 15rpx 20rpx;
    background-image: url(@/static/images/navigator_bg.png);
    display: flex;
    flex-direction: column;
    position: relative;
    background: $theme-color-primary;
    color: white;
  }

  .logo {
    display: flex;
    align-items: center;
    .logo-image {
      width: 206rpx;
      height: 58rpx;
    }

    .logo-text {
      margin-left: 20rpx;
    }
  }

  .search {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 30rpx;
    margin-top: 20rpx;
    overflow: hidden;
    height: 70rpx;

    .icon-search {
    }

    .search-input {
      width: 80%;
    }

    .search-input::placeholder {
      font-size: 200rpx;
      color: black;
    }

    .icon-scan {
    }
  }
</style>
