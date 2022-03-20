<template>
  <div class="card" style="width: 18rem">
    <img v-bind:src="product.image" class="card-img-top p-2 product-image" />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
    </div>
    <div class="card-footer product-footer">
        <p class="price">
        ₹{{ product.price }}
      </p>
      <a v-if="!qty" href="#" class="btn btn-primary" @click="$store.commit('addItems',product)">Add to cart</a>
      <a v-else href="#" class="btn btn-primary">QTY {{qty}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    qty: {
      type: Number,
      required: false
    }
  },
};
</script>

<style>
.product-image{
    width: 100%;
    height: 200px;
    object-fit: contain;
}
.card-title{
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    height: 60px;
}
.card-body{
    height: 90px;
}
.product-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price{
    font-size: 1rem;
}
</style>
