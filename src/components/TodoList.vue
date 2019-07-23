<template>
  <div class="table-responsive">
    <table class="table">
      <tr v-for="(todo,index) in todos" :key="index">
        <td>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            v-on:click="toggleDone(todo)"
            v-model="todo.done"
          />
        </td>
        <td>
          <del v-if="todo.done">{{todo.text}}</del>
          <span v-else>{{todo.text}}</span>
        </td>
        <td>
          <span v-on:click="editTodo(todo.id)">
            <button class="btn btn-success">Edit</button>
          </span>
        </td>
        <td>
          <span v-on:click="deleteTodo(todo.key)">
            <button class="btn btn-danger">Delete</button>
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: Array
  },
  methods: {
    editTodo(id) {
      let todos = this.$store.state.todos;
      const index = todos.findIndex(todo => todo.id == id);
      this.$store.commit("editTodo", index);
      document.getElementById("textField").value = todos[index]["text"];
      document.getElementById("textField").focus();
    },
    deleteTodo(key) {
      this.$store.commit("deleteTodo", key);
    },
    toggleDone(todo) {
      this.$store.commit("toggleDone", todo);
    }
  }
};
</script>

<style scoped>
</style>
