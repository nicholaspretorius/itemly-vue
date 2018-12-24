<template>
    <div>
        <h1>Itemly Todo: Vue</h1>
        <ul v-for="todo in $data.todos.filter(hideCompleted)" :key="todo">
            <li v-bind:class="{ complete: todo.done }"> 
                {{ todo.text }} 
                
                <input type="checkbox" v-model="todo.done">
            </li>
        </ul>

        <form v-on:submit="addTodo($event)">
            <input type="text" v-model="text">
        </form>

        <label>
            Show completed todos? 
            <input type="checkbox" v-model="showDone">
        </label>
    </div>
    
</template>

<script>
    export default {
        methods: {
            addTodo(e) {
                e.preventDefault();
                this.$data.todos.push({ text: this.text, done: this.done});
                this.text = "";
                this.done = false;
            },
            hideCompleted(todo) {
                if (this.$data.showDone) {
                    return true;
                } else {
                    return !todo.done;
                }
            }
        },
        data() {
            return this.$props.state;
        },
        props: ['state']
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif, monospace;
        color: darkslategray;
        font-size: 1.4em;
        margin: 1.4em;
        width: 22em;
        position: relative;
    }
    input[type=text] {
        margin-top: 1em;
        padding: 0.8em;
        width: 100%;
        font-size: 0.7em;
    }
    input[type=checkbox] {
        position: absolute;
        right: 0;
        padding: 1em;
        cursor: pointer;
    }
    li {
        list-style-type: none;
        padding: 1em 0 1em 0;
        border-bottom: 1px solid lightblue;
        position: relative;
    }
    /* li input {
        transform: scale(1.8);
    } */
    ul {
        padding: 0;
    }
    h5 {
        margin-top: 0px;
    }
    label {
        width: 80%;
    }
    .complete {
        color: gainsboro;
        text-decoration: line-through;
        font-style: italic;
    }
    .show-completed {
        font-size: 1rem;
        color: slategray;
    }
    .show-completed input {
        transform: scale(1.4);
    }
</style>