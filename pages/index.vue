<template>
  <div class="main_ctn">
    <div class="hero_ctn">
      <div class="hero_inner">
        <div class="search_input">
          <input type="text" placeholder="Search by car by make or model">
          <span class="material-icons-outlined">
            search
          </span>
        </div>
      </div>
    </div>
    <PriceFilter />
    <div class="body_ctn">
      <RecentlyUpdated />
      <CompareOptions />
      <DoMoreAnycar />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
/* .main_ctn {
} */
.hero_ctn {
  background-image: url('assets/images/hero-1.jpg');
  background-size: cover;
  height: 70vh;
  padding: 120px 0;
}
.hero_inner {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}

.search_input {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #FFFFFC;
  padding: 5px 20px 5px 40px;
  border-radius: 10px;
}

.search_input input {
  width: 100%;
}

.body_ctn {
  max-width: 1344px;
  width: 80%;
  margin: auto;
  padding-bottom: 7rem;
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
