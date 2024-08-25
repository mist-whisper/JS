//引用地址：https://gitlab.com/lodepuly/vpn_tool/-/blob/master/Resource/Script/WexinMiniPrograms/ming/ming.js?ref_type=heads

let obj=JSON.parse($response.body);
obj.data=[];
$done({body: JSON.stringify(obj)});
