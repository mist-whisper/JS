//引用地址：https://gitlab.com/lodepuly/vpn_tool/-/blob/master/Resource/Script/WexinMiniPrograms/FamilyMart/FamilyMart.js?ref_type=heads

let obj=JSON.parse($response.body);
delete obj.data.topBanner ;
$done({body: JSON.stringify(obj)});
