var a =[];
function getData(url){
    return new Promise((resolve, reject) => {
        $.ajax ({
            url:url,
            type:"get",
            success:resolve,
            fail:reject
        })
    })
}
var a1 = 1;
var index = 0;
var currenIndex = 10;

getData("https://jsonplaceholder.typicode.com/todos")
    .then((data)=>{
        a.push(...data);
        Render(a);
    })
    .catch(err=> console.log(err))

function Render(data){
    $("#list").html(li(data,index,currenIndex));
    $("#hoang").html(PhanTrang(data));
}



function li(data,index1,currenIndex){
    var slicedata = data.slice(index1,currenIndex);

    var li =slicedata.map((value,key)=>{
        return `
                <li>${value.title}</li>
            `;
    });

    var html = li.join("");
    return html;
}

function hoang(id) {
    var x = id * 10;

    var y = x + 10;

    Number(id,a,x,y);
}

function Number(id,data,index,curren) {

    var slicedata = data.slice(index,curren);

    var li =slicedata.map((value,key)=>{
        return `
                <li>${value.title}</li>
            `;
    });

    var html = li.join("");
    $("#list").html(html);
}


function PhanTrang(data){

    li =data.map((value,key)=>{
        if(key < data.length/10){
            return `
                <li onclick="hoang(${key})">${key}</li>
            `
        }
    })
    var html = li.join("");
    return html;
}


