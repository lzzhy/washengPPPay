// import axios from "axios"
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
export var json2formData = function (jsonObj) {
    console.log(234448, jsonObj);
    var formData = new FormData();
    for (var _i = 0, _a = Object.entries(jsonObj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (value === undefined)
            continue;
        formData.append(key, value);
    }
    return formData;
};
//支付SDK
var WashengPingPongPay = /** @class */ (function () {
    function WashengPingPongPay() {
    }
    //获取支付实例
    WashengPingPongPay.getInstance = function () {
        if (!this._instance) {
            this._instance = new WashengPingPongPay();
        }
        return this._instance;
    };
    //加载sdk资源
    WashengPingPongPay.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var script = document.createElement("script");
                        script.type = "text/javascript";
                        script.src =
                            "https://pay-cdn.pingpongx.com/production-fra/static/sdk-v3/ppPay.min.js";
                        document.body.appendChild(script);
                        // 确认动态js资源已加载完成
                        script.onload = function () { return resolve(true); };
                        script.onerror = reject;
                    })];
            });
        });
    };
    //初始化
    WashengPingPongPay.prototype.init = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.config = __assign({ mode: "production", lang: "en", root: "#payment-wrap", manul: false, showPrice: true, bill: true, located: true, menu: true, base: {
                                width: "100%",
                                height: "600px",
                                backgroundColor: "#fff",
                                // 顶部价格及币种
                                priceBgColor: "#fff",
                                priceFontColor: "#1fa0e8",
                                priceFontSize: "32px",
                                priceMB: "10px",
                                // 引导标题: “How would you like to pay”
                                showHeaderLabel: true,
                                headerMB: "24px",
                                headerSize: "20px",
                                headerColor: "rgba(0, 0, 0, 0.85)",
                                headerfontWeight: 700,
                                // 支付方式
                                payMethodsWidth: "240px",
                                payMethodsHeight: "48px",
                                payMethodsColor: "rgba(0, 0, 0, 0.85)",
                                payMethodsActiveColor: "#1fa0e8",
                                payMethodsFontsize: "14px",
                                payMethodsActiveBorderColor: "#1fa0e8",
                                payMethodsActiveBorderShadow: "0 2px 8px 0 rgb(31 160 232 / 20%)",
                                showIcons: true,
                                showHeaderAmount: true,
                                // 表单相关
                                formItemMargin: "16px",
                                formItemBorderColor: "rgba(0, 0, 0, 0.08)",
                                formItemFocusColor: "#1fa0e8",
                                // 支付按钮
                                btnSize: "100%",
                                btnColor: "#fff",
                                btnFontSize: "14px",
                                btnMarginTop: "10px",
                                btnMarginBottom: "24px",
                                btnBackgroundColor: "#1fa0e8",
                                btnBorderRadius: "8px",
                                btnBorderColor: "#1fa0e8" // 可单独配置btn边框颜色覆盖btnBorder中设置的颜色
                            } }, config);
                        return [2 /*return*/];
                }
            });
        });
    };
    //创建收银台
    WashengPingPongPay.prototype.createPayment = function (_a) {
        var api = _a.api, requestHeaders = _a.requestHeaders, requestParams = _a.requestParams;
        return __awaiter(this, void 0, void 0, function () {
            var data, res, client, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(32323, api, requestHeaders, requestParams);
                        if (!window.ppPay) {
                            throw new Error("ppPay.min.js 加载失败，请重新初始化");
                        }
                        if (!api) {
                            throw new Error("缺少api接口，请检查参数");
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        console.log(21323, requestParams, json2formData(requestParams));
                        return [4 /*yield*/, fetch(api, {
                                method: "POST",
                                headers: __assign({}, requestHeaders),
                                body: requestParams,
                                // body: json2formData(requestParams)
                                // body: JSON.stringify(requestParams),
                            })];
                    case 2:
                        data = _b.sent();
                        return [4 /*yield*/, data.json()];
                    case 3:
                        res = _b.sent();
                        console.log(88889999, res);
                        client = new window.ppPay(this.config);
                        // 使用此方法将会创建收银台
                        client.createPayment(res.data, function () {
                            // 成功回调
                            console.log('创建收银台回调成功-----');
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        throw new Error("createPayment: ".concat(error_1));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // api代理
    //支付查询
    WashengPingPongPay.checkPay = function (merchantTransactionId, api) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                // body: json2formData({ merchantTransactionId })
                body: JSON.stringify({ merchantTransactionId: merchantTransactionId }),
            })
                .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, res.json()];
                        case 1:
                            data = _a.sent();
                            resolve({
                                status: data.code === 1000 ? "success" : "fail",
                                message: data.message
                            });
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (err) {
                reject({
                    status: "fail",
                    message: err
                });
            });
        });
    };
    // 获取订单详情
    WashengPingPongPay.getOrderDetail = function (merchantTransactionId, api) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: JSON.stringify({ merchantTransactionId: merchantTransactionId })
            })
                .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, res.json()];
                        case 1:
                            data = _a.sent();
                            resolve({
                                data: data
                            });
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (err) {
                reject({
                    data: err
                });
            });
        });
    };
    return WashengPingPongPay;
}());
export default WashengPingPongPay;
