<template>
  <modal ref="modal">
    <form class="pure-form pure-form-stacked">
      <fieldset>
        <div class="pure-control-group">
          <label for="todo-title" class="label">Todo Task Title</label>
          <input type="text" 
            id="todo-title" 
            placeholder="todo title" 
            v-model="form.title" />
          <span class="pure-form-message-inline">This field is required!</span>
        </div>

        <div class="pure-control-group">
          <label for="todo-description" class="label">Todo Task Description</label>
          <input
            type="text"
            id="todo-description"
            placeholder="todo description"
            v-model="form.description"
          />
          <span class="pure-form-message-inline">This field is required!</span>
        </div>
      </fieldset>

      <fieldset>
        <button type="button" class="pure-button pure-button-primary" @click="createTodo">Save</button>
      </fieldset>
    </form>
  </modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  components: {
    Modal
  },
  data() {
    return {
      form: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    isFormValid() {
      return this.form.title && this.form.description ? true : false;
    },
    modal() {
      return this.$refs.modal;
    }
  },
  methods: {
    createTodo() {
      if (this.isFormValid) {
        this.$emit("formSubmit", this.form);
        this.form = {};
        this.modal.closeModal();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  .pure {
    &-form {
      border: 1px solid #ccc;
      border-radius: 7px;
      text-align: left;
      padding: 0.3rem 0.7rem;
      width: 90%;

      fieldset {
        div:nth-child(2) {
          margin-top: 30px;
        }
      }

      .label {
        color: blue;
        display: inline-block;
      }

      &-message-inline {
        color: red;
        display: none;
        font-size: small;
      }
    }
  }
} //end modal
</style>
