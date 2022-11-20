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
    deleteitem: function (index) {
      if (confirm("「" + this.todoList[index] + "」のtodoを削除しますか？")) {
        this.todoList.splice(index, 1);
      }
    },
  },
});
