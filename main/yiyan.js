var res = JSON.parse($response.body);
console.log(res)
if(res.ret == 0){
    console.log("开始重写一言...")
    res.content.watermark = "";
    $done({body: JSON.stringify(res)});
} else {
    console.log("重写一言失败...")
    $done({body: JSON.stringify(res)});
}
