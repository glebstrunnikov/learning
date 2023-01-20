<template>
  <li>
    <h2>{{ firstName }}</h2>
    <button @click="toggleDetails">Show details</button>
    <ul v-if="detailsVisible === true">
      <li>
        <strong>Orientation: {{ this.sexID }}</strong>
      </li>
      <button @click="toggleSexID">trans</button>
      <button @click="$emit('delete-friend', id)">delete</button>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    firstName: { type: String, required: true },
    sexID: {
      type: String,
      required: false,
      default: "straight",
      validator(val) {
        return val === "straight" || val === "gay" || val === "pidor";
      },
    },
  },
  emits: [
    "delete-friend",
    {
      "gender-transition": function (id) {
        if (id) {
          return true;
        } else {
          alert("ID is missing");
          return false;
        }
      },
    },
  ],
  data() {
    return {
      detailsVisible: false,
      //   friend: { id: "1", firstName: "Kostya", sexID: "straight" },
    };
  },
  computed: {
    // friendsSexID() {   могло бы быть и в data
    //   return this.sexID;
    // },
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleSexID() {
      this.$emit("gender-transition", this.id);

      //   if (this.friendsSexID === "straight") {
      //     this.friendsSexID = "gay";
      //   } else if (this.friendsSexID === "gay") {
      //     this.friendsSexID = "pidor";
      //   } else if (this.friendsSexID === "pidor") {
      //     this.friendsSexID = "straight";
      //   }
    },
    // deleteFriend() {
    //   this.$emit("delete-friend", this.id);
    // },
  },
};
</script>
