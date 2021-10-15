import VuexPersistence from 'vuex-persist'

export default ({ store, isDev }) => {
  new VuexPersistence({
    /* your options */
    key: 'energy',
    storage: window.localStorage,
    reducer: state => ({
      user: state.user,
    }),
    // restoreState: (key, storage) => process.client ? localStorage.getItem(key) : localStorage.getItem(key),
  }).plugin(store);
}
