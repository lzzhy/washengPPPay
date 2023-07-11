// import axios from "axios"

// /**
//  *
//  * //demo
//   let washengppy = WashengPingPongPay.getInstance();
//   washengppy.init({});
//   washengppy.createPayment();

//   WashengPingPongPay.checkPay();
//  */
// interface WashengPingPongPayConfig {
//   //语言，不传默认英语 - de德语 en英语 es西班牙语 fr法语 it意大利语 ru俄语 zh中文 jp日语
//   lang: "zh" | "en" | "jp" | "de" | "es" | "fr" | "it" | "ru"
//   //沙箱环境还是生产环境，默认沙箱
//   mode: "sandbox" | "production"
//   //PingPong收银台在哪个元素上渲染 须为id (必填)
//   root: string
// }

// //支付SDK
// export default class WashengPingPongPay {
//   config!: WashengPingPongPayConfig
//   static _instance: WashengPingPongPay

//   //获取支付实例
//   static getInstance() {
//     if (!this._instance) {
//       this._instance = new WashengPingPongPay()
//     }
//     return this._instance
//   }

//   //加载sdk资源
//   async loadResource(): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//       const script = document.createElement("script")
//       script.type = "text/javascript"
//       script.src =
//         "https://pay-cdn.pingpongx.com/production-fra/static/sdk-v3/ppPay.min.js"
//       document.body.appendChild(script)
//       // 确认动态js资源已加载完成
//       script.onload = () => resolve(true)
//       script.onerror = reject
//     })  
//   }

//   //初始化
//   async init(config: WashengPingPongPayConfig): Promise<void> {
//     await this.loadResource()
//     this.config = config
//   }

//   //创建收银台
//   createPayment(order: any): void {
//     if (!window.ppPay) {
//       throw new Error("ppPay.min.js 加载失败，请重新初始化")
//     }
//     const conf = {
//       mode: "production", //sandbox/production (必填参数)
//       lang: "en", //  语言，不传默认英语 - de德语 en英语 es西班牙语 fr法语 it意大利语 ru俄语 zh中文 jp日语
//       root: "#payment-wrap", //  PingPong收银台在哪个元素上渲染 须为id (必填)
//       manul: false, // 手动模式。 即：支付按钮需要自己渲染，开启后可使用client.actionPayment()方法调用支付
//       showPrice: true, // 是否展示价格
//       bill: true, // 是否显示bill
//       located: true, // 是否显示located(默认为true)
//       menu: true, //是否显示支付方式按钮
//       base: {
//         width: "100%", // 收银台宽度
//         height: "600px", // 收银台高度
//         backgroundColor: "#fff", // 收银台整体背景色
//         // 顶部价格及币种
//         priceBgColor: "#fff", // 顶部价格区域背景色
//         priceFontColor: "#1fa0e8", // 顶部价格字体颜色
//         priceFontSize: "32px", // 顶部价格字体大小
//         priceMB: "10px", // 顶部价格区域距底部间距

//         // 引导标题: “How would you like to pay”
//         showHeaderLabel: true, // 是否显示引导标题
//         headerMB: "24px", // 引导标题距底部间距
//         headerSize: "20px", // 引导标题字体大小
//         headerColor: "rgba(0, 0, 0, 0.85)", // 引导标题字体颜色
//         headerfontWeight: 700, // 引导标题加粗

//         // 支付方式
//         payMethodsWidth: "240px", // 支付方式按钮宽度
//         payMethodsHeight: "48px", // 支付方式按钮高度
//         payMethodsColor: "rgba(0, 0, 0, 0.85)", // 支付方式按钮字体颜色
//         payMethodsActiveColor: "#1fa0e8", // 支付方式按钮点击后字体颜色
//         payMethodsFontsize: "14px", // 支付方式按钮字体大小
//         payMethodsActiveBorderColor: "#1fa0e8", // 支付方式按钮点击后边框颜色
//         payMethodsActiveBorderShadow: "0 2px 8px 0 rgb(31 160 232 / 20%)", // 支付方式按钮点击后阴影
//         showIcons: true, // 是否显示卡图标
//         showHeaderAmount: true, // 是否显示头部支付金额
//         // 表单相关
//         formItemMargin: "16px", // 表单距底部间距
//         formItemBorderColor: "rgba(0, 0, 0, 0.08)", // 表单边框颜色
//         formItemFocusColor: "#1fa0e8", // 表单聚焦时提示文案和边框颜色

