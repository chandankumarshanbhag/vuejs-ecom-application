<template>
  <MainLayout>
  <router-view></router-view>
  </MainLayout>
</template>

<script>
import MainLayout from './layouts/main.vue'
export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>

<style>

</style>
