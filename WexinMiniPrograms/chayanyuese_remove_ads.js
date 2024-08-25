//引用地址：https://gitlab.com/lodepuly/vpn_tool/-/blob/master/Resource/Script/WexinMiniPrograms/chayanyuese/chayanyuese_remove_ads.js?ref_type=heads

let obj=JSON.parse($response.body);
delete obj.data.INDEX_SLOT_01;
delete obj.data.INDEX_SLOT_02;
obj.data?.INDEX_TOP_BANNER?.contents?.forEach(item => {
  delete item.bubble; 
  delete item.figure; 
  item.value = "https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Resource/Script/WexinMiniPrograms/chayanyuese/cyys1.jpg";
});
$done({body: JSON.stringify(obj)});
