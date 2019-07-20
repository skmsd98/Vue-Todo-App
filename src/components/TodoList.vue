<template>
  <div>
    <ul>
      <li v-for="(todo,index) in todos" :key="index">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          v-on:click="checkClicked(todo)"
          v-bind:checked="todo.done"
        />
        <del v-if="todo.done">{{todo.text}}</del>
        <span v-else>{{todo.text}}</span>
        <span v-on:click="editClicked(todo.id)">
          <button>Edit</button>
        </span>
        <span v-on:click="deleteClicked(todo.id)">
          <button>Delete</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: Array
  },
  methods: {
    checkClicked(todo) {
      this.$emit("checkToggle", todo);
    },
    editClicked(id) {
      this.$emit("clickedEdit", id);
    },
    deleteClicked(id) {
      this.$emit("clickedDelete", id);
    }
  }
};
</script>

<style scoped>
</style>
