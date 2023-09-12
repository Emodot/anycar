<template>
  <div class="card_list">
    <div v-for="(card, index) in cardDetails" :key="index" class="card_ctn" @click="selectProduct(card)">
      <div class="card_image">
        <img :src="card.image" alt="">
      </div>
      <p class="card_title">
        {{ card.name }}
      </p>
      <div class="card_details">
        <p class="year">
          {{ card.year }}
        </p>
        <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="">
        <p class="other_info">
          {{ card.miles }}
        </p>
        <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="">
        <p class="other_info">
          {{ card.type }}
        </p>
        <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="">
        <p class="other_info">
          {{ card.cylinder }}
        </p>
      </div>
      <div class="bottom_section">
        <div class="card_amount">
          <p>₦ {{ card.price }}</p>
        </div>
        <div class="card_type">
          <p>{{ card.condition }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardDetails: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectProduct (card) {
      // console.log(card)
      this.$store.commit('setselectedProduct', card)
      this.$router.push(`/catalog/${card.name}`)
    }
  }

}
</script>

<style scoped>
.card_list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card_ctn {
  /* padding: 30px; */
  border-radius: 20px;
  width: 31%;
  cursor: pointer;
  margin-bottom: 50px;
  transition:  0.4s all ease-in-out;
}

.card_ctn:hover {
  -ms-transform: scale(1.05); /* IE 9 */
  -webkit-transform: scale(1.05); /* Safari 3-8 */
  transform: scale(1.05);
}

.card_image {
  width: 100%;
}

.card_image img {
  width: 100%;
  border-radius: 20px;
}

.card_title {
  margin: 15px 0;
  font-size: 15px;
  font-weight: 700;
}

.card_details {
  display: flex;
  margin-bottom: 30px;
}

.year {
  font-weight: 700;
}

.dot {
  margin: 0 10px;
}

.other_info {
  color: #00000066;
}

.bottom_section {
  display: flex;
}

.card_amount {
  min-width: 7rem;
  width: fit-content;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #CCE6FF;
  margin-right: 10px;
}

.card_amount p {
  color: var(--primary-color);
}
.card_type {
  min-width: 5rem;
  width: fit-content;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #150a4133;
  margin-right: 10px;
}

.card_type p {
  color: #55003B;
}

@media only screen and (max-width: 1200px) {
  .card_ctn {
    width: 31%;
  }
}
@media only screen and (max-width: 900px) {
  .card_ctn {
    width: 48%;
  }
}
@media only screen and (max-width: 500px) {
}
</style>
