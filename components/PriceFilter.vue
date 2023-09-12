<template>
  <div class="box_ctn">
    <div class="inner">
      <h2 class="head">
        Do you have a budget?
      </h2>
      <p class="sub_head">
        Search for any car with a price filter
      </p>
      <div class="bottom">
        <div class="lhs">
          <p class="lhs_text">
            What kind of Car do you want to search for?
          </p>
          <div class="car_select">
            <div class="car">
              <img src="~assets/images/new_car.svg" alt="">
              <div class="checkbox_ctn">
                <input type="checkbox" name="new">
                <p>New</p>
              </div>
            </div>
            <div class="car">
              <img src="~assets/images/old_car.svg" alt="">
              <div class="checkbox_ctn">
                <input type="checkbox" name="old">
                <p>Old</p>
              </div>
            </div>
            <div class="car">
              <img src="" alt="">
              <div class="checkbox_ctn">
                <input type="checkbox" name="all">
                <p>All</p>
              </div>
            </div>
          </div>
        </div>
        <div class="rhs">
          <p class="rhs_text">
            Est. Average Price
          </p>
          <h2 class="price">
            N12,450,000
          </h2>
          <button class="global_btn">
            Search for Cars
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
.box_ctn {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 5px 20px #dadada;
  width: 60%;
  margin: auto;
  margin-top: -12rem;
  max-width: 800px;
  padding: 50px 0;
}

.head {
  text-align: center;
}

.inner {
  width: 80%;
  margin: auto;
}
.sub_head {
  color: #00000080;
  text-align: center;
  margin-top: 7px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
}

.lhs {
  flex-basis: 50%;
}
.rhs {
  flex-basis: 15%;
}

.car_select {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.car_select .car {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.checkbox_ctn {
  display: flex;
  align-items: center;
}

.checkbox_ctn p {
  margin-left: 10px;
}

.price {
  margin: 2px 0 10px;
}
</style>
