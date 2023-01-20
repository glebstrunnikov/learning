<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script>
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();

    const products = inject('products');
    const product = computed(() =>
      products.value.find((el) => el.id === route.params.pid)
    );
    const title = computed(() => product.value.title);
    const price = computed(() => product.value.price);
    const description = computed(() => product.value.description);

    // const prodToRefs = computed(() => toRefs(product));
    // console.log(prodToRefs.value); // почему тут не работает вотчер?????

    // watch(prodToRefs, function (newProd) {
    //   console.log(newProd);
    //   title.value = newProd.value.title;
    //   price.value = newProd.value.price;
    //   description.value = newProd.value.description;
    // });

    // console.log(products);
    // console.log(product);
    // console.log(route);
    return { title, price, description };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
