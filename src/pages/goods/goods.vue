<template>
  <view class="viewport">
    <!-- SKU弹窗组件 -->
    <vk-data-goods-sku-popup
      v-model="isShowSku"
      :localdata="localdata"
      :mode="mode"
      add-cart-background-color="#FFA868"
      buy-now-background-color="#27BA9B"
      ref="skuPopupRef"
      :actived-style="{
        color: '#27BA9B',
        borderColor: '#27BA9B',
        backgroundColor: '#E9F8F5',
      }"
      @add-cart="onAddCart"
      @buy-now="onBuyNow"
    />
    <scroll-view
      scroll-y
      class="goods"
      :style="{ paddingBottom: safeAreaInsets!.bottom + 50 + 'px' }"
    >
    <AddressPanel  @close="popup?.close()" />
      <!-- 轮播图 -->
      <view class="goods-swiper-container">
        <swiper autoplay circular class="goods-swiper" @change="onSwiperChange">
          <swiper-item
            class="goods-swiper-item"
            v-for="item in goods?.mainPictures"
            :key="item"
          >
            <image :src="item" mode="scaleToFill" @tap="imgPreview(item)" />
          </swiper-item>
        </swiper>
        <view class="indicator">
          <text class="cur-index">{{ currentIndex + 1 }}</text>
          <text class="split">/</text>
          <text class="total-num">{{ goods?.mainPictures.length }}</text>
        </view>
      </view>

      <!-- 简介 -->
      <view class="price-bar">
        <text class="price">{{ goods?.price }}</text>
      </view>
      <view class="desc-bar">
        <text class="name">{{ goods?.name }}</text>
        <text class="desc ellipsis"> {{ goods?.desc }} </text>
      </view>

      <!-- 操作面板 -->
      <view class="action">
        <view @tap="openSkuPopup(SkuMode.Both)" class="item arrow">
          <text class="label">选择</text>
          <text class="text ellipsis"> {{ selectArrText }} </text>
        </view>
        <view @tap="openPopup('address')" class="item arrow">
          <text class="label">送至</text>
          <text class="text ellipsis"> 请选择收获地址 </text>
        </view>
        <view @tap="openPopup('service')" class="item arrow">
          <text class="label">服务</text>
          <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
        </view>
      </view>

      <!-- 详情列表 -->
      <view class="detail-list">
        <view class="detail-title"> 详情 </view>

        <view class="detail-content">
          <view
            class="detail-item"
            v-for="item in goods?.details.properties"
            :key="item.name"
          >
            <text class="item-label">{{ item.name }}</text>
            <text class="item-content">{{ item.value }}</text>
          </view>
        </view>

        <image
          class="detail-img"
          mode="widthFix"
          v-for="item in goods?.details.pictures"
          :key="item"
          :src="item"
        ></image>
      </view>

      <!-- 同类推荐 -->
      <view class="tuijian">
        <view class="title">
          <text>同类推荐</text>
        </view>
        <SaGoods :list="goods?.similarProducts || []" />
      </view>
    </scroll-view>

    <view
      class="toolbar"
      :style="{paddingBottom: safeAreaInsets?.bottom + 'px'}"
    >
      <view class="icons">
        <view class="icons-button"> <text class="icon-heart"></text>收藏 </view>
        <!-- #ifdef MP-WEIXIN -->
        <view class="icons-button" open-type="contact">
          <text class="icon-handset"></text>客服
        </view>
        <!-- #endif -->
        <navigator
          class="icons-button"
          url="/pages/cart/cart2"
          open-type="navigate"
        >
          <text class="icon-cart"></text>购物车
        </navigator>
      </view>
      <view class="buttons">
        <view @tap="openSkuPopup(SkuMode.Cart)" class="addcart">
          加入购物车
        </view>
        <view @tap="openSkuPopup(SkuMode.Buy)" class="payment"> 立即购买 </view>
      </view>
    </view>
  </view>

  <!-- uni-ui 弹出层 -->
  <uni-popup ref="popup" type="bottom" background-color="#fff">
    <AddressPopPanel v-if="popupName === 'address'" @close="popup?.close()" />
    <ServicePopPanel v-if="popupName === 'service'" @close="popup?.close()" />
  </uni-popup>
