<template>
  <base-card>
    <base-button
      :btnType="listBtnStatus"
      btnText="List of Resourсes"
      @click="showList"
    ></base-button>
    <base-button
      :btnType="addBtnStatus"
      btnText="Add Resourсe"
      @click="showAdd"
    ></base-button>
  </base-card>
</template>

<script>
export default {
  emits: ["show-list", "show-add"],
  data() {
    return {
      listBtnStatus: "primary",
      addBtnStatus: "secondary",
    };
  },
  components: {},
  methods: {
    showList() {
      this.$emit("show-list");
      this.listBtnStatus = "primary";
      this.addBtnStatus = "secondary";
    },
    showAdd() {
      this.$emit("show-add");
      this.listBtnStatus = "secondary";
      this.addBtnStatus = "primary";
    },
  },
};
</script>
