<template>
  <div class="form_container">
    <div class="form_inner">
      <div class="input_ctn">
        <p class="label">
          Make
        </p>
        <div class="form-select">
          <select v-model="formOne.make">
            <option value="" disabled />
            <option value="Toyota">
              Toyota
            </option>
            <option value="Lexus">
              Lexus
            </option>
            <option value="Honda">
              Honda
            </option>
            <option value="Acura">
              Acura
            </option>
            <option value="Range Rover">
              Range Rover
            </option>
            <option value="Nissan">
              Nissan
            </option>
          </select>
          <span class="material-icons-outlined arrow">
            expand_more
          </span>
        </div>
      </div>
      <div class="input_ctn">
        <p class="label">
          Model
        </p>
        <div class="form-select">
          <select v-model="formOne.model">
            <option value="" disabled />
            <option value="1">
              Option 1
            </option>
            <option value="2">
              Option 2
            </option>
          </select>
          <span class="material-icons-outlined arrow">
            expand_more
          </span>
        </div>
      </div>
      <div class="input_ctn">
        <p class="label">
          Year of Manufacture
        </p>
        <datepicker
          v-model="formOne.year_manufacture"
          :format="customFormatter"
          class="datePicker"
          :minimum-view="'year'"
          :maximum-view="'year'"
          :initial-view="'year'"
        />
        <!-- <div class="form-select">
          <select v-model="formOne.year_manufacture">
            <option value="" disabled />
            <option value="1">
              Option 1
            </option>
            <option value="2">
              Option 2
            </option>
          </select>
          <span class="material-icons-outlined arrow">
            expand_more
          </span>
        </div> -->
      </div>
      <div class="input_ctn">
        <p class="label">
          Condition
        </p>
        <div class="form-select">
          <select v-model="formOne.condition">
            <option value="" disabled />
            <option value="New">
              New
            </option>
            <option value="Foreign Used">
              Foreign Used
            </option>
            <option value="Used">
              Used
            </option>
          </select>
          <span class="material-icons-outlined arrow">
            expand_more
          </span>
        </div>
      </div>
      <div class="input_ctn">
        <p class="label">
          Transmission Type
        </p>
        <div class="form-select">
          <select v-model="formOne.transmission_type">
            <option value="" disabled />
            <option value="Automatic">
              Automatic
            </option>
            <option value="Manual">
              Manual
            </option>
          </select>
          <span class="material-icons-outlined arrow">
            expand_more
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
export default {
  components: {
    Datepicker
  },
  props: {
    saveForm: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      // customFormatter: 'YYYY',
      formOne: {
        make: '',
        model: '',
        year_manufacture: '',
        condition: '',
        transmission_type: ''
      }
    }
  },
  watch: {
    saveForm: {
      immediate: true,
      handler (val) {
        // console.log(val)
        if (val) {
          this.$store.dispatch('setSellCarForm', this.formOne)
          this.$emit('next')
        }
      }
    }
  },
  created () {
    const formData = this.$store.state.sellCarForm
    this.formOne.make = formData.make
    this.formOne.model = formData.model
    this.formOne.year_manufacture = formData.year_manufacture
    this.formOne.condition = formData.condition
    this.formOne.transmission_type = formData.transmission_type
  },
  methods: {
    customFormatter (date) {
      return moment(date).format('YYYY')
    }
  }

}
</script>

<style scoped></style>
