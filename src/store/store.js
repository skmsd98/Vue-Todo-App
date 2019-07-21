import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo)
        },
        editTodo(state, index) {
            state.todos[index]['isEdit'] = true;
        },
        updateTodo(state, payload) {
            const index = payload['index'];
            state.todos[index]['text'] = payload['text'];
            state.todos[index]['isEdit'] = false;
            state.todos.push();
        },
        deleteTodo(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        toggleDone(state, index) {
            state.todos[index]['done'] = !state.todos[index]['done'];
        }
    }
});

