<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col text-center">
        <h1>Todo App</h1>
      </div>
    </div>
    <TodoForm />
    <TodoList :todos="getTodos" />
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
  computed: {
    getTodos() {
      return this.$store.state.todos;
    }
  },
  created() {
    this.$store.commit("getTodosFirebase");
  }
};
</script>

<style>
</style>
