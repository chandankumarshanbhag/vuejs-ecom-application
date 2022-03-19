<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
    <div class="container">
      <router-link class="navbar-brand" to="/">CStore</router-link>
      <button
        class="navbar-toggler"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <template v-for="category in categories" v-bind:key="category">
            <li class="nav-item links">
              <router-link :to="'/category/' + category" class="nav-link">
                {{ category }}
              </router-link>
            </li>
          </template>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <slot></slot>
</template>

<script>
export default {
  data: function () {
    return {
      categories: [],
    };
  },
  mounted: function () {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.categories = json;
      });
  },
};
</script>

<style>
.navbar-sticky {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.links {
  text-transform: capitalize;
}
</style>
