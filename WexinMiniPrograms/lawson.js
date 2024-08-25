//引用地址：https://gitlab.com/lodepuly/vpn_tool/-/blob/master/Resource/Script/WexinMiniPrograms/lawson/lawson.js?ref_type=heads

let obj=JSON.parse($response.body);
delete obj.data.homeButtonList ;
delete obj.data.dysmorphismPictureList ;
$done({body: JSON.stringify(obj)});
