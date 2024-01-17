<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport data-v-4046d630 data-v-4046d630">
      <view class="search search data-v-4046d630 data-v-4046d630">
        <view
          class="icon-search data-v-4046d630 sk-pseudo sk-pseudo-circle"
        ></view>
        <view
          class="input-search data-v-4046d630 sk-image"
          placeholder="输入商品名称"
        ></view>
      </view>
      <view class="tabs tabs data-v-4046d630 data-v-4046d630">
        <view class="tab-title tab-title data-v-4046d630 data-v-4046d630">
          <scroll-view :scroll-y="true" class="data-v-4046d630 data-v-4046d630">
            <view
              class="tab-title-item data-v-4046d630 sk-pseudo sk-pseudo-circle"
            >
              <text
                class="data-v-4046d630 sk-transparent sk-text-14-2857-353 sk-text"
                >居家</text
              >
            </view>
            <view
              class="tab-title-item data-v-4046d630 sk-pseudo sk-pseudo-circle"
            >
              <text
                class="data-v-4046d630 sk-transparent sk-text-14-2857-3 sk-text"
                >美食</text
              >
            </view>
            <view
              class="tab-title-item data-v-4046d630 sk-pseudo sk-pseudo-circle"
            >
              <text
                class="data-v-4046d630 sk-transparent sk-text-14-2857-71 sk-text"
                >服饰</text
              >
            </view>
            <view
              class="tab-title-item data-v-4046d630 active sk-pseudo sk-pseudo-circle"
            >
              <text
                class="data-v-4046d630 sk-transparent sk-text-14-2857-711 sk-text"
                >母婴</text
              >
            </view>
            <view
              class="tab-title-item data-v-4046d630 sk-pseudo sk-pseudo-circle"
            >
              <text
                class="data-v-4046d630 sk-transparent sk-text-14-2857-212 sk-text"
                >个护</text
              >
            </view>
            <view
              class="tab-title-item data-v-4046d630 sk-pseudo sk-pseudo-circle"
            >
              <text
                class="data-v-4046d630 sk-transparent sk-text-14-2857-744 sk-text"
                >严选</text
              >
            </view>
            <view
              class="tab-title-item data-v-4046d630 sk-pseudo sk-pseudo-circle"
            >
              <text
                class="data-v-4046d630 sk-transparent sk-text-14-2857-916 sk-text"
                >数码</text
              >
            </view>
            <view
              class="tab-title-item data-v-4046d630 sk-pseudo sk-pseudo-circle"
            >
              <text
                class="data-v-4046d630 sk-transparent sk-text-14-2857-913 sk-text"
                >运动</text
              >
            </view>
            <view
              class="tab-title-item data-v-4046d630 sk-pseudo sk-pseudo-circle"
            >
              <text
                class="data-v-4046d630 sk-transparent sk-text-14-2857-269 sk-text"
                >杂项</text
              >
            </view>
          </scroll-view>
        </view>
        <view class="tab-content tab-content data-v-4046d630 data-v-4046d630">
          <scroll-view :scroll-y="true" class="data-v-4046d630 data-v-4046d630">
            <view
              is="components/SaSwiper/SaSwiper"
              class="swiper swiper data-v-4046d630 data-v-4046d630"
            >
              <view
                class="carousel SaSwiper--carousel data-v-5068a42b SaSwiper--data-v-5068a42b"
              >
                <swiper
                  :autoplay="false"
                  :circular="true"
                  class="swiper SaSwiper--swiper data-v-5068a42b SaSwiper--data-v-5068a42b"
                  :current="0"
                  :interval="3000"
                ></swiper>
                <view
                  class="indicator SaSwiper--indicator data-v-5068a42b SaSwiper--data-v-5068a42b"
                >
                  <text
                    class="dot SaSwiper--dot data-v-5068a42b SaSwiper--data-v-5068a42b"
                  ></text>
                  <text
                    class="dot SaSwiper--dot data-v-5068a42b SaSwiper--data-v-5068a42b"
                  ></text>
                  <text
                    class="dot SaSwiper--dot data-v-5068a42b SaSwiper--data-v-5068a42b"
                  ></text>
                  <text
                    class="dot SaSwiper--dot data-v-5068a42b SaSwiper--data-v-5068a42b active SaSwiper--active"
                  ></text>
                  <text
                    class="dot SaSwiper--dot data-v-5068a42b SaSwiper--data-v-5068a42b"
                  ></text>
                </view>
              </view>
            </view>
            <view
              class="sub-category sub-category data-v-4046d630 data-v-4046d630"
            >
              <view class="title title data-v-4046d630 data-v-4046d630">
                <text
                  class="category-name data-v-4046d630 sk-transparent sk-text-14-2857-676 sk-text"
                  >T恤/polo/衬衫</text
                >
                <navigator
                  class="more data-v-4046d630 sk-transparent sk-text-14-2857-249 sk-text"
                  hover-class="none"
                  >全部</navigator
                >
              </view>
              <view class="content content data-v-4046d630 data-v-4046d630">
                <view
                  is="components/SaGoods/SaGoods"
                  class="data-v-4046d630 data-v-4046d630"
                >
                  <view
                    class="goods-content SaGoods--goods-content data-v-7f94d7e1 SaGoods--data-v-7f94d7e1"
                  >
                    <navigator
                      class="goods-item SaGoods--goods-item data-v-7f94d7e1 SaGoods--data-v-7f94d7e1"
                      hover-class="navigator-hover"
                      open-type="navigate"
                    >
                      <image
                        class="image SaGoods--image data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-image"
                        mode="aspectFill"
                      ></image>
                      <view
                        class="name SaGoods--name data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-14-2857-680 sk-text"
                        >经典格子元素，男童格子纯棉衬衫</view
                      >
                      <text
                        class="price SaGoods--price data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-0-0000-450 sk-text sk-pseudo sk-pseudo-circle"
                        >89.00</text
                      >
                    </navigator>
                    <navigator
                      class="goods-item SaGoods--goods-item data-v-7f94d7e1 SaGoods--data-v-7f94d7e1"
                      hover-class="navigator-hover"
                      open-type="navigate"
                    >
                      <image
                        class="image SaGoods--image data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-image"
                        mode="aspectFill"
                      ></image>
                      <view
                        class="name SaGoods--name data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-14-2857-690 sk-text"
                        >经典格子元素，男童加绒格子衬衫</view
                      >
                      <text
                        class="price SaGoods--price data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-0-0000-994 sk-text sk-pseudo sk-pseudo-circle"
                        >125.00</text
                      >
                    </navigator>
                    <navigator
                      class="goods-item SaGoods--goods-item data-v-7f94d7e1 SaGoods--data-v-7f94d7e1"
                      hover-class="navigator-hover"
                      open-type="navigate"
                    >
                      <image
                        class="image SaGoods--image data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-image"
                        mode="aspectFill"
                      ></image>
                      <view
                        class="name SaGoods--name data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-14-2857-886 sk-text"
                        >趣味小恐龙绣花，男童灯芯绒衬衫</view
                      >
                      <text
                        class="price SaGoods--price data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-0-0000-635 sk-text sk-pseudo sk-pseudo-circle"
                        >89.00</text
                      >
                    </navigator>
                    <navigator
                      class="goods-item SaGoods--goods-item data-v-7f94d7e1 SaGoods--data-v-7f94d7e1"
                      hover-class="navigator-hover"
                      open-type="navigate"
                    >
                      <image
                        class="image SaGoods--image data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-image"
                        mode="aspectFill"
                      ></image>
                      <view
                        class="name SaGoods--name data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-14-2857-341 sk-text"
                        >纯棉舒适女童印花荷叶袖小衫90-140cm</view
                      >
                      <text
                        class="price SaGoods--price data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-0-0000-823 sk-text sk-pseudo sk-pseudo-circle"
                        >139.00</text
                      >
                    </navigator>
                    <navigator
                      class="goods-item SaGoods--goods-item data-v-7f94d7e1 SaGoods--data-v-7f94d7e1"
                      hover-class="navigator-hover"
                      open-type="navigate"
                    >
                      <image
                        class="image SaGoods--image data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-image"
                        mode="aspectFill"
                      ></image>
                      <view
                        class="name SaGoods--name data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-14-2857-311 sk-text"
                        >田园复古木耳边格纹全棉A字衬衫110-160cm</view
                      >
                      <text
                        class="price SaGoods--price data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-0-0000-38 sk-text sk-pseudo sk-pseudo-circle"
                        >109.00</text
                      >
                    </navigator>
                    <navigator
                      class="goods-item SaGoods--goods-item data-v-7f94d7e1 SaGoods--data-v-7f94d7e1"
                      hover-class="navigator-hover"
                      open-type="navigate"
                    >
                      <image
                        class="image SaGoods--image data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-image"
                        mode="aspectFill"
                      ></image>
                      <view
                        class="name SaGoods--name data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-14-2857-990 sk-text"
                        >度假风儿童薄款空调短袖衬衫73-130cm</view
                      >
                      <text
                        class="price SaGoods--price data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-transparent sk-text-0-0000-340 sk-text sk-pseudo sk-pseudo-circle"
                        >79.00</text
                      >
                    </navigator>
                    <navigator
                      class="goods-item SaGoods--goods-item data-v-7f94d7e1 SaGoods--data-v-7f94d7e1"
                      hover-class="navigator-hover"
                      open-type="navigate"
                    >
                      <image
                        class="image SaGoods--image data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-image"
                        mode="aspectFill"
                      ></image>
                    </navigator>
                    <navigator
                      class="goods-item SaGoods--goods-item data-v-7f94d7e1 SaGoods--data-v-7f94d7e1"
                      hover-class="navigator-hover"
                      open-type="navigate"
                    >
                      <image
                        class="image SaGoods--image data-v-7f94d7e1 SaGoods--data-v-7f94d7e1 sk-image"
                        mode="aspectFill"
                      ></image>
                    </navigator>
                  </view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<style>
  .sk-transparent {
    color: transparent !important;
  }
  .sk-text-14-2857-353 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.375rpx;
    position: relative !important;
  }
  .sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
  .sk-text-14-2857-3 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.375rpx;
    position: relative !important;
  }
  .sk-text-14-2857-71 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.375rpx;
    position: relative !important;
  }
  .sk-text-14-2857-711 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.375rpx;
    position: relative !important;
  }
  .sk-text-14-2857-212 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.375rpx;
    position: relative !important;
  }
  .sk-text-14-2857-744 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.375rpx;
    position: relative !important;
  }
  .sk-text-14-2857-916 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.375rpx;
    position: relative !important;
  }
  .sk-text-14-2857-913 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.375rpx;
    position: relative !important;
  }
  .sk-text-14-2857-269 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.375rpx;
    position: relative !important;
  }
  .sk-text-14-2857-676 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.375rpx;
    position: relative !important;
  }
  .sk-text-14-2857-249 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.375rpx;
    position: relative !important;
  }
  .sk-text-14-2857-680 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
  .sk-text-0-0000-450 {
    background-image: linear-gradient(
      transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%
    ) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
  }
  .sk-text-14-2857-690 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
  .sk-text-0-0000-994 {
    background-image: linear-gradient(
      transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%
    ) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
  }
  .sk-text-14-2857-886 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
  .sk-text-0-0000-635 {
    background-image: linear-gradient(
      transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%
    ) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
  }
  .sk-text-14-2857-341 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
  .sk-text-0-0000-823 {
    background-image: linear-gradient(
      transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%
    ) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
  }
  .sk-text-14-2857-311 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
  .sk-text-0-0000-38 {
    background-image: linear-gradient(
      transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%
    ) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
  }
  .sk-text-14-2857-990 {
    background-image: linear-gradient(
      transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
  .sk-text-0-0000-340 {
    background-image: linear-gradient(
      transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%
    ) !important;
    background-size: 100% 25.7813rpx;
    position: relative !important;
  }
  .sk-image {
    background: #efefef !important;
  }
  .sk-pseudo::before,
  .sk-pseudo::after {
    background: #efefef !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
  }
  .sk-pseudo-rect::before,
  .sk-pseudo-rect::after {
    border-radius: 0 !important;
  }
  .sk-pseudo-circle::before,
  .sk-pseudo-circle::after {
    border-radius: 50% !important;
  }
  .sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }
</style>
