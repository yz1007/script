//https://raw.githubusercontent.com/yz1007/script/main/main/zhuandae_archive_get.js
var res = JSON.parse($response.body);
console.log(res)
if(res.code == 0){
    console.log("开始重写大鹅...")
    let data = JSON.parse(res.data.archives[0]);
    console.log("开始重写大鹅...",data)
    res.data.archives[0].data.playerSelfArchive.resourceList.OnlineBaseTicket = 2;//在线基本票
    res.data.archives[0].data.playerSelfArchive.userRecord.playLvCount = 1;//级别计数
    res.data.archives[0].data.playerSelfArchive.todayLevelTryCount = 1;//今天级别尝试计数
    res.data.archives[0].data.playerSelfArchive.todayEnergyCount = 1;//今天能量计数
    $done({body: JSON.stringify(res)});
    console.log("重写大鹅结束")
} else {
    console.log("重写大鹅失败...")
    $done({body: JSON.stringify(res)});
}



var dd = {
    "msg" : "OK",
    "data" : {
        "archives" : [
            {
                "tb_name" : "archive",
                "data" : {
                    "playerPublicArchive" : "{" +
                        "\"userId\":\"67314041\"," +
                        "\"nickName\":\"\\u9ED8\\u8BA4\\u6635\\u79F067314041\"," +
                        "\"localCountry\":\"\"," +
                        "\"localProvince\":\"\"," +
                        "\"localCity\":\"\"," +
                        "\"gooseType\":0," +
                        "\"avatarUrl\":\"\"," +
                        "\"hasGetWXInfo1\":false," +
                        "\"hasGetPos\":false," +
                        "\"teamOrder\":-1," +
                        "\"timeStamp\":0" +
                        "}",
                    "playerSelfArchive" : "" +
                        "{" +
                            "\"gooseSave\":[1]," +
                            "\"enterGameDay\":[2024,4,18]," +
                            "\"sumLevelWinCount\":0," +
                            "\"sumSpecialWinCount\":0," +
                            "\"resourceList\":{" +
                                "\"ToolReturnBack\":0," +
                                "\"ToolAutoFind\":0," +
                                "\"ToolCleanBoxObject\":0," +
                                "\"ToolShake\":0," +
                                "\"Gold\":0," +
                                "\"BoxKey\":0," +
                                "\"Box\":0," +
                                "\"OpenBox\":0," +
                                "\"Energy\":3," +
                                "\"OnlineBaseTicket\":2," +
                                "\"ToolMessUp\":0" +
                            "}," +
                        "\"sceneUnlock\":[true,false,false,false,false,false]," +
                        "\"userRecord\":{" +
                            "\"playLvCount\":2," +
                            "\"winLvCount\":0," +
                            "\"getGoldCount\":0," +
                            "\"getBoxCount\":0," +
                            "\"ADCount\":0," +
                            "\"shareCount\":1," +
                            "\"playSBattleCount\":0," +
                            "\"winOnlineBaseCount\":0," +
                            "\"winNewYearLevelCount\":0" +
                        "}," +
                        "\"localBattleScore\":{}," +
                        "\"gameTimeSecond\":351," +
                        "\"shareRewardLevel\":0," +
                        "\"regType\":\"1005\"," +
                        "\"energyRecoverTimer\":-1," +
                        "\"energyRecordTime\":\"\"," +
                        "\"onlineWinCountLevel\":0," +
                        "\"unGetCDKey\":{}," +
                        "\"todayTime\":[2024,4,24]," +
                        "\"todayLevelTryCount\":1," +
                        "\"todayLevelWinCount\":0," +
                        "\"todayLevelProgress\":0.42," +
                        "\"todayCatchGoose\":0," +
                        "\"todayScreenBattleTryCount\":0," +
                        "\"todayFreeToolCount\":0," +
                        "\"todayFreeResumeCount\":0," +
                        "\"todayEnergyCount\":1," +
                        "\"todayOnlineRecord\":[null,null,null,null,null]," +
                        "\"todayOnlineWinCount\":0," +
                        "\"todayOnlineLoseCount\":0," +
                        "\"todayRareGooseCount\":0," +
                        "\"todayNewYearActiveWinCount\":0," +
                        "\"todayNewYearActiveProgress\":0," +
                        "\"todayNewYearLevelTryCount\":0," +
                        "\"todayFruitSpWinCount\":0," +
                        "\"todayFruitSpActiveProgress\":0," +
                        "\"todayFruitSpLevelTryCount\":0," +
                        "\"todaySpLevelData\":{}," +
                        "\"timeStamp\":0" +
                        "}"
                }
            }
        ]
    },
    "code" : 0
};
