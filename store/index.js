export const state = () => ({
  sellCarForm: {
    make: '',
    model: '',
    year_manufacture: '',
    condition: '',
    transmission_type: '',
    interior_color: '',
    exterior_color: '',
    vin: '',
    engine_type: '',
    asking_price: '',
    name: '',
    phone: ''
  },
  formProgress: {}
})

export const mutations = {
  setSellCarForm (state, val) {
    state.sellCarForm = {
      ...state.sellCarForm, // Keep the existing data
      ...val // Update only the specified properties
    }
  },
  setFormProgress (state, val) {
    state.formProgress = val
  }
}

export const actions = {
  setSellCarForm ({ commit }, newData) {
    commit('setSellCarForm', newData)
  }
}
