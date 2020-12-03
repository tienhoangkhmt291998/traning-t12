var app =  new Vue ({
    el:'#vue',
    data: {
        data1:"Nguyen tien hoang"
    },
    methods: {
        getName : function () {
            return this.data1 + " code Vue " ;
        }
    },
});



var app1 = new Vue ({
    el: '#vue2',
    data: {
        name: "hoagnbeo",
        age: 11,
        styleData: 'text-align:center'
    }
});

var age = 1333;

var app2 = new Vue ({
    el:'#vue3',
    data: {
        age: 10,
        cong: 0,
        color:"red",
    },
    methods: {
        Cong: function () {
            this.age += 1;
        },

        upDate: function () {
            if ( this.age % 2 === 0 ) {
                return "chan";
            }
            return "le";
        },

        toggle: function () {
            if ( this.color === "red" ) {
                this.color = "" ;
            } else {
                this.color = "red" ;
            }
        },
        delete: function (){

        }
    }
})





var app = new Vue ({
    el:'#vue4',
    data:{
        arr:[1, 2, 3, 4, 5]
    },

    methods: {
        getId: function (id){
            this.arr.splice(id,1);
        }
    }

})


Vue.component('tr-td' , {
    props:['todo'],

    template :`
        <tr>
            <th>1</th>
            <th>sdf</th>
            <th>sadf</th>
            <td> <button v-on="$listeners">Xoa</button></td>
        </tr>
    `
})

Vue.component('table-tr', {
    props:["data"],
    template : `
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th></th>
            </tr>
            <tr-td v-bind:todo="data" @click="remove">
            </tr-td>
        </table>
    `
})


var app5 = new Vue ({
    el:'#vue5',
    data (){
       return {
        name: "",
        email: "",
        age: 0,
        keySearch: "",
        arr:[
            {
                id: 1,
                name: "hoang",
                email: "tienhoangkhmt@gmail.com",
                age: 22
            } ,

            {
                id: 2,
                name: "hoang12",
                email: "tienhoangkhmt@gmail.com",
                age: 23
            }
        ]
       }
    },
    methods: {
        remove: function (id) {
            this.arr.splice(id,1);
        },

        add: function () {

            if (this.name =="" || this.email == "" || this.age == ""){
                alert (" nhap lai ");
            }else {
                this.arr.push({
                    id:this.arr.length + 1,
                    name: this.name,
                    email: this.email,
                    age: Number(this.age)
                });

            }
            this.name = "";

            this.email = "";

            this.age = "";
        },


        render: function () {
            data : () => {

            }
        }
    },
    computed:{
        search: function () {

            var name = this.keySearch;

            if(name === "") {
                return this.arr ;
            }
            return this.arr.filter( function (item) {
                if ((item.name.indexOf(name) > -1)) {
                    return item;
                }
            })

        },
    }

})
