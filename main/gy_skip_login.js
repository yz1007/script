var res = JSON.parse($response.body);
console.log("$response:"+$response)
console.log("开始重写登录...")
res.data = "U2FsdGVkX1+2d3VQM4ZhphLCkhZCwj+LuXvsSwlaFuIGc+zOwqECf7ai+hs4ZCCkYfLuokOMtXGe4wzhry2ovXKJ0yjsu/jhdbm9t/8LpghIvkANyh+LgxxFFNjgf6cHVpQVhDpCQ9NERbsO/PWYoRffgb2O0jWxXKuBCNumWvAoclKXK6wx2R+89TfPvSCG/mJemVDTZ8hw1aCpkEhTegYUL/hSCfKinK7ug0OuJ8XCyZceJL67voUore/J6LWCoTPZkY+HdxBrtFwR/LJgYIg6nLy4lmujgO30LOlPddojeRM0s28pQNotgLQ/LWwKDmfxAfnT+EM6NRktDH9TThKYwikc0Ij9H4sc+cELe/wGFQZ/zAGz7Hxha7KVRCIrbCM0fTKsHTWKGt/kKrp+z9oz4jHHFw2qJBqyr4EDg7EFgIRErCwt0Rl5wEKq8xIT";
$done({body: JSON.stringify(res)});
console.log("重写登录结束")



