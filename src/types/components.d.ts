import SaSwiper from "@/components/SaSwiper/SaSwiper.vue";
import type SaGuess from "@/components/SaGuess/SaGuess.vue";
import type SaGoods from "@/components/SaGoods/SaGoods.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    SaSwiper: typeof SaSwiper;
    SaGuess: typeof SaGuess;
    SaGoods: typeof SaGoods;
  }
}

export type SaSwiperInstance = InstanceType<typeof SaSwiper>;
export type SaGuessInstance = InstanceType<typeof SaGuess>;
export type SaGoodsInstance = InstanceType<typeof SaGoods>;
