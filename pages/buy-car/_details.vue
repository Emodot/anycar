<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top">
        <div class="back_ctn" @click="$router.go(-1)">
          <span class="material-icons-outlined">
            arrow_back
          </span>
          <p>Back</p>
        </div>
        <div class="search_side">
          <SearchInput />
        </div>
      </div>
      <CarDetails @requestInspection="inspectionForm = true" />
      <OtherCarsYouMayLike />
    </div>
    <ModalsScheduleInspection v-if="inspectionForm" @close-modal="inspectionForm = false" @submit="submit" />
    <ModalsSuccess v-if="successModal" @close-modal="successModal = false" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      inspectionForm: false,
      successModal: true
    }
  },
  methods: {
    submit () {
      this.inspectionForm = false
      this.successModal = true
    }
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
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.back_ctn {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.back_ctn .material-icons-outlined {
  font-size: 20px;
  margin-right: 10px;
}

.search_side {
  flex-basis: 30%;
}
</style>
