<template>
  <div class="details">
    <div class="lhs">
      <div class="main_image">
        <img src="~assets/images/car-2.jpg" alt="">
      </div>
      <div class="other_images">
        <div v-for="image in 5" :key="image.index" class="inner_images">
          <img src="~assets/images/car.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="rhs">
      <h2>Ford Explore Limited SUV</h2>
      <div class="car_options">
        <div class="option">
          <p>2018</p>
        </div>
        <div class="option">
          <p>475 Miles</p>
        </div>
        <div class="option">
          <p>AWD</p>
        </div>
        <div class="option">
          <p>4-Cylinder Turbo</p>
        </div>
        <div class="option">
          <p>Foreign Used</p>
        </div>
      </div>
      <div class="table_ctn">
        <div class="table_inner">
          <p class="table_name">
            Engine
          </p>
          <p class="table_value">
            4 - Cylinder
          </p>
        </div>
        <div class="table_inner">
          <p class="table_name">
            Transmission
          </p>
          <p class="table_value">
            Automatic
          </p>
        </div>
        <div class="table_inner">
          <p class="table_name">
            Interior Color
          </p>
          <p class="table_value">
            Black
          </p>
        </div>
        <div class="table_inner">
          <p class="table_name">
            Exterior Color
          </p>
          <p class="table_value">
            Grey
          </p>
        </div>
        <div class="table_inner">
          <p class="table_name">
            VIN
          </p>
          <p class="table_value">
            JTNB ******************
          </p>
        </div>
        <div class="table_inner">
          <p class="table_name">
            Asking Price
          </p>
          <p class="table_value">
            N13,500,000
          </p>
        </div>
        <div class="table_btn">
          <button class="global_btn compare_btn">
            Compare Car
          </button>
          <button class="global_btn" @click="$emit('requestInspection')">
            Request Inspection
          </button>
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
.details {
  display: flex;
  justify-content: space-between;
}

.lhs {
  flex-basis: 48%;
}

.main_image {
  width: 100%;
}

.main_image img {
  width: 100%;
  border-radius: 10px;
}

.other_images {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.inner_images {
  flex-basis: 32%;
  margin-right: 1%;
  margin-bottom: 5px;
}

.inner_images img {
  width: 100%;
  border-radius: 7px;
}

.rhs {
  flex-basis: 48%;
}

.car_options {
  display: flex;
  margin: 20px 0 40px;
}

.option {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background-color: #EEF2F4;
  border-radius: 4px;
  margin-right: 15px;
}

.option p {
  color: var(--primary-color);
  font-size: 13px;
}

.table_ctn {
  background-color: #f3f8ff;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 30px 40px;
}

.table_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0;
}

.table_name {
  font-size: 14px;
  font-weight: 400;
}
.table_value {
  font-size: 14px;
  font-weight: 400;
}

.table_btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.global_btn {
  margin-left: 20px;
}

.compare_btn {
  border: 1px solid var(--primary-color);
  background-color: #fff;
  color: var(--primary-color);
}

</style>
