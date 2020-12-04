


Vue.component('div-list', {
    props:['todo'],
    template: `
        <div>
            <ul-list :name=todo.name :stt=todo.id />
        </div>
    `,
})


Vue.component('ul-list', {
    props:['name', 'stt'],
    template: `
        <ul>
            <li-list :fullname=name :so=stt />
        </ul>
    `,
})


Vue.component('li-list', {
    props:['fullname', 'so'],
    template: `
        <li>{{fullname}} + {{so}} </li>
    `,
})



var app = new Vue({

    el:"#vue",

    data() {
        return {
            getdata: [
                {
                    id: 1,
                    name: "hoang",
                    age: 22
                },
                {
                    id: 2,
                    name: "Mr.Hoang",
                    age: 23
                }
            ]
        }
    }

})
