

// có 3 trạng thái trả về promise
// 1 pendding là trạng thái chờ đang lấy kết quả
// 2 fullfilled là trạng thái đã lấy được kết quả
// 3 rejected là trạng thái k lấy đc kêt quả, data trả về faill


// input:   1 anh chàng vna  cô gái Jav

// mo ta qua trinh : 1 anh chang muon lam quen 1 co gai jav , nen chang trai co y dinh moi co gai di uoong nuoc
// a chang den phong co gai moi co gai di , sau 1 khoang gian co gai ddax dong y di cung chang trai
// 2 ng di ra quan nuoc
// trong qua trinh nch chang trai muon chen co gai
// va co gai cung dong y cho chang trai chen

// output : chang trai da chen thanh cong co gai jav


// 1 idol jav
var cogai ={
    name:"Takizawa Laura",
    age:22,
    v1:90,
    v2:50,
    v3:100,
    chen:false
}

// 1 chang trai vn yeu idol jav
var changtrai ={
    name:"Mr.Hoang",
    age:23,
    chen:false
}


function HenHo(){
    console.log("Hoang dang tren duong don co gai jav")
}
HenHo();


function QuaTrinh(time){

    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(cogai.chen == false){
                res();
            }else{
                rej("da chen xong chang trai va co gai jav di ve");
            }
        },time)
    })
}

// sau 5s chang trai ru dc co gai jav kia di uong nuoc

const lan1 = QuaTrinh(5000);

lan1.then(()=>{
    console.log(" chang trai da ru dc co gai di  uong nuoc");
})
// sau 3s Chang da den ddc qua nuc
.then(()=>{
    return QuaTrinh(3000)
})
.then(()=>{
    console.log("chang trai da den quan nuoc")
})
// sau 4s chang ru co gai vao nha nghi
.then(()=>{
    return QuaTrinh(4000);
})
.then(()=>{
    console.log( cogai.name + " oi , di nha nghi di")
})
// co gai jav ddang nghi , sau 4s se rep
.then(()=>{
    return QuaTrinh(4000);
})
.then(()=>{
    console.log("co gai da ddong y di nha nghi vao Hoang");
})
// sau 2s tu luc co gai dong y ca 2 nhac mong di nha nghi
.then(()=>{
    return QuaTrinh(2000);
})
.then(()=>{
    console.log("ca 2 bat dau den nha nghi");
})
// sau 5s thi ho den nha nghi
.then(()=>{
    return QuaTrinh(5000)
})
.then(()=>{
    console.log("ho da den nha nghi")
})
// sau 3s dk phong ho da len phong
.then(()=>{
    return QuaTrinh(3000);
})
.then(()=>{
    console.log("chang trai và cô gái đã lên đến phòng  đang chuẩn bị đi tắm");
})
// vào đến phòng trong cô gái hỏi chàng trai có bcs không
.then(()=>{
    return QuaTrinh(0);
})
.then(()=>{
    console.log("co gai hoi chang trai :")
    console.log("a có mang 3 con sói không ???")
})
// chàng trai bị nghớ ng 1s khi quên không mua 3 con sói

.then(()=>{
    return QuaTrinh(1000);
})

.then(()=>{
    console.log(" a quen mat chua mua ")
})

//  sau 6s di mua BCS chang trai da tro lai
.then(()=>{
    console.log(" chang trai bat dau di mua BCS")
    return QuaTrinh(6000);
})
.then(()=>{
    console.log("CHANG trai da di mua BCS ve den phong");
})
// chang ve toi nha coi het quan ao nhay vao chen co Idol kia
.then(()=>{
    return QuaTrinh(1500);
})
.then(()=>{
    console.log("chang trai dang thit co gai");
})

// chang trai chen co gai dc 10s thi ra ve
.then(()=>{
    return QuaTrinh(10000);
})
.then(()=>{
    console.log("Thit xong co gai ca 2 ng xuong phong di ve");
})

.then(()=>{
    cogai.chen = true;
    console.log(cogai.chen);
    return QuaTrinh(1000);
})
.catch((err)=> console.log(err))
