<template>
  <form @submit.prevent="submitForm">
    <div
      class="form-control"
      :class="{
        invalid: userNameValid === 'invalid',
        valid: userNameValid !== 'invalid',
      }"
    >
      <label for="user-name">Your Name</label>
      <input
        v-model.trim="userName"
        ref="userName"
        id="user-name"
        name="user-name"
        type="text"
        @blur="validateName"
      />
      <p
        :class="{
          show: userNameValid === 'invalid',
          hide: userNameValid !== 'invalid',
        }"
      >
        Please check UN
      </p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input
        v-model.lazy="userAge"
        ref="userAge"
        id="age"
        name="age"
        type="number"
      />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select v-model="userRef" id="referrer" name="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          v-model="userInterest"
          value="news"
          id="interest-news"
          name="interest"
          type="checkbox"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          v-model="userInterest"
          value="tutorials"
          id="interest-tutorials"
          name="interest"
          type="checkbox"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          v-model="userInterest"
          value="nothing"
          id="interest-nothing"
          name="interest"
          type="checkbox"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          v-model="userHow"
          value="video"
          id="how-video"
          name="how"
          type="radio"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          v-model="userHow"
          value="blogs"
          id="how-blogs"
          name="how"
          type="radio"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          v-model="userHow"
          value="other"
          id="how-other"
          name="how"
          type="radio"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
      <div class="form-control">
        <!-- <rating-control 
        @sendRating="setRating"></rating-control> -->
        <rating-control v-model="userRating"></rating-control>
      </div>
      <!-- <button @click.prevent="printNameAge">Save Data</button> -->
      <div class="form-control">
        <input v-model="userTerms" type="checkbox" id="terms" name="terms" />
        <label for="terms">Agree to terms?</label>
      </div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl.vue';
export default {
  components: { RatingControl },

  data() {
    return {
      userName: '',
      userAge: null,
      userRef: 'wom',
      userInterest: [],
      userHow: null,
      userTerms: false,
      userNameValid: 'unknown',
      userRating: '',
    };
  },
  methods: {
    printNameAge() {
      console.log(this.$refs.userName.value + ', ' + this.$refs.userAge.value);
    },
    submitForm() {
      console.log(this.userName);
      console.log(typeof this.userAge);
      console.log(typeof this.$refs.userAge.value);
      this.userName = '';
      this.userAge = 0;
      console.log(this.userInterest[1]);
      console.log(this.userHow);
      console.log(this.userTerms);
      console.log(this.userRating);
      this.userRating = null;
    },
    validateName() {
      this.userName === ''
        ? (this.userNameValid = 'invalid')
        : (this.userNameValid = 'valid');
    },
    setRating(rate) {
      this.userRating = rate;
      console.log(this.userRating);
    },
  },
  mounted() {
    console.log(this.userNameValid);
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  margin: 0.5rem 0;
  border-color: red;
}
.form-control.valid input {
  margin: 0.5rem 0;
}
p.show {
  display: block;
}
p.hide {
  display: none;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
