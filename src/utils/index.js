export const getBrowser = () => {
    return {
        versions: (function () {
            const u = navigator.userAgent;
            return {
                //移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                dingtalk: u.indexOf('DingTalk') > -1, //是否为钉钉内部
                alipay: u.indexOf('AlipayClient') > -1, //是否为支付宝
                wechat: /MicroMessenger/i.test(u), //是否微信中
                webApp: u.indexOf('Safari') === -1, //是否web应该程序，没有头部与底部
                dtDreamApp: u.toLowerCase().indexOf('dtdreamweb') > -1, // 浙里办 APP
                alipayMini: u.toLowerCase().indexOf('miniprogram') > -1 && u.toLowerCase().indexOf('alipay') > -1, // 浙里办支付宝小程序
            };
        })(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase(),
    };
};
