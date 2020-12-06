//  callback là hàm được gọi thì đã thực hiện trong , đc gọi thông qua parametter

// bai 1



function varibale(sum){
    var x = 2;
    var y =2;
    z = y +x;
    sum(z,y);
}

function Sum(a,b){
    console.log(a + b);
}
varibale(Sum);


// bai 2 tom duoi meo
var thanhcong = false;
console.log("bat dau duoi tom");
function Run(){

    if (thanhcong == true){
        console.log("da bat dc tom");
    }
    if (thanhcong == false){
        console.log("van chua bat dc tom");
    }
}

function batduoc(callback){
    callback();
    setTimeout(()=>{
      thanhcong = true;
      callback();
      console.log(thanhcong);
  },2000)
}
batduoc(Run);



