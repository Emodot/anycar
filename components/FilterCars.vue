<template>
  <div class="filter_ctn">
    <div class="lhs">
      <div class="size_ctn">
        <div class="top_side">
          <p class="filter_title">
            Filter Result
          </p>
          <span class="material-icons-outlined tune_icon">
            tune
          </span>
        </div>
        <div class="filter_inner">
          <p class="filter_name">
            Filter By
          </p>
        </div>
        <hr class="size_line">
        <div class="filter_inner">
          <p class="filter_name">
            Make
          </p>
          <span class="material-icons-outlined arrow_right_icon">
            chevron_right
          </span>
        </div>
        <hr class="size_line">
        <div class="filter_inner">
          <p class="filter_name">
            Year
          </p>
          <span class="material-icons-outlined arrow_right_icon">
            chevron_right
          </span>
        </div>
        <hr class="size_line">
        <div class="filter_inner">
          <p class="filter_name">
            Price
          </p>
          <span class="material-icons-outlined arrow_right_icon">
            chevron_right
          </span>
        </div>
        <hr class="size_line">
        <div class="filter_inner">
          <p class="filter_name">
            Mileage
          </p>
          <span class="material-icons-outlined arrow_right_icon">
            chevron_right
          </span>
        </div>
        <hr class="size_line">
        <div class="filter_inner">
          <p class="filter_name">
            Type
          </p>
          <span class="material-icons-outlined arrow_right_icon">
            chevron_right
          </span>
        </div>
      </div>
    </div>
    <div class="rhs">
      <div class="product_list_ctn">
        <CarCard :card-details="cars" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        'All Toys',
        'Wooden Toys',
        'Stuffed Animals'
      ],
      activeTab: 'All Toys',
      cars: [
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        }
      ]
    }
  }
}
</script>

<style scoped>
.filter_ctn {
  display: flex;
  justify-content: space-between;
}

.lhs {
  flex-basis: 20%;
}
.size_ctn {
  border-radius: 10px;
  border: 1px solid rgba(21, 10, 65, 0.10);
  background-color: #F0F1F2;
  /* border-radius: 20px; */
  padding: 10px 30px;
}

.top_side {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.filter_title {
  color: var(--primary-color);
  font-size: 22px;
  font-weight: 700;
  line-height: 48px;
}

.tune_icon {
  color: var(--primary-color);
  font-size: 20px;
}

.filter_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.filter_name {
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 400;
}

.arrow_right_icon {
  color: var(--primary-color);
  font-size: 22px;
  font-weight: 100;
}
.size_value {
  font-size: 12px;
  font-weight: 600;
}

.size_line {
  border: none;
  border-top: 1px solid #150a4133;
}

.rhs {
  flex-basis: 75%;
}
</style>
