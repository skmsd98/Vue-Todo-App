import dbFirebase from '../firebase/firebaseConfig'

export default {
    addTodo(state, todo) {
        dbFirebase.ref().push(todo);
    },
    editTodo(state, index) {
        state.todos[index]['isEdit'] = true;
    },
    updateTodo(state, todo) {
        dbFirebase.ref(todo.key).update({
            ...todo,
            isEdit: false
        });
    },
    deleteTodo(state, key) {
        dbFirebase.ref(key).remove();
    },
    toggleDone(state, todo) {
        dbFirebase.ref(todo.key).update({
            ...todo,
            done: !todo.done
        })
    },
    getTodosFirebase(state) {
        dbFirebase.ref().on('child_added', (snapshot => {
            state.todos.push({
                key: snapshot.key,
                ...snapshot.val()
            })
        }))

        dbFirebase.ref().on('child_removed', (snapshot) => {
            const item = state.todos.filter(todo => todo.id == snapshot.val().id)[0];
            const index = state.todos.indexOf(item);
            state.todos.splice(index, 1);
        })

        dbFirebase.ref().on('child_changed', (snapshot => {
            const item = state.todos.filter(todo => todo.id == snapshot.val().id)[0];
            const index = state.todos.indexOf(item);
            state.todos[index] = snapshot.val();
            state.todos.push()
        }))
    }
}