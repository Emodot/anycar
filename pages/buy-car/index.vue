<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top_section">
        <h2 class="title">
          Search for Cars on AnyCar
        </h2>
        <SearchInput />
        <div class="content">
          <FilterCars :data="cars" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const cars = await $axios.$get('api/sell?pageNumber=2')
    console.log(cars)
    return { cars }
  }
}
</script>

<style scoped>
.main_ctn {
  padding: 120px 0;
}

.inner {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}

.title {
  margin-bottom: 20px;
}

.content {
  margin-top: 5rem;
}
</style>
