<template>
  <div v-if="show" class="thin mar-3 pad-5">
    <h2>{{ coaches[id].name }}</h2>
    <h3>{{ coaches[id].price }} $/hr</h3>
    <span
      v-if="coaches[id].skills.includes('frontend')"
      class="badge badge-primary round mar-3 pad-4"
      >FRONTEND</span
    >
    <span
      v-if="coaches[id].skills.includes('backend')"
      class="badge badge-primary round mar-3 pad-4"
      >BACKEND</span
    >
    <span
      v-if="coaches[id].skills.includes('career')"
      class="badge badge-primary round mar-3 pad-4"
      >CAREER</span
    >
    <div class="to-right">
      <base-button
        @click="viewCoach(this.id)"
        class="mar-3"
        style="border-color: blue"
        btnType="btn-outline"
        btnName="Contact"
      ></base-button>
      <base-button class="mar-3" btnName="View Details"></base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      url: "http://localhost:8080/",
    };
  },
  computed: {
    coaches() {
      return this.$store.getters.returnCoaches;
    },
    interests() {
      return this.$store.getters.returnInterests;
    },
    show() {
      let showCard = false;
      this.coaches[this.id].skills.forEach((el) => {
        if (this.interests.includes(el)) {
          showCard = true;
          console.log(showCard);
        }
      });
      return showCard;
    },
  },
  methods: {
    viewCoach() {
      window.location = `coaches/${this.id}`;
    },
  },
};
</script>

<style scoped>
div.to-right {
  text-align: right;
}
.thin {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(6, 6, 132);
  border-radius: 1rem;
}
</style>
