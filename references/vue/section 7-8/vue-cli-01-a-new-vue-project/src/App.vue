<template>
  <section>
    <h2>Friends</h2>
    <new-friend @save-friend="saveFriend"></new-friend>
    <ul>
      <!-- <li v-for="element in friends" :key="element.id">
        {{ element.name }}: {{ element.sexID }}
      </li> -->
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :first-name="friend.firstName"
        :sexID="friend.sexID"
        @gender-transition="genderTransition"
        @delete-friend="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        { id: 1, firstName: "Kostya", sexID: "straight" },
        { id: 2, firstName: "Sasha", sexID: "gay" },
      ],
    };
  },
  methods: {
    genderTransition(friendID) {
      const currentFriend = this.friends.find(
        (friend) => friend.id === friendID
      );
      if (currentFriend.sexID === "straight") {
        currentFriend.sexID = "gay";
      } else if (currentFriend.sexID === "gay") {
        currentFriend.sexID = "pidor";
      } else if (currentFriend.sexID === "pidor") {
        currentFriend.sexID = "straight";
      }
      console.log(this.$attrs);
      //   console.log(currentFriend);
      //   console.log(this.friends.find((friend) => friend.id === friendID).sexID);
      //   this.friends.find((friend) => friend.id === friendID).sexID =
      //     currentFriend;
    },
    saveFriend(name, sexID) {
      if (name && sexID) {
        const newFriend = {
          //   id: this.friends.length + 1,
          id: new Date().getTime(),
          firstName: name,
          sexID: sexID,
        };
        this.friends.push(newFriend);
      } else alert("No name or sexID!");
    },
    deleteFriend(friendID) {
      this.friends = this.friends.filter((friend) => friend.id !== friendID);
    },
  },
  computed: {},
};
</script>
