new Vue({
  el: "#app",
  data: {
    todoList: [],
  },
  methods: {
    additem: function (arg) {
      this.todoList.push(arg);
      this.$refs.todoText.value = "";
    },
  },
});
