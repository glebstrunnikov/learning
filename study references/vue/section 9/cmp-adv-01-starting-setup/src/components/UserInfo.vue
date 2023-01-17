<template>
  <section>
    <base-card>
      <template #header
        ><h2>{{ fullName }}</h2>

        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge
      ></template>

      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["fullName", "infoText", "role"],
};
</script>
