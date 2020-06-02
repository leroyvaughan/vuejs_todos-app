<template>
  <div v-if="!editMode">
    <div class="todo-item">

      <div class="action-links">
        <span class="edit-link" @click="editTodo">&#10000;</span>
        <span class="delete-link" @click="deleteTodo">&#10004;</span>
      </div>

      <div class="title">{{title}}</div>
      <div class="description">{{description}}</div>

    </div>
  </div>

  <div v-else>
    <div class="todo-item">
      <form class="pure-form pure-form-stacked">
        <fieldset>

          <div class="pure-control-group">
            <label for="todo-title">Todo Task Title</label>
            <input type="text" 
              id="todo-title"
              v-model="todo.title" />
          </div>

          <div class="pure-control-group">
            <label for="todo-description">Todo Task Description</label>
            <input type="text" id="todo-description" v-model="todo.description" />
          </div>
            
          <div class="pure-control-group">
            <div class="action-btns">
              <button class="pure-button save-btn" @click.prevent="saveTodo">save</button>
              <button class="pure-button cancel-btn" @click.prevent="cancelEditMode">cancel</button>
            </div>
          </div>

        </fieldset>
      </form>
    </div>
    
  </div>
</template>


<script>
import store from '@/store';

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    _id: {
      type: String,
      required: true
    }
  },
  data(){
    return{
      editMode: false,
      todo: {
        _id: this._id,
        title: this.title,
        description: this.description
      }
    }
  },
  methods:{
    editTodo(){
      this.editMode = true;
    },
    deleteTodo(){
      store.dispatch('deleteTodo', {...this.todo});
    },
    saveTodo(){
      // ... = destructurize object
      store.dispatch('updateTodo', {...this.todo});
      this.editMode = false;
    },
    cancelEditMode(){
      this.editMode = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/my-sass.scss';

.todo {
  &-item {
    background-color: #fff;
    border: 1px solid #777;
    border-radius: 7px;
    // box-shadow: 2px 3px 3px #534e4e;
    @include box-shadow(2px, 3px, 3px, #555);
    margin: 3px;
    padding: 5px;
    position: relative;


    .action-links{
      position: absolute;
      right: 7px;
      top: 0px;

      span{
        cursor: pointer;
        color: #777;
        display: inline-block;
        font-size: .6rem;
        margin-left: .4rem;
        position: relative;

        &:hover{
          color: black;
        
          &:before{
            background-color: #fafae1;
            border: 1px solid rgb(90, 86, 85);
            border-radius: 7px;
            content: "Edit!";
            padding: 3px 7px;
            position: absolute;
            right: -15px;
            top: -24px;
          }
        }

        &.delete-link{        
          &:hover{
            &:before{
              content: "Completed!";
              padding: 3px;
              right: -24px;
            }
          }
        }
      }
    }

    .title {
      color: #31447b;
      font-weight: bold;
      margin: 7px 0;
    }

    .description {
      color: #7c8ba8;
    }
  }
}

.pure-control-group{
  padding-left: .7rem;
  text-align: left;

  input[type='text']{
    color: #777;
    width: 94%;
  }
  label{
    color: #35428d;
  }
  .action-btns{
    margin-top: 21px;

    button{
      color: #fff;
      @include box-shadow();

      &:hover{
        color: #999;
      }
    }

    .save-btn{
      background: rgb(28, 184, 65);
    }

    .cancel-btn{
      background: rgb(184, 175, 174);
      margin-left: 7px; 
    }
  }
}

.pure-control-group:nth-child(2){
  margin-top: 21px;
}

</style>