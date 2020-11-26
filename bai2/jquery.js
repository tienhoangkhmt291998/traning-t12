
var array =[
    {
        id:"Id",
        name:"Name",
        email:"Email",
        age:"Age"
    },
    {
        id:1,
        name:"asd",
        email: "tienhoangkhmt@gmail.com",
        age:33
    }
];



$(document).ready(function (){
    // an hien form
    $(".btn--add").click(function (){
        $(this).hide();
        $(".form--save").removeClass("d-none");
    });


    $(".btn--save").click(function (){
        $(".form--save").addClass("d-none");
        $(".btn--add").show();
        // get value , check value

        var value_name = $(".inpt--name").val();
        var value_email = $(".inpt--email").val();
        var value_age = $(".inpt--age").val();
        if (value_name == "" || value_email == "" || value_age == ""){
            alert("nhap lai thong tin")
        }else {
            array.push({
                id:array.length,
                name:value_name,
                email: value_email,
                age:value_age
            });
            $("#table").html(Render(array));
        }

    });
    $(".btn--search").click(Search);

})

// render
$("#table").html(Render(array));
function Render(row) {
    console.log(row);
    var htmlTr = row.map(function(i,key){
        if(key == 0){
            return `
        <tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.email}</td>
            <td>${i.age}</td>
            <td></td>
        </tr>
        `;
        }else{
            return `
        <tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.email}</td>
            <td>${i.age}</td>
            <td><button class="btn--red" onclick='Remove(${i.id})'>Xoa </button></td>
        </tr>
        `;
        }
    });
    var html = htmlTr.join('');
    return html;
}


// Search

function Search(){
    var key_search =$(".inpt--search").val();
    var abc = array.filter(function(item,key){

        if(key_search == "all"){
            return array;
        }else if((item.name === key_search) || (item.id ==="Id")){
            return item;
        }

    });

    console.log(abc);
    return $("#table").html(Render(abc));
}



// REMOVE

function Remove(r){
    // var i = r.parentNode.parentNode.rowIndex;
    // console.log(i);
    // table.deleteRow(i);
    array.splice(r,1);
    $("#table").html(Render(array));
}