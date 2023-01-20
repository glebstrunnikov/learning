<template>
  <div>
    <base-card>
      <h2>{{ coaches[coachId].name }}</h2>
      <h3>{{ coaches[coachId].price }} $/hr</h3></base-card
    >
    <base-card>
      <div class="pad-4">
        <h2>Interested? Reach out now!</h2>
        <base-button btnName="Contact"></base-button>
        <form>
          <label class="mar-3" for="email">Your E-Mail</label>
          <input ref="email" class="input mar-3" name="email" type="text" />
          <label class="mar-3" for="message">Message</label>
          <textarea
            ref="message"
            name="message"
            id=""
            rows="5"
            class="textarea mar-3"
          ></textarea>
          <div class="mar-3">
            <base-button
              @click.prevent="sendMessage"
              class="send"
              btnName="Send Message"
            ></base-button>
          </div>
        </form>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ["coachId"],
  computed: {
    coaches() {
      return this.$store.getters.returnCoaches;
    },
    letters() {
      return this.$store.getters.returnLetters;
    },
  },
  methods: {
    sendMessage() {
      this.$store.dispatch("addLetter", {
        name: this.coaches[this.coachId].name,
        email: this.$refs.email.value,
        message: this.$refs.message.value,
      });
      console.log(this.letters);
      console.log(this.$refs.email.value);
    },
  },
};
</script>

<style scoped>
form {
  text-align: center;
}
* {
  display: block;
}
input {
  width: 100%;
}
textarea {
  width: 100%;
}
.send {
  margin-top: 2rem;
  display: inline;
  margin-right: auto;
}
</style>
