import {useMemberStore} from "@/stores";

export const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";

export const httpInterceptor = {
  /**
   * 拦截前触发
   */
  invoke: (options: UniApp.RequestOptions) => {
    if (!options.url.startsWith("http")) {
      options.url = `${baseURL}${options.url}`;
    }

    const memberStore = useMemberStore();
    const token = memberStore.profile?.token;

    options.timeout = 10000;
    options.header = {
      ...options.header,
      "source-client": "miniapp",
    };

    if (token) {
      options.header.Authorization = token;
    }
  },
  /**
   * 方法调用后触发，处理返回值
   */
  returnValue: (result: any) => {},
  /**
   * 成功回调拦截
   */
  success: (result: any) => {},
  /**
   * 失败回调拦截
   */
  fail: (result: any) => {},
  /**
   * 完成回调拦截
   */
  complete: (result: any) => {},
};
