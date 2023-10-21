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
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="toggleMakeTab()">
            <p class="filter_name">
              Make
            </p>
            <span class="material-icons-outlined arrow_right_icon">
              chevron_right
            </span>
          </div>
          <div v-if="openMakeTab" class="filter_input">
            <input v-model="makeFilter" type="text">
            <span class="material-icons-outlined search_icon" @click="filterMake()">
              east
            </span>
          </div>
          <hr class="size_line">
        </div>
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="toggleYearTab()">
            <p class="filter_name">
              Year
            </p>
            <span class="material-icons-outlined arrow_right_icon">
              chevron_right
            </span>
          </div>
          <div v-if="openYearTab" class="filter_input">
            <input v-model="yearFilter" type="text">
            <span class="material-icons-outlined search_icon" @click="filterYear()">
              east
            </span>
          </div>
          <hr class="size_line">
        </div>
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="togglePriceTab()">
            <p class="filter_name">
              Price
            </p>
            <span class="material-icons-outlined arrow_right_icon">
              chevron_right
            </span>
          </div>
          <div v-if="openPriceTab" class="filter_input">
            <input v-model="priceFilter" type="text">
            <span class="material-icons-outlined search_icon" @click="filterPrice()">
              east
            </span>
          </div>
          <hr class="size_line">
        </div>
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="toggleMileageTab()">
            <p class="filter_name">
              Mileage
            </p>
            <span class="material-icons-outlined arrow_right_icon">
              chevron_right
            </span>
          </div>
          <div v-if="openMileageTab" class="filter_input">
            <input v-model="mileageFilter" type="text">
            <span class="material-icons-outlined search_icon" @click="filterMileage()">
              east
            </span>
          </div>
          <hr class="size_line">
        </div>
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="toggleTypeTab()">
            <p class="filter_name">
              Type
            </p>
            <span class="material-icons-outlined arrow_right_icon">
              chevron_right
            </span>
          </div>
          <div v-if="openTypeTab" class="filter_input">
            <input v-model="typeFilter" type="text">
            <span class="material-icons-outlined search_icon" @click="filterType()">
              east
            </span>
          </div>
          <hr class="size_line">
        </div>
      </div>
    </div>
    <div class="rhs">
      <div v-if="!loading" class="product_list_ctn">
        <CarCard v-if="data.docs.length" :card-details="data.docs" :img-height="11" />
        <div v-else class="empty_state_ctn">
          <p>No Cars available</p>
        </div>
      </div>
      <div v-else class="page_loader_ctn">
        <PageLoader />
      </div>
      <Pagination :pagination-data="data" @changePage="change" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      makeFilter: '',
      typeFilter: '',
      yearFilter: '',
      priceFilter: '',
      mileageFilter: '',
      openMakeTab: false,
      openYearTab: false,
      openPriceTab: false,
      openMileageTab: false,
      openTypeTab: false,
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
  },
  methods: {
    change (val) {
      this.$emit('changePage', val)
    },
    filterMake () {
      const data = this.makeFilter
      console.log(data)
      this.$emit('filterMake', data)
    },
    filterYear () {
      let data = ''
      if (this.yearFilter !== '') {
        data = parseInt(this.yearFilter)
      }
      console.log(data)
      this.$emit('filterYear', data)
    },
    filterPrice () {
      let data = ''
      if (this.priceFilter !== '') {
        data = parseInt(this.priceFilter)
      }
      console.log(data)
      this.$emit('filterPrice', data)
    },
    filterMileage () {
      let data = ''
      if (this.mileageFilter !== '') {
        data = parseInt(this.mileageFilter)
      }
      console.log(data)
      this.$emit('filterMileage', data)
    },
    filterType () {
      let data = ''
      if (this.typeFilter !== '') {
        data = parseInt(this.typeFilter)
      }
      console.log(data)
      this.$emit('filterType', data)
    },
    toggleMakeTab () {
      this.openMakeTab = !this.openMakeTab
    },
    toggleYearTab () {
      this.openYearTab = !this.openYearTab
    },
    togglePriceTab () {
      this.openPriceTab = !this.openPriceTab
    },
    toggleMileageTab () {
      this.openMileageTab = !this.openMileageTab
    },
    toggleTypeTab () {
      this.openTypeTab = !this.openTypeTab
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

.filter_inner_ctn {
  height: fit-content;
  transition: 0.5s;
}

.filter_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  cursor: pointer;
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

input {
  background-color: transparent;
  height: 40px;
}

.filter_input {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 5px;
}

.search_icon {
  color: #150a41bd;
  font-size: 16px;
  cursor: pointer;
}

.page_loader_ctn {
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty_state_ctn {
  height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty_state_ctn p {
  font-size: 30px;
  font-weight: 600;
  color: var(--primary-color);
}

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .filter_title {
    white-space: nowrap;
  }
  .lhs {
    flex-basis: 25%;
  }

  .rhs {
    flex-basis: 70%;
  }
  /* .product_list_ctn > .card_list > .card_ctn {
    width: 48% !important;
  } */
}
@media only screen and (max-width: 900px) {
  .lhs {
    flex-basis: 30%;
  }

  .rhs {
    flex-basis: 65%;
  }
}
@media only screen and (max-width: 500px) {
  .hero_ctn {
    height: 70vh;
  }
  .lhs {
    flex-basis: 30%;
    display: none;
  }

  .rhs {
    flex-basis: 100%;
  }
}
</style>
