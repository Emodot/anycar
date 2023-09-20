<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top">
        <div class="back_ctn">
          <span class="material-icons-outlined">
            arrow_back
          </span>
          <p>Back</p>
        </div>
        <div class="search_side">
          <SearchInput />
        </div>
      </div>
      <CarDetails />
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

.back_ctn {
  display: flex;
  align-items: center;
}

.back_ctn .material-icons-outlined {
  font-size: 20px;
  margin-right: 10px;
}

.search_side {
  flex-basis: 30%;
}
</style>
