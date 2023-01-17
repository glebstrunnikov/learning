<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadSurveys"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading === true && !errorText">Loading...</p>
      <p v-else-if="errorText">{{ errorText }}</p>
      <p v-else-if="isLoading !== true && (!results || results.length === 0)">
        Add something first
      </p>
      <ul v-if="isLoading !== true && results && results.length >= 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  methods: {
    loadSurveys() {
      // const response = await
      this.isLoading = true;
      this.errorText = null;
      fetch(
        'https://vue-http-demo-875ff-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      )
        .then((res) => {
          if (res.ok) {
            return res;
          }
          // else throw new Error('No response!');
        })
        .then((res) => res.json())
        .then((res) => {
          this.results = [];
          for (const el in res) {
            this.results.push({
              id: el,
              name: res[el].name,
              rating: res[el].rating,
            });
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
          this.errorText = 'Failed to fetch :(';
        });

      // console.log(response);
      // for (const [key, value] of Object.entries(response)) {
      //   this.results.push({
      //     id: key,
      //     name: value.name,
      //     rating: value.rating,
      //   });
      // }

      // ВОТ ХУЙ ЗНАЕТ ПОЧЕМУ С ПРОМИСАМИ ОНО НЕ РАБОТАЕТ, А С АСИНКОМ ПОЖАЛУЙСТА
      // .then((res) => console.log(res));
      // .then((res) => {
      //   for (const [key, value] of Object.entries(res)) {
      //     this.results.push({
      //       id: key,
      //       name: value.name,
      //       rating: value.rating,
      //     });
      //   }
      // });
    },

    // async loadSurveys() {
    //   const surveysRes = await fetch(
    //     'https://vue-http-demo-875ff-default-rtdb.europe-west1.firebasedatabase.app/surveys.json',
    //     {
    //       method: 'GET',
    //     }
    //   ).then((res) => res.json());
    //   Object.values(surveysRes).forEach((el) => this.results.push(el));
    // },

    // loadSurveys() {
    //   fetch(
    //     'https://vue-http-demo-875ff-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
    //   )
    //     .then((res) => res.json())
    //     .then((res) =>
    //       Object.values(res).forEach((el) => this.results.push(el))
    //     );
    // },
  },
  data() {
    return {
      results: [],
      isLoading: false,
      errorText: null,
    };
  },
  mounted() {
    this.loadSurveys();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
