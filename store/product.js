import moment from "moment";
export const state = () => ({
  responseCode: "",
  products: [],
  productDetails: [],
})

export const actions = {
  async getProducts({ commit }) {
    await this.$api.$get("/api/v1/product")
      .then((res) => {
        commit('setProducts', res.data.reverse())
      })
  },
  async getProductsByUserId({ commit }, id) {
    await this.$api.$get(`/api/v1/product/${id}`)
      .then((res) => {
        if (res.data) {
          commit('setProducts', res.data.reverse())
        }
      })
  },
  async addProduct({ commit }, payload) {
    await this.$api.$post("/api/v1/product", payload)
      .then((res) => {
        return res;
      })
  },
  async editProduct({ commit }, payload) {
    await this.$api.$put(`/api/v1/product/${payload.id}`, payload)
      .then((res) => {
        return res;
      })
  },
  async getProductDetails({ commit }, query) {
    const params = {
      code: "ABC213123",
      start_dt: "2020-12-04 00:00:00",
      end_dt: this.$moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    }
    await this.$api.$get("/api/v1/data/environment", { params })
      .then((res) => {
        if(res.data.data){
          commit('setProductDetails', res.data.data)
        }
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
  setProductDetails(state, data) {
    state.productDetails = data
  },
}

export const getters = {
  getProducts: (state) => {
    return state.products
  },
  getProductDetails: (state) => {
    return state.productDetails
  }
}
