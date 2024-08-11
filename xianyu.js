// 2024-08-10 22:33:37
// 引用地址：https://github.com/fmz200/wool_scripts/blob/main/Scripts/xianyu/xianyu_ads.js
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/gw/mtop.taobao.idlehome.home.nextfresh")) {
  if (obj.data && obj.data.sections) {
    obj.data.sections = obj.data.sections.filter(section => {
      if (section.template && (section.template.name === "fish_home_advertise_card_d4" || section.data.bizType === "AD" || section.data.bizType === "homepage")) {
        return false; // 删除该数组项
      }
      return true; // 保留该数组项
    });
  }
}

if (url.includes("/gw/mtop.taobao.idle.local.home")) {
  if (obj.data?.sections) {
    obj.data.sections = obj.data.sections.filter(section => {
      return !(section.data && section.data.bizType === "AD");
    });
  }
}

if (url.includes("/gw/mtop.taobao.idle.home.whale.modulet")) {
  delete obj.data.container.sections;
}

if (url.includes("/gw/mtop.taobao.idlemtopsearch.search.shade") || url.includes("/gw/mtop.taobao.idle.user.strategy.list")) {
  delete obj.data;
}

$done({body: JSON.stringify(obj)});