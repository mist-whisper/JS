/*
脚本作者：litieyin
脚本日期：2022-12-09
引用地址：https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/aiqicha.js
*/
var body = $response.body
    .replace(/\"svip\":\{\"status\":0,\"startTime\":\"\",\"endTime\":\"\"/, "\"svip\":\{\"status\":1,\"startTime\":\"\",\"endTime\":\"2099-12-31\"");
$done({ body });