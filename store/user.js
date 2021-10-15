export const state = () => ({
  isAuthenticated: false,
  currentRole: "guest",
  userDetail: {},
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
  }
}