//         // 支付按钮
//         btnSize: "100%", // 按钮宽度百分比或者px
//         btnColor: "#fff", // 按钮字体颜色
//         btnFontSize: "14px", // 按钮字体大小
//         btnMarginTop: "10px", // button 距顶部距离
//         btnMarginBottom: "24px", // button 距底部距离
//         btnBackgroundColor: "#1fa0e8", // 按钮背景色
//         btnBorderRadius: "8px", // 按钮圆角
//         btnBorderColor: "#1fa0e8" // 可单独配置btn边框颜色覆盖btnBorder中设置的颜色
//       },
//       ...(this.config as any)
//     }
//     const client = new window.ppPay(conf)

//     // 使用此方法将会创建收银台
//     client.createPayment(order, () => {
//       // 成功回调
//       alert("88888")
//     })
//   }

//   // api代理
//   //支付查询
//   static checkPay(
//     merchantTransactionId: string,
//     api: string
//   ): Promise<{ status: "fail" | "success"; message: string }> {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: "post",
//         url: api,
//         data: { merchantTransactionId },
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
//         }
//       })
//         .then(({ data }) => {
//           resolve(data)
//         })
//         .catch(error => {
//           reject(error)
//         })
//     })
//   }
// }

// // interface Billing {//账单地址
// //   city: "账单城市",
// //   country: "账单国家",
// //   email: "账单邮箱",
// //   firstName: "账单人名",
// //   lastName: "账单人姓",
// //   phone: "账单手机号",
// //   postcode: "账单地址邮编",
// //   state: "账单地址洲",
// //   street: "账单地址街道"
// // }

// // shipping: {//送货地址信息
// //    city: "收货人城市",
// //    country: "收货人国家",
// //    email: "账单邮箱",
// //    firstName: "收货人名",
// //    lastName: "收货人姓",
// //    phone: "收货手机",
// //    postcode: "邮编",
// //    state: "洲",
// //    street: "街道"
// // }
// // ```

/**
 * 
 * //demo
  let washengppy = WashengPingPongPay.getInstance();
  washengppy.init({}); 
  washengppy.createPayment();

  WashengPingPongPay.checkPay();
 */

export const json2formData = (jsonObj: Record<any, any>) => {
  console.log(234448, jsonObj)
  const formData = new FormData()
  for (const [key, value] of Object.entries(jsonObj)) {
    if (value === undefined) continue
    formData.append(key, value)
  }
  return formData
}
interface WashengPingPongPayConfig {
  //语言，不传默认英语 - de德语 en英语 es西班牙语 fr法语 it意大利语 ru俄语 zh中文 jp日语
  lang: "zh" | "en" | "jp" | "de" | "es" | "fr" | "it" | "ru"
  //沙箱环境还是生产环境，默认沙箱
  mode: "sandbox" | "production"
  //PingPong收银台在哪个元素上渲染 须为id (必填)
  root: string
}

//支付SDK
export default class WashengPingPongPay {
  config!: Record<string, any>
  static _instance: WashengPingPongPay

  //获取支付实例
  static getInstance() {
    if (!this._instance) {
      this._instance = new WashengPingPongPay()
    }
    return this._instance
  }

