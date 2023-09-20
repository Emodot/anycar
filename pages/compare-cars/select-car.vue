<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top">
        <div>
          <h2 class="title">
            Compare cars available in our lots
          </h2>
          <p class="sub_title">
            Make Better decisions before purchase while you compare side by side cars available in our lots
          </p>
        </div>
        <div class="search_side">
          <SearchInput />
        </div>
      </div>
      <div class="content">
        <FilterCars />
      </div>
    </div>
  </div>
</template>

<script>
export default {

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

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.search_side {
  flex-basis: 30%;
}

.title {
  margin-bottom: 5px;
}

.content {
  margin-top: 5rem;
}
</style>
