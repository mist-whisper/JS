//引用地址：https://gitlab.com/lodepuly/vpn_tool/-/blob/master/Resource/Script/WexinMiniPrograms/qingju/qingju.js?ref_type=heads

let obj=JSON.parse($response.body);
delete obj.data.bannerInfoConfig ;
$done({body: JSON.stringify(obj)});
