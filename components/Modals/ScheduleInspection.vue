<template>
  <div class="modal-backdrop" @click="$emit('close-modal')">
    <div class="modal reveals" @click.stop>
      <div class="top_section">
        <p class="modal_title">
          Schedule an Inspection Date
        </p>
        <span class="material-icons-outlined close" @click="$emit('close-modal')">
          close
        </span>
      </div>
      <div class="modal_content">
        <div class="input_flex">
          <div class="input_flex_item">
            <p class="label">
              First Name
            </p>
            <input class="form_input" type="text">
          </div>
          <div class="input_flex_item">
            <p class="label">
              Last Name
            </p>
            <input class="form_input" type="text">
          </div>
        </div>
        <div class="input_ctn">
          <p class="label">
            Phone Number
          </p>
          <input class="form_input" type="number">
        </div>
        <div class="input_ctn">
          <p class="label">
            Email Address
          </p>
          <input class="form_input" type="email">
        </div>
        <button class="global_btn">
          Schedule Inspection
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productList: [],
      total: 0
    }
  },
  // created () {
  //   this.productList = this.$store.state.cartList
  //   this.calculateTotal()
  // },
  methods: {
  }
}
</script>

<style scoped>
.modal-backdrop {
  z-index: 7;
  position: fixed;
  overflow: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(24, 18, 46, 0.8);
}

.modal {
  /* margin-top: 5%; */
  background-color: white;
  width: 40%;
  max-width: 550px;
  height: fit-content;
  align-items: center;
  border-radius: 20px;
  overflow-y: auto;
  padding: 40px 4rem;
}

.top_section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 3rem; */
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 20px;
}

.modal_title {
  font-size: 18px;
  font-weight: 700;
}

.close {
  cursor: pointer;
  color: #C5C5C5;
}

.modal_content {
  margin-top: 10px;
}

.input_flex {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.input_ctn {
  width: 100%;
  margin-bottom: 20px;
}

.input_flex_item {
  flex-basis: 48%;
}

.global_btn {
  width: 100%;
  margin-top: 2rem;
}

@media only screen and (max-width: 1200px) {
  .modal {
    width: 50%;
  }
}

@media only screen and (max-width: 900px) {
  .modal {
    width: 70%;
  }
}

@media only screen and (max-width: 500px) {

  .modal {
    width: 90%;
  }

  .modal_content {
    padding: 20px 10px;
  }

}

</style>
