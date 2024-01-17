
<template name="skeleton">
  <view class="sk-container">
    <view class="content content data-v-83a5a03c data-v-83a5a03c">
      <scroll-view :enable-back-to-top="true" :scroll-y="true" class="scroll-view scroll-view data-v-83a5a03c data-v-83a5a03c" :refresher-enabled="true">
        <view is="components/SaSwiper/SaSwiper" class="data-v-83a5a03c data-v-83a5a03c">
          <view class="carousel SaSwiper--carousel data-v-5068a42b SaSwiper--data-v-5068a42b">
            <swiper :autoplay="false" :circular="true" class="swiper SaSwiper--swiper data-v-5068a42b SaSwiper--data-v-5068a42b" :current="0" :interval="3000"></swiper>
            <view class="indicator SaSwiper--indicator data-v-5068a42b SaSwiper--data-v-5068a42b">
              <text class="dot SaSwiper--dot data-v-5068a42b SaSwiper--data-v-5068a42b"></text>
              <text class="dot SaSwiper--dot data-v-5068a42b SaSwiper--data-v-5068a42b active SaSwiper--active"></text>
              <text class="dot SaSwiper--dot data-v-5068a42b SaSwiper--data-v-5068a42b"></text>
              <text class="dot SaSwiper--dot data-v-5068a42b SaSwiper--data-v-5068a42b"></text>
              <text class="dot SaSwiper--dot data-v-5068a42b SaSwiper--data-v-5068a42b"></text>
            </view>
          </view>
        </view>
        <view is="pages/index/components/CategoryPanel" class="data-v-83a5a03c data-v-83a5a03c">
          <view class="category CategoryPanel--category data-v-44ae5a81 CategoryPanel--data-v-44ae5a81">
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
              <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
              <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-633 sk-text">居家</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
              <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
              <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-162 sk-text">锦鲤</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
              <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
              <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-971 sk-text">服饰</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
              <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
              <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-878 sk-text">母婴</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
              <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
              <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-929 sk-text">个护</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
              <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
              <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-783 sk-text">严选</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
              <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
              <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-207 sk-text">数码</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
              <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
              <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-941 sk-text">运动</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
              <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
              <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-830 sk-text">杂项</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="none">
              <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
              <text class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-986 sk-text">品牌</text>
            </navigator>
          </view>
        </view>
        <view is="pages/index/components/HotPanel" class="data-v-83a5a03c data-v-83a5a03c">
          <view class="hot HotPanel--hot data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a">
              <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
                <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-348 sk-text">特惠推荐</text>
                <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-629 sk-text">精选全攻略</text>
              </view>
              <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a">
                <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a">
              <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
                <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-943 sk-text">爆款推荐</text>
                <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-306 sk-text">最受欢迎</text>
              </view>
              <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a">
                <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a">
              <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
                <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-73 sk-text">一站买全</text>
                <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-976 sk-text">精心优选</text>
              </view>
              <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a">
                <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a">
              <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
                <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-183 sk-text">新鲜好物</text>
                <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-839 sk-text">生活加分项</text>
              </view>
              <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a">
                <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
          </view>
        </view>
        <view is="components/SaGuess/SaGuess" class="r r data-v-83a5a03c data-v-83a5a03c">
          <view class="guess SaGuess--guess data-v-88568546 SaGuess--data-v-88568546">
            <view class="caption SaGuess--caption data-v-88568546 SaGuess--data-v-88568546">
              <text class="caption-text SaGuess--caption-text data-v-88568546 SaGuess--data-v-88568546 sk-transparent sk-text-14-2857-722 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-991 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.0698rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-633 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-162 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-971 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-878 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-929 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-783 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-207 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-941 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-830 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-986 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-348 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.0698rpx;
    position: relative !important;
  }
.sk-text-14-2857-629 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 26.8605rpx;
    position: relative !important;
  }
.sk-text-14-2857-943 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.0698rpx;
    position: relative !important;
  }
.sk-text-14-2857-306 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 26.8605rpx;
    position: relative !important;
  }
.sk-text-14-2857-73 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.0698rpx;
    position: relative !important;
  }
.sk-text-14-2857-976 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 26.8605rpx;
    position: relative !important;
  }
.sk-text-14-2857-183 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.0698rpx;
    position: relative !important;
  }
.sk-text-14-2857-839 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 26.8605rpx;
    position: relative !important;
  }
.sk-text-14-2857-722 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
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