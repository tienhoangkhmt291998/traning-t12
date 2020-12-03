var app = new Vue({
    el:"#vue",
    data () {
        return {
            arr: [],
            name: "",
            title: "",
            keySearch: "",
        }
    },
    methods: {
        remove: function (id) {
            
            for(var i = 0 ; i < this.arr.length ; i ++){
                if(this.arr[i].id === id){
                    this.arr.splice(i,1);
                }
            }
        },

        add: function () {
            this.arr.push({
                id: this.arr.length + 1,
                name: this.name,
                title: this.title
            });
        },

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
