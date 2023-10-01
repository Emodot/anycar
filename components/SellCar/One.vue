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
        <div class="form-select">
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
        </div>
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
export default {
  data () {
    return {
      formOne: {
        make: '',
        model: '',
        year_manufacture: '',
        condition: '',
        transmission_type: ''
      }
    }
  }
}
</script>

<style scoped></style>
