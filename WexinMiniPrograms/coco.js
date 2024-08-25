//引用地址：https://gitlab.com/lodepuly/vpn_tool/-/blob/master/Resource/Script/WexinMiniPrograms/coco/coco.js?ref_type=heads

let obj=JSON.parse($response.body);
delete obj.data.top_background_url ;
delete obj.data.bottom_banner_list ;
$done({body: JSON.stringify(obj)});
