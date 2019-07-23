<template>
  <div>
    <form @submit.prevent="addTodo(text)">
      <div class="form-group row">
        <input
          class="form-control-plaintext col-lg-12"
          placeholder="Todo Text..."
          type="text"
          name="text"
          ref="text"
          id="textField"
          v-model="text"
        />
        <button class="btn btn-primary col-lg-12" type="submit">Add Todo</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    addTodo(text) {
      let todos = this.$store.state.todos;
      const exits = todos.filter(todo => todo.isEdit == true);
      const match = todos.filter(todo => todo["text"] == text);
      if (exits.length) {
        const editVal = todos.filter(todo => todo.isEdit == true)[0];
        const index = todos.indexOf(editVal);
        if (text.trim() && !match.length) {
          todos[index] = {
            ...todos[index],
            text
          };
          this.$store.commit("updateTodo", todos[index]);
        }
      } else {
        if (!match.length) {
          text.trim() &&
            this.$store.commit("addTodo", {
              text,
              done: false,
              id: Date.now(),
              isEdit: false
            });
        }
      }
      this.text = "";
    }
  }
};
</script>

<style scoped>
</style>
