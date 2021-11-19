export const state = () => ({
  isAuthenticated: false,
  currentRole: "guest",
  userDetail: {},
  isLoading: false
})

export const actions = {
  async getUserDetail({ commit }) {
    await this.$api.$get("/api/v1/user/profile")
      .then((res) => {
        commit('setUserDetail', res.data)
      })
  },
  async onUserLogout({ commit }) {
    commit('setUserLogout')
  }
}

export const mutations = {
  setUserDetail(state, data) {
    state.userDetail = data
  },
  setUserAuth(state, data) {
    state.isAuthenticated = true;
    state.currentRole = data;
  },
  setUserLogout(state) {
    state.isAuthenticated = false;
    state.currentRole = "guest";
  },
  setIsLoading(state, val) {
    state.isLoading = val;
  },
}

export const getters = {
  getUserDetail: (state) => {
    return state.userDetail
  },
  getUserAuth: (state) => {
    return {
      isAuthenticated: state.isAuthenticated,
      currentRole: state.currentRole
    }
  },
  getIsLoading: (state) => {
    return state.isLoading
  }
}
