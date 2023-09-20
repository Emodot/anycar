<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top_section">
        <div>
          <h2 class="title">
            Recently Updated Cars
          </h2>
          <p class="sub_title">
            Check the varieties of cars recently updated on our lots
          </p>
        </div>
      </div>
      <div v-if="carsSelected" class="cars_ctn">
        <div class="car_1">
          <img src="~assets/images/fisrt_car.jpg" alt="">
          <div class="car_content">
            <p class="car_name">
              2008 Lexus ES 350
            </p>
            <p class="car_amount">
              N4,500,000
            </p>
            <p class="change_car">
              Change Car
            </p>
          </div>
        </div>
        <div class="car_1">
          <img src="~assets/images/second_car.jpg" alt="">
          <div class="car_content_2">
            <p class="car_name">
              2008 Lexus ES 350
            </p>
            <p class="car_amount">
              N4,500,000
            </p>
            <p class="change_car">
              Change Car
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="cars_ctn">
          <div class="car_1">
            <img src="~assets/images/temp_car.png" alt="">
          </div>
          <div class="car_1">
            <img src="~assets/images/temp_car_2.png" alt="">
          </div>
        </div>
        <div class="bottom_ctn">
          <button class="global_btn">
            Select Cars to Compare
          </button>
          <button class="global_btn">
            Select Car to Compare with
          </button>
        </div>
      </div>
      <div v-if="carsSelected" class="details_ctn">
        <div class="details_inner">
          <p class="details_name">
            4 - Cylinder
          </p>
          <p class="details_value">
            Engine
          </p>
          <p class="details_name">
            4 - Cylinder
          </p>
        </div>
        <hr class="details_line">
        <div class="details_inner">
          <p class="details_name">
            Automatic
          </p>
          <p class="details_value">
            Transmission
          </p>
          <p class="details_name">
            Automatic
          </p>
        </div>
        <hr class="details_line">
        <div class="details_inner">
          <p class="details_name">
            Black
          </p>
          <p class="details_value">
            Interior Color
          </p>
          <p class="details_name">
            Black
          </p>
        </div>
        <hr class="details_line">
        <div class="details_inner">
          <p class="details_name">
            Grey
          </p>
          <p class="details_value">
            Exterior Color
          </p>
          <p class="details_name">
            Grey
          </p>
        </div>
        <hr class="details_line">
        <div class="details_inner">
          <p class="details_name">
            JTNB ******************
          </p>
          <p class="details_value">
            VIN
          </p>
          <p class="details_name">
            JTNB ******************
          </p>
        </div>
        <hr class="details_line">
        <div class="details_inner">
          <p class="details_name">
            N13,500,000
          </p>
          <p class="details_value">
            Asking Price
          </p>
          <p class="details_name">
            N13,500,000
          </p>
        </div>
        <div class="details_btn_ctn">
          <button class="global_btn_2">
            Request Inspection
          </button>
          <button class="global_btn_2">
            Request Inspection
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carsSelected: false
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

.cars_ctn {
  display: flex;
  justify-content: space-between;
}

.car_1 {
  flex-basis: 43%;
}

.car_1 img {
  width: 100%;
}

.car_content_2 {
  text-align: right;
}

.car_name {
  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
}

.car_amount {
  font-size: 16px;
  font-weight: 700;
  line-height: 36px;
}

.change_car {
  color: #55003B;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
}

.bottom_ctn {
  display: flex;
  justify-content: space-between;
}

.details_ctn {
  margin-top: 5rem;
  /* border: 1px solid #150a411a; */
  border-radius: 20px;
  padding: 4rem 9rem;
  background-color: #F3F8FF;
}

.details_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.details_name {
  font-size: 12px;
  font-weight: 400;
}
.details_value {
  font-size: 14px;
  font-weight: 700;
}

.details_line {
  border: none;
  border-top: 1px solid #150a411a;
}

.details_btn_ctn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
</style>