  //加载sdk资源
  async loadResource(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src =
        "https://pay-cdn.pingpongx.com/production-fra/static/sdk-v3/ppPay.min.js"
      document.body.appendChild(script)
      // 确认动态js资源已加载完成
      script.onload = () => resolve(true)
      script.onerror = reject
    })
  }

  //初始化
  async init(config: WashengPingPongPayConfig): Promise<void> {
    await this.loadResource()
    this.config = {
      mode: "production", //sandbox/production (必填参数)
      lang: "en", //  语言，不传默认英语 - de德语 en英语 es西班牙语 fr法语 it意大利语 ru俄语 zh中文 jp日语
      root: "#payment-wrap", //  PingPong收银台在哪个元素上渲染 须为id (必填)
      manul: false, // 手动模式。 即：支付按钮需要自己渲染，开启后可使用client.actionPayment()方法调用支付
      showPrice: true, // 是否展示价格
      bill: true, // 是否显示bill
      located: true, // 是否显示located(默认为true)
      menu: true, //是否显示支付方式按钮
      base: {
        width: "100%", // 收银台宽度
        height: "600px", // 收银台高度
        backgroundColor: "#fff", // 收银台整体背景色
        // 顶部价格及币种
        priceBgColor: "#fff", // 顶部价格区域背景色
        priceFontColor: "#1fa0e8", // 顶部价格字体颜色
        priceFontSize: "32px", // 顶部价格字体大小
        priceMB: "10px", // 顶部价格区域距底部间距

        // 引导标题: “How would you like to pay”
        showHeaderLabel: true, // 是否显示引导标题
        headerMB: "24px", // 引导标题距底部间距
        headerSize: "20px", // 引导标题字体大小
        headerColor: "rgba(0, 0, 0, 0.85)", // 引导标题字体颜色
        headerfontWeight: 700, // 引导标题加粗

        // 支付方式
        payMethodsWidth: "240px", // 支付方式按钮宽度
        payMethodsHeight: "48px", // 支付方式按钮高度
        payMethodsColor: "rgba(0, 0, 0, 0.85)", // 支付方式按钮字体颜色
        payMethodsActiveColor: "#1fa0e8", // 支付方式按钮点击后字体颜色
        payMethodsFontsize: "14px", // 支付方式按钮字体大小
        payMethodsActiveBorderColor: "#1fa0e8", // 支付方式按钮点击后边框颜色
        payMethodsActiveBorderShadow: "0 2px 8px 0 rgb(31 160 232 / 20%)", // 支付方式按钮点击后阴影
        showIcons: true, // 是否显示卡图标
        showHeaderAmount: true, // 是否显示头部支付金额
        // 表单相关
        formItemMargin: "16px", // 表单距底部间距
        formItemBorderColor: "rgba(0, 0, 0, 0.08)", // 表单边框颜色
        formItemFocusColor: "#1fa0e8", // 表单聚焦时提示文案和边框颜色

        // 支付按钮
        btnSize: "100%", // 按钮宽度百分比或者px
        btnColor: "#fff", // 按钮字体颜色
        btnFontSize: "14px", // 按钮字体大小
        btnMarginTop: "10px", // button 距顶部距离
        btnMarginBottom: "24px", // button 距底部距离
        btnBackgroundColor: "#1fa0e8", // 按钮背景色
        btnBorderRadius: "8px", // 按钮圆角
        btnBorderColor: "#1fa0e8" // 可单独配置btn边框颜色覆盖btnBorder中设置的颜色
      },
      ...(config as any)
    }
  }

  //创建收银台
  async createPayment({
    api,
    requestHeaders,
    requestParams
  }: {
    api?: string
    requestHeaders: Record<string, any>
    requestParams: any
  }) {
    console.log(32323, api, requestHeaders, requestParams)
    if (!window.ppPay) {
      throw new Error("ppPay.min.js 加载失败，请重新初始化")
    }
    if (!api) {
      throw new Error("缺少api接口，请检查参数")
    }
    try {
      console.log(21323, requestParams, json2formData(requestParams))
      const data = await fetch(api, {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data;charset=UTF-8",
          ...requestHeaders
        },
        body: requestParams,
        // body: json2formData(requestParams)
        // body: JSON.stringify(requestParams),
      })

      const res = await data.json()
      console.log(88889999, res)
      const client = new window.ppPay(this.config)

      // 使用此方法将会创建收银台
      client.createPayment(res.data, () => {
        // 成功回调
        console.log('创建收银台回调成功-----')
      })
    } catch (error) {
      throw new Error(`createPayment: ${error}`)
    }
  }

  // api代理
  //支付查询
  static checkPay(
    merchantTransactionId: string,
    api: string,
  ): Promise<{ status: "fail" | "success"; message: string }> {
    return new Promise((resolve, reject) => {
      fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        // body: json2formData({ merchantTransactionId })
        body: JSON.stringify({ merchantTransactionId }),
      })
        .then(async res => {
          const data = await res.json()
          resolve({
            status: data.code === 1000 ? "success" : "fail",
            message: data.message
          })
        })
        .catch(err => {
          reject({
            status: "fail",
            message: err
          })
        })
    })
  }

  // 获取订单详情
  static getOrderDetail(
    merchantTransactionId: string,
    api: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: JSON.stringify({ merchantTransactionId })
      })
        .then(async res => {
          const data = await res.json()
          resolve({
            data
          })
        })
        .catch(err => {
          reject({
            data: err
          })
        })
    })
  }
}
