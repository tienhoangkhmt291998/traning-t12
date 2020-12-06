
// input 1 : doan dang chay Marathon A ,B,C,D


// output : 1 so van dong vien kia ve dich dau tien

var Time=[1000,2000,3000,1500,2500,3500,5000,6000,7500,10000]

function A(){
    let random = Math.floor(Math.random()*Time.length);
    let x = (random , Time[random]);

    setTimeout(()=>{
        console.log("A")
    },x)
    return x;
}
function B(){
    let random = Math.floor(Math.random()*Time.length);
    let x = (random , Time[random]);

    setTimeout(()=>{
        console.log("B")
    },x)

    return x;
}
function C(){
    let random = Math.floor(Math.random()*Time.length);
    let x = (random , Time[random]);

    setTimeout(()=>{
        console.log("C")
    },x)

    return x;
}
function D(){
    let random = Math.floor(Math.random()*Time.length);
    let x = (random , Time[random]);

    setTimeout(()=>{
        console.log("D")
    },x)

    return x;
}

function Run(...callback){
    console.log("nguoi ve dau tien la :")
   callback.map((value,key)=>{
        value();
   })


}
console.log("Bat Dau !!!");

setTimeout(()=>{
    Run(A,B,C,D);
},3000)


