//引用地址：https://gitlab.com/lodepuly/vpn_tool/-/blob/master/Resource/Script/WexinMiniPrograms/T3/T3.js?ref_type=heads

let obj = JSON.parse($response.body);
delete obj.data;
$done({body: JSON.stringify(obj)});
