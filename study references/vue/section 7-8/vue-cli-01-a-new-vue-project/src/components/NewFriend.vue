<template>
  <form @submit.prevent="saveFriend">
    <input v-model="newFriendName" type="text" />
    <select v-model="newFriendSexID" id="sexID" name="gender-list">
      <option value="straight">straight</option>
      <option value="gay">gay</option>
      <option value="pidor">pidor</option>
    </select>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  emit: ["save-friend"],
  data() {
    return {
      newFriendName: "",
      newFriendSexID: "",
    };
  },
  methods: {
    saveFriend() {
      this.$emit("save-friend", this.newFriendName, this.newFriendSexID);
    },
  },
};
</script>
