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
                <div :class="`progress_line ${formOneCompleted ? 'completed_line' : formOne ? 'active_line completed_line' : ''}`" />
                <div :class="`progress_line ${formTwoCompleted ? 'completed_line' : formTwo ? 'active_line completed_line' : ''}`" />
                <div :class="`progress_line ${formThreeCompleted ? 'completed_line' : formThree ? 'active_line completed_line' : ''}`" />
              </div>
              <div class="bottom_btns">
                <button :class="`global_btn_2 ${formOne ? 'disabled_btn' : ''}`" @click="prevForm()">
                  Prev
                </button>
                <button class="global_btn" @click="nextForm()">
                  {{ formThree ? 'Submit' : 'Next' }}
                </button>
              </div>
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
  },
  methods: {
    nextForm () {
      if (this.formOne) {
        this.formOne = false
        this.formTwo = true
        this.formOneCompleted = true
      } else if (this.formTwo) {
        this.formOne = false
        this.formTwo = false
        this.formThree = true
        this.formTwoCompleted = true
      } else {
        console.log(this.formData)
      }
    },
    prevForm () {
      if (this.formTwo) {
        this.formTwoCompleted = false
        this.formOneCompleted = false
        this.formTwo = false
        this.formThree = false
        this.formOne = true
      } else if (this.formThree) {
        this.formThreeCompleted = false
        this.formTwoCompleted = false
        this.formThree = false
        this.formTwo = true
        this.formOne = false
      } else {
        console.log(this.formData)
      }
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

.rhs_inner {
  height: fit-content;
  transition: .5s;
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
  width: 3rem;
  height: 5px;
  border-radius: 30px;
  margin-right: 15px;
  background-color: rgba(21, 10, 65, 0.20);
  transition: .5s;
}

.completed_line {
  background-color: var(--primary-color);
}

.active_line {
  background-color: var(--primary-color);
  width: 5rem;
}

.global_btn_2 {
  margin-right: 10px;
}

.bottom_btns {
  display: flex;
}

.disabled_btn {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
