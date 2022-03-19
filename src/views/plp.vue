<template>
  <div class="container mt-2">
      <nav aria-label="breadcrumb pt-2">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$route.params.category}}</li>
  </ol>
</nav>
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
import ProductCard from '../components/product_card.vue'
export default {
  data: function () {
    return {
      listOfProducts: [],
    };
  },
  mounted: function () {
    fetch(
      `https://fakestoreapi.com/products/category/${this.$route.params.category}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.listOfProducts = json;
      });
  },
  components: {
      ProductCard
  }
};
</script>

<style></style>
