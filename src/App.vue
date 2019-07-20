<template>
  <div id="app">
    <h1>Todo App</h1>
    <TodoForm @todoCreated="addTodo" />
    <TodoList
      :todos="todos"
      @checkToggle="toggleDone"
      @clickedDelete="deleteTodo"
      @clickedEdit="editTodo"
    />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";

export default {
  name: "app",
  components: {
    TodoList,
    TodoForm
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(text) {
      const exits = this.todos.filter(todo => todo.isEdit == true);
      const match = this.todos.filter(todo => todo["text"] == text);
      if (exits.length) {
        const editVal = this.todos.filter(todo => todo.isEdit == true)[0];
        const index = this.todos.indexOf(editVal);
        if (text.trim() && !match.length) {
          this.todos[index] = { text: text, done: this.todos[index]['done'], id: Date.now() };
          this.todos.push();
        }
      } else {
        if (!match.length) {
          text.trim() &&
            this.todos.push({
              text,
              done: false,
              id: Date.now(),
              isEdit: false
            });
        }
      }
    },
    editTodo(id) {
      const index = this.todos.findIndex(todo => todo.id == id);
      this.todos[index]["isEdit"] = true;
      document.getElementById("textField").value = this.todos[index]["text"];
      document.getElementById("textField").focus();
      this.todos.push();
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    toggleDone(todo) {
      todo.done = !todo.done;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
