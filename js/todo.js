new Vue({
  el: "#app",
  data: {
    todoList: [
      "Todo1",
      "Todo2",
    ],
    keyword: "",
  },
  methods: {
    additem: function (arg) {
      this.todoList.push(arg);
      this.$refs.todoText.value = "";
    },
    deleteitem: function (todo) {
      let deleteIndex = this.todoList.indexOf(todo);
      if (
        confirm(
          "「" + this.todoList[deleteIndex] + "」のtodoを削除しますか？"
        )
      ) {
        this.todoList.splice(deleteIndex, 1);
      }
    },
  },
  computed: {
    filteredTodo: function () {
      let todoList = [];
      for (let todo of this.todoList) {
        if (todo.indexOf(this.keyword) !== -1) {
          todoList.push(todo);
        }
      }
      return todoList;
    },
  },
});
