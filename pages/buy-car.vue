<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top_section">
        <h2 class="title">
          Search for Cars on AnyCar
        </h2>
        <SearchInput />
        <div class="content">
          <FilterCars />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.inner {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}
.main_ctn {
  padding: 120px 0;
}

.title {
  margin-bottom: 20px;
}

.content {
  margin-top: 5rem;
}
</style>
