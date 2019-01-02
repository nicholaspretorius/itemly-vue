import Vue from 'vue';
import App from './app';


new Vue({
    el: '#app',
    components: { App },
    template: '<App :state="state">',
    data: {
        state: {
            showDone: true,
            todos: [],
            // todos: [{
            //     text: "Refactor CSS", 
            //     done: true
            // }, {
            //     text: "Update Vue.js", 
            //     done: false
            // }, {
            //     text: "Write tests", 
            //     done: false
            // }]
        }
    },

    created() {
        console.log('created', this.state.todos);
        fetch('http://localhost:3000/todos')
            .then(response => response.json() )
            .then(json => {
                this.state.todos = json;
            });
    }
})
console.log('Hello world again!');