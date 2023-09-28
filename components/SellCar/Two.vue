<template>
  <div class="form_container">
    <div class="form_inner">
      <div class="input_ctn">
        <p class="label">
          Interior Color
        </p>
        <input v-model="formTwo.interior_color" class="form_input" type="text">
      </div>
      <div class="input_ctn">
        <p class="label">
          Exterior Color
        </p>
        <input v-model="formTwo.exterior_color" class="form_input" type="text">
      </div>
      <div class="input_ctn">
        <p class="label">
          VIN
        </p>
        <input v-model="formTwo.vin" class="form_input" type="text">
      </div>
      <div class="input_ctn">
        <p class="label">
          Engine Type
        </p>
        <div class="form-select">
          <select v-model="formTwo.engine_type">
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
          Asking Price
        </p>
        <input v-model="formTwo.asking_price" class="form_input" type="number">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formTwo: {
        interior_color: '',
        exterior_color: '',
        vin: '',
        engine_type: '',
        asking_price: ''
      }
    }
  }
}
</script>

<style scoped></style>
