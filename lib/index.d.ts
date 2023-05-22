/**
 *
 * //demo
  let washengppy = WashengPingPongPay.getInstance();
  washengppy.init({});
  washengppy.createPayment();

  WashengPingPongPay.checkPay();
 */
export declare const json2formData: (jsonObj: Record<any, any>) => FormData;
interface WashengPingPongPayConfig {
    lang: "zh" | "en" | "jp" | "de" | "es" | "fr" | "it" | "ru";
    mode: "sandbox" | "production";
    root: string;
}
export default class WashengPingPongPay {
    config: Record<string, any>;
    static _instance: WashengPingPongPay;
    static getInstance(): WashengPingPongPay;
    loadResource(): Promise<boolean>;
    init(config: WashengPingPongPayConfig): Promise<void>;
    createPayment({ api, requestHeaders, requestParams }: {
        api?: string;
        requestHeaders: Record<string, any>;
        requestParams: any;
    }): Promise<void>;
    static checkPay(merchantTransactionId: string, api: string): Promise<{
        status: "fail" | "success";
        message: string;
    }>;
    static getOrderDetail(merchantTransactionId: string, api: string): Promise<any>;
}
export {};
