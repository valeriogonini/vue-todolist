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
                ]
        }
    },
    methods : {
        removeTodo(todo,i) {
            this.todo.splice(i,1)
        }
    }

}).mount('#app')