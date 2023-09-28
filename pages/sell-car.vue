<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top_section">
        <div>
          <h2 class="title">
            Sell your car, new or old
          </h2>
          <p class="sub_title">
            Kindly upload the details of your car, once approved, it will be visible to potential buyers
          </p>
        </div>
      </div>
      <div class="main_section">
        <div class="lhs">
          <div class="lhs_img">
            <img src="~assets/images/sell_car_img.jpg" alt="">
          </div>
        </div>
        <div class="rhs">
          <div class="rhs_inner">
            <SellCarOne v-if="formOne" />
            <SellCarTwo v-if="formTwo" />
            <SellCarThree v-if="formThree" />
            <div class="bottom_section">
              <div class="progress_bar">
                <div :class="`progress_line ${formOneCompleted ? 'completed_line' : formOne ? 'active_line' : ''}`" />
                <div :class="`progress_line ${formTwoCompleted ? 'completed_line' : formTwo ? 'active_line' : ''}`" />
                <div :class="`progress_line ${formThreeCompleted ? 'completed_line' : formThree ? 'active_line' : ''}`" />
              </div>
              <button class="global_btn">
                Next
              </button>
            </div>
          </div>
          <SellCarDetailsAdded v-if="carAdded" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formOne: true,
      formTwo: false,
      formThree: false,
      formOneCompleted: false,
      formTwoCompleted: false,
      formThreeCompleted: false,
      carAdded: false
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
.top_section {
  display: flex;
  justify-content: space-between;
  /* padding: 20px 0 40px; */
}

.title {
  margin-bottom: 5px;
}

.main_section {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.lhs {
  flex-basis: 45%;
  margin-top: 3rem;
}

.lhs_img {
  width: 100%;
}

.lhs_img img {
  width: 100%;
  border-radius: 10px;
}

.rhs {
  flex-basis: 30%;
}

.bottom_section {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress_bar {
  display: flex;
  flex-basis: 60%;
}

.progress_line {
  width: 4rem;
  height: 5px;
  border-radius: 30px;
  margin-right: 15px;
  background-color: rgba(21, 10, 65, 0.20);
  transition: .5s;
}

.active_line {
  background-color: var(--primary-color);
  width: 6rem;
}

.completed_line {
  background-color: var(--primary-color);
}
</style>
