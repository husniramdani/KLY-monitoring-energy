export const state = () => ({
  responseCode: "",
})

export const actions = {
  async getProduct({ commit }) {
    await this.$api.$get("/api/v1/product")
      .then((res) => {
        commit('setResponseCode', res.code)
      })
  },
  async addProduct({ commit }, payload) {
    await this.$api.$post("/api/v1/product", payload)
      .then((res) => {
        commit('setResponseCode', res.code)
      })
  },
}

export const mutations = {
  setResponseCode(state, data) {
    state.responseCode = data
  },
}

export const getters = {
  
}
