<template>
  <div class="table-responsive">
    <table class="table">
      <tr v-for="(todo,index) in todos" :key="index">
        <td>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            v-on:click="checkClicked(todo)"
            v-bind:checked="todo.done"
          />
        </td>
        <td>
          <del v-if="todo.done">{{todo.text}}</del>
          <span v-else>{{todo.text}}</span>
        </td>
        <td>
          <span v-on:click="editClicked(todo.id)">
            <button class="btn btn-success">Edit</button>
          </span>
        </td>
        <td>
          <span v-on:click="deleteClicked(todo.id)">
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
