


var arr = [];
var index = 0;
var currenIndex = 10;

function getData(url){
    return new Promise((res,rej)=>{
        $.ajax({
            type: "get",
            url: url,
            success:res,
            fail:rej
        });
    })
}
// goi data
getData("https://jsonplaceholder.typicode.com/todos")
        .then((data)=>{
            arr.push(...data);
            Render(data);
        })
        .catch((err)=>console.log(err))

// Render elements

function Render(data){
    $("#list-item").html(RenderCol(data,index,currenIndex))
    $("#pagination").html(RenderPagination(data))
}


// Render col , list product

function RenderCol(data,index,currenIndex){
    let slicedata = data.slice(index,currenIndex);

    let li = slicedata.map((item,key)=>{
        return `
        <div class="col-xl-3 col-md-3 col-sm-6 pdd">
            <div class="card" style="width: auto;">
                <img src="https://cdn1.viettelstore.vn/images/Product/ProductImage//Note20-Ultra-2311.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <form action="chitiet.html">
                    <button class="btn btn-primary" type="submit" name="id" value="${item.id}" >Mua San Pham</button>
                </form>
                </div>
            </div>
        </div>
        `
    })

    let html = li.join("");
    return html;

}

// Render pagination


function RenderPagination(data){
    var rutgon = data.length / 10;

    var list_li = data.map((item,key)=>{
        if(key < rutgon){
            return `
                <li onclick="NumberPages(${item.id})">${item.id}</li>
            `
        }
    });
    var html = list_li.join("");
    return html;
}

// Number pages

function NumberPages(id){
    var x = id * 10;
    var y = x + 10;
    LoadPage(arr,id,x,y);
}

// load page

function LoadPage(data,id,index,currenIndex){
    var sliceData = data.slice(index,currenIndex);

    var col = sliceData.map((item,key)=>{
        var {title,id} = item;
        return `
        <div class="col-xl-3 col-md-3 col-sm-6 pdd">
            <div class="card" style="width: auto;">
                <img src="https://cdn1.viettelstore.vn/images/Product/ProductImage//Note20-Ultra-2311.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <form action="chitiet.html">
                    <button class="btn btn-primary" type="submit" name="id" value="${id}" >Mua San Pham</button>
                </form>
                </div>
            </div>
        </div>
        `
    });
    var html = col.join("");
    $("#list-item").html(html);
}


// Search Products
