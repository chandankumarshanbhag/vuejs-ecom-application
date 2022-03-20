<template>
    <div class="container mt-2">
    <div class="row">
      <div
        class="col-md-3 col-lg-3 col-xl-3 m-2"
        v-for="product in this.$store.state.cartItems"
        v-bind:key="product.id"
      >
        <ProductCard :product="product" :qty="product.qty" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/product_card.vue'
export default {
    name: 'Cart',
    mounted: function () {
        console.log('Cart mounted',this.$store.state.cartItems);
    },
    components: {
ProductCard
    }
}
</script>

<style>

</style>