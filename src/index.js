import Vue from 'vue';
import App from './app';


new Vue({
    el: '#app',
    components: { App },
    template: '<App :state="state">',
    data: {
        state: {
            showDone: true,
            todos: [{
                text: "Refactor CSS", 
                done: true
            }, {
                text: "Update Vue.js", 
                done: false
            }, {
                text: "Write tests", 
                done: false
            }]
        }
    }
})
console.log('Hello world again!');