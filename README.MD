## Install

```
npm i washeng-pppay
```


## Usage

引入：
```js
import WashengPingPongPay from "washeng-pppay"

```
获取支付实例：
```js
const washengppy = WashengPingPongPay.getInstance();
```

初始化：
```js
onMounted(() => {
  washengppy.init({
    /**语言，不传默认英语 - de德语 en英语 es西班牙语 fr法语 it意大利语 ru俄语 zh中文 jp日语 */
    lang: "en",

    /**
     * 沙箱环境还是生产环境，默认生产
     */
    mode: "sandbox" | "production"

    /**
     * PingPong收银台在哪个元素上渲染，需创建一个对应的div用于挂载
     */
    root: "#payment-wrap",
  });
})
```

唤起收银台：

```js
const handlePay = async (param: any) => {
  /**
   * 需传入token
   */
  const { getToken } = useUserInfo();

  /**
   * createPayment接收{ api, requestHeaders, requestParams }
   */
  washengppy.createPayment({
    /**
     * api: "/us/api/team/getOrder"通过这种形式传入，相当于是在本仓库中处理了api的代理，处理了跨域问题。
     * 
     * 由于跨域的问题，因此不建议ap直接传https:xxx.com/api/getxx的形式
     */
    api: "/us/api/team/getOrder",

    requestHeaders: {
      "x-authorization": getToken(),
    },

    /**
     * 订单信息，及对应的订单id或该订单的其他唯一标识字段
     * 
     * 失败、正在交易中 需重新唤起收银台：只需传merchantTransactionId
     */
    requestParams: { ...ruleForm, ...param },
  });
};
```

获取订单状态：
```js
const { status, message } = await WashengPingPongPay.checkPay(merchantTransactionId: string, api: string);
```


获取订单详情：
```js
const { data, err } = await WashengPingPongPay.getOrderDetail(merchantTransactionId: string, api: string);
```


## 注意
1. 支付完成后的重定向地址，需前端提供给后端；(pingpongPay不支持本地或者本地ip调试)
2. washengppy.init需要先加载，如果是和washengppy.createPayment写在一起的话那么需要加上 await washengppy.init
3. 该插件打包出来的是esmodule。nuxt等node环境的不太兼容esmodule的，需要配置。nuxt[配置](https://nuxt.com/docs/guide/concepts/esm#transpiling-libraries)如下：
```
export default defineNuxtConfig({
  build: {
    transpile: ['sample-library']
  }
})
```
