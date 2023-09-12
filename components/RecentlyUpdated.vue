<template>
  <div class="products_ctn">
    <div class="top_section">
      <div>
        <h2 class="title">
          Recently Updated Cars
        </h2>
        <p class="subt_title">
          Check the varieties of cars recently updated on our lots
        </p>
      </div>
      <div class="tab_section">
        <button class="global_btn">
          Search for Cars
        </button>
      </div>
    </div>
    <div class="product_list_ctn">
      <CarCard :card-details="cars" />
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
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
    }
  }

}
</script>

<style scoped>
.products_ctn {
  margin-top: 30px;
}

.top_section {
  display: flex;
  justify-content: space-between;
  padding: 20px 0 40px;
  border-bottom: 1px solid var(--border-color);
}

.line {
  /* padding-bottom: 40px; */
  margin-top: -1px;
  border: 1px solid var(--primary-color);
  width: 11rem;
  z-index: 2;
}

.tab_section {
  display: flex;
  align-items: center;
}

.tab {
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
}

.tab p {
  font-size: 13px;
  line-height: 13px;
}

.activeTab {
  background-color: var(--primary-color);
}

.activeTab p {
  color: white;
}

.product_list_ctn {
  padding: 5rem 0;
}

@media only screen and (max-width: 900px) {
  .navbar_inner {
    width: 90%;
  }
}
@media only screen and (max-width: 500px) {
  .top_section {
    flex-direction: column;
    padding-bottom: 20px;
  }

  .title {
    margin-bottom: 30px;
  }
}

</style>
