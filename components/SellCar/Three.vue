<template>
  <div class="form_container">
    <div class="form_inner">
      <div class="input_ctn">
        <p class="label">
          Your Name
        </p>
        <input v-model="formThree.name" class="form_input" type="text">
      </div>
      <div class="input_ctn">
        <p class="label">
          Phone Number
        </p>
        <input v-model="formThree.phone" class="form_input" type="number">
      </div>
      <div class="input_ctn">
        <p class="label">
          Kindly Upload Image(s) of the car
        </p>
        <div class="upload_image_placeholder">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_356_2395)">
              <path d="M3 22H8V24H3C1.346 24 0 22.654 0 21V16H2V21C2 21.552 2.448 22 3 22ZM22 21C22 21.552 21.552 22 21 22H16V24H21C22.654 24 24 22.654 24 21V16H22V21ZM21 0H16V2H21C21.552 2 22 2.448 22 3V8H24V3C24 1.346 22.654 0 21 0ZM2 3C2 2.448 2.448 2 3 2H8V0H3C1.346 0 0 1.346 0 3V8H2V3ZM8.5 7H8.964L10.294 5H13.706L15.036 7H15.5C16.879 7 18 8.121 18 9.5V17H6V9.5C6 8.121 7.121 7 8.5 7ZM14 12C14 10.895 13.105 10 12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12Z" fill="#053361" />
            </g>
            <defs>
              <clipPath id="clip0_356_2395">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    saveForm: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      formThree: {
        name: '',
        phone: ''
      }
    }
  },
  watch: {
    saveForm: {
      immediate: true,
      handler (val) {
        // console.log(val)
        if (val) {
          this.$store.dispatch('setSellCarForm', this.formThree)
          this.$emit('next')
        }
      }
    }
  },
  created () {
    const formData = this.$store.state.sellCarForm
    this.formThree.name = formData.name
    this.formThree.phone = formData.phone
  }
}
</script>

<style scoped>
.upload_image_placeholder {
  background-color: #E8EDFF;
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
}
</style>
