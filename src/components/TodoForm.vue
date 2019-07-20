<template>
  <div>
    <form @submit.prevent="submitTodo">
      <div class="form-group row">
        <input class="form-control-plaintext col-lg-12 " placeholder="Todo Text..." type="text" name="text" ref="text" id="textField" v-model="text" />
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
    submitTodo(e) {
      this.$emit("todoCreated", this.text);
      e.target.elements.text.value = "";
    }
  }
};
</script>

<style scoped>
</style>
