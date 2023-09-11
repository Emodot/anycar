<template>
  <div class="main_ctn">
    <div class="hero_ctn">
      <Breadcrumb />
      <ProductsContainer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.main_ctn {
  background-image: url('assets/images/hero-1.jpg');
  background-size: cover;
  height: 60vh;
}
.hero_ctn {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}

@media only screen and (max-width: 1200px) {
  .hero_ctn {
    width: 90%;
  }
}
@media only screen and (max-width: 900px) {
}
@media only screen and (max-width: 500px) {
}
</style>
