var showForm = document.querySelector(".form--save");
var btnAdd = document.querySelector(".btn--add");
var btnSave = document.querySelector(".btn--save");
var table = document.getElementById("table");

// lay value cua input

var ip_name = document.querySelector(".inpt--name");
var ip_email = document.querySelector(".inpt--email");
var ip_age = document.querySelector(".inpt--age");

// construstor function

function Table (id,name,email,age){
    this.id = id;
    this.name = name;
    this.email =email;
    this.age = age;
}


// show form

function ShowForm(){
    showForm.classList.remove("d-none");
    btnAdd.classList.add("d-none");

}
function Hidden(){
    showForm.classList.add("d-none");
    btnAdd.classList.remove("d-none");
    GetValue();
}
var array=[
    {
        id:"Id",
        name:"Name",
        email:"Email",
        age:"Age"
    }
]

function GetValue(){

    var tr = document.querySelectorAll("tr");
    let id = tr.length;
    let name = ip_name.value;
    let email = ip_email.value;
    let age = Number(ip_age.value);
    let obj = new Table(id,name,email,age);


    if(name == "" || email == "" || age <= 0){

        alert("Nhap lai nam hoac email hoac age");

    }else{

        array.push(obj);
        // localStorage.setItem("list",JSON.stringify(array));
        Render(table,array);
    }
}
Render(table,array);
function Render(container,row) {
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
    container.innerHTML = html;
}
var search = document.querySelector(".btn--search");

search.addEventListener("click",Search);

function Search(){
    var key_search = document.querySelector(".inpt--search").value;

    var abc = array.filter(function(item,key){

        if(key_search == "all"){
            return array;
        }else if((item.name === key_search) || (item.id ==="Id")){
            return item;
        }

    });

    console.log(abc);
   return Render(table,abc);
}


// remove

function Remove(r){
    // var i = r.parentNode.parentNode.rowIndex;
    // console.log(i);
    // table.deleteRow(i);
    array.splice(r,1);
    Render(table,array);
}
