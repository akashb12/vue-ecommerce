<template>
  <div class="home container">
    <Navbar></Navbar>
    <Login></Login>
   <Hero></Hero>
   <Products></Products>
   <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/hero.vue";
import Products from "@/sections/products.vue";
import Login from "@/components/login.vue";
export default {
  name: "Home",
  components: {
    Hero,Products,Login
  }
};
</script>
