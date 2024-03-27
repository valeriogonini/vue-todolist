const { createApp } = Vue

createApp({
    data() {
        return {
            todos:
                [
                    {
                        text: "vai al bar",
                        done: true
                    },
                    {
                        text: "vai in bisca",
                        done: true
                    },
                    {
                        text: "compra il pane",
                        done: false
                    },
                    {
                        text: "prendi il latte",
                        done: true
                    },
                    {
                        text: "fai benzina",
                        done: true
                    },
                    {
                        text: "lava la macchina",
                        done: false
                    }
                ],

            addTodo: ''
        }
    },

    methods: {
        removeTodo(todo, i) {
            this.todos.splice(i, 1)
        },
        trueFalse(todo) {
            if (todo.done === false) {
                todo.done = true
            } else {
                todo.done = false
            }
        },
        newTodo(){
            if (this.addTodo !== '') {
                this.addTodo = {
                    text: this.addTodo,
                    done: false,
                }
                this.todos.push(this.addTodo)
                this.addTodo = ''
            }
        }
    }

}).mount('#app')