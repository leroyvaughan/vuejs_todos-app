import Vue from 'vue'
const INITIAL_DATA = {
  todos: [
    {
      _id: "1",
      title: "Burp",
      description: "Nothing fancy here"
    },
    {
      _id: "2",
      title: "Fart",
      description: "Another thing I have to do today..."
    },
    {
      _id: "3",
      title: "Finish Video Tutorials",
      description: "When I'm finished with this, I'm chilling..."
    }
  ]
};

const store = {
  state: {
    todos: []
  },
  actions: {
    initStore(state) {//dispatched in App.vue
      let initData = INITIAL_DATA.todos;

        var userStore = localStorage.getItem('my_todos');

        //instead of checking length, try parse
        if (userStore) {
          var tempData = JSON.parse(userStore);
          if (tempData.length > 0)
            initData = tempData;
        }

      Vue.set(state, 'todos', initData);
      return state.todos;
    },
    saveTodo(state, todo) {//dispatched in App.vue
      todo._id = Math.random().toString(36).substr(7);
      state.todos.push(todo);
      return state.todos;
    },
    updateTodo(state, curTodo) {//dispatched in TodoItem.vue
      //setting index to anonymous function here
      const ix = state.todos.findIndex((todo) => {
        return todo._id === curTodo._id;
      })

      //calling function here in Vue reactive update
      Vue.set(state.todos, ix, curTodo);
      return state.todos;
    },
    deleteTodo(state, curTodo) {//dispatched in TodoItem.vue
      const ix = state.todos.findIndex((todo) => {
        return todo._id === curTodo._id;
      })

      Vue.delete(state.todos, ix);
      return state.todos;
    }
  }
}


function persistData(data) {
  localStorage.setItem('my_todos', JSON.stringify(data));
}

store.dispatch = function (action, payload) {
  if (!this.actions[action]) return;

  const result = this.actions[action](this.state, payload);

  if (!result) return;

  persistData(result);

  return result;
}

export default store