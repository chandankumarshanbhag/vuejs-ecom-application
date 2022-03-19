<template>
  <div class="container mt-2">
    <div class="row">
      <div
        class="col-md-3 col-lg-3 col-xl-3 m-2"
        v-for="product in listOfProducts"
        v-bind:key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/product_card.vue";
export default {
  name: "HelloWorld",
  data: function () {
    return {
      listOfProducts: [],
    };
  },
  mounted() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.listOfProducts = json;
      });
  },
  components: {
    ProductCard,
  },
};
</script>

<style></style>
