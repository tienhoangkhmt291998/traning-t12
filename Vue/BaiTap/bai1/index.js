

Vue.component('model', {
    props:['keyid', 'Title'],

    data() {
        return {
            show1:false
        }
    },

    methods: {
        // Ok: function () {
        //     console.log("OKKK");

        // },
        canel: function () {
            // let self = this;
            this.show = false;
        }
    },

    template: `
        <div class="model" >
            <div class="model--id">
                {{ keyid }}
            </div>
            <div class="model--name">
                {{Title}}
            </div>
            <button v-on="$listeners">OK</button>
            <button v-on:click="canel">Cannel</button>
        </div>
    `
})




var app = new Vue({

    el:"#vue",

    data () {
        return {
            arr: [],
            name: "",
            title: "",
            keySearch: "",
            show: false,
            keyId: 0,
            keyTitle:"",
        }
    },
    methods: {
        remove: function (id) {

            this.show = true;


            this.arr.map((item) => {
                if ( item.id === id ) {
                    this.keyId = item.id;
                    this.keyTitle = item.title;
                }
            })

        },

        removeArr: function () {

            this.show = false;

            for(var i = 0 ; i < this.arr.length ; i ++) {

                if(this.arr[i].id === this.keyId) {

                    this.arr.splice(i,1);
                }
            }
        },

        add: function () {

            this.arr.push({

                id: this.arr[this.arr.length - 1].id + 1,

                name: this.name,

                title: this.title
            });
        },

        // cannel : function () {
        //     console.log("Hoangbeo");
        //     this.show = false;
        // },
        // Ok: function () {
        //     console.log("hoagnb")
        // }
        // search: function () {
        //     var name = this.keySearch;
        //     console.log(arr)
        //     if(name === "") {
        //         return this.arr ;
        //     }
        //     return this.arr.filter( function (item) {
        //         if ((item.title.indexOf(name) > -1)) {
        //             return this.arr =item;
        //         }
        //     })
        // },

    },
    created() {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then( res =>
            this.arr.push(...res.data)
        ).catch((err) => {
            console.log(err);
        });
    },
    computed: {
        search: function () {
            var name = this.keySearch;

            if(name === "") {
                return this.arr ;
            }
            return this.arr.filter( function (item) {
                if ((item.title.indexOf(name) > -1)) {
                    return item;
                }
            })
        },
    },

});
