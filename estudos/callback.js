const fetch = require('node-fetch');

console.log("callback");

let alpha = 1+1;
if(alpha == 2){
    success();
}else{
    error()
}

function success(){
    console.log("2")
}

function error(){
    console.log("não 2")
}

let p = new Promise(async (resolve,reject)=>{
        const response = await fetch('http://jsonlinx.ivanknow.com.br/js/json/swg.json');
        const myJson = await response.json();
        const response2 =  await fetch('http://jsonlinx.ivanknow.com.br/js/json/mo.json');
        const myJson2 =  await response2.json();
        console.log("1",JSON.stringify(myJson));
        console.log("2",JSON.stringify(myJson2));
    if (myJson) {
        resolve(myJson);
    } else {
        reject("");
    }
})

p.then(async (result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})