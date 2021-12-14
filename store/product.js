export const state = () => ({
  responseCode: "",
  products: [],
})

export const actions = {
  async getProducts({ commit }) {
    await this.$api.$get("/api/v1/product")
      .then((res) => {
        commit('setProducts', res.data.reverse())
      })
  },
  async addProduct({ commit }, payload) {
    await this.$api.$post("/api/v1/product", payload)
      .then((res) => {
        commit('setProducts', res.data.reverse())
      })
  },
  async editProduct({ commit }, payload) {
    await this.$api.$put(`/api/v1/product/${payload.id}`, payload)
      .then((res) => {
        return res;
      })
  },
}

export const mutations = {
  setResponseCode(state, data) {
    state.responseCode = data
  },
  setProducts(state, data) {
    state.products = data
  },
}

export const getters = {
  getProducts: (state) => {
    return state.products
  }
}
