<template>
  <div>
    <form @submit.prevent="submitTodo">
      <input type="text" name="text" ref="text" id="textField" v-model="text" />
      <button type="submit">Add Todo</button>
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
    submitTodo(e) {
      this.$emit("todoCreated", this.text);
      e.target.elements.text.value = "";
    }
  }
};
</script>

<style scoped>
</style>
