<template>
  <error-message v-if="displayError"> </error-message>
  <base-card>
    <label for="title"><strong>Title</strong></label>
    <input v-model="newRes.name" type="text" name="title" />
    <label for="description"><strong>Description</strong></label>
    <textarea v-model="newRes.text" type="text" name="description" rows="5" />
    <label for="link"><strong>Link</strong></label>
    <input v-model="newRes.link" type="url" name="link" />
    <base-button
      class="moved"
      btnType="primary"
      btnText="Save Resource"
      @click="saveRes"
    ></base-button>
  </base-card>
</template>

<script>
import ErrorMessage from "./ErrorMessage.vue";
export default {
  components: {
    ErrorMessage,
  },
  emits: "add-resource",
  data() {
    return {
      displayError: false,
      newRes: {
        id: "",
        name: "",
        text: "",
        link: "",
      },
    };
  },
  methods: {
    saveRes() {
      if (
        this.newRes.name.trim() === "" ||
        this.newRes.text.trim() === "" ||
        this.newRes.link.trim() === ""
      ) {
        this.showError();
      } else {
        this.newRes.id = new Date().getTime();
        this.$emit("add-resource", this.newRes);
      }
    },
    showError() {
      this.displayError = true;
      console.log("privet");
      setTimeout(() => (this.displayError = false), 2000);
    },
  },
};
</script>

<style scoped>
:deep(button.moved) {
  margin-left: 1rem;
}

label {
  display: flex;
  margin: 0;
  margin-left: 1rem;
}
input {
  margin: 1rem auto;
  width: 90%;
  margin-left: 1rem;
  /* display: block; */
  /* padding: auto; */
  /* border: auto; */
}
textarea {
  margin: 1rem auto;
  width: 90%;
  /* height: 5rem; */
  margin-left: 1rem;
}
</style>
