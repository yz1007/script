//https://raw.githubusercontent.com/yz1007/script/main/main/tpfy.js
var res = JSON.parse($response.body);
if(res.code == 0){
    console.log("开始重写躺平...")

    console.log("res.data.userData.bp")
    res.data.userData.bp['longrange']=10;//瞭望台
    res.data.userData.bp['ice']=10;//冰箱
    res.data.userData.bp['meow']=10;//喵喵魔盒
    res.data.userData.bp['troll']=10;//巨魔
    res.data.userData.bp['doorLevUp']=1;//房间升级卡
    res.data.userData.bp['repair']=10;//维修
    res.data.userData.bp['energyhood']=10;//能量罩
    res.data.userData.bp['guillotine']=10;//断头台
    res.data.userData.bp['smoney']=10;//ATM
    res.data.userData.bp['spell']=10;//修够
    res.data.userData.bp['particlea']=10;//粒子加速器
    res.data.userData.bp['solenoid']=10;//电磁圈
    res.data.userData.bp['splitter']=10;//分裂器
    res.data.userData.bp['barb']=10;//倒刺
    res.data.userData.bp['entrapment']=10;//诱捕
    res.data.userData.bp['dice']=10; //筛子

    $done({body: JSON.stringify(res)});
    console.log("重写躺平结束")
} else {
    console.log("重写躺平失败...")
    $done({body: JSON.stringify(res)});
}



var dataex = {
    "msg": "Success",
    "data": {
        "userId": 1,
        "attach": {
            "dlst": 1724339291950,
            "data": {
                "lo": 1724337596472,
                "sa": -1,
                "ii": false,
                "ltl": 1,
                "fl": 1,
                "iw": true,
                "mlt": 0,
                "ilw": false,
                "ll": 1,
                "io": false,
                "cl": 1,
                "mtt": 1,
                "ftl": 1,
                "ctl": 1,
                "mt": 1
            },
            "country": "中国",
            "llt": 1724337596472,
            "province": "上海"
        },
        "webSocketUrl": null,
        "serverTime": 1724402999197,
        "authentication": "Wg9cPkW6pnx1jDdPOTzF7AyGdd1avJVYwiBPx4CJ0\/K2r6nXFYfdfFxXQ3EplhLLX9Sb6yC7gZQAi8sWu+\/gtYqzvWZmQNicC6E6JtYf2bFyscgNw0gJVPQionnnAoVi",
        "userData": {
            "bd": 0,
            "task": 8,
            "mvp": 3,
            "npd": 1,
            "np": 1,
            "bf": 0,
            "win": 5,
            "fra": 0,
            "ucnd": 0,
            "bg": 0,
            "dvc": 0,
            "un": 0,
            "d1": 0,
            "psi": 0,
            "ulvl": 0,
            "tld": 0,
            "ssii": [0, 0, 0, 0, 0, 0],
            "lose": 0,
            "d3": 0,
            "vst": 0,
            "ldy": 1724337596472,
            "bl": 22,
            "ti": [
                [0, 0, 12, 0],
                [0, 0, 3, 0]
            ],
            "jt": 0,
            "ndo": 0,
            "usf": [
                [0, 1, 30, 0, 45, 0, 50, 0, 99, 0, 99, 0, 99, 0],
                [0, 1, 40, 0, 45, 0, 50, 0, 99, 0, 99, 0, 99, 0],
                [0, 1, 12, 0, 50, 0, 70, 0, 99, 0, 99, 0, 99, 0],
                [0, 1, 24, 0, 46, 0, 66, 0, 99, 0, 99, 0, 99, 0],
                [0, 1, 30, 0, 60, 0, 55, 0, 99, 0, 99, 0, 99, 0],
                [0, 1, 15, 0, 40, 0, 99, 0, 99, 0, 99, 0, 99, 0]
            ],
            "ugm": 0,
            "ld": 22,
            "fr": 0,
            "sgc": 0,
            "jv": 0,
            "uv": true,
            "mwt": 0,
            "bp": {
                "longrange": 1,
                "ice": 1,
                "meow": 3,
                "troll": 3,
                "doorLevUp": 0,
                "repair": 9,
                "energyhood": 1,
                "guillotine": 1,
                "smoney": 1,
                "spell": 1,
                "particlea": 1,
                "solenoid": 1,
                "splitter": 1,
                "barb": 1,
                "entrapment": 1,
                "dice": 0
            },
            "uplm": 0,
            "pi": [
                [0, 0, 3, 0],
                [0, 0, 3, 0],
                [0, 0, 3, 0]
            ],
            "ft": 5,
            "_sld": 1724337596472,
            "bds": 0,
            "pli": [
                [0, 0, 3, 1],
                [0, 0, 3, 1],
                [0, 0, 3, 0],
                [0, 0, 3, 0],
                [0, 0, 3, 0],
                [0, 0, 3, 0],
                [0, 0, 3, 0],
                [0, 0, 3, 0]
            ],
            "_bs": "",
            "mngtn": 0,
            "to": false,
            "c1": 0,
            "mvc": 0,
            "bt": 0,
            "sf": [0, 0, 0, 0, 0, 0],
            "dc": 1724337596472,
            "mt": {"0": 0, "1": 0, "2": 0},
            "bzl": [ ],
            "c3": 0,
            "bfp": "1724337596472|",
            "dd": 0,
            "mdc": 0,
            "c4": 0,
            "ts": {"mg_2": 0, "mg_6": 0, "mg_3": 0, "mg_0": 2, "mg_4": 0, "mg_1": 0, "mg_5": 0},
            "c5": 0,
            "mw": 30,
            "mdz": 0,
            "uvd": false,
            "c6": 0,
            "_dday": 1,
            "_skill": [0, 0, 0, 0, 0, 3],
            "bz": [

            ],
            "ps": [
                0
            ],
            "f1": 5,
            "cgl": true,
            "oom": false,
            "rc": 0,
            "gc": 5,
            "ppf": 0,
            "bys": 0,
            "nmc": 0,
            "bsl": 0,
            "ndc": 0,
            "gwr": 0,
            "nc": 5,
            "gold": 206,
            "stc": 0,
            "_dv": "",
            "rhve": 0,
            "ja": "1724337596472|1",
            "svt": 0,
            "gi": -1,
            "jc": "",
            "uppm": 0,
            "gk": 0,
            "ucm": 0,
            "ci": [

            ],
            "pac": 0,
            "mst": 0,
            "ni": [
                [5, 5, 0]
            ],
            "ssi": [0, 0, 0, 0, 0, 0],
            "sgcc": 0,
            "gn": 0,
            "fd": 0,
            "pvs": 0,
            "ba": "",
            "_dyside": 0,
            "ji": 0,
            "mrc": 0,
            "gp": 20,
            "bc": []
        },
        "userType": 0,
        "info": null
    },
    "code": 0
}
