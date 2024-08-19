/*************************************

项目名称：解锁订阅通会员
更新日期：2023-02-23
脚本作者：骨钉
下载地址：https://apps.apple.com/app/id1577082754
原始地址：https://github.com/Guding88/Script/blob/main/Subtrack.js
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：如果脚本无效，请先排除是否脚本冲突
特别说明：此脚本可能会导致App Store无法登录ID
解决方法：关[MITM][脚本][代理工具]方法选一即可

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/mist-whisper/JS/master/Subscriptions.js

[MITM]
hostname = buy.itunes.apple.com

*/
var guding = { 
    "receipt": { 
      "receipt_type": "Production", 
      "bundle_id": "https://t.me/Guding88", 
      "in_app": [ 
        { 
          "quantity": "1", 
          "purchase_date_ms": "666666666666666", 
          "transaction_id": "666666666666666", 
          "original_transaction_id": "666666666666666", 
          "product_id": "com.touchbits.subscriptions.iap.pro.yearly", 
          "in_app_ownership_type": "PURCHASED", 
          "original_purchase_date_ms": "666666666666666" 
        } 
      ], 
      "application_version": "6", 
      "original_purchase_date_ms": "666666666666666", 
      "original_application_version": "6" 
    }, 
    "environment": "Production", 
    "pending_renewal_info": [ 
      { 
        "product_id": "com.touchbits.subscriptions.iap.pro.yearly", 
        "auto_renew_status": "1" 
      } 
    ], 
    "status": 0, 
    "latest_receipt_info": [ 
      { 
        "quantity": "1", 
        "purchase_date_ms": "666666666666666", 
        "expires_date": "6666-06-06 06:06:06 Etc\/GMT", 
        "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles", 
        "is_in_intro_offer_period": "false", 
        "transaction_id": "666666666666666", 
        "is_trial_period": "false", 
        "original_transaction_id": "666666666666666", 
        "product_id": "com.touchbits.subscriptions.iap.pro.yearly", 
        "original_purchase_date_ms": "666666666666666", 
        "expires_date_ms": "148204937166000" 
      } 
    ] 
};
$done({ body: JSON.stringify(guding) });