


function ThayGiao(){

    return new Promise((res,rej)=>{
       setTimeout(()=>{
        res("Thầy đã chấm trong chờ 5s để thầy load diem");
       },5000)

    });


}
function a(){
    return new Promise((res,rej)=>{
        res("ddiem 1")
    })
}

async function TraDiem(){

    const a1 = await ThayGiao();
    const a2 = await a();
    console.log(a1);
    console.log(a2);
}

TraDiem();