</template>

<script setup lang="ts">
  import type {
    SkuPopupEvent,
    SkuPopupInstance,
    SkuPopupLocaldata,
  } from "@/components/vk-data-goods-sku-popup/vk-data-goods-sku-popup";
  import {postMemberCartAPI} from "@/services/cart";
  import {getGoodsByIdAPI} from "@/services/goods";
  import type {GoodsResult} from "@/types/goods";
  import {onLoad} from "@dcloudio/uni-app";
  import {computed, ref} from "vue";
  import AddressPopPanel from "./components/AddressPopPanel.vue";
  import ServicePopPanel from "./components/ServicePopPanel.vue";
  import Test from "./components/Test2.vue"
  // 获取屏幕边界到安全区域距离
  const {safeAreaInsets} = uni.getSystemInfoSync();

  // 接收页面参数
  const query = defineProps<{
    id: string;
  }>();

  // 获取商品详情信息
  const goods = ref<GoodsResult>();
  const getGoodsByIdData = async () => {
    const res = await getGoodsByIdAPI(query.id);
    goods.value = res.result;
    // SKU组件所需格式
    localdata.value = {
      _id: res.result.id,
      name: res.result.name,
      goods_thumb: res.result.mainPictures[0],
      spec_list: res.result.specs.map((v) => {
        return {
          name: v.name,
          list: v.values,
        };
      }),
      sku_list: res.result.skus.map((v) => {
        return {
          _id: v.id,
          goods_id: res.result.id,
          goods_name: res.result.name,
          image: v.picture,
          price: v.price * 100, // 注意：需要乘以 100
          stock: v.inventory,
          sku_name_arr: v.specs.map((vv) => vv.valueName),
        };
      }),
    };
  };

  // 页面加载
  onLoad(() => {
    getGoodsByIdData();
  });

  // 轮播图变化时
  const currentIndex = ref(0);
  const onSwiperChange: UniHelper.SwiperOnChange = (ev) => {
    currentIndex.value = ev.detail.current;
  };

  // 点击图片时
  const imgPreview = (url: string) => {
    // 大图预览
    uni.previewImage({
      current: url,
      urls: goods.value!.mainPictures,
    });
  };

  // uni-ui 弹出层组件 ref
  const popup = ref<{
    open: (type?: UniHelper.UniPopupType) => void;
    close: () => void;
  }>();

  // 弹出层条件渲染
  const popupName = ref<"address" | "service">();
  const openPopup = (name: typeof popupName.value) => {
    // 修改弹出层名称
    popupName.value = name;
    popup.value?.open();
  };
  // 是否显示SKU组件
  const isShowSku = ref(false);
  // 商品信息
  const localdata = ref({} as SkuPopupLocaldata);
  // 按钮模式
  enum SkuMode {
    Both = 1,
    Cart = 2,
    Buy = 3,
  }
  const mode = ref<SkuMode>(SkuMode.Cart);
  // 打开SKU弹窗修改按钮模式
  const openSkuPopup = (val: SkuMode) => {
    // 显示SKU弹窗
    isShowSku.value = true;
    // 修改按钮模式
    mode.value = val;
  };
  // SKU组件实例
  const skuPopupRef = ref<SkuPopupInstance>();
  // 计算被选中的值
  const selectArrText = computed(() => {
    return skuPopupRef.value?.selectArr?.join(" ").trim() || "请选择商品规格";
  });
  // 加入购物车事件
  const onAddCart = async (ev: SkuPopupEvent) => {
    await postMemberCartAPI({skuId: ev._id, count: ev.buy_num});
    uni.showToast({title: "添加成功"});
    isShowSku.value = false;
  };
  // 立即购买
  const onBuyNow = (ev: SkuPopupEvent) => {
    uni.navigateTo({
      url: `/pagesOrder/create/create?skuId=${ev._id}&count=${ev.buy_num}`,
    });
  };
</script>
<style lang="scss" scoped>
  @import "./styles/goods.scss";
</style>
