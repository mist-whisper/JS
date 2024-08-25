//引用地址：https://gitlab.com/lodepuly/vpn_tool/-/blob/master/Resource/Script/WexinMiniPrograms/xiaotucc/xiaotucc.js?ref_type=heads

if(-1!=$request.url.indexOf("main_page/index/getActivity")){
    let obj=JSON.parse($response.body);
    delete obj.data.p3;
    $done({body: JSON.stringify(obj)});
   }
   else if(-1!=$request.url.indexOf("mall/main")){
    let obj=JSON.parse($response.body);
    delete obj.data;
    $done({body: JSON.stringify(obj)});
   }
   else $done($response);
   
