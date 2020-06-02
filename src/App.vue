<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list :todos="todos" />
        <todo-create @formSubmit="createTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate";
import Store from "@/store";

export default {
  name: "App",
  data() {
    return {
      todos: Store.state.todos
    };
  },
  // this function autoruns via Vue framework
  created() {
    this.todos = Store.dispatch('initStore');
  },
  methods:{
    //triggered via $emit in TodoCreate.vue
    createTodo(todo){
      console.log(todo);
      Store.dispatch('saveTodo', todo);
    }    
  },
  components: {
    TodoList,
    TodoCreate
  }
};
</script>

<style lang="scss">

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }


  .todo {
    &-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    &-container {
      display: flex;
      flex-direction: column;
      min-height: 400px;
      padding: 3px;
      width: 400px;
    }
  }
</style>
