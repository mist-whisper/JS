/*
脚本功能：方弗相机（恢复购买）
软件版本：1.7.1
下载地址：https://apps.apple.com/app/id1621425556
引用地址：https://github.com/Guding88/Script/blob/main/fangfuxiangji.js
脚本作者：骨钉
更新时间：2023-02-23
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/mist-whisper/JS/master/FunforCam.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/mist-whisper/JS/master/FunforCam.js

[MITM]
hostname = api.revenuecat.com

*/
const guding = {};
const guding6 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  guding.headers = $request.headers;
} else if (guding6 && guding6.subscriber) {
  guding6.subscriber.subscriptions = guding6.subscriber.subscriptions || {};
  guding6.subscriber.entitlement = guding6.subscriber.entitlement || {};
  const app = 'gd';const list = {'gd':{name: 'ProVersionLifeTime', id: 'com.uzero.funforcam.lifetimepurchase'}};
  const data = {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"};
for (const i in list) { if (new RegExp(`^${i}`, `i`).test(app)) {
guding6.subscriber.subscriptions[list[i].id] = data;
guding6.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
guding6.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
                break;
          }
    }
    guding.body = JSON.stringify(guding6);
}
$done(guding);